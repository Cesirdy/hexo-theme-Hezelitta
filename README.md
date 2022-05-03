基于已经被我删除后又不知道是谁重新传上来的黑历史[*hexo-theme-lightime*](https://github.com/zker-themes/hexo-theme-lightime)二次开发而来。

<p align="center"><a href="https://hexo.io/"><img src="https://img.shields.io/badge/Hexo-theme-%230e83cd?style=flat-square"></a> <img src="https://img.shields.io/github/languages/code-size/Cesirdy/hexo-theme-Hezelitta?style=flat-square"> <a href="https://github.com/Cesirdy/"><img src="https://img.shields.io/badge/Author-Cesirdy-%236eacdd?style=flat-square"></a> <img src="https://img.shields.io/github/license/Cesirdy/hexo-theme-Hezelitta?style=flat-square"> <img src="https://img.shields.io/github/last-commit/Cesirdy/hexo-theme-Hezelitta?style=flat-square"></p>

<div align="center"><img src="https://moe-counter.cesirdy.repl.co/get/@hexo-theme-Hezelitta"></div>

基本为个人使用，可配置内容做的一般。
预览：https://csd.pub （随时可能发生变动）

<p align="center">←浅色 深色→</p>

<div align="center"><img src="https://s2.loli.net/2022/04/28/Pkf6oA5JWFeRmUi.png"></div>

---

## 目录
- [安装](#安装)
- [特色](#特色)
- [配置](#配置)
  - [友情链接的配置](#友情链接的配置)
- [注意](#注意)

## 安装
```bash
git clone https://github.com/Cesirdy/hexo-theme-Hezelitta.git themes/Hezelitta
```

## 特色
- 友链、归档、标签、分类
- 简洁单栏，简单的深色模式适配
- 多评论
- 文章内toc目录
- 重新整理了代码方便查看修改
- 中国特色备案以及白嫖又拍云联盟的页脚
- 一点简单的前端性能优化
- Instant.Page和LazyLoad加成
- 集成了[cloudflare-workers-async-google-analytics](https://github.com/SukkaW/cloudflare-workers-async-google-analytics)，当然你需要自己配置。
- 多语言支持

## 配置
```yaml
menu: #TITLE: link 导航栏配置
  归档: Archives/
  关于: about/
  链接: links/

toc: true #是否打开文章内目录

avatar: /images/avatar.png #文章底部的头像

feed: #设置<head>中的feed链接
  atom: /atom.xml #没有则填false或空白
  rss: /rss2.xml

footer: 
  copyrightSince: 2022 #版权信息开始时间
  beian: #备案
  upyunlianmeng: false #又拍云联盟
  RSS: /atom.xml #RSS链接
  sitemap: /sitemap.xml #站点地图

comment:
  use: waline #使用的评论系统 支持Gitment、Waline、Disqus

gitment: #Gitment配置
 username: 
 repo: 
 id: 
 secret: 

waline:
  serverurl: #waline的serverurl

theme_color: 5694f1 #手机浏览器上的主题色

disqus_shortname: #disqus配置

google_analytics:
  enable: false #是否打开google analytics
  ID: #UAID
  api: #cloudflare-workers-async-google-analytics的api

hitokoto: false #一言 会输出到头部header简介
lazyload: 
  enable: true #是否打开懒加载
  field: post # site/post 要开启懒加载的位置 全站或只文章页

js: #CDN
  hitokoto: //v1.hitokoto.cn/?encode=js&select=%23hitokoto
  lazyload: //cdn.jsdelivr.net/npm/lazysizes@5.3.2/lazysizes.min.js
  service_worker: /sw.js
  instantpage: //cdn.jsdelivr.net/npm/instant.page@5.1.0/instantpage.min.js
  cfga: /js/cfga.js
  gitment: /js/gitment.browser.js

css: #CDN
  gitment: 
  prism: //cdn.jsdelivr.net/npm/prism-theme-one-dark@1.0.0/prism-onedark.css
```

### 友情链接的配置
1. 运行`hexo n links page`
2. 进入`source/links`创建`_data`文件夹
3. `_data`内创建`links.yml`并写入
4. 在`source/links/index.md`页头加入`layout: links`，示例：
   ```yaml
   ---
   title: 友链
   date: 
   layout: links
   ---
   这里可以写页面内容，跟普通页面一样。
   ```

`links.yml`格式
```yaml
"Name":
  url: url链接
  img: avatar头像链接
  text: "description描述"
  
"Name":
  url: url链接
  img: avatar头像链接
  text: "description描述"
```

## 注意
**你需要注意的是主题为二次开发而来且主要由我个人使用，部分内容年久失修可能造成报错等问题**

- 文章内toc目录如果跳跃幅度过大会错位，如`<h1>`后下一个标题变成了`<h6>`，反之亦然。（查了下好像不是我的问题）
- 必须填入`copyrightSince`
- Google Analytics使用的是[cloudflare-workers-async-google-analytics](https://github.com/SukkaW/cloudflare-workers-async-google-analytics)
- 一言、Gitment、Disqus用的是很久之前的版本，无法保证还能不能正常工作
- 使用的代码高亮为prism而非highlight，你需要在网站`_config.yml`里开启prism
- **任何程序都是半成品或测试版。**
- 因为没有售所以没有售后