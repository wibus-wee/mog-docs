import{_ as e,o,c as a,a as l}from"./chunks/framework.5e84e068.js";const M=JSON.parse('{"title":"FAQ 常见问题 | 关于","description":"","frontmatter":{"title":"FAQ 常见问题 | 关于","sidebar":false},"headers":[{"level":2,"title":"谁在维护 Mog？","slug":"谁在维护-mog","link":"#谁在维护-mog","children":[]},{"level":2,"title":"Mog v1 和 Mog v2 之间的区别是什么？","slug":"mog-v1-和-mog-v2-之间的区别是什么","link":"#mog-v1-和-mog-v2-之间的区别是什么","children":[{"level":3,"title":"1.x 存在的严重问题","slug":"_1-x-存在的严重问题","link":"#_1-x-存在的严重问题","children":[]},{"level":3,"title":"v2 新增的特性有：","slug":"v2-新增的特性有","link":"#v2-新增的特性有","children":[]}]},{"level":2,"title":"Mog 使用什么开源协议？","slug":"mog-使用什么开源协议","link":"#mog-使用什么开源协议","children":[]},{"level":2,"title":"Mog 可靠吗？","slug":"mog-可靠吗","link":"#mog-可靠吗","children":[]},{"level":2,"title":"Mog 功能健壮吗？","slug":"mog-功能健壮吗","link":"#mog-功能健壮吗","children":[]},{"level":2,"title":"Mog 体积小吗？","slug":"mog-体积小吗","link":"#mog-体积小吗","children":[]},{"level":2,"title":"Mog 能胜任大规模场景吗？","slug":"mog-能胜任大规模场景吗","link":"#mog-能胜任大规模场景吗","children":[]},{"level":2,"title":"我可以为 Mog 做贡献吗？","slug":"我可以为-mog-做贡献吗","link":"#我可以为-mog-做贡献吗","children":[]},{"level":2,"title":"Mog 相比于 Mix Space 究竟如何？","slug":"mog-相比于-mix-space-究竟如何","link":"#mog-相比于-mix-space-究竟如何","children":[]}],"relativePath":"about/faq.md","lastUpdated":1679143787000}'),r={name:"about/faq.md"},t=l('<h1 id="常见问题" tabindex="-1">常见问题 <a class="header-anchor" href="#常见问题" aria-label="Permalink to &quot;常见问题&quot;">​</a></h1><h2 id="谁在维护-mog" tabindex="-1">谁在维护 Mog？ <a class="header-anchor" href="#谁在维护-mog" aria-label="Permalink to &quot;谁在维护 Mog？&quot;">​</a></h2><p>Mog 是一个独立的社区驱动的项目。它是由 <a href="https://github.com/wibus-wee" target="_blank" rel="noreferrer">Wibus</a> 在 2021 年作为其个人项目创建的，原身为 Golden Space / NEXT Space，极大的受到了 <a href="https://github.com/mx-space" target="_blank" rel="noreferrer">Mix Space</a> 的影响。如今，Mog 由来自于全国各地的志愿者们维护。</p><p>自 2021 年以来，Mog 的发展主要是通过爱 ❤️ 和热情来驱动的。如果您觉得 Mog 不错的话，请考虑赞助我们，以支持 Mog 的发展！</p><blockquote><p>赞助事项请发送邮件至 <a href="mailto:wibus@qq.com" target="_blank" rel="noreferrer">wibus@qq.com</a>。</p></blockquote><h2 id="mog-v1-和-mog-v2-之间的区别是什么" tabindex="-1">Mog v1 和 Mog v2 之间的区别是什么？ <a class="header-anchor" href="#mog-v1-和-mog-v2-之间的区别是什么" aria-label="Permalink to &quot;Mog v1 和 Mog v2 之间的区别是什么？&quot;">​</a></h2><p>从 NEXT 到 Mog 是一个比较惨痛的过程，已经有一部分人知道此项目了，他们通常称之为 &quot;nx&quot;，现在修改这个名字对宣传来说并不是一件好事，但为了以后的发展我们必须这样做。</p><p>新的名字由两个单词组成：Module + Blog = Mog，这和我们在 v2 版本的构思有关。我们在 v2 突破地采用了<strong>微服务架构</strong>，对于不同的服务分离，我们仍在探索当中，相信出版的时候可以寻找到一个较好的方案。</p><h3 id="_1-x-存在的严重问题" tabindex="-1">1.x 存在的严重问题 <a class="header-anchor" href="#_1-x-存在的严重问题" aria-label="Permalink to &quot;1.x 存在的严重问题&quot;">​</a></h3><p>1.x 版本由于更新仓促，导致了很多的问题，比如：</p><ul><li>API RESTFul 规范</li><li>DTO 与 Model 不匹配，导致输出存在问题</li><li>接口方法书写混乱</li><li>注释不规范</li><li>很难继续向上堆积功能，原架构会导致<strong>功能臃肿</strong></li></ul><p>为了长久的发展，我们发布了最后的 v1.7.0，并立即开始了 v2 的重构</p><h3 id="v2-新增的特性有" tabindex="-1">v2 新增的特性有： <a class="header-anchor" href="#v2-新增的特性有" aria-label="Permalink to &quot;v2 新增的特性有：&quot;">​</a></h3><ol><li>2.x 版本将会<strong>内置后台</strong>，无需额外部署，也不应额外部署，这会增加更多的在意料之外的维护成本</li><li>2.x 使用<strong>微服务架构</strong>，<strong>扩展性</strong>对比单一服务高了很多，且一个微服务的异常不会导致其它微服务同时异常，<strong>增强稳定性</strong></li><li><strong>评论模块、邮件模块、友链模块、渲染模块</strong>将会独立为一个单独服务</li><li>我们对文档进行了重写，重新使用了 Vitepress，并且参照了许多优秀的开源项目编写相关文档</li><li>评论模块将会考虑与其他博客系统相兼容，并且提供独立的控制台</li><li>邮件模块将会寓于交流模块之内，交流模块将会负责一切与交流相关的功能</li><li>友链模块我们会考虑将其可以作为一个独立的友链页面，并且支持主题定制</li><li>渲染模块我们会提供一个 Tiny markdown Server，推动更多的自定义语法渲染处理</li></ol><h2 id="mog-使用什么开源协议" tabindex="-1">Mog 使用什么开源协议？ <a class="header-anchor" href="#mog-使用什么开源协议" aria-label="Permalink to &quot;Mog 使用什么开源协议？&quot;">​</a></h2><p>Mog 是完全免费的开源项目，且基于 <a href="https://www.gnu.org/licenses/" target="_blank" rel="noreferrer">AGPLv3 License</a> 发布。</p><h2 id="mog-可靠吗" tabindex="-1">Mog 可靠吗？ <a class="header-anchor" href="#mog-可靠吗" aria-label="Permalink to &quot;Mog 可靠吗？&quot;">​</a></h2><p>Mog 是一个完全开源的项目，我们不会收集任何用户的数据，也不会做任何不可逆的操作，我们会尽可能的保证用户的数据安全。</p><p>如果您觉得代码中存在安全问题，欢迎您根据<a href="https://github.com/mogland/core/blob/main/SECURITY.md" target="_blank" rel="noreferrer">安全策略</a>反馈于我们团队，我们会尽快修复。</p><h2 id="mog-功能健壮吗" tabindex="-1">Mog 功能健壮吗？ <a class="header-anchor" href="#mog-功能健壮吗" aria-label="Permalink to &quot;Mog 功能健壮吗？&quot;">​</a></h2><p>Mog 的目标是提供一个<strong>可靠、健全</strong>的博客系统，我们会尽可能的保证功能的健壮性，但是我们也不会过度的追求功能的完善，我们会在功能的完善与稳定性之间进行权衡。</p><p>我们会将很多的功能进行拆分，使得 Mog 可以更加的灵活，比如评论模块、邮件模块、友链模块、渲染模块等等，这些模块都可以独立的使用，也可以与 Mog 一起使用。这样一来，既可以向上堆积功能，也可以向下拆分功能，使得 Mog 更加的灵活。</p><h2 id="mog-体积小吗" tabindex="-1">Mog 体积小吗？ <a class="header-anchor" href="#mog-体积小吗" aria-label="Permalink to &quot;Mog 体积小吗？&quot;">​</a></h2><p>很不幸，全套 Mog 的体积并不小，因为我们使用了很多的依赖，构建了很多服务，这导致功能越多，体积越大。我们只能尽最大可能减小体积，当然，我们会保证体积的稳定性，不会出现突然增大的情况。</p><h2 id="mog-能胜任大规模场景吗" tabindex="-1">Mog 能胜任大规模场景吗？ <a class="header-anchor" href="#mog-能胜任大规模场景吗" aria-label="Permalink to &quot;Mog 能胜任大规模场景吗？&quot;">​</a></h2><p>目前表现效果或许还不是很理想，Mog 的计划之一就是能够胜任大规模场景，不断挑战极限使用场景，优化相关代码，使得 Mog 能够胜任大规模场景。</p><h2 id="我可以为-mog-做贡献吗" tabindex="-1">我可以为 Mog 做贡献吗？ <a class="header-anchor" href="#我可以为-mog-做贡献吗" aria-label="Permalink to &quot;我可以为 Mog 做贡献吗？&quot;">​</a></h2><p>当然，欢迎你阅读 <a href="https://github.com/mogland/core/blob/main/CONTRIBUTING.md" target="_blank" rel="noreferrer">贡献指南</a> 为 Mog 做出贡献。</p><h2 id="mog-相比于-mix-space-究竟如何" tabindex="-1">Mog 相比于 Mix Space 究竟如何？ <a class="header-anchor" href="#mog-相比于-mix-space-究竟如何" aria-label="Permalink to &quot;Mog 相比于 Mix Space 究竟如何？&quot;">​</a></h2><p>讲真的，Mog 和 Mix Space 乃至于很多的博客系统，都没有可比性，因为我们的<strong>道路不同</strong>。Mog 和 <a href="https://github.com/mx-space" target="_blank" rel="noreferrer">Mix Space</a> 有很多的相似之处，<strong>Mog 是 <a href="https://github.com/mx-space" target="_blank" rel="noreferrer">Mix Space</a> 的儿子，极大的受到了 <a href="https://github.com/mx-space" target="_blank" rel="noreferrer">Mix Space</a> 的影响</strong>，如果没有 Mix Space，Mog 也不会诞生。Mog Team 永远对 Mix Space 感激不尽，保持崇高的敬意。</p><p>如果真的硬要描述区别，或许我们能做的比 Mix Space 更好的，只有在模块化上，Mog 会更加的灵活，可以向上堆积功能，也可以向下拆分功能。</p><p>但或许这会也是 Mog 的缺点，因为 Mog 的功能更加的灵活，这意味着在部署上会更加的复杂，需要更多适合用户配置的设计，也可能会出现一些不可预知的问题</p>',32),i=[t];function g(n,s,h,c,m,p){return o(),a("div",null,i)}const u=e(r,[["render",g]]);export{M as __pageData,u as default};
