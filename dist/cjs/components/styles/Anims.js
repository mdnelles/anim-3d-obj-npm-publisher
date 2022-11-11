"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.allAnims = void 0;
const styled_components_1 = require("styled-components");
const allAnims = (props) => {
    const { degreesLow = 0, degreesHi = 0 } = props;
    const X360 = (0, styled_components_1.keyframes) `
   from {
      -webkit-transform: rotateX(360deg);
      transform: rotateX(360deg);
   }
   to {
      -webkit-transform: rotateX(0deg);
      transform: rotateX(0deg);
   }
}`;
    //////// Y360
    const Y360 = (0, styled_components_1.keyframes) `
    from {
        -webkit-transform: rotateY(360deg);
        transform: rotateY(360deg);
    }
    to {
        -webkit-transform: rotateY(0deg);
        transform: rotateY(0deg);
    }`;
    const fadeInkf = (0, styled_components_1.keyframes) `
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }`;
    const wobY = (0, styled_components_1.keyframes) `
    0% {
        -webkit-transform: rotateY(${degreesLow}deg);
        transform: rotateY(${degreesLow}deg);
    }
    50% {
        -webkit-transform: rotateY(${degreesHi}deg);
        transform: rotateY(${degreesHi}deg);
    }
    100% {
        -webkit-transform: rotateY(${degreesLow}deg);
        transform: rotateY(${degreesLow}deg);
    }`;
    const wobX = (0, styled_components_1.keyframes) `
    0% {
        -webkit-transform: rotateX(${degreesLow}deg);
        transform: rotateX(${degreesLow}deg);
    }
    50% {
        -webkit-transform: rotateX(${degreesHi}deg);
        transform: rotateX(${degreesHi}deg);
    }
    100% {
        -webkit-transform: rotateX(${degreesLow}deg);
        transform: rotateX(${degreesLow}deg);
    }`;
    /* ============================== x-axis 0-180 >180 - 360 */
    const fwdx018 = (0, styled_components_1.keyframes) `
    from {
        -webkit-transform: rotateX(360deg);
        transform: rotateX(360deg);
    }
    to {
        -webkit-transform: rotateX(180deg);
        transform: rotateX(180deg);
    }`;
    const fwdx1836 = (0, styled_components_1.keyframes) `
    from {
        -webkit-transform: rotateX(180deg);
        transform: rotateX(180deg);
    }
    to {
        -webkit-transform: rotateX(0deg);
        transform: rotateX(0deg);
    }`;
    /* ============================= x-axis 0-90, 90-180, 180-270, 270-360 */
    const fwdx09 = (0, styled_components_1.keyframes) `
    from {
       -webkit-transform: rotateX(360deg);
       transform: rotateX(360deg);
    }
    to {
       -webkit-transform: rotateX(90deg);
       transform: rotateX(90deg);
    }`;
    const fwdx918 = (0, styled_components_1.keyframes) `
    from {
        -webkit-transform: rotateX(-90deg);
        transform: rotateX(-90deg);
    }
    to {
        -webkit-transform: rotateX(-180deg);
        transform: rotateX(-180deg);
    }`;
    const fwdx1827 = (0, styled_components_1.keyframes) `
    from {
        -webkit-transform: rotateX(-180deg);
        transform: rotateX(-180deg);
    }
    to {
        -webkit-transform: rotateX(-270deg);
        transform: rotateX(-270deg);
    }`;
    const fwdx2736 = (0, styled_components_1.keyframes) `
    from {
        -webkit-transform: rotateX(-270deg);
        transform: rotateX(-270deg);
    }
    to {
        -webkit-transform: rotateX(-360deg);
        transform: rotateX(-360deg);
    }`;
    /* ============================== y-axis 0-180 >180 - 360 */
    const fwdy018 = (0, styled_components_1.keyframes) `
   from {
       -webkit-transform: rotateY(360deg);
       transform: rotateY(360deg);
   }
   to {
       -webkit-transform: rotateY(180deg);
       transform: rotateY(180deg);
   }`;
    const fwdy1836 = (0, styled_components_1.keyframes) `
   from {
       -webkit-transform: rotateY(180deg);
       transform: rotateY(180deg);
   }
   to {
       -webkit-transform: rotateY(0deg);
       transform: rotateY(0deg);
   }`;
    /* ============================= y-axis 0-90, 90-180, 180-270, 270-360 */
    const fwdy09 = (0, styled_components_1.keyframes) `
   from {
      -webkit-transform: rotateY(360deg);
      transform: rotateY(360deg);
   }
   to {
      -webkit-transform: rotateY(90deg);
      transform: rotateY(90deg);
   }`;
    const fwdy918 = (0, styled_components_1.keyframes) `
   from {
       -webkit-transform: rotateY(-90deg);
       transform: rotateY(-90deg);
   }
   to {
       -webkit-transform: rotateY(-180deg);
       transform: rotateY(-180deg);
   }`;
    const fwdy1827 = (0, styled_components_1.keyframes) `
   from {
       -webkit-transform: rotateY(-180deg);
       transform: rotateY(-180deg);
   }
   to {
       -webkit-transform: rotateY(-270deg);
       transform: rotateY(-270deg);
   }`;
    const fwdy2736 = (0, styled_components_1.keyframes) `
   from {
       -webkit-transform: rotateY(-270deg);
       transform: rotateY(-270deg);
   }
   to {
       -webkit-transform: rotateY(-360deg);
       transform: rotateY(-360deg);
   }`;
    /* ============================= floating */
    const floatX = (0, styled_components_1.keyframes) `
   0% { -webkit-transform: translate(0,  0px); -ms-transform: translate(0,  0px); transform: translate(0,  0px); }
   50%  { -webkit-transform: translate(0, 15px); -ms-transform: translate(0, 15px); transform: translate(0, 15px); }
   100%   { -webkit-transform: translate(0, -0px); -ms-transform: translate(0, -0px); transform: translate(0, -0px); }`;
    const floatShadow = (0, styled_components_1.keyframes) `
        0% {
            -webkit-box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
                    box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
            -webkit-transform: translateY(0px);
                -ms-transform: translateY(0px);
                    transform: translateY(0px);
        }
        50% {
            -webkit-box-shadow: 0 25px 15px 0px rgba(0,0,0,0.2);
                    box-shadow: 0 25px 15px 0px rgba(0,0,0,0.2);
            -webkit-transform: translateY(-20px);
                -ms-transform: translateY(-20px);
                    transform: translateY(-20px);
        }
        100% {
            -webkit-box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
                    box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
            -webkit-transform: translateY(0px);
                -ms-transform: translateY(0px);
                    transform: translateY(0px);
        }`;
    const pulseSM = (0, styled_components_1.keyframes) `
   0% {
    -webkit-transform: scale(0.9);
        -ms-transform: scale(0.9);
            transform: scale(0.9);
    }
    70% {
        -webkit-transform: scale(1);
            -ms-transform: scale(1);
                transform: scale(1);
    }
    100% {
        -webkit-transform: scale(0.9);
            -ms-transform: scale(0.9);
                transform: scale(0.9);
    }`;
    const pulseMD = (0, styled_components_1.keyframes) `
    0% {
     -webkit-transform: scale(0.7);
         -ms-transform: scale(0.7);
             transform: scale(0.7);
     }
     70% {
         -webkit-transform: scale(1);
             -ms-transform: scale(1);
                 transform: scale(1);
     }
     100% {
         -webkit-transform: scale(0.7);
             -ms-transform: scale(0.7);
                 transform: scale(0.7);
     }`;
    const pulseLG = (0, styled_components_1.keyframes) `
    0% {
     -webkit-transform: scale(0.5);
         -ms-transform: scale(0.5);
             transform: scale(0.5);
     }
     70% {
         -webkit-transform: scale(1);
             -ms-transform: scale(1);
                 transform: scale(1);
     }
     100% {
         -webkit-transform: scale(0.5);
             -ms-transform: scale(0.5);
                 transform: scale(0.5);
     }`;
    const noAnim = (0, styled_components_1.keyframes) ``;
    return {
        X360,
        Y360,
        fadeInkf,
        wobY,
        wobX,
        fwdx018,
        fwdx1836,
        fwdx09,
        fwdx918,
        fwdx1827,
        fwdx2736,
        fwdy018,
        fwdy1836,
        fwdy09,
        fwdy918,
        fwdy1827,
        fwdy2736,
        floatX,
        floatShadow,
        pulseSM,
        pulseMD,
        pulseLG,
        noAnim,
    };
};
exports.allAnims = allAnims;
//# sourceMappingURL=Anims.js.map