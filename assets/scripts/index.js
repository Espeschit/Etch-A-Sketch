!function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n){var t,r=document.getElementById("container"),o=document.getElementsByClassName("gridRow"),c=document.getElementsByClassName("cell"),l=document.getElementById("clear"),a=document.getElementById("colour"),u=document.getElementById("black");!function(){function e(){!function(e){for(var n=0;n<e;n++){var t=document.createElement("div");r.appendChild(t).className="gridRow"}}(t),function(e){for(var n=0;n<o.length;n++)for(var t=0;t<e;t++){var r=document.createElement("div");o[t].appendChild(r).className="cell"}}(t);for(var e=function(e){c[e].addEventListener("click",(function(){c[e].classList.contains("cellOnHover")?c[e].classList.remove("cellOnHover"):c[e].classList.add("cellOnHover")})),a.addEventListener("click",(function(){!0&&(c[e].onmouseover=function(e){var n="rgb("+Math.floor(256*Math.random())+","+Math.floor(256*Math.random())+","+Math.floor(256*Math.random())+")";this.style.backgroundColor=n,!1})})),u.addEventListener("click",(function(){!1,c[e].addEventListener("mouseover",(function(e){return e.target.classList.add("cellOnHover")})),c[e].onmouseover=function(e){this.style.backgroundColor="rgb(0,0,0)"}})),c[e].addEventListener("mouseover",(function(e){return e.target.classList.add("cellOnHover")}))},n=0;n<c.length;n++)e(n)}t=16,e(),l.onclick=function(){var n;r.innerHTML="",n=parseInt(prompt("value")),t=n,e()}}()}]);