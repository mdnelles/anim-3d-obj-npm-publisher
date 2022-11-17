import styled from "styled-components";
import React from "react";

interface FaceProps {
  children?: any;
  depth?: number | any;
  faceType?: any;
  custom?: any;
  global?: any;
  height?: number | string;
  id?: string | number | boolean;
  styles?: object | any;
  tranz: any;
  width?: number | string;
}

export default function Face(props: FaceProps): JSX.Element {
  let {
    depth = 10,
    faceType,
    global = {},
    height = 10,
    custom = false,
    tranz = 80,
    width = 100,
  } = props;

  let transform;
  let styles =
    !!custom[faceType] && !!custom[faceType].css
      ? custom[faceType].css
      : global.css;
  const body =
    !!custom[faceType] && !!custom[faceType].body
      ? custom[faceType].body
      : global.body;
  ////////////////////////////////////////////////////////////////////////////// BOTTOM
  if (faceType === "bottom") {
    tranz = +height - +depth / 2;
    height = +depth;
    transform = `transform: rotateX(-90deg) translateZ(${tranz}px);`;
    //styles = !!custom["top"] ? custom : global;
  } else if (faceType === "bottom_rear") {
    tranz = +height - +depth / 2;
    height = +depth;
    transform = `transform: rotateX(-90deg) translateZ(${tranz}px)  translateY(${height}px)  `;
  } else if (faceType === "bottom_front") {
    tranz = +height - +depth / 2;
    height = +depth;
    transform = `transform: rotateX(-90deg) translateZ(${tranz}px)  translateY(${-height}px)  `;

    ////////////////////////////////////////////////////////////////////////////// TOPS
  } else if (faceType === "top") {
    height = +depth;
    if (!!depth) tranz = +depth / 2;
    transform = `transform: rotateX(90deg) translateZ(${tranz}px);`;
  } else if (faceType === "top_rear") {
    height = +depth;
    if (!!depth) tranz = +depth / 2;
    let offset = depth / 2;
    //translate3d(tx, ty, tz)
    transform = `transform: rotateX(90deg) translateZ(${tranz}px) translateY(-${
      tranz * 2
    }px)  `;
  } else if (faceType === "top_front") {
    height = +depth;
    if (!!depth) tranz = +depth / 2;
    let offset = depth / 2;
    //translate3d(tx, ty, tz)
    transform = `transform: rotateX(90deg) translateZ(${tranz}px) translateY(${
      tranz * 2
    }px)  `;
  } else if (faceType === "front") {
    if (!!depth) tranz = +depth / 2;
    transform = `transform: rotateY(0deg) translateZ(${tranz}px);`;
  } else if (faceType === "back") {
    if (!!depth) tranz = +depth / 2;
    transform = `transform: rotateY(180deg) translateZ(${tranz}px);`;
  } else if (faceType === "right") {
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
  } else {
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
  }

  const BackFlip: any = styled.section``;

  const Specs: any = styled.section`
    ${styles}
    width: ${width}px;
    position: absolute;
    height: ${height}px;
    ${transform};
  `;

  return <Specs>{body}</Specs>;
}