(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7804],{4060:function(e,s,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/mog-v2-refactor-5",function(){return n(5883)}])},5883:function(e,s,n){"use strict";n.r(s);var r=n(1527),l=n(2763),i=n(6736);function o(e){let s=Object.assign({h1:"h1",blockquote:"blockquote",p:"p",em:"em",a:"a",h2:"h2",pre:"pre",code:"code",span:"span",img:"img",ul:"ul",li:"li",strong:"strong"},(0,i.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h1,{id:"mog-odyssey-20-错误修复与项目重构---stage-5-issue",children:"Mog Odyssey 2.0 错误修复与项目重构 - Stage 5 Issue"}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsx)(s.p,{children:(0,r.jsxs)(s.em,{children:["GitHub \xb7 Mog Stage 5: ",(0,r.jsx)(s.a,{href:"https://github.com/mogland/core/issues/661",children:"https://github.com/mogland/core/issues/661"})]})}),"\n"]}),"\n",(0,r.jsxs)(s.h2,{id:"icon-全新的图标-by-jinhwan-kim",children:["[Icon] 全新的图标 ",(0,r.jsx)("small",{children:"by @Jinhwan Kim"})]}),"\n",(0,r.jsxs)(s.p,{children:["有关这个图标的版权，你可以前往",(0,r.jsx)(s.a,{href:"/about/faq#%E5%9B%BE%E6%A0%87%E8%AE%BE%E8%AE%A1",children:"「常见问题」"}),"查看"]}),"\n",(0,r.jsxs)(s.h2,{id:"core-自定义发布活动与返回接口-by-wibus-wee",children:["[Core] 自定义发布活动与返回接口 ",(0,r.jsx)("small",{children:"by @wibus-wee"})]}),"\n",(0,r.jsx)(s.p,{children:"通过定义配置文件，你将可以通过定义发布活动来调度你自己的服务，比如说："}),"\n",(0,r.jsx)(s.pre,{"data-language":"yaml","data-theme":"default",hasCopyCode:!0,children:(0,r.jsxs)(s.code,{"data-language":"yaml","data-theme":"default",children:[(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"render"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"# controller --> {API}/render/*"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  - "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"path"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"/events"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"# {API}/render/events"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"method"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"get"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"handler"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"events.get"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"# 发布活动"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  - "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"path"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"/events/{id}"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"# {API}/render/events/{id}"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"method"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"get"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"handler"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"events.get.id"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  - "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"path"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"/events"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"method"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"post"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"handler"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"events.post"})]})]})}),"\n",(0,r.jsxs)(s.p,{children:["这样，你就可以通过 ",(0,r.jsx)(s.code,{children:"GET /events"})," 来获取全部活动，通过 ",(0,r.jsx)(s.code,{children:"GET /events/{id}"})," 来获取指定活动，通过 ",(0,r.jsx)(s.code,{children:"POST /events"})," 来发布活动。"]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{src:"https://user-images.githubusercontent.com/62133302/218303740-ba200f3e-df69-42a3-a0a4-e980e9b7d8fe.png",alt:""})}),"\n",(0,r.jsxs)(s.h2,{id:"core-自定义定时任务支持-by-wibus-wee",children:["[Core] 自定义定时任务支持 ",(0,r.jsx)("small",{children:"by @wibus-wee"})]}),"\n",(0,r.jsx)(s.p,{children:"定时任务是一个非常重要的功能，它可以让你在指定的时间执行指定的任务，比如说，你可以在每天的 00:00:00 发送一封访客信息邮件给自己，或者在每天的 00:00:00 清理一次数据库。"}),"\n",(0,r.jsx)(s.p,{children:"于是我们做了一个较为简单的定时任务系统，它具有以下功能"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"不同的任务类型（访问 URL，广播事件）"}),"\n",(0,r.jsx)(s.li,{children:"及其自由的任务操作参数"}),"\n",(0,r.jsx)(s.li,{children:"支持任务执行进行后续操作"}),"\n",(0,r.jsx)(s.li,{children:"收集任务错误日志"}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"暂时来说较为简陋，在后续阶段我们会继续完善它。"}),"\n",(0,r.jsxs)(s.h2,{id:"core-其他新增功能-by-wibus-wee",children:["[Core] 其他新增功能 ",(0,r.jsx)("small",{children:"by @wibus-wee"})]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"数据备份恢复支持"}),"\n",(0,r.jsx)(s.li,{children:"静态资源管理服务支持"}),"\n",(0,r.jsx)(s.li,{children:"友链服务支持获取全部状态的友链数据"}),"\n",(0,r.jsx)(s.li,{children:"在无密码注册用户的情况下自动生成临时密码"}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["你可以看到，我们本次的功能增强都是围绕着",(0,r.jsx)(s.strong,{children:"自定义"}),"进行的，我们希望用户可以通过自定义来实现更多的功能，而不是依赖于我们的功能。"]}),"\n",(0,r.jsxs)(s.h2,{id:"console-使用-vercelswr-请求后端数据-by-wibus-wee",children:["[Console] 使用 @vercel/swr 请求后端数据 ",(0,r.jsx)("small",{children:"by @wibus-wee"})]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"重构几乎所有触发的请求"}),"\n",(0,r.jsx)(s.li,{children:"重构几乎所有的 Hooks，减少明面上的 useEffect 狂魔"}),"\n",(0,r.jsx)(s.li,{children:"重构几乎所有页面的请求钩子"}),"\n",(0,r.jsxs)(s.li,{children:["将重复组件抽象为 ",(0,r.jsx)(s.code,{children:"ActionButton"})," 组件"]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"另外，我们还使用新的 Toast 组件以替换原有有缺陷的通知组件"}),"\n",(0,r.jsxs)(s.h2,{id:"console-控制台支持刷新版本缓存-by-wibus-wee",children:["[Console] 控制台支持刷新版本缓存 ",(0,r.jsx)("small",{children:"by @wibus-wee"})]}),"\n",(0,r.jsxs)(s.p,{children:["我们内置控制台的资源获取策略是：",(0,r.jsx)(s.strong,{children:"优先使用缓存，如果缓存不存在则请求远端资源"}),"，这样做的好处是可以减少请求次数，但是也会导致一些问题，比如：缓存所储存的版本过期，但是我们的控制台并不会主动刷新缓存，这就导致了用户无法获取到最新的控制台。"]}),"\n",(0,r.jsx)(s.p,{children:"为了解决这个问题，我们在 Dashboard 页面底部新增了一个刷新缓存的功能，它将会在用户点击刷新按钮时，刷新缓存，这样就可以解决这个问题了。"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{src:"https://github.com/mogland/core/assets/62133302/6d670818-f2b7-45a7-8780-e14f099478ea",alt:"CleanShot 2023-05-28 at 21 01 10@2x"})}),"\n",(0,r.jsxs)(s.h2,{id:"docs-使用-nextra-作为文档工具-by-wibus-wee",children:["[Docs] 使用 Nextra 作为文档工具 ",(0,r.jsx)("small",{children:"by @wibus-wee"})]}),"\n",(0,r.jsx)(s.p,{children:"鉴于 Vitepress 的部分功能不足，我们决定使用 Nextra 作为文档工具，Nextra 是一个基于 Next.js 的文档工具，它的功能十分强大，我们将会在后续的版本中继续使用它。"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{src:"https://github.com/mogland/core/assets/62133302/6de6b36b-5fa8-4683-acfc-ee4f7b7735ae",alt:""})}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsx)(s.p,{children:"然后抄了“一些” Nextra 官网的样式"}),"\n"]}),"\n",(0,r.jsxs)(s.h2,{id:"dev-渲染模块实现-by-wibus-wee",children:["[Dev] 渲染模块实现 ",(0,r.jsx)("small",{children:"by @wibus-wee"})]}),"\n",(0,r.jsxs)(s.p,{children:["GitHub: ",(0,r.jsx)(s.a,{href:"https://github.com/mogland-dev/mog-render-service",children:"@mogland-dev/mog-render-service"})]}),"\n",(0,r.jsxs)(s.p,{children:["我们之前曾说过要在 v2.0 中实现一个独立的渲染模块，它将会是一个独立的服务，它将会负责渲染 Markdown 和 Djot 文件，并且还支持",(0,r.jsx)(s.strong,{children:"文本宏"}),"，目前它已经可以正常工作了，但是我们还需要对它进行一些优化。"]}),"\n",(0,r.jsx)(s.p,{children:"你可以在文章中输入如这样的内容："}),"\n",(0,r.jsx)(s.pre,{"data-language":"markdown","data-theme":"default",hasCopyCode:!0,children:(0,r.jsx)(s.code,{"data-language":"markdown","data-theme":"default",children:(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:'[[ #blur($title) ]] was created on [[ #dayjs($created).format("MMMMDD, YYYY") ]]. '})})})}),"\n",(0,r.jsx)(s.p,{children:"接着渲染模块的文本宏模块将会将其渲染为："}),"\n",(0,r.jsx)(s.pre,{"data-language":"markdown","data-theme":"default",hasCopyCode:!0,children:(0,r.jsx)(s.code,{"data-language":"markdown","data-theme":"default",children:(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:'<span class="text blur">My First Blog Post</span> was created on Sat, 25 Mar 2023 15:26:37 GMT. '})})})}),"\n",(0,r.jsx)(s.p,{children:"这个 feature 的想法来自于 Mix space，但是这次我们稍微优化了算法，并更容易拓展功能。由于需要安全执行代码，因此效率依旧不算高。"}),"\n",(0,r.jsxs)(s.h2,{id:"core-修复大量严重错误-by-wibus-wee--myxxts",children:["[Core] 修复大量严重错误 ",(0,r.jsx)("small",{children:"by @wibus-wee & @MYXXTS"})]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"依赖安全性修复"}),"\n",(0,r.jsx)(s.li,{children:"错误指向评论详情接口"}),"\n",(0,r.jsx)(s.li,{children:"替换旧有缓存模块为新缓存模块"}),"\n",(0,r.jsx)(s.li,{children:"无法载入 ESM 模块"}),"\n",(0,r.jsx)(s.li,{children:"主题服务无法注入依赖"}),"\n",(0,r.jsx)(s.li,{children:"主题服务初次使用发生崩溃"}),"\n",(0,r.jsx)(s.li,{children:"同时激活多个主题发生错误"}),"\n"]})]})}n(8823),s.default=(0,l.j)({MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,i.ah)(),e.components);return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(o,{...e})}):o(e)},pageOpts:{filePath:"pages/blog/mog-v2-refactor-5.mdx",route:"/blog/mog-v2-refactor-5",frontMatter:{title:"Mog Odyssey 2.0 错误修复与项目重构 - Stage 5 Issue",description:"第五阶段注重于错误修复与项目重构，新增了一些自定义型的功能，并且推出了全新的语言渲染服务，这是一个重大的更新，我们将会在这个阶段中实现它。",date:"2023-05-28T00:00:00.000Z"},headings:[{depth:1,value:"Mog Odyssey 2.0 错误修复与项目重构 - Stage 5 Issue",id:"mog-odyssey-20-错误修复与项目重构---stage-5-issue"},{depth:2,value:"[Icon] 全新的图标 by @Jinhwan Kim",id:"icon-全新的图标-by-jinhwan-kim"},{depth:2,value:"[Core] 自定义发布活动与返回接口 by @wibus-wee",id:"core-自定义发布活动与返回接口-by-wibus-wee"},{depth:2,value:"[Core] 自定义定时任务支持 by @wibus-wee",id:"core-自定义定时任务支持-by-wibus-wee"},{depth:2,value:"[Core] 其他新增功能 by @wibus-wee",id:"core-其他新增功能-by-wibus-wee"},{depth:2,value:"[Console] 使用 @vercel/swr 请求后端数据 by @wibus-wee",id:"console-使用-vercelswr-请求后端数据-by-wibus-wee"},{depth:2,value:"[Console] 控制台支持刷新版本缓存 by @wibus-wee",id:"console-控制台支持刷新版本缓存-by-wibus-wee"},{depth:2,value:"[Docs] 使用 Nextra 作为文档工具 by @wibus-wee",id:"docs-使用-nextra-作为文档工具-by-wibus-wee"},{depth:2,value:"[Dev] 渲染模块实现 by @wibus-wee",id:"dev-渲染模块实现-by-wibus-wee"},{depth:2,value:"[Core] 修复大量严重错误 by @wibus-wee & @MYXXTS",id:"core-修复大量严重错误-by-wibus-wee--myxxts"}],title:"Mog Odyssey 2.0 错误修复与项目重构 - Stage 5 Issue"},pageNextRoute:"/blog/mog-v2-refactor-5"})}},function(e){e.O(0,[2763,9774,2888,179],function(){return e(e.s=4060)}),_N_E=e.O()}]);