import React from "react";
import styled from "styled-components";
import { FaceType } from "./types";

interface FaceProps {
  children?: any;
  depth?: number | any;
  face: FaceType;
  global?: any;
  height?: number | string;
  width?: number | string;
}

export default function Face(props: FaceProps): JSX.Element {
  let display = true;
  let {
    depth = 10,
    global = { css: "", body: "" },
    height = 10,
    face,
    width = 100,
  } = props;

  let transform;
  let tranz = +height / 2;
  const body = face.body ? face.body : global.body;

  ////////////////////////////////////////////////////////////////////////////// BOTTOM
  if (face.name === "bottom") {
    tranz = +height - +depth / 2;
    height = +depth;
    transform = `transform: rotateX(-90deg) translateZ(${tranz}px);`;
  } else if (face.name === "bottom_rear") {
    tranz = +height - +depth / 2;
    height = +depth;
    transform = `transform: rotateX(-90deg) translateZ(${tranz}px)  translateY(${height}px)  `;
  } else if (face.name === "bottom_front") {
    tranz = +height - +depth / 2;
    height = +depth;
    transform = `transform: rotateX(-90deg) translateZ(${tranz}px)  translateY(${-height}px)  `;

    ////////////////////////////////////////////////////////////////////////////// TOPS
  } else if (face.name === "top") {
    height = +depth;
    if (!!depth) tranz = +depth / 2;
    transform = `transform: rotateX(90deg) translateZ(${tranz}px);`;
  } else if (face.name === "top_rear") {
    height = +depth;
    if (!!depth) tranz = +depth / 2;
    let offset = depth / 2;
    //translate3d(tx, ty, tz)
    transform = `transform: rotateX(90deg) translateZ(${tranz}px) translateY(-${
      tranz * 2
    }px)  `;
  } else if (face.name === "top_front") {
    height = +depth;
    if (!!depth) tranz = +depth / 2;
    let offset = depth / 2;
    //translate3d(tx, ty, tz)
    transform = `transform: rotateX(90deg) translateZ(${tranz}px) translateY(${
      tranz * 2
    }px)  `;
  } else if (face.name === "front") {
    if (!!depth) tranz = +depth / 2;
    transform = `transform: rotateY(0deg) translateZ(${tranz}px);`;
  } else if (face.name === "back") {
    if (!!depth) tranz = +depth / 2;
    transform = `transform: rotateY(180deg) translateZ(${tranz}px);`;
  } else if (face.name === "right") {
    if (height > width && !depth) {
      tranz = -(+height / 2 - +width);
      width = +height;
    } else if (width > height && !depth) {
      tranz = +height / 2;
      height = +width;
    } else {
      tranz = +width - +depth / 2;
      width = +depth;
    }
    transform = `transform: rotateY(90deg) translateZ(${tranz}px);`;
    // topr is to of Ribbon which points back
  } else if (face.name === "left") {
    if (height > width && !depth) {
      tranz = -(+height / 2 - +width);
      width = +height;
    } else if (width > height && !depth) {
      tranz = +height / 2;
      height = +width;
    } else {
      tranz = +depth / 2;
      width = +depth;
    }
    transform = `transform: rotateY(-90deg) translateZ(${tranz}px);`;
  } else {
    //console.log(face.name + " is not a recognized face.name");
    display = false;
  }

  const Specs: any = styled.section`
    ${face.css || global.css}
    width: ${width}px;
    position: absolute;
    height: ${height}px;
    ${transform}
  `;

  return display ? <Specs>{body}</Specs> : <></>;
}
