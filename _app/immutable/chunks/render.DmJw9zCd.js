import{Z as I,C as O,_ as V,$ as M,a0 as T,l as H,a1 as W,i as B,H as v,G as E,k as L,d as C,g as p,a2 as Y,j as $,a3 as q,a4 as z,a5 as G,a6 as P,e as j,p as U,h as b,z as Z,a as F,a7 as J}from"./runtime.BnaYrrJa.js";import{r as K,b as Q}from"./disclose-version.DwJ0cmWr.js";const R=new Set,S=new Set;function ot(t,e,a,i){function n(r){if(i.capture||g.call(e,r),!r.cancelBubble)return a.call(this,r)}return t.startsWith("pointer")||t.startsWith("touch")||t==="wheel"?V(()=>{e.addEventListener(t,n,i)}):e.addEventListener(t,n,i),n}function st(t){for(var e=0;e<t.length;e++)R.add(t[e]);for(var a of S)a(t)}function g(t){var A;var e=this,a=e.ownerDocument,i=t.type,n=((A=t.composedPath)==null?void 0:A.call(t))||[],r=n[0]||t.target,d=0,f=t.__root;if(f){var c=n.indexOf(f);if(c!==-1&&(e===document||e===window)){t.__root=e;return}var l=n.indexOf(e);if(l===-1)return;c<=l&&(d=c)}if(r=n[d]||t.target,r!==e){I(t,"currentTarget",{configurable:!0,get(){return r||a}});try{for(var _,o=[];r!==null;){var u=r.assignedSlot||r.parentNode||r.host||null;try{var s=r["__"+i];if(s!==void 0&&!r.disabled)if(O(s)){var[y,...w]=s;y.apply(r,[t,...w])}else s.call(r,t)}catch(m){_?o.push(m):_=m}if(t.cancelBubble||u===e||u===null)break;r=u}if(_){for(let m of o)queueMicrotask(()=>{throw m});throw _}}finally{t.__root=e,delete t.currentTarget}}}function it(t){return t.endsWith("capture")&&t!=="gotpointercapture"&&t!=="lostpointercapture"}const X=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function ut(t){return X.includes(t)}const x={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly"};function dt(t){return t=t.toLowerCase(),x[t]??t}const tt=["wheel","mousewheel","touchstart","touchmove"];function et(t){return tt.includes(t)}let N=!0;function ct(t,e){e!==(t.__t??(t.__t=t.nodeValue))&&(t.__t=e,t.nodeValue=e==null?"":e+"")}function rt(t,e){const a=e.anchor??e.target.appendChild(M());return D(t,{...e,anchor:a})}function lt(t,e){T(),e.intro=e.intro??!1;const a=e.target,i=b,n=p;try{for(var r=H(a);r&&(r.nodeType!==8||r.data!==W);)r=B(r);if(!r)throw v;E(!0),L(r),C();const d=D(t,{...e,anchor:r});if(p===null||p.nodeType!==8||p.data!==Y)throw $(),v;return E(!1),d}catch(d){if(d===v)return e.recover===!1&&q(),T(),z(a),E(!1),rt(t,e);throw d}finally{E(i),L(n),K()}}const h=new Map;function D(t,{target:e,anchor:a,props:i={},events:n,context:r,intro:d=!0}){T();var f=new Set,c=o=>{for(var u=0;u<o.length;u++){var s=o[u];if(!f.has(s)){f.add(s);var y=et(s);e.addEventListener(s,g,{passive:y});var w=h.get(s);w===void 0?(document.addEventListener(s,g,{passive:y}),h.set(s,1)):h.set(s,w+1)}}};c(G(R)),S.add(c);var l=void 0,_=P(()=>(j(()=>{if(r){U({});var o=J;o.c=r}n&&(i.$$events=n),b&&Q(a,null),N=d,l=t(a,i)||{},N=!0,b&&(Z.nodes_end=p),r&&F()}),()=>{for(var o of f){e.removeEventListener(o,g);var u=h.get(o);--u===0?(document.removeEventListener(o,g),h.delete(o)):h.set(o,u)}S.delete(c),k.delete(l)}));return k.set(l,_),l}let k=new WeakMap;function ft(t){const e=k.get(t);e&&e()}export{ut as a,N as b,ot as c,st as d,lt as h,it as i,rt as m,dt as n,ct as s,ft as u};
