"use strict";(self.webpackChunkhugo_code_star_site=self.webpackChunkhugo_code_star_site||[]).push([[6103],{6165:function(e,t,a){a.d(t,{Z:function(){return g}});var n=a(3366),r=a(7294),l=a(6010),i=a(6698),o=a(6742),s={sidebar:"sidebar_q+wC",sidebarItemTitle:"sidebarItemTitle_9G5K",sidebarItemList:"sidebarItemList_6T4b",sidebarItem:"sidebarItem_cjdF",sidebarItemLink:"sidebarItemLink_zyXk",sidebarItemLinkActive:"sidebarItemLinkActive_wcJs"},c=a(4973);function m(e){var t=e.sidebar;return 0===t.items.length?null:r.createElement("nav",{className:(0,l.Z)(s.sidebar,"thin-scrollbar"),"aria-label":(0,c.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},r.createElement("div",{className:(0,l.Z)(s.sidebarItemTitle,"margin-bottom--md")},t.title),r.createElement("ul",{className:s.sidebarItemList},t.items.map((function(e){return r.createElement("li",{key:e.permalink,className:s.sidebarItem},r.createElement(o.Z,{isNavLink:!0,to:e.permalink,className:s.sidebarItemLink,activeClassName:s.sidebarItemLinkActive},e.title))}))))}var u=a(571),d=["sidebar","toc","children"];var g=function(e){var t=e.sidebar,a=e.toc,o=e.children,s=(0,n.Z)(e,d),c=t&&t.items.length>0;return r.createElement(i.Z,s,r.createElement("div",{className:"container margin-vert--lg"},r.createElement("div",{className:"row"},c&&r.createElement("aside",{className:"col col--3"},r.createElement(m,{sidebar:t})),r.createElement("main",{className:(0,l.Z)("col",{"col--7":c,"col--9 col--offset-1":!c}),itemScope:!0,itemType:"http://schema.org/Blog"},o),a&&r.createElement("div",{className:"col col--2"},r.createElement(u.Z,{toc:a})))))}},4884:function(e,t,a){a.d(t,{Z:function(){return _}});var n=a(7294),r=a(6010),l=a(3905),i=a(4973),o=a(6742),s=a(4996),c=a(941),m=a(6845),u=a(6146),d="blogPostTitle_d4p0",g="blogPostData_-Im+",p="blogPostDetailsFull_xD8n",v=a(7682),h="image_9q7L";var f=function(e){var t=e.author,a=t.name,r=t.title,l=t.url,i=t.imageURL;return n.createElement("div",{className:"avatar margin-bottom--sm"},i&&n.createElement(o.Z,{className:"avatar__photo-link avatar__photo",href:l},n.createElement("img",{className:h,src:i,alt:a})),a&&n.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},n.createElement("div",{className:"avatar__name"},n.createElement(o.Z,{href:l,itemProp:"url"},n.createElement("span",{itemProp:"name"},a))),r&&n.createElement("small",{className:"avatar__subtitle",itemProp:"description"},r)))},b={authorCol:"authorCol_8c0z"};function E(e){var t=e.authors,a=e.assets;return 0===t.length?n.createElement(n.Fragment,null):n.createElement("div",{className:"row margin-top--md margin-bottom--sm"},t.map((function(e,t){var l;return n.createElement("div",{className:(0,r.Z)("col col--6",b.authorCol),key:t},n.createElement(f,{author:Object.assign({},e,{imageURL:null!=(l=a.authorsImageUrls[t])?l:e.imageURL})}))})))}var _=function(e){var t,a,h,f,b=(h=(0,c.c2)().selectMessage,function(e){var t=Math.ceil(e);return h(t,(0,i.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),_=(0,s.C)().withBaseUrl,N=e.children,Z=e.frontMatter,k=e.assets,P=e.metadata,I=e.truncated,L=e.isBlogPostPage,T=void 0!==L&&L,y=P.date,w=P.formattedDate,C=P.permalink,A=P.tags,x=P.readingTime,B=P.title,R=P.editUrl,M=P.authors,U=null!=(t=k.image)?t:Z.image;return n.createElement("article",{className:T?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},(f=T?"h1":"h2",n.createElement("header",null,n.createElement(f,{className:d,itemProp:"headline"},T?B:n.createElement(o.Z,{itemProp:"url",to:C},B)),n.createElement("div",{className:(0,r.Z)(g,"margin-vert--md")},n.createElement("time",{dateTime:y,itemProp:"datePublished"},w),void 0!==x&&n.createElement(n.Fragment,null," \xb7 ",b(x))),n.createElement(E,{authors:M,assets:k}))),U&&n.createElement("meta",{itemProp:"image",content:_(U,{absolute:!0})}),n.createElement("div",{className:"markdown",itemProp:"articleBody"},n.createElement(l.Zo,{components:m.Z},N)),(A.length>0||I)&&n.createElement("footer",{className:(0,r.Z)("row docusaurus-mt-lg",(a={},a[p]=T,a))},A.length>0&&n.createElement("div",{className:(0,r.Z)("col",{"col--9":!T})},n.createElement(v.Z,{tags:A})),T&&R&&n.createElement("div",{className:"col margin-top--sm"},n.createElement(u.Z,{editUrl:R})),!T&&I&&n.createElement("div",{className:"col col--3 text--right"},n.createElement(o.Z,{to:P.permalink,"aria-label":"Read more about "+B},n.createElement("b",null,n.createElement(i.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}},4147:function(e,t,a){a.r(t),a.d(t,{default:function(){return u}});var n=a(7294),r=a(1217),l=a(6165),i=a(4884),o=a(4973),s=a(6742);var c=function(e){var t=e.nextItem,a=e.prevItem;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,o.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},n.createElement("div",{className:"pagination-nav__item"},a&&n.createElement(s.Z,{className:"pagination-nav__link",to:a.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(o.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")),n.createElement("div",{className:"pagination-nav__label"},"\xab ",a.title))),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t&&n.createElement(s.Z,{className:"pagination-nav__link",to:t.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(o.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post")),n.createElement("div",{className:"pagination-nav__label"},t.title," \xbb"))))},m=a(941);var u=function(e){var t,a=e.content,o=e.sidebar,s=a.frontMatter,u=a.assets,d=a.metadata,g=d.title,p=d.description,v=d.nextItem,h=d.prevItem,f=d.date,b=d.tags,E=d.authors,_=s.hide_table_of_contents,N=s.keywords,Z=null!=(t=u.image)?t:s.image;return n.createElement(l.Z,{wrapperClassName:m.kM.wrapper.blogPages,pageClassName:m.kM.page.blogPostPage,sidebar:o,toc:!_&&a.toc?a.toc:void 0},n.createElement(r.Z,{title:g,description:p,keywords:N,image:Z},n.createElement("meta",{property:"og:type",content:"article"}),n.createElement("meta",{property:"article:published_time",content:f}),E.some((function(e){return e.url}))&&n.createElement("meta",{property:"article:author",content:E.map((function(e){return e.url})).filter(Boolean).join(",")}),b.length>0&&n.createElement("meta",{property:"article:tag",content:b.map((function(e){return e.label})).join(",")})),n.createElement(i.Z,{frontMatter:s,assets:u,metadata:d,isBlogPostPage:!0},n.createElement(a,null)),(v||h)&&n.createElement(c,{nextItem:v,prevItem:h}))}},6146:function(e,t,a){a.d(t,{Z:function(){return d}});var n=a(7294),r=a(4973),l=a(7462),i=a(3366),o=a(6010),s="iconEdit_mS5F",c=["className"],m=function(e){var t=e.className,a=(0,i.Z)(e,c);return n.createElement("svg",(0,l.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,o.Z)(s,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))},u=a(941);function d(e){var t=e.editUrl;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:u.kM.common.editThisPage},n.createElement(m,null),n.createElement(r.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},571:function(e,t,a){a.d(t,{r:function(){return g},Z:function(){return p}});var n=a(7294),r=a(6010),l=a(941);function i(e){var t=e.getBoundingClientRect();return t.top===t.bottom?i(e.parentNode):t}function o(e){var t,a=e.anchorTopOffset,n=Array.from(document.querySelectorAll(".anchor.anchor__h2, .anchor.anchor__h3")),r=n.find((function(e){return i(e).top>=a}));return r?function(e){return e.top>0&&e.bottom<window.innerHeight/2}(i(r))?r:null!=(t=n[n.indexOf(r)-1])?t:null:n[n.length-1]}function s(){var e=(0,n.useRef)(0),t=(0,l.LU)().navbar.hideOnScroll;return(0,n.useEffect)((function(){e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}var c=function(e){var t=(0,n.useRef)(void 0),a=s();(0,n.useEffect)((function(){var n=e.linkClassName,r=e.linkActiveClassName;function l(){var e=function(e){return Array.from(document.getElementsByClassName(e))}(n),l=o({anchorTopOffset:a.current}),i=e.find((function(e){return l&&l.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)}));e.forEach((function(e){!function(e,a){if(a){var n;t.current&&t.current!==e&&(null==(n=t.current)||n.classList.remove(r)),e.classList.add(r),t.current=e}else e.classList.remove(r)}(e,e===i)}))}return document.addEventListener("scroll",l),document.addEventListener("resize",l),l(),function(){document.removeEventListener("scroll",l),document.removeEventListener("resize",l)}}),[e,a])},m="tableOfContents_vrFS",u="table-of-contents__link",d={linkClassName:u,linkActiveClassName:"table-of-contents__link--active"};function g(e){var t=e.toc,a=e.isChild;return t.length?n.createElement("ul",{className:a?"":"table-of-contents table-of-contents__left-border"},t.map((function(e){return n.createElement("li",{key:e.id},n.createElement("a",{href:"#"+e.id,className:u,dangerouslySetInnerHTML:{__html:e.value}}),n.createElement(g,{isChild:!0,toc:e.children}))}))):null}var p=function(e){var t=e.toc;return c(d),n.createElement("div",{className:(0,r.Z)(m,"thin-scrollbar")},n.createElement(g,{toc:t}))}},7211:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(7294),r=a(6010),l=a(6742),i="tag_WK-t",o="tagRegular_LXbV",s="tagWithCount_S5Zl";var c=function(e){var t,a=e.permalink,c=e.name,m=e.count;return n.createElement(l.Z,{href:a,className:(0,r.Z)(i,(t={},t[o]=!m,t[s]=m,t))},c,m&&n.createElement("span",null,m))}},7682:function(e,t,a){a.d(t,{Z:function(){return s}});var n=a(7294),r=a(6010),l=a(4973),i=a(7211),o={tags:"tags_NBRY",tag:"tag_F03v"};function s(e){var t=e.tags;return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(l.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,r.Z)(o.tags,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,a=e.permalink;return n.createElement("li",{key:a,className:o.tag},n.createElement(i.Z,{name:t,permalink:a}))}))))}}}]);