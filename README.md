# React Typescript Cuboid Builder

This project allows a user to create Cuboids of any size simply by entering a set of parameters.  
The program does the leg work with regard to calculating translationZ depth and config on the fly.

## Examples

-  [6 sided Cuboid - animate X360 Y360](https://codesandbox.io/s/anim-3d-obj-all-sides-simple-bf67yg-tzr2v6)
-  [3 sided Object - animate y-axis](https://codesandbox.io/s/anim-3d-obj-3-sides-wobble-y-axis-wglkms)
-  [Double box spin](https://codesandbox.io/s/react-anim-3d-double-box-spin-vbdhg2)
-  [Floating Ribbon](https://codesandbox.io/s/cocky-butterfly-ygwkps)
-  [Parallel divs animated x and y axis in tandem](https://codesandbox.io/s/anim-3d-obj-2-sides-simple-4057y7)
-  [Obj Skeleton](https://codesandbox.io/s/anim-3d-obj-skeleton-5dlk70)

## Config

Animations are optional. Either or both of `anim1` or `anim2` can be applied to the component.

```typescript
const anim1 = {
   border: "", // while testing reveal the animation wrapper
   degreesHi: -45, // degrees if spin
   degreesLow: 45, // degrees if spin
   delay: 0, // start delay in seconds
   direction: "normal", //normal alternating reverse
   duration: 8, // seconds
   fillMode: "forward", // node forward backward both
   iterationCount: "infinite", // number or infinte
   name: "Y360", // ** ANIMATIONS
   timing: "ease-in-out", // linear ease ease-in-out
};
```

`** ANIMATIONS`

-  `fadeInkf`: fade object in from 0 to 1 Opacity: [demo](https://codesandbox.io/s/anim-3d-obj-fadeinkf-1fozww)
-  `floatX`: float object so is not stationary: [demo](https://codesandbox.io/s/anim-3d-obj-floatx-hzeo42)
-  `floatShadow`: float object + add shadow: [demo](https://codesandbox.io/s/anim-3d-obj-floatshadow-8pp5k0)
-  `pulseSM`: pulse object Small: [demo](https://codesandbox.io/s/anim-3d-obj-pulsesm-k2rjb6)
-  `pulseMD`: pulse object Medium: [demo](https://codesandbox.io/s/anim-3d-obj-pulsemd-sqk2of)
-  `pulseLG`: pulse object Large: [demo](https://codesandbox.io/s/anim-3d-obj-pulselg-qz7x0m)
-  `swing`: Swing component: [demo](https://codesandbox.io/s/anim-3d-obj-swing-snj8li)
-  `swingDecay`: Swing component with decay: [demo](https://codesandbox.io/s/anim-3d-obj-swingdecay-cku0e1)
-  `noAnim`: no animation place holder


`X-AXIS Animations`
-  `X360`: rotate 360 degrees on the x-axis: [demo](https://codesandbox.io/s/anim-3d-obj-x360-7kiuhw)
-  `wobX`: wobble on x-axis (degreesHi <-> degreesLow): [demo](https://codesandbox.io/s/anim-3d-obj-wobx-ldwek7)
-  `fwdx018`: spin object on x-axis from 0 degrees to 180 degrees: [demo](https://codesandbox.io/s/anim-3d-obj-fwd180-v90xyu)
-  `fwdx1836`: spin object on x-axis from 180 degrees to 360 degrees: [demo](https://codesandbox.io/s/anim-3d-obj-fwd1836-mtwuv9)
-  `fwdx09`: spin object on x-axis from 0 degrees to 90 degrees: [demo](https://codesandbox.io/s/anim-3d-obj-fwd09-84vocn)
-  `fwdx918`: spin object on x-axis from 90 degrees to 180 degrees: [demo](https://codesandbox.io/s/anim-3d-obj-fwd918-6039fj)
-  `fwdx1827`: spin object on x-axis from 180 degrees to 270 degrees: [demo](https://codesandbox.io/s/anim-3d-obj-fwdx1827-qpqhtq)
-  `fwdx2736`: spin object on x-axis from 270 degrees to 360 degrees: [demo](https://codesandbox.io/s/anim-3d-obj-fwdx2736-e6c6wg)

`Y-AXIS Animations`
-  `Y360`: rotate 360 degrees on the y-axis: [demo](https://codesandbox.io/s/anim-3d-obj-y360-16lzeb)
-  `wobY`: wobble on y-axis (degreesHi <-> degreesLow): [demo](https://codesandbox.io/s/anim-3d-obj-woby-tkoxms)
-  `fwdy018`: spin object on y-axis from 0 degrees to 180 degrees: [demo](https://codesandbox.io/s/anim-3d-obj-fwdy180-qpqhtq)
-  `fwdy1836`: spin object on y-axis from 180 degrees to 360 degrees: [demo](https://codesandbox.io/s/anim-3d-obj-fwdy1836-qpqhtq)
-  `fwdy09`: spin object on y-axis from 0 degrees to 90 degrees: [demo](https://codesandbox.io/s/anim-3d-obj-fwdy09-elklgr)
-  `fwdy918`: spin object on y-axis from 90 degrees to 180 degrees: [demo](https://codesandbox.io/s/anim-3d-obj-fwdy918-gnym88)
-  `fwdy1827`: spin object on y-axis from 180 degrees to 270 degrees: [demo](https://codesandbox.io/s/anim-3d-obj-fwdy1827-osskgx)
-  `fwdy2736`: spin object on y-axis from 270 degrees to 360 degrees: [demo](https://codesandbox.io/s/anim-3d-obj-fwdy2736-rnbs2q)
-  


<>

GLOBAL CONFIG

```typescript
// EXAMPLE GLOBAL FACE CONFIG
// This will be applied to all Faces that do not have their own custom config
const global: object = {
   // // face individual styles (over rides global)
   css: `
         border: 1px solid #fff;
         background: rgb(2,0,36);
         background: linear-gradient(180deg, rgba(255,255,255,.1) 0%, rgba(141,191,249,.7) 100%);
         color:white;
         text-align:center;
         line-height:10;
         backface-visibility: visible;
         font-family: Arial, Helvetica, sans-serif;
         border-radius:5px;
         `,
   body: " ",
};
```

<>

CUSTOM CONFIG FOR INDIVIDUAL FACES

```typescript
const custom: object = {
      // // face individual styles (over rides global)
      front: {
         css: ``,
         body: <Login />,
      },
      left: {
         css: `
         border: 1px solid #fff;
         background: rgb(2,0,36);
         color:white;
         text-align: center;
         line-height:8;`
         body: " ",
      },
      right: {
         css: ``,
         body: " ",
      },
      back: {
         css: ``,
         body: <Logout />,
      },
      bottom: {
         css: `
         background-color:rgba(141,191,249,1);
         -webkit-box-shadow: 0px 0px 23px 18px #858585;
         box-shadow: 0px 0px 23px 18px #858585;
         `,
      },
```
#NPM Location
https://www.npmjs.com/package/anim-3d-obj
