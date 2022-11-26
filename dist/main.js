(()=>{var e={28:(e,t,n)=>{"use strict";n.d(t,{Z:()=>b});var r=n(81),o=n.n(r),i=n(645),s=n.n(i),a=n(667),c=n.n(a),u=new URL(n(437),n.b),d=new URL(n(125),n.b),p=new URL(n(865),n.b),l=new URL(n(288),n.b),f=s()(o()),g=c()(u),v=c()(d),h=c()(p),m=c()(l);f.push([e.id,"body {\n    background-color: rgb(1, 65, 46);\n    \n}\n\n#content {\n    display: grid;\n    grid-template-columns: 250px 1fr;\n    grid-template-rows: 50px max(100vh,1000px);\n    color: white;\n}\n\n.sidebar {\n    border: 1px solid white;\n    grid-row: 2/3;\n    grid-column: 1/2;\n    padding-top: 30px;\n}\n\n.sidebar-item {\n    margin: 0 auto 30px 30px;\n    display: flex;\n    font-size: 17px;\n}\n\n.sidebar-text {\n    align-self: center;\n    margin-left: 10px;\n}\n\n.sidebar-icon {\n    width: 25px;\n    height: 25px;\n    filter: brightness(0) invert(1);\n}\n\n#icon-today {\n    background: url("+g+");\n    background-size: 25px;\n}\n#icon-upcoming {\n    background: url("+v+");\n    background-size: 25px;\n}\n#icon-highpriority {\n    background: url("+h+");\n    background-size: 25px;\n}\n#icon-calendar {\n    background: url("+m+");\n    background-size: 25px;\n}\n\n\n.header {\n    grid-row: 1/2;\n    grid-column: 1/3;\n    border: 1px solid white;\n}\n\n.tabcontent {\n    grid-row: 2/3;\n    grid-column: 2/3;\n    border: 1px solid white;\n}\n\nli {\n    list-style: none;\n    margin-bottom: 5px;\n}",""]);const b=f},645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var s={};if(r)for(var a=0;a<this.length;a++){var c=this[a][0];null!=c&&(s[c]=!0)}for(var u=0;u<e.length;u++){var d=[].concat(e[u]);r&&s[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),t.push(d))}},t}},667:e=>{"use strict";e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{"use strict";e.exports=function(e){return e[1]}},379:e=>{"use strict";var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var i={},s=[],a=0;a<e.length;a++){var c=e[a],u=r.base?c[0]+r.base:c[0],d=i[u]||0,p="".concat(u," ").concat(d);i[u]=d+1;var l=n(p),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==l)t[l].references++,t[l].updater(f);else{var g=o(f,r);r.byIndex=a,t.splice(a,0,{identifier:p,updater:g,references:1})}s.push(p)}return s}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var s=0;s<i.length;s++){var a=n(i[s]);t[a].references--}for(var c=r(e,o),u=0;u<i.length;u++){var d=n(i[u]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}i=c}}},569:e=>{"use strict";var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{"use strict";e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{"use strict";e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},470:(e,t,n)=>{var r={"./calendar.svg":288,"./circle.svg":934,"./clock.svg":437,"./forward.svg":125,"./high_priority.svg":865,"./timeline.svg":60};function o(e){var t=i(e);return n(t)}function i(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=i,e.exports=o,o.id=470},288:(e,t,n)=>{"use strict";e.exports=n.p+"5307428124670cee616e.svg"},934:(e,t,n)=>{"use strict";e.exports=n.p+"db880e01a83d878a9455.svg"},437:(e,t,n)=>{"use strict";e.exports=n.p+"f24e6657183c1ddb4442.svg"},125:(e,t,n)=>{"use strict";e.exports=n.p+"327527f1c390104cf021.svg"},865:(e,t,n)=>{"use strict";e.exports=n.p+"2a1829847c7931411029.svg"},60:(e,t,n)=>{"use strict";e.exports=n.p+"cfd328e11d357f5e83a0.svg"}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={id:r,exports:{}};return e[r](i,i.exports,n),i.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,n.nc=void 0,(()=>{"use strict";var e,t=n(379),r=n.n(t),o=n(795),i=n.n(o),s=n(569),a=n.n(s),c=n(565),u=n.n(c),d=n(216),p=n.n(d),l=n(589),f=n.n(l),g=n(28),v={};v.styleTagTransform=f(),v.setAttributes=u(),v.insert=a().bind(null,"head"),v.domAPI=i(),v.insertStyleElement=p(),r()(g.Z,v),g.Z&&g.Z.locals&&g.Z.locals,(e=n(470)).keys().map(e),((e,t,n,r)=>{const o=[];return{title:"project0",description:"desc",dueDate:"due",priority:"prio",addTodo:e=>o.push(e),getTodos:()=>o}})().addTodo({title:"todo0",description:"desc",dueDate:"due",priority:"prio"})})()})();