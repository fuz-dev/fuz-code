import{G as X,Q as is,b as ts,ao as J,h as N,s as R,d as ns,F as fs,O as Z,$ as ls,a0 as K,K as D,f as L,ap as O,a1 as j,e as m,a2 as us,C as U,aq as H,ar as z,as as x,at as cs,N as os,au as vs,k as _s,j as ds,L as hs,B as ps,av as gs,a4 as bs,U as F,aw as As,g as ys,_ as Es,ax as Ns,ay as Ts}from"./runtime.DDLLKe4V.js";import{i as Is,c as ws,d as Cs,n as Ls,a as ks}from"./render.Apy9DF0D.js";import{s as Os}from"./entry.Da2GVQ2e.js";function Ss(s,e){if(e){const r=document.body;s.autofocus=!0,X(()=>{document.activeElement===r&&s.focus()})}}function Ks(s,e){return e}function $s(s,e,r,a){for(var t=[],v=e.length,d=0;d<v;d++)cs(e[d].e,t,!0);var h=v>0&&t.length===0&&r!==null;if(h){var b=r.parentNode;os(b),b.append(r),a.clear(),w(s,e[0].prev,e[v-1].next)}vs(t,()=>{for(var A=0;A<v;A++){var p=e[A];h||(a.delete(p.k),w(s,p.prev,p.next)),_s(p.e,!h)}})}function Us(s,e,r,a,t,v=null){var d=s,h={flags:e,items:new Map,first:null},b=(e&J)!==0;if(b){var A=s;d=N?R(ds(A)):A.appendChild(is())}N&&ns();var p=null,E=!1;ts(()=>{var y=r(),l=fs(y)?y:y==null?[]:Z(y),c=l.length;if(E&&c===0)return;E=c===0;let n=!1;if(N){var T=d.data===ls;T!==(c===0)&&(d=K(),R(d),D(!1),n=!0)}if(N){for(var f=null,u,_=0;_<c;_++){if(L.nodeType===8&&L.data===hs){d=L,n=!0,D(!1);break}var g=l[_],i=a(g,_);u=ss(L,h,f,null,g,i,_,t,e),h.items.set(i,u),f=u}c>0&&R(K())}if(!N){var o=ps;Ms(l,h,d,t,e,(o.f&O)!==0,a)}v!==null&&(c===0?p?j(p):p=m(()=>v(d)):p!==null&&us(p,()=>{p=null})),n&&D(!0),r()}),N&&(d=L)}function Ms(s,e,r,a,t,v,d,h){var B,W,Y,q;var b=(t&gs)!==0,A=(t&(H|x))!==0,p=s.length,E=e.items,y=e.first,l=y,c,n=null,T,f=[],u=[],_,g,i,o;if(b)for(o=0;o<p;o+=1)_=s[o],g=d(_,o),i=E.get(g),i!==void 0&&((B=i.a)==null||B.measure(),(T??(T=new Set)).add(i));for(o=0;o<p;o+=1){if(_=s[o],g=d(_,o),i=E.get(g),i===void 0){var S=l?l.e.nodes_start:r;n=ss(S,e,n,n===null?e.first:n.next,_,g,o,a,t),E.set(g,n),f=[],u=[],l=n.next;continue}if(A&&Rs(i,_,o,t),i.e.f&O&&(j(i.e),b&&((W=i.a)==null||W.unfix(),(T??(T=new Set)).delete(i))),i!==l){if(c!==void 0&&c.has(i)){if(f.length<u.length){var k=u[0],I;n=k.prev;var V=f[0],$=f[f.length-1];for(I=0;I<f.length;I+=1)P(f[I],k,r);for(I=0;I<u.length;I+=1)c.delete(u[I]);w(e,V.prev,$.next),w(e,n,V),w(e,$,k),l=k,n=$,o-=1,f=[],u=[]}else c.delete(i),P(i,l,r),w(e,i.prev,i.next),w(e,i,n===null?e.first:n.next),w(e,n,i),n=i;continue}for(f=[],u=[];l!==null&&l.k!==g;)(v||!(l.e.f&O))&&(c??(c=new Set)).add(l),u.push(l),l=l.next;if(l===null)continue;i=l}f.push(i),n=i,l=i.next}if(l!==null||c!==void 0){for(var C=c===void 0?[]:Z(c);l!==null;)(v||!(l.e.f&O))&&C.push(l),l=l.next;var M=C.length;if(M>0){var as=t&J&&p===0?r:null;if(b){for(o=0;o<M;o+=1)(Y=C[o].a)==null||Y.measure();for(o=0;o<M;o+=1)(q=C[o].a)==null||q.fix()}$s(e,C,as,E)}}b&&X(()=>{var G;if(T!==void 0)for(i of T)(G=i.a)==null||G.apply()}),U.first=e.first&&e.first.e,U.last=n&&n.e}function Rs(s,e,r,a){a&H&&z(s.v,e),a&x?z(s.i,r):s.i=r}function ss(s,e,r,a,t,v,d,h,b,A){var p=(b&H)!==0,E=(b&As)===0,y=p?E?bs(t):F(t):t,l=b&x?F(d):d,c={i:l,v:y,k:v,a:null,e:null,prev:r,next:a};try{return c.e=m(()=>h(s,y,l),N),c.e.prev=r&&r.e,c.e.next=a&&a.e,r===null?e.first=c:(r.next=c,r.e.next=c.e),a!==null&&(a.prev=c,a.e.prev=c.e),c}finally{}}function P(s,e,r){for(var a=s.next?s.next.e.nodes_start:r,t=e?e.e.nodes_start:r,v=s.e.nodes_start;v!==a;){var d=ys(v);t.before(v),v=d}}function w(s,e,r){e===null?s.first=r:(e.next=r,e.e.next=r&&r.e),r!==null&&(r.prev=e,r.e.prev=e&&e.e)}function es(s){var e,r,a="";if(typeof s=="string"||typeof s=="number")a+=s;else if(typeof s=="object")if(Array.isArray(s)){var t=s.length;for(e=0;e<t;e++)s[e]&&(r=es(s[e]))&&(a&&(a+=" "),a+=r)}else for(r in s)s[r]&&(a&&(a+=" "),a+=r);return a}function Ds(){for(var s,e,r=0,a="",t=arguments.length;r<t;r++)(s=arguments[r])&&(e=es(s))&&(a&&(a+=" "),a+=e);return a}function Hs(s){return typeof s=="object"?Ds(s):s??""}function xs(s,e){e?s.hasAttribute("selected")||s.setAttribute("selected",""):s.removeAttribute("selected")}function Vs(s,e,r,a){var t=s.__attributes??(s.__attributes={});N&&(t[e]=s.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&s.nodeName==="LINK")||t[e]!==(t[e]=r)&&(e==="style"&&"__styles"in s&&(s.__styles={}),e==="loading"&&(s[Ts]=r),r==null?s.removeAttribute(e):typeof r!="string"&&rs(s).includes(e)?s[e]=r:s.setAttribute(e,r))}function zs(s,e,r,a,t=!1,v=!1,d=!1){var h=e||{},b=s.tagName==="OPTION";for(var A in e)A in r||(r[A]=null);r.class&&(r.class=Hs(r.class)),a!==void 0&&(r.class=r.class?r.class+" "+a:a);var p=rs(s),E=s.__attributes??(s.__attributes={});for(const f in r){let u=r[f];if(b&&f==="value"&&u==null){s.value=s.__value="",h[f]=u;continue}var y=h[f];if(u!==y){h[f]=u;var l=f[0]+f[1];if(l!=="$$"){if(l==="on"){const _={},g="$$"+f;let i=f.slice(2);var c=ks(i);if(Is(i)&&(i=i.slice(0,-7),_.capture=!0),!c&&y){if(u!=null)continue;s.removeEventListener(i,h[g],_),h[g]=null}if(u!=null)if(c)s[`__${i}`]=u,Cs([i]);else{let o=function(S){h[f].call(this,S)};h[g]=ws(i,s,o,_)}else c&&(s[`__${i}`]=void 0)}else if(f==="style"&&u!=null)s.style.cssText=u+"";else if(f==="autofocus")Ss(s,!!u);else if(f==="__value"||f==="value"&&u!=null)s.value=s[f]=s.__value=u;else if(f==="selected"&&b)xs(s,u);else{var n=f;t||(n=Ls(n));var T=n==="defaultValue"||n==="defaultChecked";if(u==null&&!v&&!T)if(E[f]=null,n==="value"||n==="checked"){let _=s;if(n==="value"){let g=_.defaultValue;_.removeAttribute(n),_.defaultValue=g}else{let g=_.defaultChecked;_.removeAttribute(n),_.defaultChecked=g}}else s.removeAttribute(f);else T||p.includes(n)&&(v||typeof u!="string")?s[n]=u:typeof u!="function"&&(N&&(n==="src"||n==="href"||n==="srcset")||Vs(s,n,u))}f==="style"&&"__styles"in s&&(s.__styles={})}}}return h}var Q=new Map;function rs(s){var e=Q.get(s.nodeName);if(e)return e;Q.set(s.nodeName,e=[]);for(var r,a=s,t=Element.prototype;t!==a;){r=Ns(a);for(var v in r)r[v].set&&e.push(v);a=Es(a)}return e}function Fs(s,e,r){var a=s.__className,t=Bs(e);N&&s.className===t?s.__className=t:(a!==t||N&&s.className!==t)&&(e==null&&!r?s.removeAttribute("class"):s.className=t,s.__className=t)}function Bs(s,e){return(s??"")+""}function Ps(s,e,r){if(r){if(s.classList.contains(e))return;s.classList.add(e)}else{if(!s.classList.contains(e))return;s.classList.remove(e)}}const Ws=()=>{const s=Os;return{page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},updated:s.updated}},Qs={subscribe(s){return Ws().page.subscribe(s)}},Xs=(s,e)=>!e||!s.startsWith(e)?s:s.substring(e.length),Js=(s,e)=>!e||!s.endsWith(e)?s:s.substring(0,s.length-e.length),Zs=(s,e)=>s.endsWith(e)?s:s+e;export{Zs as a,Xs as b,Js as c,zs as d,Us as e,Fs as f,Ks as i,Qs as p,Vs as s,Ps as t};
