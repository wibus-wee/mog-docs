(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9305],{9981:function(e,n,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/development/dev-mog",function(){return s(5036)}])},5036:function(e,n,s){"use strict";s.r(n);var a=s(1527),l=s(2763),t=s(6736);function i(e){let n=Object.assign({h1:"h1",h2:"h2",pre:"pre",code:"code",span:"span",p:"p",hr:"hr",a:"a"},(0,t.ah)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"启动-mog-开发模式",children:"启动 Mog 开发模式"}),"\n",(0,a.jsx)(n.h2,{id:"1-从-github-上克隆下-mog-源码",children:"1. 从 Github 上克隆下 Mog 源码"}),"\n",(0,a.jsx)(n.pre,{"data-language":"bash","data-theme":"default",hasCopyCode:!0,children:(0,a.jsx)(n.code,{"data-language":"bash","data-theme":"default",children:(0,a.jsxs)(n.span,{className:"line",children:[(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"git"}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"clone"}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"git@github.com:mogland/core.git"})]})})}),"\n",(0,a.jsx)(n.h2,{id:"2-安装依赖",children:"2. 安装依赖"}),"\n",(0,a.jsx)(n.p,{children:"Mog 使用 pnpm 管理依赖，所以你必须要使用 pnpm 来安装依赖。"}),"\n",(0,a.jsx)(n.pre,{"data-language":"bash","data-theme":"default",hasCopyCode:!0,children:(0,a.jsx)(n.code,{"data-language":"bash","data-theme":"default",children:(0,a.jsxs)(n.span,{className:"line",children:[(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"pnpm"}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"i"})]})})}),"\n",(0,a.jsx)(n.h2,{id:"3-启动开发模式",children:"3. 启动开发模式"}),"\n",(0,a.jsx)(n.pre,{"data-language":"bash","data-theme":"default",hasCopyCode:!0,children:(0,a.jsx)(n.code,{"data-language":"bash","data-theme":"default",children:(0,a.jsxs)(n.span,{className:"line",children:[(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"pnpm"}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"dev"}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:"# / pnpm start "})]})})}),"\n",(0,a.jsx)(n.p,{children:"请注意，此项命令将有可能导致~~您的电脑彻底死机（CPU 100%）~~所以请确保您的电脑配置足够好，否则你可以使用下面的命令来启动开发模式："}),"\n",(0,a.jsx)(n.pre,{"data-language":"bash","data-theme":"default",hasCopyCode:!0,children:(0,a.jsx)(n.code,{"data-language":"bash","data-theme":"default",children:(0,a.jsxs)(n.span,{className:"line",children:[(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"pnpm"}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"start:"}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"<"}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"service-nam"}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"e"}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:">"})]})})}),"\n",(0,a.jsx)(n.p,{children:"你可以在 package.json 中查看所有的命令。通过上面的命令，你可以启动指定的服务，而不是直接同时启动所有的服务，可以有效的减少电脑的负担。"}),"\n",(0,a.jsx)(n.h2,{id:"4-打包",children:"4. 打包"}),"\n",(0,a.jsx)(n.pre,{"data-language":"bash","data-theme":"default",hasCopyCode:!0,children:(0,a.jsxs)(n.code,{"data-language":"bash","data-theme":"default",children:[(0,a.jsxs)(n.span,{className:"line",children:[(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"pnpm"}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"build"})]}),"\n",(0,a.jsxs)(n.span,{className:"line",children:[(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"pnpm"}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"bundle"})]})]})}),"\n",(0,a.jsx)(n.p,{children:"目前还暂时无法只构建某个服务，所以你只能先一次性构建所有的服务，再使用 bundle 命令来打包。"}),"\n",(0,a.jsxs)(n.p,{children:["另外，如果你需要使用根目录的 ",(0,a.jsx)(n.code,{children:"ecosystem.config.js"}),", 你必须要执行 ",(0,a.jsx)(n.code,{children:"bundle"})]}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsxs)(n.p,{children:["其他内容，我认为 ",(0,a.jsx)(n.a,{href:"https://github.com/mogland/core/blob/main/CONTRIBUTING.md",children:"Mog CONTRIBUTING"})," 中已经写的很清楚了，所以我就不再赘述了。"]})]})}s(8823),n.default=(0,l.j)({MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(i,{...e})}):i(e)},pageOpts:{filePath:"pages/development/dev-mog.mdx",route:"/development/dev-mog",headings:[{depth:1,value:"启动 Mog 开发模式",id:"启动-mog-开发模式"},{depth:2,value:"1. 从 Github 上克隆下 Mog 源码",id:"1-从-github-上克隆下-mog-源码"},{depth:2,value:"2. 安装依赖",id:"2-安装依赖"},{depth:2,value:"3. 启动开发模式",id:"3-启动开发模式"},{depth:2,value:"4. 打包",id:"4-打包"}],title:"启动 Mog 开发模式"},pageNextRoute:"/development/dev-mog"})}},function(e){e.O(0,[2763,9774,2888,179],function(){return e(e.s=9981)}),_N_E=e.O()}]);