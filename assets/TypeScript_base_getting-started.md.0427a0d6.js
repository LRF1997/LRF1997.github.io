import{_ as s,c as e,o as a,a as n}from"./app.7b81aebc.js";const m=JSON.parse('{"title":"TypeScript \u5FEB\u901F\u5F00\u59CB","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5B89\u88C5TypeScript","slug":"\u5B89\u88C5typescript"},{"level":2,"title":"\u6267\u884C .ts \u6587\u4EF6","slug":"\u6267\u884C-ts-\u6587\u4EF6"},{"level":3,"title":"\u5FEB\u901F\u6267\u884C","slug":"\u5FEB\u901F\u6267\u884C"}],"relativePath":"TypeScript/base/getting-started.md","lastUpdated":null}'),l={name:"TypeScript/base/getting-started.md"},p=n(`<h1 id="typescript-\u5FEB\u901F\u5F00\u59CB" tabindex="-1">TypeScript \u5FEB\u901F\u5F00\u59CB <a class="header-anchor" href="#typescript-\u5FEB\u901F\u5F00\u59CB" aria-hidden="true">#</a></h1><h2 id="\u5B89\u88C5typescript" tabindex="-1">\u5B89\u88C5TypeScript <a class="header-anchor" href="#\u5B89\u88C5typescript" aria-hidden="true">#</a></h2><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">npm install -g typescript</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><blockquote><p>\u67E5\u770B\u7248\u672C\u547D\u4EE4 <code>tsc -v</code></p></blockquote><h2 id="\u6267\u884C-ts-\u6587\u4EF6" tabindex="-1">\u6267\u884C <code>.ts</code> \u6587\u4EF6 <a class="header-anchor" href="#\u6267\u884C-ts-\u6587\u4EF6" aria-hidden="true">#</a></h2><ol><li>\u7F16\u8BD1 <code>.ts</code> \u6587\u4EF6</li></ol><div class="language-ps line-numbers-mode"><button class="copy"></button><span class="lang">ps</span><pre><code><span class="line"><span style="color:#A6ACCD;">tsc xx.ts</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><blockquote><p><code>xx</code> \u4E3A <code>ts</code> \u6587\u4EF6\u7684\u540D\u79F0</p></blockquote><ol start="2"><li>\u8FD0\u884C\u751F\u6210\u7684 <code>js</code> \u6587\u4EF6</li></ol><div class="language-ps line-numbers-mode"><button class="copy"></button><span class="lang">ps</span><pre><code><span class="line"><span style="color:#A6ACCD;">node xx.js</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><blockquote><p>\u4EE5\u4E0A\u65B9\u6CD5\u6BCF\u6B21\u90FD\u8981\u624B\u52A8\u7F16\u8BD1\uFF0C\u518D\u6267\u884C\u751F\u6210\u7684 <code>js</code> \u6587\u4EF6\uFF0C\u6BD4\u8F83\u9EBB\u70E6\u3002\u4E3A\u4E86\u65B9\u4FBF\u5F00\u53D1\uFF0C\u9700\u8981\u4F7F\u7528\u5FEB\u901F\u6267\u884C\u65B9\u6CD5\u3002</p></blockquote><h3 id="\u5FEB\u901F\u6267\u884C" tabindex="-1">\u5FEB\u901F\u6267\u884C <a class="header-anchor" href="#\u5FEB\u901F\u6267\u884C" aria-hidden="true">#</a></h3><ol><li>\u5168\u5C40\u5B89\u88C5 <code>ts-node</code></li></ol><div class="language-ps line-numbers-mode"><button class="copy"></button><span class="lang">ps</span><pre><code><span class="line"><span style="color:#A6ACCD;">npm install </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">g ts</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">node</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><ol start="2"><li>\u6267\u884C\u547D\u4EE4</li></ol><div class="language-ps line-numbers-mode"><button class="copy"></button><span class="lang">ps</span><pre><code><span class="line"><span style="color:#A6ACCD;">ts</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">node xx.ts</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><blockquote><p>\u5B89\u88C5\u597D <code>ts-node</code> \u540E\uFF0C\u6BCF\u6B21\u53EF\u4EE5\u901A\u8FC7 <code>ts-node xx.ts</code> \u547D\u4EE4\u5FEB\u901F\u6267\u884C\u3002</p></blockquote>`,17),t=[p];function c(o,r,i,d,u,b){return a(),e("div",null,t)}const y=s(l,[["render",c]]);export{m as __pageData,y as default};