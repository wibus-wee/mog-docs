(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4436],{3842:function(n,s,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/mog-v2-refactor-1",function(){return e(9439)}])},9439:function(n,s,e){"use strict";e.r(s);var i=e(1527),l=e(2763),r=e(6736);function d(n){let s=Object.assign({h1:"h1",p:"p",em:"em",strong:"strong",h2:"h2",ul:"ul",li:"li",ol:"ol"},(0,r.ah)(),n.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h1,{id:"mog-20-odyssey-开始重构---stage-1-issue",children:"Mog 2.0 (Odyssey) 开始重构 - Stage 1 Issue"}),"\n",(0,i.jsxs)(s.p,{children:["从 NEXT 到 Mog 是一个比较惨痛的过程，已经有一部分人知道此项目了，他们通常称之为 ",(0,i.jsx)(s.em,{children:'"nx"'}),"，现在修改这个名字对宣传来说并不是一件好事，但为了以后的发展我们必须这样做。"]}),"\n",(0,i.jsxs)(s.p,{children:["新的名字由两个单词组成：",(0,i.jsx)(s.strong,{children:"Module + Blog = Mog"}),"，这和我们在 v2 版本的构思有关。我们在 v2 突破地采用了",(0,i.jsx)(s.strong,{children:"微服务架构"}),"，对于不同的服务分离，我们仍在探索当中，相信出版的时候可以寻找到一个较好的方案。"]}),"\n",(0,i.jsx)(s.h1,{id:"一些-qa",children:"一些 Q&A"}),"\n",(0,i.jsx)(s.h2,{id:"为什么突然要重构",children:"为什么突然要重构？"}),"\n",(0,i.jsx)(s.p,{children:"1.x 版本由于更新仓促，导致了很多的问题，比如："}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["API RESTFul ",(0,i.jsx)(s.strong,{children:"规范"})]}),"\n",(0,i.jsxs)(s.li,{children:["DTO 与 Model ",(0,i.jsx)(s.strong,{children:"不匹配"}),"，导致输出存在问题"]}),"\n",(0,i.jsxs)(s.li,{children:["接口方法",(0,i.jsx)(s.strong,{children:"书写混乱"})]}),"\n",(0,i.jsxs)(s.li,{children:["注释",(0,i.jsx)(s.strong,{children:"不规范"})]}),"\n",(0,i.jsxs)(s.li,{children:["很难继续向上堆积功能，原架构会导致",(0,i.jsx)(s.strong,{children:"功能臃肿"})]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"为了长久的发展，我们发布了最后的 v1.7.0，并立即开始了 v2 的重构"}),"\n",(0,i.jsx)(s.h2,{id:"这次更新有什么新功能或者优势",children:"这次更新有什么新功能或者优势？"}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{children:["2.x 版本将会",(0,i.jsx)(s.strong,{children:"内置后台"}),"，无需额外部署，也不应额外部署，这会增加更多的在意料之外的维护成本"]}),"\n",(0,i.jsxs)(s.li,{children:["2.x 使用",(0,i.jsx)(s.strong,{children:"微服务架构"}),"，",(0,i.jsx)(s.strong,{children:"扩展性"}),"对比单一服务高了很多，且一个微服务的异常不会导致其它微服务同时异常，",(0,i.jsx)(s.strong,{children:"增强稳定性"})]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"评论模块、邮件模块、友链模块、渲染模块"}),"将会独立为一个单独服务"]}),"\n",(0,i.jsx)(s.li,{children:"我们对文档进行了重写，重新使用了 Vitepress，并且参照了许多优秀的开源项目编写相关文档"}),"\n",(0,i.jsx)(s.li,{children:"评论模块将会考虑与其他博客系统相兼容，并且提供独立的控制台"}),"\n",(0,i.jsx)(s.li,{children:"邮件模块将会寓于交流模块之内，交流模块将会负责一切与交流相关的功能"}),"\n",(0,i.jsx)(s.li,{children:"友链模块我们会考虑将其可以作为一个独立的友链页面，并且支持主题定制"}),"\n",(0,i.jsx)(s.li,{children:"渲染模块我们会提供一个 Tiny markdown Server，推动更多的自定义语法渲染处理"}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"这次更新的问题是什么",children:"这次更新的问题是什么？"}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsx)(s.li,{children:"1.x --> 2.x 预计会出现较多接口不兼容的情况，因此除核心外的生态需要全部重写"}),"\n",(0,i.jsx)(s.li,{children:"由于 2.x 使用微服务架构，因此文档部署需要全部重写，建议全部重新开始."}),"\n",(0,i.jsx)(s.li,{children:"该版本的制作时间会大大增长，有可能需要到下一个假期才可基本完成."}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:["此次的重构代号为：",(0,i.jsx)(s.strong,{children:"Odyssey"}),"."]})]})}e(8823),s.default=(0,l.j)({MDXContent:function(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,r.ah)(),n.components);return s?(0,i.jsx)(s,{...n,children:(0,i.jsx)(d,{...n})}):d(n)},pageOpts:{filePath:"pages/blog/mog-v2-refactor-1.mdx",route:"/blog/mog-v2-refactor-1",frontMatter:{title:"Mog 2.0 (Odyssey) 开始重构 - Stage 1 Issue",description:"Hi, 我们离开了比较久的时间，期间甚至将组织换了一个名字，实际上我们正在重构 Mog 2.0，它将会是一个全新的版本，我们将会在这里记录我们的重构过程。",date:"2022-09-24T00:00:00.000Z"},headings:[{depth:1,value:"Mog 2.0 (Odyssey) 开始重构 - Stage 1 Issue",id:"mog-20-odyssey-开始重构---stage-1-issue"},{depth:1,value:"一些 Q&A",id:"一些-qa"},{depth:2,value:"为什么突然要重构？",id:"为什么突然要重构"},{depth:2,value:"这次更新有什么新功能或者优势？",id:"这次更新有什么新功能或者优势"},{depth:2,value:"这次更新的问题是什么？",id:"这次更新的问题是什么"}],title:"Mog 2.0 (Odyssey) 开始重构 - Stage 1 Issue"},pageNextRoute:"/blog/mog-v2-refactor-1"})}},function(n){n.O(0,[2763,9774,2888,179],function(){return n(n.s=3842)}),_N_E=n.O()}]);