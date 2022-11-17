import React from "react";

import { ObjWrapper } from "./styles/Global";
import { AnimWrap } from "./styles/AnimWrap";
import { SceneStyle } from "./styles/Scene";
import Face from "./Face";

interface ObjProps {
  anim1Specs?: object | undefined;
  anim2Specs?: object | undefined;
  children: any;
  depth?: number;
  global?: { border?: string; bgc?: string; opac?: number | string } | any;
  faces: {
    front?: boolean | undefined;
    back?: boolean | undefined;
    left?: boolean | undefined;
    right?: boolean | undefined;
    top?: boolean | undefined;
    top_rear?: boolean | undefined;
    top_front?: boolean | undefined;
    bottom?: boolean | undefined;
    bottom_rear?: boolean | undefined;
    bottom_front?: boolean | undefined;
  };

  height?: number | string;
  custom?: object | string | undefined;
  perspective?: string | number | undefined;
  perspectiveOrigin?: string | undefined;
  showCenterDiv?: string | number | boolean | undefined;
  tranz?: number | undefined;
  txt?: string | any;
  width?: number;
  zIndex?: number | undefined;
}

export default function (props: ObjProps): JSX.Element {
  let {
    anim1Specs,
    anim2Specs,
    width = 5,
    height = 5,
    depth = 5,
    faces = { front: true },
    global = {},
    custom = {},
    tranz = (+height / 2) | 0,
    perspective,
    perspectiveOrigin,
    zIndex,
  } = props;

  // process config
  const buildFace = (faceType: any): any => {
    return (
      <Face
        width={width}
        height={height}
        depth={depth}
        faceType={faceType}
        id={faceType}
        tranz={tranz}
        global={global}
        custom={custom}
      />
    );
  };

  return (
    <SceneStyle
      width={width}
      height={height}
      perspective={perspective}
      perspectiveOrigin={perspectiveOrigin}
      zIndex={zIndex}
    >
      <AnimWrap animSpecs={anim1Specs}>
        <AnimWrap animSpecs={anim2Specs}>
          <ObjWrapper>
            {!!faces && !!faces.front ? buildFace("front") : null}
            {!!faces && !!faces.right ? buildFace("right") : null}
            {!!faces && !!faces.back ? buildFace("back") : null}
            {!!faces && !!faces.left ? buildFace("left") : null}
            {!!faces && !!faces.top ? buildFace("top") : null}
            {!!faces && !!faces.bottom ? buildFace("bottom") : null}
            {!!faces && !!faces.top_rear ? buildFace("top_rear") : null}
            {!!faces && !!faces.top_front ? buildFace("top_front") : null}
            {!!faces && !!faces.bottom_rear ? buildFace("bottom_rear") : null}
            {!!faces && !!faces.bottom_front ? buildFace("bottom_front") : null}
          </ObjWrapper>
        </AnimWrap>
      </AnimWrap>
    </SceneStyle>
  );
}
