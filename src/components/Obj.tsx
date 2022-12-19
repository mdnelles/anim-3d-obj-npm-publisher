import React from "react";
import { ObjWrapper } from "./styles/Global";
import { AnimWrap } from "./styles/AnimWrap";
import { SceneStyle } from "./styles/Scene";
import Face from "./Face";
import { FaceType, ObjProps } from "./types";

export default function (props: ObjProps): JSX.Element {
  let {
    anim1,
    anim2,
    width = 5,
    height = 5,
    depth = 5,
    global = {},
    faces,
    perspective,
    perspectiveOrigin,
    zIndex,
  } = props;

  // process config
  const buildFace = (face: FaceType): any => {
    console.log(face);
    const details = {
      width,
      height,
      depth,
      face,
      global,
    };
    return <Face {...details} key={face.name} />;
  };

  return (
    <SceneStyle
      width={width}
      height={height}
      perspective={perspective}
      perspectiveOrigin={perspectiveOrigin}
      zIndex={zIndex}
    >
      <AnimWrap animSpecs={anim1}>
        <AnimWrap animSpecs={anim2}>
          <ObjWrapper>
            {faces && faces[0]
              ? faces.map((face) => (face.name ? buildFace(face) : null))
              : null}
          </ObjWrapper>
        </AnimWrap>
      </AnimWrap>
    </SceneStyle>
  );
}
