(self.webpackChunkhugo_code_star_site=self.webpackChunkhugo_code_star_site||[]).push([[9727],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},p="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(n),d=o,f=p["".concat(i,".").concat(d)]||p[d]||y[d]||a;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[p]="string"==typeof e?e:o,l[1]=c;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6159:function(e,t,n){"use strict";n.d(t,{N:function(){return d},Z:function(){return f}});var r=n(3366),o=n(7462),a=n(6459),l=n(7294),c=n(6010),i=n(4973),s=n(941),u="anchorWithStickyNavbar_y2LR",p="anchorWithHideOnScrollNavbar_3ly5",y=["id"],d=function(e){var t=Object.assign({},((0,a.Z)(e),e));return l.createElement("header",null,l.createElement("h1",(0,o.Z)({},t,{id:void 0}),t.children))},f=function(e){return"h1"===e?d:(t=e,function(e){var n,o=e.id,a=(0,r.Z)(e,y),d=(0,s.LU)().navbar.hideOnScroll;return o?l.createElement(t,a,l.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:(0,c.Z)("anchor","anchor__"+t,(n={},n[p]=d,n[u]=!d,n)),id:o}),a.children,l.createElement("a",{className:"hash-link",href:"#"+o,title:(0,i.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"#")):l.createElement(t,a)});var t}},6845:function(e,t,n){"use strict";n.d(t,{Z:function(){return U}});var r=n(7462),o=n(3366),a=n(7294),l=n(9105),c=n(6742),i=n(6010),s={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","atrule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},u={Prism:n(7410).default,theme:s};function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function y(){return y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},y.apply(this,arguments)}var d=/\r\n|\r|\n/,f=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},h=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)};function m(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}var g=function(e){function t(){for(var t=this,n=[],r=arguments.length;r--;)n[r]=arguments[r];e.apply(this,n),p(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?function(e,t){var n=e.plain,r=Object.create(null),o=e.styles.reduce((function(e,n){var r=n.languages,o=n.style;return r&&!r.includes(t)||n.types.forEach((function(t){var n=y({},e[t],o);e[t]=n})),e}),r);return o.root=n,o.plain=y({},n,{backgroundColor:null}),o}(e.theme,e.language):void 0;return t.themeDict=n})),p(this,"getLineProps",(function(e){var n=e.key,r=e.className,o=e.style,a=y({},m(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),l=t.getThemeDict(t.props);return void 0!==l&&(a.style=l.plain),void 0!==o&&(a.style=void 0!==a.style?y({},a.style,o):o),void 0!==n&&(a.key=n),r&&(a.className+=" "+r),a})),p(this,"getStyleForToken",(function(e){var n=e.types,r=e.empty,o=n.length,a=t.getThemeDict(t.props);if(void 0!==a){if(1===o&&"plain"===n[0])return r?{display:"inline-block"}:void 0;if(1===o&&!r)return a[n[0]];var l=r?{display:"inline-block"}:{},c=n.map((function(e){return a[e]}));return Object.assign.apply(Object,[l].concat(c))}})),p(this,"getTokenProps",(function(e){var n=e.key,r=e.className,o=e.style,a=e.token,l=y({},m(e,["key","className","style","token"]),{className:"token "+a.types.join(" "),children:a.content,style:t.getStyleForToken(a),key:void 0});return void 0!==o&&(l.style=void 0!==l.style?y({},l.style,o):o),void 0!==n&&(l.key=n),r&&(l.className+=" "+r),l})),p(this,"tokenize",(function(e,t,n,r){var o={code:t,grammar:n,language:r,tokens:[]};e.hooks.run("before-tokenize",o);var a=o.tokens=e.tokenize(o.code,o.grammar,o.language);return e.hooks.run("after-tokenize",o),a}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,r=e.code,o=e.children,a=this.getThemeDict(this.props),l=t.languages[n];return o({tokens:function(e){for(var t=[[]],n=[e],r=[0],o=[e.length],a=0,l=0,c=[],i=[c];l>-1;){for(;(a=r[l]++)<o[l];){var s=void 0,u=t[l],p=n[l][a];if("string"==typeof p?(u=l>0?u:["plain"],s=p):(u=h(u,p.type),p.alias&&(u=h(u,p.alias)),s=p.content),"string"==typeof s){var y=s.split(d),m=y.length;c.push({types:u,content:y[0]});for(var g=1;g<m;g++)f(c),i.push(c=[]),c.push({types:u,content:y[g]})}else l++,t.push(u),n.push(s),r.push(0),o.push(s.length)}l--,t.pop(),n.pop(),r.pop(),o.pop()}return f(c),i}(void 0!==l?this.tokenize(t,r,l,n):[r]),className:"prism-code language-"+n,style:void 0!==a?a.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(a.Component),v=g;var b=n(7594),k=n.n(b),E={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},j=n(5350),O=n(941),T=function(){var e=(0,O.LU)().prism,t=(0,j.Z)().isDarkTheme,n=e.theme||E,r=e.darkTheme||n;return t?r:n},x=n(4973),Z="codeBlockContainer_J+bg",N="codeBlockContent_csEI",w="codeBlockTitle_oQzk",P="codeBlock_rtdJ",C="copyButton_M3SB",S="codeBlockLines_1zSZ",_=/{([\d,-]+)}/,L=["js","jsBlock","jsx","python","html"],B={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},D=["highlight-next-line","highlight-start","highlight-end"],A=function(e){void 0===e&&(e=L);var t=e.map((function(e){var t=B[e],n=t.start,r=t.end;return"(?:"+n+"\\s*("+D.join("|")+")\\s*"+r+")"})).join("|");return new RegExp("^\\s*(?:"+t+")\\s*$")};function I(e){var t=e.children,n=e.className,o=e.metastring,l=e.title,c=(0,O.LU)().prism,s=(0,a.useState)(!1),p=s[0],y=s[1],d=(0,a.useState)(!1),f=d[0],h=d[1];(0,a.useEffect)((function(){h(!0)}),[]);var m=(0,O.bc)(o)||l,g=(0,a.useRef)(null),b=[],E=T(),j=Array.isArray(t)?t.join(""):t;if(o&&_.test(o)){var L=o.match(_)[1];b=k()(L).filter((function(e){return e>0}))}var B=null==n?void 0:n.replace(/language-/,"");!B&&c.defaultLanguage&&(B=c.defaultLanguage);var D=j.replace(/\n$/,"");if(0===b.length&&void 0!==B){for(var I,z="",R=function(e){switch(e){case"js":case"javascript":case"ts":case"typescript":return A(["js","jsBlock"]);case"jsx":case"tsx":return A(["js","jsBlock","jsx"]);case"html":return A(["js","jsBlock","html"]);case"python":case"py":return A(["python"]);default:return A()}}(B),F=j.replace(/\n$/,"").split("\n"),$=0;$<F.length;){var V=$+1,U=F[$].match(R);if(null!==U){switch(U.slice(1).reduce((function(e,t){return e||t}),void 0)){case"highlight-next-line":z+=V+",";break;case"highlight-start":I=V;break;case"highlight-end":z+=I+"-"+(V-1)+","}F.splice($,1)}else $+=1}b=k()(z),D=F.join("\n")}var W=function(){!function(e,t){var n=(void 0===t?{}:t).target,r=void 0===n?document.body:n;if("string"!=typeof e)throw new TypeError("Expected parameter `text` to be a `string`, got `"+typeof e+"`.");var o=document.createElement("textarea"),a=document.activeElement;o.value=e,o.setAttribute("readonly",""),o.style.contain="strict",o.style.position="absolute",o.style.left="-9999px",o.style.fontSize="12pt";var l=document.getSelection(),c=l.rangeCount>0&&l.getRangeAt(0);r.append(o),o.select(),o.selectionStart=0,o.selectionEnd=e.length;var i=!1;try{i=document.execCommand("copy")}catch(s){}o.remove(),c&&(l.removeAllRanges(),l.addRange(c)),a&&a.focus()}(D),y(!0),setTimeout((function(){return y(!1)}),2e3)};return a.createElement(v,(0,r.Z)({},u,{key:String(f),theme:E,code:D,language:B}),(function(e){var t=e.className,n=e.style,o=e.tokens,l=e.getLineProps,c=e.getTokenProps;return a.createElement("div",{className:Z},m&&a.createElement("div",{style:n,className:w},m),a.createElement("div",{className:(0,i.Z)(N,B)},a.createElement("pre",{tabIndex:0,className:(0,i.Z)(t,P,"thin-scrollbar"),style:n},a.createElement("code",{className:S},o.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var n=l({line:e,key:t});return b.includes(t+1)&&(n.className+=" docusaurus-highlight-code-line"),a.createElement("span",(0,r.Z)({key:t},n),e.map((function(e,t){return a.createElement("span",(0,r.Z)({key:t},c({token:e,key:t})))})))})))),a.createElement("button",{ref:g,type:"button","aria-label":(0,x.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:(0,i.Z)(C,"clean-btn"),onClick:W},p?a.createElement(x.Z,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):a.createElement(x.Z,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))}))}var z=n(6159),R=n(6459),F="details_h+cY";function $(e){var t=Object.assign({},((0,R.Z)(e),e));return a.createElement(O.PO,(0,r.Z)({},t,{className:(0,i.Z)("alert alert--info",F,t.className)}))}var V=["mdxType","originalType"];var U={head:function(e){var t=a.Children.map(e.children,(function(e){return function(e){var t,n;if(null!=e&&null!=(t=e.props)&&t.mdxType&&null!=e&&null!=(n=e.props)&&n.originalType){var r=e.props,l=(r.mdxType,r.originalType,(0,o.Z)(r,V));return a.createElement(e.props.originalType,l)}return e}(e)}));return a.createElement(l.Z,e,t)},code:function(e){var t=e.children;return(0,a.isValidElement)(t)?t:t.includes("\n")?a.createElement(I,e):a.createElement("code",e)},a:function(e){return a.createElement(c.Z,e)},pre:function(e){var t,n=e.children;return(0,a.isValidElement)(n)&&(0,a.isValidElement)(null==n||null==(t=n.props)?void 0:t.children)?n.props.children:a.createElement(I,(0,a.isValidElement)(n)?null==n?void 0:n.props:Object.assign({},e))},details:function(e){var t=a.Children.toArray(e.children),n=t.find((function(e){var t;return"summary"===(null==e||null==(t=e.props)?void 0:t.mdxType)})),o=a.createElement(a.Fragment,null,t.filter((function(e){return e!==n})));return a.createElement($,(0,r.Z)({},e,{summary:n}),o)},h1:(0,z.Z)("h1"),h2:(0,z.Z)("h2"),h3:(0,z.Z)("h3"),h4:(0,z.Z)("h4"),h5:(0,z.Z)("h5"),h6:(0,z.Z)("h6")}},7594:function(e,t){function n(e){let t,n=[];for(let r of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(r))n.push(parseInt(r,10));else if(t=r.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,r,o,a]=t;if(r&&a){r=parseInt(r),a=parseInt(a);const e=r<a?1:-1;"-"!==o&&".."!==o&&"\u2025"!==o||(a+=e);for(let t=r;t!==a;t+=e)n.push(t)}}return n}t.default=n,e.exports=n},6459:function(e,t,n){"use strict";function r(e){if(null==e)throw new TypeError("Cannot destructure "+e)}n.d(t,{Z:function(){return r}})}}]);