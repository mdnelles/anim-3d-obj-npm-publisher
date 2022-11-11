interface SceneStyleProps {
    width?: number | string;
    height?: number | string;
    perspective?: number | string | undefined;
    perspectiveOrigin?: string | undefined;
    zIndex?: number | undefined;
    children: any;
}
export declare const SceneStyle: (props: SceneStyleProps) => JSX.Element;
export {};
