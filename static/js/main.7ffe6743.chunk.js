(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,n){e.exports=n(27)},23:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(13),c=n.n(o),i=n(30),l=n(8),s=n(6),u=n(7),d=n(32),f=n(28),E=n(31),m=n(33),v=n(29),h=n(15);function b(e,t){localStorage.setItem(e,JSON.stringify(t))}function p(e){var t=w();localStorage.setItem("ids",JSON.stringify(e(t)))}function w(){var e=localStorage.getItem("ids");return e?JSON.parse(e):[]}n(23);var g={GET:function(e){return{type:"GET",id:e}},UPDATE:function(e,t){return{type:"UPDATE",id:e,details:t}},CREATE:function(e){return{type:"CREATE",details:e}},DELETE:function(e){return{type:"DELETE",id:e}}},O={};function j(e,t){var n=t.type,a=t.id,r=t.details;switch(n){case"GET":return Object(u.a)({},e,Object(s.a)({},a,function(e){return JSON.parse(localStorage.getItem(e))}(a)));case"UPDATE":return b(a,r),Object(u.a)({},e,Object(s.a)({},a,r));case"CREATE":var o=Math.floor(Math.random()*Number.MAX_SAFE_INTEGER).toString();return b(o,r),function(e){p(function(t){return[].concat(Object(h.a)(t),[e])})}(o),Object(u.a)({},e,Object(s.a)({},o,r));case"DELETE":return function(e){localStorage.removeItem(e)}(a),Object(u.a)({},e,Object(s.a)({},a,void 0));default:return O}}var y=Object(a.createContext)();function N(){return r.a.createElement("header",null,r.a.createElement(v.a,{to:"/"},r.a.createElement("h2",{className:"app-title"},"My FAQ")),r.a.createElement(v.a,{to:"/new"},r.a.createElement("button",{className:"add-button"},"+")))}function T(e){var t=e.details;return r.a.createElement("div",{className:"q-preview"},r.a.createElement(v.a,{to:"/q/".concat(t.id)},r.a.createElement("h3",null,t.question)),r.a.createElement("span",null,t.answer))}function q(e){var t=e.details,n=e.history,o=Object(a.useContext)(y),c=Object(a.useState)(t.question||""),i=Object(l.a)(c,2),s=i[0],u=i[1],d=Object(a.useState)(t.answer||""),f=Object(l.a)(d,2),E=f[0],m=f[1],v=!t.id,h=t.question!==s||t.answer!==E;return r.a.createElement("div",{className:"q-view"},r.a.createElement("textarea",{className:"q-question",placeholder:"question...",value:s,onChange:function(e){u(e.target.value)}}),r.a.createElement("textarea",{className:"q-answer",placeholder:"answer...",value:E,onChange:function(e){m(e.target.value)}}),h?r.a.createElement("button",{className:"q-save",onClick:function(){v?(o(g.CREATE({question:s,answer:E})),n.push("/")):o(g.UPDATE(t.id,{question:s,answer:E}))}},v?"Add":"Save"):void 0)}function A(e){return r.a.createElement(q,Object.assign({details:{}},e))}var S=function(){var e=Object(a.useReducer)(j,O),t=Object(l.a)(e,2),n=t[0],o=t[1];return Object(a.useEffect)(function(){w().forEach(function(e){o(g.GET(e))})},[]),r.a.createElement("div",{className:"app-body"},r.a.createElement(N,null),r.a.createElement(d.a,null,r.a.createElement(f.a,{exact:!0,path:"/",render:function(){return r.a.createElement("div",{className:"questions"},Object.entries(n).map(function(e){var t=Object(l.a)(e,2),n=t[0],a=t[1];return r.a.createElement(T,{key:n,details:Object(u.a)({id:n},a)})}))}}),r.a.createElement(f.a,{path:"/q/:id",render:function(e){var t=e.match.params.id;return Number.isInteger(t=parseInt(t))&&void 0!==n[t]?r.a.createElement(y.Provider,{value:o},r.a.createElement(q,{details:Object(u.a)({id:t},n[t])})):r.a.createElement(E.a,{to:"/"})}}),r.a.createElement(f.a,{path:"/new",render:function(){var e=Object(m.a)(A);return r.a.createElement(y.Provider,{value:o},r.a.createElement(e,null))}}),r.a.createElement(E.a,{to:"/"})))},k=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function C(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}c.a.render(r.a.createElement(i.a,null,r.a.createElement(S,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/my-faq",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/my-faq","/service-worker.js");k?(function(e,t){fetch(e).then(function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):C(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):C(t,e)})}}()}},[[17,1,2]]]);
//# sourceMappingURL=main.7ffe6743.chunk.js.map