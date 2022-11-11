"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SceneStyle = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
const react_1 = __importDefault(require("react"));
const SceneStyle = (props) => {
    const { width = 0, height = 0, perspective = 600, perspectiveOrigin = "50% 50%", zIndex = 10, children = {}, } = props;
    const SceneStyleDiv = styled_components_1.default.div `
    width: ${width}px;
    height: ${height}px;
    -webkit-perspective: ${perspective}px;
    perspective: ${perspective}px;
    -webkit-perspective-origin: ${perspectiveOrigin};
    perspective-origin: ${perspectiveOrigin};
  `;
    return (react_1.default.createElement("div", { style: { zIndex } },
        react_1.default.createElement(SceneStyleDiv, null, children)));
};
exports.SceneStyle = SceneStyle;
//# sourceMappingURL=Scene.js.map