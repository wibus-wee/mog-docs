(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[195],{733:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog",function(){return n(199)}])},199:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return f}});var r=n(1527),a=n(890),o=n(6736);n(8823);var l=n(6917),i=n(458),s=n(4598),c=n.n(s);function u(e){let{more:t="Read more"}=e;return(function(e){let{pageMap:t}=function(e){let t=globalThis[i.eZ];if(!t)throw Error(`Nextra context not found. Please make sure you are using "${e}" of "nextra/context" on a Nextra page.`);return{pageMap:t.pageMap,route:t.route}}("getPagesUnderRoute");return function e(t,n){let r=[],a=[],o=t.find(e=>"Meta"===e.kind),i=o?.data||{};for(let o of t){if("Meta"===o.kind)continue;let t=(0,l.k0)(i[o.name]),s={...o,...Object.keys(t||{}).length>0&&{meta:t}};if("Folder"===s.kind){let t=e(s.children,n);s.children=t.items,t.activeLevelPages.length?r=t.activeLevelPages:s.route!==n||r.length||(r=s.children)}a.push(s)}let s=Object.keys(i);return a.sort((e,t)=>{let n=s.indexOf(e.name),r=s.indexOf(t.name);return -1===n&&-1===r?e.name<t.name?-1:1:-1===n?1:-1===r?-1:n-r}),{items:a,activeLevelPages:r}}(t,e).activeLevelPages})("/blog").map(e=>{var n,a,o,l;return(0,r.jsxs)("div",{className:"mb-10",children:[(0,r.jsx)("h3",{children:(0,r.jsx)(c(),{href:e.route,style:{color:"inherit",textDecoration:"none"},className:"block font-semibold mt-8 text-2xl ",children:(null===(n=e.meta)||void 0===n?void 0:n.title)||(null===(a=e.frontMatter)||void 0===a?void 0:a.title)||e.name})}),(0,r.jsxs)("p",{className:"opacity-80 mt-6 leading-7",children:[null===(o=e.frontMatter)||void 0===o?void 0:o.description," ",(0,r.jsx)("span",{className:"inline-block",children:(0,r.jsx)(c(),{href:e.route,className:"text-[color:hsl(var(--nextra-primary-hue),100%,50%)] underline underline-offset-2 decoration-from-font",children:t+" →"})})]}),(null===(l=e.frontMatter)||void 0===l?void 0:l.date)?(0,r.jsx)("p",{className:"opacity-50 text-sm mt-6 leading-7",children:new Date(e.frontMatter.date).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})}):null]},e.route)})}function d(e){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h1",{className:"text-4xl tracking-tighter text-center font-extrabold md:text-5xl mt-8 pb-6",children:"Mog\xa0\xa0Blog"}),"\n","\n",(0,r.jsx)(u,{more:"阅读更多"})]})}var f=(0,a.j)({MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}=Object.assign({},(0,o.ah)(),e.components);return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)},pageOpts:{filePath:"pages/blog.mdx",route:"/blog",frontMatter:{title:"Blog",searchable:!1},headings:[],title:"Blog"},pageNextRoute:"/blog"})}},function(e){e.O(0,[890,774,888,179],function(){return e(e.s=733)}),_N_E=e.O()}]);