var ce=Object.defineProperty;var ge=(t,e,a)=>e in t?ce(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a;var h=(t,e,a)=>(ge(t,typeof e!="symbol"?e+"":e,a),a);import{a as pe,e as P,b as C,t as fe}from"./disclose-version.Bjnog2dZ.js";import{b as _e,E as he,e as me,h as x,d as X,f as B,a2 as Fe,a1 as be,k as ve,j as ke,Q as xe,K as Y,s as j,C as ye,az as re,m as I,p as we,o as Ae,x as T,t as H,q as Se,r as ze,y as L}from"./runtime.DDLLKe4V.js";import{p as M,i as $e}from"./props.B5wJezyX.js";import{s as Ee,h as Re}from"./snippet.BCA9wPTx.js";import{b as Ce,e as J}from"./render.Apy9DF0D.js";import{d as W,t as ee}from"./string.qdsbXVjl.js";function Te(t,e,a,r,n,s){let o=x;x&&X();var l,u,i=null;x&&B.nodeType===1&&(i=B,X());var f=x?B:t,p;_e(()=>{const d=e()||null;var b=d==="svg"?re:null;d!==l&&(p&&(d===null?Fe(p,()=>{p=null,u=null}):d===u?be(p):(ve(p),J(!1))),d&&d!==u&&(p=me(()=>{if(i=x?i:b?document.createElementNS(b,d):document.createElement(d),pe(i,i),r){x&&Ce(d)&&i.append(document.createComment(""));var v=x?ke(i):i.appendChild(xe());x&&(v===null?Y(!1):j(v)),r(i,v)}ye.nodes_end=i,f.before(i)})),l=d,l&&(u=l),J(!0))},he),o&&(Y(!0),j(f))}class Ze{constructor(){h(this,"langs",{plaintext:{}});h(this,"plugins",{});h(this,"hooks_before_tokenize",[]);h(this,"hooks_after_tokenize",[]);h(this,"hooks_wrap",[])}add_lang(e,a,r){if(this.langs[e]=a,r!==void 0)for(var n of r)this.langs[n]=a}add_extended_lang(e,a,r,n){var s=this.extend_grammar(e,r);return this.add_lang(a,s,n),s}get_lang(e){var a=this.langs[e];if(a===void 0)throw Error(`The language "${e}" has no grammar.`);return a}stylize(e,a,r=this.get_lang(a)){var n={code:e,grammar:r,lang:a,tokens:void 0};return this.run_hook_before_tokenize(n),n.tokens=se(n.code,n.grammar),this.run_hook_after_tokenize(n),this.stringify_token(K(n.tokens),n.lang)}grammar_insert_before(e,a,r,n=this.langs){var s=n[e],o={};for(var l in s){if(l===a)for(var u in r)o[u]=r[u];Object.hasOwn(r,l)||(o[l]=s[l])}var i=n[e];return n[e]=o,ie(this.langs,(f,p,d)=>{d===i&&p!==e&&(f[p]=o)}),o}stringify_token(e,a){if(typeof e=="string")return e;if(Array.isArray(e)){var r="";for(var n of e)r+=this.stringify_token(n,a);return r}var s={type:e.type,content:this.stringify_token(e.content,a),tag:"span",classes:["token",e.type],attributes:{},lang:a},o=e.alias;o&&(Array.isArray(o)?s.classes.push(...o):s.classes.push(o)),this.run_hook_wrap(s);var l="";for(var u in s.attributes)l+=" "+u+'="'+(s.attributes[u]||"").replace(/"/g,"&quot;")+'"';return"<"+s.tag+' class="'+s.classes.join(" ")+'"'+l+">"+s.content+"</"+s.tag+">"}extend_grammar(e,a){return{...Q(this.get_lang(e)),...a}}add_hook_before_tokenize(e){this.hooks_before_tokenize.push(e)}add_hook_after_tokenize(e){this.hooks_after_tokenize.push(e)}add_hook_wrap(e){this.hooks_wrap.push(e)}run_hook_before_tokenize(e){for(var a of this.hooks_before_tokenize)a(e)}run_hook_after_tokenize(e){for(var a of this.hooks_after_tokenize)a(e)}run_hook_wrap(e){for(var a of this.hooks_wrap)a(e)}}const se=(t,e)=>{var{rest:a}=e;if(a){for(var r in a)e[r]=a[r];e.rest=void 0}var n=new Ne;return Z(n,n.head,t),oe(t,n,e,n.head,0),De(n)},ie=(t,e,a=new Set)=>{for(var r in t){e(t,r,t[r]);var n=t[r];n&&typeof n=="object"&&!(n instanceof RegExp)&&!a.has(N(n))&&(a.add(N(n)),ie(n,e,a))}};class S{constructor(e,a,r,n=""){h(this,"type");h(this,"content");h(this,"alias");h(this,"length");this.type=e,this.content=a,this.alias=r,this.length=n.length}}const te=(t,e,a,r)=>{t.lastIndex=e;var n=t.exec(a);if(n&&r&&n[1]){var s=n[1].length;n.index+=s,n[0]=n[0].substring(s)}return n},oe=(t,e,a,r,n,s)=>{for(var o in a){var l=a[o];if(l){l=Array.isArray(l)?l:[l];for(var u=0;u<l.length;++u){if(s&&s.cause===o+","+u)return;var i=l[u],f=i.inside,p=!!i.lookbehind,d=!!i.greedy,b=i.alias;if(d&&!i.pattern.global){var v=i.pattern.toString().match(/[imsuy]*$/)[0];i.pattern=RegExp(i.pattern.source,v+"g")}for(var z=i.pattern||i,c=r.next,m=n;c!==e.tail&&!(s&&m>=s.reach);m+=c.value.length,c=c.next){var _=c.value;if(e.length>t.length)return;if(!(_ instanceof S)){var F=1,g;if(d){if(g=te(z,m,t,p),!g||g.index>=t.length)break;var $=g.index,ue=g.index+g[0].length,k=m;for(k+=c.value.length;$>=k;)c=c.next,k+=c.value.length;if(k-=c.value.length,m=k,c.value instanceof S)continue;for(var w=c;w!==e.tail&&(k<ue||typeof w.value=="string");w=w.next)F++,k+=w.value.length;F--,_=t.substring(m,k),g.index-=m}else if(g=te(z,0,_,p),!g)continue;var $=g.index,E=g[0],q=_.substring(0,$),V=_.substring($+E.length),D=m+_.length;s&&D>s.reach&&(s.reach=D);var R=c.prev;q&&(R=Z(e,R,q),m+=q.length),qe(e,R,F);var de=new S(o,f?se(E,f):E,b,E);if(c=Z(e,R,de),V&&Z(e,c,V),F>1){var O={cause:o+","+u,reach:D};oe(t,e,a,c.prev,m,O),s&&O.reach>s.reach&&(s.reach=O.reach)}}}}}}};class Ne{constructor(){h(this,"head");h(this,"tail");h(this,"length",0);this.head={value:null,prev:null,next:null},this.tail={value:null,prev:this.head,next:null},this.head.next=this.tail}}const Z=(t,e,a)=>{var r=e.next,n={value:a,prev:e,next:r};return e.next=n,r.prev=n,t.length++,n},qe=(t,e,a)=>{for(var r=e.next,n=0;n<a&&r!==t.tail;n++)r=r.next;e.next=r,r.prev=e,t.length-=n},De=t=>{for(var e=[],a=t.head.next;a!==t.tail;)e.push(a.value),a=a.next;return e};var Oe=0;const K=t=>t instanceof S?new S(t.type,K(t.content),t.alias):Array.isArray(t)?t.map(K):t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," "),G=Symbol("id"),N=t=>t[G]??(t[G]=++Oe),Q=(t,e=new Map)=>{var a,r,n;if(Array.isArray(t)){if(r=N(t),n=e.get(r),n)return n;a=[],e.set(r,a);for(var s=0;s<t.length;s++)a[s]=Q(t[s],e);return a}else if(t&&typeof t=="object"&&!(t instanceof RegExp)){if(r=N(t),n=e.get(r),n)return n;a={},e.set(r,a);for(var o in t)a[o]=Q(t[o],e);return a}else return t},Pe=t=>{const e={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE.*>/i},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>/=$<%]+(?:\s(?:\s*[^\s>/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>/:]+:/}},special_attr:[],attr_value:{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr_equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}],entity:void 0}},punctuation:/\/?>/,attr_name:{pattern:/[^\s>/]+/,inside:{namespace:/^[^\s>/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named_entity"},/&#x?[\da-f]{1,8};/i]};e.tag.inside.attr_value.inside.entity=e.entity,t.add_lang("markup",e,["html","mathml","svg"]),t.add_extended_lang("markup","xml",{},["ssml","atom","rss"])},U=(t,e,a,r="markup")=>{const n="lang_"+a;t.grammar_insert_before(r,"cdata",{[e]:{pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,()=>e),"i"),lookbehind:!0,greedy:!0,inside:{included_cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:{cdata:/^<!\[CDATA\[|\]\]>$/i,[n]:{pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:t.get_lang(a)}}},[n]:{pattern:/[\s\S]+/,inside:t.get_lang(a)}}}})},le=(t,e,a)=>{t.get_lang("markup").tag.inside.special_attr.push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+e+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{attr_name:/^[^\s=]+/,attr_value:{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[a,"lang_"+a],inside:t.get_lang(a)},punctuation:[{pattern:/^=/,alias:"attr_equals"},/"|'/]}}}})};var A=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;const Be=t=>{const e={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+A.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,selector_function_argument:{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+A.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+A.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+A.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:A,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/};e.atrule.inside.rest=e,t.add_lang("css",e),U(t,"style","css"),le(t,"style","css")},Ie=t=>{const e={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},class_name:{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/};t.add_lang("clike",e)},Le=t=>{const e=t.get_lang("clike"),a=t.add_extended_lang("clike","js",{class_name:[e.class_name,{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/});a.class_name[0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,t.grammar_insert_before("js","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{regex_source:{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"lang_regex",inside:t.langs.regex},regex_delimiter:/^\/|\/$/,regex_flags:/^[a-z]+$/}},function_variable:{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:a},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:a},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:a},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:a}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),t.grammar_insert_before("js","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},template_string:{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{template_punctuation:{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{interpolation_punctuation:{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:a}},string:/[\s\S]+/}},string_property:{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),t.grammar_insert_before("js","operator",{literal_property:{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),U(t,"script","js"),le(t,/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"js")},Me=t=>{const e=t.add_extended_lang("js","ts",{class_name:{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,lookbehind:!0,greedy:!0,inside:null},builtin:/\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/});e.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/,/\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,/\btype\b(?=\s*(?:[{*]|$))/),delete e.parameter,delete e.literal_property;var a=t.extend_grammar("ts",{});a.class_name=void 0,e.class_name.inside=a,t.grammar_insert_before("ts","function",{decorator:{pattern:/@[$\w\xA0-\uFFFF]+/,inside:{at:{pattern:/^@/,alias:"operator"},function:/^[\s\S]+/}},generic_function:{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,greedy:!0,inside:{function:/^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,generic:{pattern:/<[\s\S]+/,alias:"class_name",inside:a}}}})},ae="(if|else if|await|then|catch|each|html|debug)",Ge=t=>{const e=t.get_lang("ts"),a=t.add_extended_lang("markup","svelte",{each:{pattern:/{[#/]each(?:(?:\{(?:(?:\{(?:[^{}])*\})|(?:[^{}]))*\})|(?:[^{}]))*}/,inside:{lang_ts:[{pattern:/(as[\s\S]*)\([\s\S]*\)(?=\s*\})/,lookbehind:!0,inside:e},{pattern:/(as[\s]*)[\s\S]*(?=\s*)/,lookbehind:!0,inside:e},{pattern:/(#each[\s]*)[\s\S]*(?=as)/,lookbehind:!0,inside:e}],keyword:/[#/]each|as/,punctuation:/{|}/}},block:{pattern:new RegExp("{[#:/@]/s"+ae+"(?:(?:\\{(?:(?:\\{(?:[^{}])*\\})|(?:[^{}]))*\\})|(?:[^{}]))*}"),inside:{punctuation:/^{|}$/,keyword:[new RegExp("[#:/@]"+ae+"( )*"),/as/,/then/],lang_ts:{pattern:/[\s\S]*/,inside:e}}},tag:{pattern:/<\/?(?!\d)[^\s>/=$<%]+(?:\s(?:\s*[^\s>/=]+(?:\s*=\s*(?:(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?:"[^"]*"|'[^']*'|{[\s\S]+?}(?=[\s/>])))|(?=[\s/>])))+)?\s*\/?>/i,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>/:]+:/}},lang_ts:{pattern:/\{(?:(?:\{(?:(?:\{(?:[^{}])*\})|(?:[^{}]))*\})|(?:[^{}]))*\}/,inside:e},attr_value:{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/i,inside:{punctuation:[/^=/,{pattern:/^(\s*)["']|["']$/,lookbehind:!0}],lang_ts:{pattern:/{[\s\S]+}/,inside:e}}},punctuation:/\/?>/,attr_name:{pattern:/[^\s>/]+/,inside:{namespace:/^[^\s>/:]+:/}}}},lang_ts:{pattern:/\{(?:(?:\{(?:(?:\{(?:[^{}])*\})|(?:[^{}]))*\})|(?:[^{}]))*\}/,lookbehind:!0,inside:e}});a.tag.inside.attr_value.inside.entity=a.entity,ne(t,"style","css"),ne(t,"script","ts")},ne=(t,e,a)=>{U(t,e,a,"svelte")},Ke=t=>{const e={property:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,lookbehind:!0,greedy:!0},string:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,lookbehind:!0,greedy:!0},comment:{pattern:/\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},number:/-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,punctuation:/[{}[\],]/,operator:/:/,boolean:/\b(?:false|true)\b/,null:{pattern:/\bnull\b/,alias:"keyword"}};t.add_lang("json",e)},y=new Ze;Pe(y);Be(y);Ie(y);Le(y);Me(y);Ge(y);Ke(y);var Qe=fe("<code><!></code>");function We(t,e){Ae(e,!0);const a=M(e,"lang",3,"svelte"),r=M(e,"inline",3,!1),n=M(e,"syntax_styler",3,y),s=L(()=>a()===null||!e.content?null:n().stylize(e.content,a(),e.grammar)),o=L(()=>T(s)??e.content),l=L(()=>r()?"span":"pre");var u=P(),i=I(u);Te(i,()=>T(l),!1,(f,p)=>{let d;H(()=>{d=W(f,d,{...e.pre_attrs,class:"code"},"svelte-yb12s5",f.namespaceURI===re,f.nodeName.includes("-")),ee(f,"inline",r()),ee(f,"pre",r())});var b=Qe();let v;var z=Se(b);{var c=_=>{var F=P(),g=I(F);Ee(g,()=>e.children,()=>T(o)),C(_,F)},m=_=>{var F=P(),g=I(F);Re(g,()=>T(o),!1,!1),C(_,F)};$e(z,_=>{e.children?_(c):_(m,!1)})}ze(b),H(()=>v=W(b,v,{...e.code_attrs},"svelte-yb12s5")),C(p,b)}),C(t,u),we()}export{We as C};
