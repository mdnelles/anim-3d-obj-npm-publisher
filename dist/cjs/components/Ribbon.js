"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ribbon = void 0;
const react_1 = __importDefault(require("react"));
const AnimWrap_1 = require("./styles/AnimWrap");
const Scene_1 = require("./styles/Scene");
const Face_1 = __importDefault(require("./Faces/Face"));
const Global_1 = require("./styles/Global");
const Ribbon = (props) => {
    let { anim1Specs, anim2Specs, width = 5, height = 5, depth = 5, faces, global = {}, custom = {}, tranz = (+height / 2) | 0, perspective, perspectiveOrigin, zIndex, } = props;
    const buildFace = (faceType) => {
        return (react_1.default.createElement(Face_1.default, { width: width, height: height, depth: depth, faceType: faceType, id: faceType, tranz: tranz, global: global, custom: custom }));
    };
    return (react_1.default.createElement(Scene_1.SceneStyle, { width: width, height: height, perspective: perspective, perspectiveOrigin: perspectiveOrigin, zIndex: zIndex },
        react_1.default.createElement(AnimWrap_1.AnimWrap, { animSpecs: anim1Specs },
            react_1.default.createElement(AnimWrap_1.AnimWrap, { animSpecs: anim2Specs },
                react_1.default.createElement(Global_1.ObjWrapper, null,
                    !!faces && !!faces.bottom ? buildFace("bottom") : null,
                    !!faces && !!faces.back ? buildFace("back") : null,
                    !!faces && !!faces.top ? buildFace("topr") : null)))));
};
exports.Ribbon = Ribbon;
//# sourceMappingURL=Ribbon.js.map