import{Z as I,C as O,_ as V,$ as M,a0 as T,l as H,a1 as W,i as B,H as v,G as E,k as L,d as C,g as p,a2 as Y,j as $,a3 as q,a4 as z,a5 as G,a6 as P,e as j,p as U,h as b,z as Z,a as F,a7 as J}from"./runtime.4WoAFy4L.js";import{r as K,b as Q}from"./disclose-version.BHGo6BX3.js";const R=new Set,S=new Set;function ot(t,r,a,i){function n(e){if(i.capture||g.call(r,e),!e.cancelBubble)return a.call(this,e)}return t.startsWith("pointer")||t.startsWith("touch")||t==="wheel"?V(()=>{r.addEventListener(t,n,i)}):r.addEventListener(t,n,i),n}function st(t){for(var r=0;r<t.length;r++)R.add(t[r]);for(var a of S)a(t)}function g(t){var A;var r=this,a=r.ownerDocument,i=t.type,n=((A=t.composedPath)==null?void 0:A.call(t))||[],e=n[0]||t.target,d=0,f=t.__root;if(f){var c=n.indexOf(f);if(c!==-1&&(r===document||r===window)){t.__root=r;return}var l=n.indexOf(r);if(l===-1)return;c<=l&&(d=c)}if(e=n[d]||t.target,e!==r){I(t,"currentTarget",{configurable:!0,get(){return e||a}});try{for(var _,o=[];e!==null;){var u=e.assignedSlot||e.parentNode||e.host||null;try{var s=e["__"+i];if(s!==void 0&&!e.disabled)if(O(s)){var[y,...w]=s;y.apply(e,[t,...w])}else s.call(e,t)}catch(m){_?o.push(m):_=m}if(t.cancelBubble||u===r||u===null)break;e=u}if(_){for(let m of o)queueMicrotask(()=>{throw m});throw _}}finally{t.__root=r,delete t.currentTarget}}}function it(t){return t.endsWith("capture")&&t!=="gotpointercapture"&&t!=="lostpointercapture"}const X=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function ut(t){return X.includes(t)}const x={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly"};function dt(t){return t=t.toLowerCase(),x[t]??t}const tt=["touchstart","touchmove"];function rt(t){return tt.includes(t)}let N=!0;function ct(t,r){r!==(t.__t??(t.__t=t.nodeValue))&&(t.__t=r,t.nodeValue=r==null?"":r+"")}function et(t,r){const a=r.anchor??r.target.appendChild(M());return D(t,{...r,anchor:a})}function lt(t,r){T(),r.intro=r.intro??!1;const a=r.target,i=b,n=p;try{for(var e=H(a);e&&(e.nodeType!==8||e.data!==W);)e=B(e);if(!e)throw v;E(!0),L(e),C();const d=D(t,{...r,anchor:e});if(p===null||p.nodeType!==8||p.data!==Y)throw $(),v;return E(!1),d}catch(d){if(d===v)return r.recover===!1&&q(),T(),z(a),E(!1),et(t,r);throw d}finally{E(i),L(n),K()}}const h=new Map;function D(t,{target:r,anchor:a,props:i={},events:n,context:e,intro:d=!0}){T();var f=new Set,c=o=>{for(var u=0;u<o.length;u++){var s=o[u];if(!f.has(s)){f.add(s);var y=rt(s);r.addEventListener(s,g,{passive:y});var w=h.get(s);w===void 0?(document.addEventListener(s,g,{passive:y}),h.set(s,1)):h.set(s,w+1)}}};c(G(R)),S.add(c);var l=void 0,_=P(()=>(j(()=>{if(e){U({});var o=J;o.c=e}n&&(i.$$events=n),b&&Q(a,null),N=d,l=t(a,i)||{},N=!0,b&&(Z.nodes_end=p),e&&F()}),()=>{for(var o of f){r.removeEventListener(o,g);var u=h.get(o);--u===0?(document.removeEventListener(o,g),h.delete(o)):h.set(o,u)}S.delete(c),k.delete(l)}));return k.set(l,_),l}let k=new WeakMap;function ft(t){const r=k.get(t);r&&r()}export{ut as a,N as b,ot as c,st as d,lt as h,it as i,et as m,dt as n,ct as s,ft as u};
