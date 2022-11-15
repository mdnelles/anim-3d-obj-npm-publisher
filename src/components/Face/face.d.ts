export interface FaceProps {
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

export interface ObjProps {
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
