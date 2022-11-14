import styled from "styled-components";
import React from "react";

interface ObjWrapperProps {
  showCenterDiv?: boolean | string | number;
  children?: any;
}

export const ObjWrapper = (props: ObjWrapperProps): any => {
  const { showCenterDiv = false, children = "" } = props;

  const Wrapper: any = showCenterDiv
    ? styled.section`
        width: 100%;
        height: 100%;
        position: relative;
        transform-style: preserve-3d;
        border: 1px solid #0f0;
      `
    : styled.section`
        width: 100%;
        height: 100%;
        position: relative;
        transform-style: preserve-3d;
      `;

  return <Wrapper>{children}</Wrapper>;
};
