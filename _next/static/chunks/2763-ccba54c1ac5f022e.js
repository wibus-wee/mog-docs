(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2763],{5554:function(t,e,n){var r,o="__lodash_hash_undefined__",a=1/0,i=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,c=/^\w*$/,u=/^\./,l=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,s=/\\(\\)?/g,p=/^\[object .+?Constructor\]$/,f="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g,d="object"==typeof self&&self&&self.Object===Object&&self,h=f||d||Function("return this")(),g=Array.prototype,_=Function.prototype,y=Object.prototype,b=h["__core-js_shared__"],v=(r=/[^.]+$/.exec(b&&b.keys&&b.keys.IE_PROTO||""))?"Symbol(src)_1."+r:"",w=_.toString,j=y.hasOwnProperty,m=y.toString,S=RegExp("^"+w.call(j).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),x=h.Symbol,O=g.splice,k=N(h,"Map"),T=N(Object,"create"),C=x?x.prototype:void 0,M=C?C.toString:void 0;function P(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function $(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function E(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function I(t,e){for(var n,r=t.length;r--;)if((n=t[r][0])===e||n!=n&&e!=e)return r;return -1}function L(t,e){var n,r=t.__data__;return("string"==(n=typeof e)||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==e:null===e)?r["string"==typeof e?"string":"hash"]:r.map}function N(t,e){var n,r=null==t?void 0:t[e];return!(!D(r)||v&&v in r)&&("[object Function]"==(n=D(r)?m.call(r):"")||"[object GeneratorFunction]"==n||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}(r)?S:p).test(function(t){if(null!=t){try{return w.call(t)}catch(t){}try{return t+""}catch(t){}}return""}(r))?r:void 0}P.prototype.clear=function(){this.__data__=T?T(null):{}},P.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},P.prototype.get=function(t){var e=this.__data__;if(T){var n=e[t];return n===o?void 0:n}return j.call(e,t)?e[t]:void 0},P.prototype.has=function(t){var e=this.__data__;return T?void 0!==e[t]:j.call(e,t)},P.prototype.set=function(t,e){return this.__data__[t]=T&&void 0===e?o:e,this},$.prototype.clear=function(){this.__data__=[]},$.prototype.delete=function(t){var e=this.__data__,n=I(e,t);return!(n<0)&&(n==e.length-1?e.pop():O.call(e,n,1),!0)},$.prototype.get=function(t){var e=this.__data__,n=I(e,t);return n<0?void 0:e[n][1]},$.prototype.has=function(t){return I(this.__data__,t)>-1},$.prototype.set=function(t,e){var n=this.__data__,r=I(n,t);return r<0?n.push([t,e]):n[r][1]=e,this},E.prototype.clear=function(){this.__data__={hash:new P,map:new(k||$),string:new P}},E.prototype.delete=function(t){return L(this,t).delete(t)},E.prototype.get=function(t){return L(this,t).get(t)},E.prototype.has=function(t){return L(this,t).has(t)},E.prototype.set=function(t,e){return L(this,t).set(t,e),this};var J=R(function(t){t=null==(e=t)?"":function(t){if("string"==typeof t)return t;if(F(t))return M?M.call(t):"";var e=t+"";return"0"==e&&1/t==-a?"-0":e}(e);var e,n=[];return u.test(t)&&n.push(""),t.replace(l,function(t,e,r,o){n.push(r?o.replace(s,"$1"):e||t)}),n});function R(t,e){if("function"!=typeof t||e&&"function"!=typeof e)throw TypeError("Expected a function");var n=function(){var r=arguments,o=e?e.apply(this,r):r[0],a=n.cache;if(a.has(o))return a.get(o);var i=t.apply(this,r);return n.cache=a.set(o,i),i};return n.cache=new(R.Cache||E),n}R.Cache=E;var Z=Array.isArray;function D(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function F(t){return"symbol"==typeof t||!!t&&"object"==typeof t&&"[object Symbol]"==m.call(t)}t.exports=function(t,e,n){var r=null==t?void 0:function(t,e){var n;e=!function(t,e){if(Z(t))return!1;var n=typeof t;return!!("number"==n||"symbol"==n||"boolean"==n||null==t||F(t))||c.test(t)||!i.test(t)||null!=e&&t in Object(e)}(e,t)?Z(n=e)?n:J(n):[e];for(var r=0,o=e.length;null!=t&&r<o;)t=t[function(t){if("string"==typeof t||F(t))return t;var e=t+"";return"0"==e&&1/t==-a?"-0":e}(e[r++])];return r&&r==o?t:void 0}(t,e);return void 0===r?n:r}},2763:function(t,e,n){"use strict";n.d(e,{j:function(){return g}});var r,o=n(5554),a=n.n(o),i=n(4322),c=n(959);n(9662),"undefined"!=typeof window&&(window.requestIdleCallback=window.requestIdleCallback||function(t){var e=Date.now();return setTimeout(function(){t({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-e))}})},1)},window.cancelIdleCallback=window.cancelIdleCallback||function(t){clearTimeout(t)});var u=n(1527),l=(0,c.createContext)(!1),s=n(1689);function p({__nextra_pageMap:t,__nextra_dynamic_opts:e,...n}){let{context:r,Layout:o}=function(){let t=globalThis[i.eZ],{route:e}=(0,s.useRouter)();(0,c.useState)({})[1];let n=t.context[e];if(!n)throw Error("No content found for the current route. This is a Nextra bug.");return{context:n,Layout:t.Layout}}(),{Content:a,...p}=r;if(t&&(p.pageOpts={...p.pageOpts,pageMap:t}),e){let t=JSON.parse(e);p.pageOpts={...p.pageOpts,headings:t.headings,title:t.title||p.pageOpts.title,frontMatter:t.frontMatter}}return(0,u.jsx)(o,{...p,pageProps:n,children:(0,u.jsx)(l.Provider,{value:n,children:(0,u.jsx)(a,{...n})})})}var f=n(274);function d(t){return!!t&&"object"==typeof t&&"folder"===t.type}function h(t){return Object.fromEntries(Object.entries(t).map(([t,e])=>{if(d(e)){let n=t.replace("/","");return[n,e.title||(0,f.Zs)(n)]}return[t,e||(0,f.Zs)(t)]}))}function g({pageNextRoute:t,pageOpts:e,nextraLayout:n,themeConfig:o,MDXContent:c,hot:u,pageOptsChecksum:l,dynamicMetaModules:s=[]}){var g;"undefined"==typeof window&&(globalThis.__nextra_resolvePageMap=async()=>{if(r)return r;let t=JSON.parse(JSON.stringify(_.pageMap));return await Promise.all(s.map(async([e,{metaObjectKeyPath:n,metaParentKeyPath:r}])=>{let o=await e,i=await o.default(),c=a()(t,n);c.data=i;let u=a()(t,r);!function t(e,n,r=!0){if(r){t(e,{kind:"Meta",data:n.data,locale:n.locale},!1),n.data=h(n.data);return}for(let[r,o]of Object.entries(n.data)){if(!d(o)){if("*"===r)continue;e.children.push({kind:"MdxPage",...n.locale&&{locale:n.locale},name:r,route:(0,f.Tz)(e.route,r)});continue}let a=r.replace("/",""),i={kind:"Folder",name:a,route:`${e.route}/${a}`,children:[{kind:"Meta",...n.locale&&{locale:n.locale},data:h(o.items)}]};e.children.push(i),t(i,{kind:"Meta",data:o.items,locale:n.locale},!1)}}(u,c)})),r=t});let _=globalThis[g=i.eZ]||(globalThis[g]=Object.create(null));return e.pageMap?(_.pageMap=e.pageMap,_.Layout=n):(e={...e,pageMap:_.pageMap,flexsearch:_.flexsearch},o=_.themeConfig),e={frontMatter:{},...e},_.route=e.route,_.context||(_.context=Object.create(null)),_.context[t]={Content:c,pageOpts:e,themeConfig:o},p}},4473:function(t){"use strict";t.exports=t=>{let e=/^\\\\\?\\/.test(t),n=/[^\u0000-\u0080]+/.test(t);return e||n?t:t.replace(/\\/g,"/")}},9378:function(t,e,n){let r=n(3587),o=n(2168),a="[^\\s'’\\(\\)!?;:\"-]",i=RegExp(`(?:(?:(\\s?(?:^|[.\\(\\)!?;:"-])\\s*)(${a}))|(${a}))(${a}*[’']*${a}*)`,"g"),c=t=>t.map(t=>[RegExp(`\\b${t}\\b`,"gi"),t]);t.exports=(t,e={})=>{t=t.toLowerCase().replace(i,(t,e="",n,o,a,i,c)=>{let u=t.length+i>=c.length,l=function(t){let e=t[0];return/\s/.test(e)?t.slice(1):/[\(\)]/.test(e)?null:t}(t);return l?!n&&r.has(o+a)&&!u?l:e+(o||n).toUpperCase()+a:t});let n=e.special||[],a=[...o,...n],u=c(a);return u.forEach(([e,n])=>{t=t.replace(e,n)}),t}},3587:function(t){t.exports=new Set(["for","and","nor","but","or","yet","so","a","an","the","aboard","about","above","across","after","against","along","amid","among","anti","around","as","at","before","behind","below","beneath","beside","besides","between","beyond","but","by","concerning","considering","despite","down","during","except","excepting","excluding","following","for","from","in","inside","into","like","minus","near","of","off","on","onto","opposite","over","past","per","plus","regarding","round","save","since","than","through","to","toward","towards","under","underneath","unlike","until","up","upon","versus","via","with","within","without"])},2168:function(t){t.exports=["ZEIT","ZEIT Inc.","Vercel","Vercel Inc.","CLI","API","HTTP","HTTPS","JSX","DNS","URL","now.sh","now.json","vercel.app","vercel.json","CI","CD","CDN","package.json","package.lock","yarn.lock","GitHub","GitLab","CSS","Sass","JS","JavaScript","TypeScript","HTML","WordPress","Next.js","Node.js","Webpack","Docker","Bash","Kubernetes","SWR","TinaCMS","UI","UX","TS","TSX","iPhone","iPad","watchOS","iOS","iPadOS","macOS","PHP","composer.json","composer.lock","CMS","SQL","C","C#","GraphQL","GraphiQL","JWT","JWTs"]},9662:function(t,e,n){n(1527)},274:function(t,e,n){"use strict";n.d(e,{Tz:function(){return c},Zs:function(){return u},k0:function(){return i}});var r=n(3477),o=n(4473),a=n(9378);function i(t){return"string"==typeof t?{title:t}:t}function c(t,e){return o(r.join(t,e.replace(/^index$/,"")))}function u(t){return a(t.replace(/[-_]/g," "))}n(4322)}}]);