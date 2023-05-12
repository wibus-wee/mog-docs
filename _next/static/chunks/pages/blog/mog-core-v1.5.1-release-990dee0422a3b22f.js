(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[53],{4316:function(n,e,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/mog-core-v1.5.1-release",function(){return s(4689)}])},4689:function(n,e,s){"use strict";s.r(e);var r=s(1527),i=s(2064),l=s(6736);s(8823);var o=s(9826);function h(n){let e=Object.assign({h1:"h1",p:"p",strong:"strong",a:"a",h2:"h2",ul:"ul",li:"li"},(0,l.ah)(),n.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{children:"Mog 1.5.1 (Evolution) 发布 - 重构后的新起点"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsxs)(e.strong,{children:["感谢 ",(0,r.jsx)(e.a,{href:"https://github.com/MYXXTS",children:"@MYXXTS"})," ",(0,r.jsx)(e.a,{href:"https://github.com/origami-tech",children:"@origami-tech"})," ",(0,r.jsx)(e.a,{href:"https://github.com/Truimo",children:"@Truimo"})," 等大佬的鼎力相助"]})}),"\n",(0,r.jsx)(e.p,{children:"经过1年的摸索与将近1个月的从零重构，我们发版了新的 Mog Core 版本，这将是一个全新的起点。"}),"\n",(0,r.jsx)(e.h2,{id:"新特性",children:"新特性"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["新的",(0,r.jsx)(e.strong,{children:"数据库"}),"驱动 ",(0,r.jsx)(e.strong,{children:"MongoDB"}),"：MongoDB 是一个 NoSQL 数据库，它提供了一种非常简单的方式来存储和查询数据，而且它的性能非常高。"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["新的缓存机制 ",(0,r.jsx)(e.strong,{children:"Redis"}),"：Redis 是一个高性能的内存数据库，作为一个缓存，它可以提供高速的查询和存储，目前 Mog Core 使用于配置获取中"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["新的",(0,r.jsx)(e.strong,{children:"插件系统"}),"，插件系统是一个非常特别的框架，它可以让你在空间中添加新的功能，比如 WebHook, Macros, 可以让你的空间更加灵活，更加强大。"]}),"\n",(0,r.jsx)(o.UW,{type:"warning",children:(0,r.jsxs)(e.p,{children:["新的",(0,r.jsx)(e.strong,{children:"插件系统"}),"尚未稳定，仅完成了基本的插件注册，激活，应用插件"]})}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["全新的",(0,r.jsx)(e.strong,{children:"文章备份模块"}),"：文章备份可以让你将文章备份到本地，以备以后使用，同时支持导入/迁移"]}),"\n",(0,r.jsxs)(o.UW,{type:"warning",children:[(0,r.jsxs)(e.p,{children:["改进后的",(0,r.jsx)(e.strong,{children:"文章备份"}),"，将遵循以下逻辑："]}),(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"单篇文章直接输出"}),"\n",(0,r.jsx)(e.li,{children:"多篇文章打包输出"}),"\n"]})]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["改进后的",(0,r.jsx)(e.strong,{children:"数据库备份模块"}),"：将全部 Mog 数据保存至本地，数据比文章备份模块更加全面"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["在",(0,r.jsx)(e.strong,{children:"文章或页面"}),"中自动记录",(0,r.jsx)(e.strong,{children:"图片相关元数据"}),"：比如图片的宽高、图片的类型、图片的 URL 等等，但也需要前端支持，这样可以让你的文章更加美观"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"提供了更多的文章管理选项：比如文章的标签，文章的分类，文章的显示/隐藏，文章的发布时间，等等"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["支持",(0,r.jsx)(e.strong,{children:"标签或分类合并"}),"：将多个分类或标签中的文章合并如一个分类或标签"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["使用了",(0,r.jsx)(e.strong,{children:"装饰器"}),"来",(0,r.jsx)(e.strong,{children:"验证密钥"}),"以使用",(0,r.jsx)(e.strong,{children:"高阶操作"})]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["全新的",(0,r.jsx)(e.strong,{children:"跨平台 Cookie"})," 解析装饰器：支持多种浏览器，比如 Chrome、Firefox、Safari、IE、Edge 等等"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"如何迁移",children:"如何迁移？"}),"\n",(0,r.jsx)(e.p,{children:"v0 我们使用的是 MySQL 作为数据库，而 v1 我们使用的是 MongoDB，其中使用了很多 MongoDB 的特性，因此无法直接升级。"}),"\n",(0,r.jsx)(e.p,{children:"目前只有一个可行的方案："}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"将 v0 的文章页面数据导出，然后导入到 v1 中，v0 和 v1 在处理文章页面数据的方式是一致的，因此可以直接导入。"}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:"由于 v0 是 Beta 版本，充满了不确定性，因此我们无法保证导出的数据能够完全正确导入到 v1 中，因此我们建议你在导入之前先备份好 v1 的数据库。"})]})}e.default=(0,i.j)({MDXContent:function(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,l.ah)(),n.components);return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(h,{...n})}):h(n)},pageOpts:{filePath:"pages/blog/mog-core-v1.5.1-release.mdx",route:"/blog/mog-core-v1.5.1-release",frontMatter:{title:"Mog 1.5.1 (Evolution) 发布 - 重构后的新起点",date:"2022-08-03T00:00:00.000Z",description:"经过1年的摸索与将近1个月的从零重构，我们发版了新的 Mog Core 版本，这将是一个全新的起点。"},headings:[{depth:1,value:"Mog 1.5.1 (Evolution) 发布 - 重构后的新起点",id:"mog-151-evolution-发布---重构后的新起点"},{depth:2,value:"新特性",id:"新特性"},{depth:2,value:"如何迁移？",id:"如何迁移"}],title:"Mog 1.5.1 (Evolution) 发布 - 重构后的新起点"},pageNextRoute:"/blog/mog-core-v1.5.1-release"})}},function(n){n.O(0,[64,774,888,179],function(){return n(n.s=4316)}),_N_E=n.O()}]);