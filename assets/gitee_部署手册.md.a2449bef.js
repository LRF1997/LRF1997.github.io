import{_ as s,c as n,o as a,a as l}from"./app.7b81aebc.js";const d=JSON.parse('{"title":"\u5FFD\u7565\u9519\u8BEF","description":"","frontmatter":{},"headers":[],"relativePath":"gitee/\u90E8\u7F72\u624B\u518C.md","lastUpdated":null}'),p={name:"gitee/\u90E8\u7F72\u624B\u518C.md"},e=l(`<div class="language-md line-numbers-mode"><button class="copy"></button><span class="lang">md</span><pre><code><span class="line"><span style="color:#89DDFF;"># </span><span style="color:#FFCB6B;">\u5FFD\u7565\u9519\u8BEF</span></span>
<span class="line"><span style="color:#A6ACCD;">set -e</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;"># </span><span style="color:#FFCB6B;">\u6784\u5EFA</span></span>
<span class="line"><span style="color:#A6ACCD;">npm run docs:build</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;"># </span><span style="color:#FFCB6B;">\u8FDB\u5165\u5F85\u53D1\u5E03\u7684\u76EE\u5F55</span></span>
<span class="line"><span style="color:#A6ACCD;">cd docs/.vitepress/dist</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;"># </span><span style="color:#FFCB6B;">\u5982\u679C\u662F\u53D1\u5E03\u5230\u81EA\u5B9A\u4E49\u57DF\u540D</span></span>
<span class="line"><span style="color:#89DDFF;"># </span><span style="color:#FFCB6B;">echo &#39;www.example.com&#39; &gt; CNAME</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">git init</span></span>
<span class="line"><span style="color:#A6ACCD;">git add -A</span></span>
<span class="line"><span style="color:#A6ACCD;">git commit -m &#39;deploy&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;"># </span><span style="color:#FFCB6B;">\u5982\u679C\u90E8\u7F72\u5230 https://&lt;USERNAME&gt;.github.io</span></span>
<span class="line"><span style="color:#89DDFF;"># </span><span style="color:#FFCB6B;">git push -f git@github.com:&lt;USERNAME&gt;/&lt;USERNAME&gt;.github.io.git master</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;"># </span><span style="color:#FFCB6B;">\u5982\u679C\u662F\u90E8\u7F72\u5230 https://&lt;USERNAME&gt;.github.io/&lt;REPO&gt;</span></span>
<span class="line"><span style="color:#89DDFF;"># </span><span style="color:#FFCB6B;">git push -f git@github.com:&lt;USERNAME&gt;/&lt;REPO&gt;.git master:gh-pages</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div>`,1),c=[e];function t(r,i,o,b,m,u){return a(),n("div",null,c)}const _=s(p,[["render",t]]);export{d as __pageData,_ as default};
