(this.webpackJsonptimer=this.webpackJsonptimer||[]).push([[0],{14:function(n,t,e){},21:function(n,t,e){"use strict";e.r(t);var r,c,o,i,a,s=e(0),l=e.n(s),j=e(6),u=e.n(j),b=(e(14),e(5)),f=e(7),p=e(2),d=e(3),x=d.a.div(r||(r=Object(p.a)(["\n\n  margin-bottom: 20px;\n"]))),O=d.a.span(c||(c=Object(p.a)(["\n  margin: 0 12px;\n  font-size: 66px;\n  color: #fff; \n"]))),h=d.a.span(o||(o=Object(p.a)(["\n  position: relative;\n  top: -6px;\n  font-size: 66px;\n  color: #fff; \n"]))),m=e(1),v=function(n){var t=n.time,e=("0"+Math.floor(t/1e3%60)).slice(-2),r=("0"+Math.floor(t/6e4%60)).slice(-2),c=("0"+Math.floor(t/36e5%60)).slice(-2);return Object(m.jsxs)(x,{children:[Object(m.jsx)(O,{children:c}),Object(m.jsx)(h,{children:":"}),Object(m.jsx)(O,{children:r}),Object(m.jsx)(h,{children:":"}),Object(m.jsx)(O,{children:e})]})},g=d.a.button(i||(i=Object(p.a)(["\n  margin: 0 10px;\n  width: 100px;\n  border-radius: 6px;\n  padding: 12px 18px;\n  background-color: #c29545;\n  color: #fff;\n  font-size: 18px;\n  border-color: #785A46;\n  cursor: pointer;\n"]))),k=function(n){var t=n.name,e=n.onClick;return Object(m.jsx)(g,{type:"button",onClick:e,children:t})},C=function(n){var t=n.start,e=n.stop,r=n.reset;return Object(m.jsxs)("div",{children:[Object(m.jsx)(k,{name:"Start",onClick:t}),Object(m.jsx)(k,{name:"Stop",onClick:e}),Object(m.jsx)(k,{name:"Reset",onClick:r})]})},S=d.a.div(a||(a=Object(p.a)(["\n  width: 600px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  border: 2px solid #c29545;\n  border-radius: 10px;\n  padding: 36px;\n  background-color: #323030;\n  cursor: pointer;\n"]))),w=function(){var n=Object(s.useState)(0),t=Object(b.a)(n,2),e=t[0],r=t[1],c=Object(s.useState)(!1),o=Object(b.a)(c,2),i=o[0],a=o[1];Object(s.useEffect)((function(){var n=null;return i?n=setInterval((function(){r((function(n){return n+1e3}))}),1e3):clearInterval(n),function(){return clearInterval(n)}}),[i]);var l=Object(f.throttle)((function(n){n.currentTarget===n.target&&a(!1)}),300);return Object(m.jsxs)(S,{onClick:l,children:[Object(m.jsx)(v,{time:e}),Object(m.jsx)(C,{start:function(){a(!0)},stop:function(){a(!1),r(0)},reset:function(){r(0)}})]})},y=function(){return Object(m.jsx)(w,{})};u.a.render(Object(m.jsx)(l.a.StrictMode,{children:Object(m.jsx)(y,{})}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.b0404584.chunk.js.map