(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"013z":function(e,t,n){"use strict";n("KKXr"),n("pIFo");var a=n("pOBw"),i=n("q1tI"),r=n.n(i),c=n("NmYn"),o=n.n(c),b=n("OKom"),s=n("k4MR"),p=n("TSYQ"),h=n.n(p),l=n("QH2O"),d=n("qKvR"),u=function(e){var t,n=e.title,a=e.tabs,i=void 0===a?[]:a;return Object(d.b)("div",{className:h()(l.pageHeader,(t={},t[l.withTabs]=i.length,t))},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12"},Object(d.b)("h1",{id:"page-title",className:l.text},n)))))},m=n("pEPl"),O=n("BAC9"),y=function(e){var t=e.relativePagePath,n=e.repository,a=m.data.site.siteMetadata.repository,i=n||a,r=i.baseUrl,c=i.subDirectory,o=r+"/edit/"+i.branch+c+"/src/pages"+t;return r?Object(d.b)("div",{className:"bx--row "+O.row},Object(d.b)("div",{className:"bx--col"},Object(d.b)("a",{className:O.link,href:o},"Edit this page on GitHub"))):null},j=n("FCXl"),g=(n("Oyvg"),n("Wbzz")),x=n("I8xM");var k=function(e){var t,n;function a(){return e.apply(this,arguments)||this}return n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.prototype.render=function(){var e=this.props,t=e.tabs,n=e.slug,a=n.split("/").filter(Boolean).slice(-1)[0],i=t.map((function(e){var t,i=o()(e,{lower:!0}),r=i===a,c=new RegExp(a+"(?!-)"),b=n.replace(c,i);return Object(d.b)("li",{key:e,className:h()((t={},t[x.selectedItem]=r,t),x.listItem)},Object(d.b)(g.Link,{className:x.link,to:""+b},e))}));return Object(d.b)("div",{className:x.tabsContainer},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(d.b)("nav",null,Object(d.b)("ul",{className:x.list},i))))))},a}(r.a.Component),v=n("MjG9");t.a=function(e){var t=e.pageContext,n=e.children,i=e.location,r=e.Title,c=t.frontmatter,p=void 0===c?{}:c,h=t.relativePagePath,l=t.titleType,m=p.tabs,O=p.title,g=p.theme,x=p.description,T=p.keywords,A=a.data.site.pathPrefix,f=A?i.pathname.replace(A,""):i.pathname,L=m?f.split("/").filter(Boolean).slice(-1)[0]||o()(m[0],{lower:!0}):"";return Object(d.b)(s.a,{tabs:m,homepage:!1,theme:g,pageTitle:O,pageDescription:x,pageKeywords:T,titleType:l},Object(d.b)(u,{title:r?Object(d.b)(r,null):O,label:"label",tabs:m}),m&&Object(d.b)(k,{slug:f,tabs:m,currentTab:L}),Object(d.b)(v.a,{padded:!0},n,Object(d.b)(y,{relativePagePath:h})),Object(d.b)(j.a,{pageContext:t,location:i,slug:f,tabs:m,currentTab:L}),Object(d.b)(b.a,null))}},mDVj:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return c})),n.d(t,"default",(function(){return d}));n("91GP"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("q1tI");var a=n("7ljp"),i=n("013z");n("qKvR");function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var c={},o=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(a.b)("div",t)}},b=o("PageDescription"),s=o("AnchorLinks"),p=o("AnchorLink"),h={_frontmatter:c},l=i.a;function d(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,["components"]);return Object(a.b)(l,r({},h,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)(b,{mdxType:"PageDescription"},Object(a.b)("p",null,"Workshop Organizers & Program Committee")),Object(a.b)("h2",null,"Organizers"),Object(a.b)(s,{mdxType:"AnchorLinks"},Object(a.b)(p,{mdxType:"AnchorLink"},"Jing Mei (IBM Research)"),Object(a.b)(p,{mdxType:"AnchorLink"},"Michiharu Kudo (IBM Research)"),Object(a.b)(p,{mdxType:"AnchorLink"},"Daby Sow (IBM Research)"),Object(a.b)(p,{mdxType:"AnchorLink"},"Atsushi Suzuki (Fujita Health University School of Medicine, Japan)"),Object(a.b)(p,{mdxType:"AnchorLink"},"Edwin Wang (University of Calgary)"),Object(a.b)(p,{mdxType:"AnchorLink"},"Jiao Li (Chinese Academy of Medical Science)"),Object(a.b)(p,{mdxType:"AnchorLink"},"Ping Zhang (The Ohio State University)")),Object(a.b)("h2",null,"Program Committee"),Object(a.b)(s,{mdxType:"AnchorLinks"},Object(a.b)(p,{mdxType:"AnchorLink"},"Jessica Fitts Willoughby (Washington State Univ., USA)"),Object(a.b)(p,{mdxType:"AnchorLink"},"Tiantian He (Nanyang Technological Univ., Singapore)"),Object(a.b)(p,{mdxType:"AnchorLink"},"Zhaomeng Niu (Rutgers Cancer Institute, USA)"),Object(a.b)(p,{mdxType:"AnchorLink"},"Robert Moskovitch (Ben Gurion University, Israel)"),Object(a.b)(p,{mdxType:"AnchorLink"},"Xushen Xiong (MIT CSAIL)"),Object(a.b)(p,{mdxType:"AnchorLink"},"Mingyu Yang (Yale University)"),Object(a.b)(p,{mdxType:"AnchorLink"},"Yixin Chen (Fuwai Hospital, China)"),Object(a.b)(p,{mdxType:"AnchorLink"},"Jingjing Wang (Chinese PLA General Hospital)"),Object(a.b)(p,{mdxType:"AnchorLink"},"Xiang Zhang (Southeast University, China)"),Object(a.b)(p,{mdxType:"AnchorLink"},"Mohamed Ghalwash (IBM Research USA)"),Object(a.b)(p,{mdxType:"AnchorLink"},"Prithwish Chakraborty (IBM Research USA)"),Object(a.b)(p,{mdxType:"AnchorLink"},"Akira Koseki (IBM Research Tokyo)"),Object(a.b)(p,{mdxType:"AnchorLink"},"Takayuki Katsuki (IBM Research Tokyo)"),Object(a.b)(p,{mdxType:"AnchorLink"},"Yiqin Yu (IBM Research China)"),Object(a.b)(p,{mdxType:"AnchorLink"},"Pengwei Hu (IBM Research China)"),Object(a.b)(p,{mdxType:"AnchorLink"},"Zefang Tang (IBM Research China)"),Object(a.b)(p,{mdxType:"AnchorLink"},"Xu Min (IBM Research China)"),Object(a.b)(p,{mdxType:"AnchorLink"},"Yuan Zhang (IBM Research China)"),Object(a.b)(p,{mdxType:"AnchorLink"},"Bibo Hao (IBM Research China)")))}d.isMDXComponent=!0},pEPl:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"repository":{"baseUrl":"https://github.com/dcm-2020/dcm-2020.github.io","subDirectory":"","branch":"src"}}}}}')},pOBw:function(e){e.exports=JSON.parse('{"data":{"site":{"pathPrefix":"/pages"}}}')}}]);
//# sourceMappingURL=component---src-pages-org-index-mdx-40ef40e182f7d5af2fb7.js.map