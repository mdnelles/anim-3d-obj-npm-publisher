export interface FaceType {
  name?: string;
  css?: string | undefined;
  body?: any;
}

export interface ObjProps {
  anim1?: object | undefined;
  anim2?: object | undefined;
  children?: any;
  depth?: number;
  global?: { border?: string; bgc?: string; opac?: number | string } | any;
  height?: number | string;
  faces?: FaceType[];
  perspective?: string | number | undefined;
  perspectiveOrigin?: string | undefined;
  showCenterDiv?: string | number | boolean | undefined;
  tranz?: number | undefined;
  txt?: string | any;
  width?: number;
  zIndex?: number | undefined;
}

export interface GlobalType {
  css?: string;
  body?: string;
}
