(this.webpackJsonpanimejs=this.webpackJsonpanimejs||[]).push([[0],[,,,,function(e,t,a){e.exports=a.p+"static/media/logo.ee7cd8ed.svg"},,function(e,t,a){e.exports=a(13)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(3),c=a.n(l),o=(a(11),a(4)),s=a.n(o),u=(a(12),a(5)),i=a(1);function m(e){var t=Object(n.useRef)(),a=Object(n.useState)({translateX:0,translateY:0}),l=Object(u.a)(a,2),c=l[0],o=l[1];Object(n.useEffect)((function(){console.log("X: ",c.translateY),console.log("Y: ",c.translateY)}),[c.translateY,c.translateX]),Object(n.useEffect)((function(){s()}));var s=function(){Object(i.a)({targets:t.current,translateX:{value:c.translateX},translateY:{value:c.translateY},duration:2e3})};return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{onClick:function(){return o({translateX:c.translateX+10,translateY:c.translateY+10})}},"Increase X | Y ",c.translateX)," ",r.a.createElement("button",{onClick:function(){return o({translateX:c.translateX-10,translateY:c.translateY-10})}},"Decrease X | Y ",c.translateX),r.a.createElement("div",{ref:t},r.a.createElement("h2",null,"Press button to move this text")))}function f(){var e=Object(n.useRef)();return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{onClick:function(){Object(i.a)({targets:e.current,translateX:250,rotateZ:360,scale:2,duration:3e3})}},"Move Box"),r.a.createElement("p",{ref:e,className:"box"}))}function E(){var e=Object(n.useRef)(),t=Object(n.useRef)();return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{onClick:function(){return Object(i.a)({targets:e.current,translateX:270,loop:3,easing:"easeInOutSine"}),void Object(i.a)({targets:t.current,translateX:270,loop:!0,direction:"alternate",easing:"easeInOutSine"})}},"Move Box"),r.a.createElement("p",{ref:e,className:"box"}),r.a.createElement("p",{ref:t,className:"box"}))}var b=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("img",{src:s.a,className:"App-logo",alt:"logo"}),r.a.createElement(f,null),"\u2728",r.a.createElement(m,null),"\u2728",r.a.createElement(E,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[6,1,2]]]);
//# sourceMappingURL=main.dfbb790f.chunk.js.map