import{S as x,v as z,w as G,x as m,y as H,z as h,U as c,A,q as P,B as F,C as V,D as k,F as J,b as Q,G as B,e as C,I as M,h as L,d as W,E as X,J as p,K as ee,k as re,L as U,g as ae,M as te,N as ne,P as fe,O as ie,Q as Y,R as se,T as ue,V as K,W as le,X as ve,Y as _e,u as Z,Z as de,_ as ce,$ as oe}from"./runtime.BV8fNuL_.js";import{g as ge}from"./disclose-version.x8Kwb08J.js";function w(f,u=null,y){if(typeof f!="object"||f===null||x in f)return f;const b=k(f);if(b!==z&&b!==G)return f;var i=new Map,l=J(f),d=m(0);l&&i.set("length",m(f.length));var _;return new Proxy(f,{defineProperty(t,e,r){(!("value"in r)||r.configurable===!1||r.enumerable===!1||r.writable===!1)&&H();var a=i.get(e);return a===void 0?(a=m(r.value),i.set(e,a)):h(a,w(r.value,_)),!0},deleteProperty(t,e){var r=i.get(e);if(r===void 0)e in t&&i.set(e,m(c));else{if(l&&typeof e=="string"){var a=i.get("length"),n=Number(e);Number.isInteger(n)&&n<a.v&&h(a,n)}h(r,c),$(d)}return!0},get(t,e,r){var o;if(e===x)return f;var a=i.get(e),n=e in t;if(a===void 0&&(!n||(o=A(t,e))!=null&&o.writable)&&(a=m(w(n?t[e]:c,_)),i.set(e,a)),a!==void 0){var s=P(a);return s===c?void 0:s}return Reflect.get(t,e,r)},getOwnPropertyDescriptor(t,e){var r=Reflect.getOwnPropertyDescriptor(t,e);if(r&&"value"in r){var a=i.get(e);a&&(r.value=P(a))}else if(r===void 0){var n=i.get(e),s=n==null?void 0:n.v;if(n!==void 0&&s!==c)return{enumerable:!0,configurable:!0,value:s,writable:!0}}return r},has(t,e){var s;if(e===x)return!0;var r=i.get(e),a=r!==void 0&&r.v!==c||Reflect.has(t,e);if(r!==void 0||F!==null&&(!a||(s=A(t,e))!=null&&s.writable)){r===void 0&&(r=m(a?w(t[e],_):c),i.set(e,r));var n=P(r);if(n===c)return!1}return a},set(t,e,r,a){var S;var n=i.get(e),s=e in t;if(l&&e==="length")for(var o=r;o<n.v;o+=1){var g=i.get(o+"");g!==void 0?h(g,c):o in t&&(g=m(c),i.set(o+"",g))}n===void 0?(!s||(S=A(t,e))!=null&&S.writable)&&(n=m(void 0),h(n,w(r,_)),i.set(e,n)):(s=n.v!==c,h(n,w(r,_)));var R=Reflect.getOwnPropertyDescriptor(t,e);if(R!=null&&R.set&&R.set.call(a,r),!s){if(l&&typeof e=="string"){var O=i.get("length"),E=Number(e);Number.isInteger(E)&&E>=O.v&&h(O,E+1)}$(d)}return!0},ownKeys(t){P(d);var e=Reflect.ownKeys(t).filter(n=>{var s=i.get(n);return s===void 0||s.v!==c});for(var[r,a]of i)a.v!==c&&!(r in t)&&e.push(r);return e},setPrototypeOf(){V()}})}function $(f,u=1){h(f,f.v+u)}function he(f,u,y,b=null,i=!1){L&&W();var l=f,d=null,_=null,t=null,e=i?X:0;Q(()=>{if(t===(t=!!u()))return;let r=!1;if(L){const a=l.data===p;t===a&&(l=ee(),re(l),U(!1),r=!0)}t?(d?B(d):d=C(()=>y(l)),_&&M(_,()=>{_=null})):(_?B(_):b&&(_=C(()=>b(l))),d&&M(d,()=>{d=null})),r&&U(!0)},e),L&&(l=ae)}function j(f){for(var u=F,y=F;u!==null&&!(u.f&(se|ue));)u=u.parent;try{return K(u),f()}finally{K(y)}}function Pe(f,u,y,b){var q;var i=(y&le)!==0,l=(y&ve)!==0,d=(y&_e)!==0,_=(y&ce)!==0,t=!1,e;d?[e,t]=ge(()=>f[u]):e=f[u];var r=(q=A(f,u))==null?void 0:q.set,a=b,n=!0,s=!1,o=()=>(s=!0,n&&(n=!1,_?a=Y(b):a=b),a);e===void 0&&b!==void 0&&(r&&l&&te(),e=o(),r&&r(e));var g;if(l)g=()=>{var v=f[u];return v===void 0?o():(n=!0,s=!1,v)};else{var R=j(()=>(i?Z:de)(()=>f[u]));R.f|=ne,g=()=>{var v=P(R);return v!==void 0&&(a=void 0),v===void 0?a:v}}if(!(y&fe))return g;if(r){var O=f.$$legacy;return function(v,I){return arguments.length>0?((!l||!I||O||t)&&r(I?g():v),v):g()}}var E=!1,S=!1,N=oe(e),T=j(()=>Z(()=>{var v=g(),I=P(N);return E?(E=!1,S=!0,I):(S=!1,N.v=v)}));return i||(T.equals=ie),function(v,I){if(arguments.length>0){const D=I?P(T):l&&d?w(v):v;return T.equals(D)||(E=!0,h(N,D),s&&a!==void 0&&(a=D),Y(()=>P(T))),v}return P(T)}}export{w as a,he as i,Pe as p};
