(()=>{"use strict";var e={735:(e,n,t)=>{t.d(n,{Z:()=>s});var i=t(81),o=t.n(i),r=t(645),a=t.n(r)()(o());a.push([e.id,'/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type="button"],\n[type="reset"],\n[type="submit"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type="button"]::-moz-focus-inner,\n[type="reset"]::-moz-focus-inner,\n[type="submit"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type="button"]:-moz-focusring,\n[type="reset"]:-moz-focusring,\n[type="submit"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type="checkbox"],\n[type="radio"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type="number"]::-webkit-inner-spin-button,\n[type="number"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type="search"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type="search"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n',""]);const s=a},209:(e,n,t)=>{t.d(n,{Z:()=>w});var i=t(81),o=t.n(i),r=t(645),a=t.n(r),s=t(667),l=t.n(s),c=new URL(t(541),t.b),p=new URL(t(653),t.b),d=new URL(t(258),t.b),f=new URL(t(978),t.b),m=new URL(t(425),t.b),h=new URL(t(503),t.b),u=a()(o()),g=l()(c),x=l()(p),b=l()(d),y=l()(f),v=l()(m),_=l()(h);u.push([e.id,`@font-face{font-family:Jost;font-weight:400;src:url(${g}),url(${x})}@font-face{font-family:Jost;font-weight:600;src:url(${b}),url(${y})}@font-face{font-family:"DM Serif Display";font-weight:400;src:url(${v}),url(${_})}`,""]);const w=u},478:(e,n,t)=>{t.d(n,{Z:()=>s});var i=t(81),o=t.n(i),r=t(645),a=t.n(r)()(o());a.push([e.id,'.achievements{background-color:#f4f0ec;width:100vw;position:relative;left:calc(-50vw + 50%);display:flex;justify-content:center;margin-bottom:96px}.achievements__item{margin:151px 0;padding:0 54px;display:flex;flex-direction:column;align-items:center;gap:16px}.achievements__item-title{margin:0;font-family:"DM Serif Display","Times New Roman",Times,serif;font-size:85px;line-height:125%;letter-spacing:.02em;color:#cda274}.achievements__item-subtitle{margin:0;font-family:Jost,Arial,Helvetica,sans-serif;font-size:22px;line-height:150%;letter-spacing:.01em;color:#4d5053}.achievements__item:not(:last-of-type){border-right:1px solid #cda274}',""]);const s=a},674:(e,n,t)=>{t.d(n,{Z:()=>s});var i=t(81),o=t.n(i),r=t(645),a=t.n(r)()(o());a.push([e.id,'.articles{display:flex;flex-direction:column;align-items:center;margin-bottom:96px}.articles__title{margin:0;font-family:"DM Serif Display","Times New Roman",Times,serif;font-size:50px;line-height:125%;letter-spacing:.02em;color:#292f36;margin-bottom:12px}.articles__subtitle{margin:0;max-width:811px;text-align:center;font-family:Jost,Arial,Helvetica,sans-serif;font-size:22px;line-height:150%;letter-spacing:.01em;color:#4d5053;margin-bottom:52px}.articles__items{width:100%;display:flex;justify-content:space-between}.articles__item_center{background-color:#f4f0ec}.articles__item{box-sizing:border-box;border:1px solid #e7e7e7;filter:drop-shadow(0px 10px 30px rgba(255, 255, 255, 0.25));border-radius:62px;display:flex;flex-direction:column;padding:21px 21px 34px 21px;position:relative;width:382px}.articles__item-img{border-radius:45px 45px 0px 0px;margin-bottom:9px}.articles__item-design{font-family:Jost,Arial,Helvetica,sans-serif;font-size:16px;line-height:150%;letter-spacing:.01em;text-transform:capitalize;position:absolute;top:247px;left:40px;padding:9px 11px;background-color:#fff;border-radius:8px 8px 8px 0px}.articles__item-title{margin:0;max-width:275px;font-family:"DM Serif Display","Times New Roman",Times,serif;font-size:25px;line-height:125%;letter-spacing:.02em;color:#292f36}.articles__item-info{display:flex;flex-direction:column;justify-content:space-between;gap:14px}.articles__item-description{display:flex;justify-content:space-between;align-items:center}.articles__item-date{margin:0;font-family:Jost,Arial,Helvetica,sans-serif;font-size:16px;line-height:150%;letter-spacing:.01em;text-transform:capitalize;color:#4d5053}.articles__item-btn-ico{padding:19px 21px;border-radius:50%;background-color:#f4f0ec}.articles__item-btn-ico_center{background-color:#fff}',""]);const s=a},605:(e,n,t)=>{t.d(n,{Z:()=>s});var i=t(81),o=t.n(i),r=t(645),a=t.n(r)()(o());a.push([e.id,'.footer{display:flex;justify-content:space-between;width:100%;position:relative;padding-bottom:100px}.footer__column{display:flex;flex-direction:column;max-width:393px}.footer__logo{margin:0;transition:.3s;margin-bottom:18px}.footer__logo:hover{transform:scale(1.04)}.footer__logo-link{text-decoration:none;color:#292f36;display:flex;align-items:center;gap:10px}.footer__logo-title{font-family:"DM Serif Display","Times New Roman",Times,serif;font-size:40px;line-height:125%}.footer__description{margin:0;font-family:Jost,Arial,Helvetica,sans-serif;font-size:22px;line-height:150%;letter-spacing:.01em;color:#4d5053;margin-bottom:34px}.footer__social-list{padding:0;margin:0;display:flex;list-style-type:none;gap:52px}.footer__column-nav{display:flex;flex-direction:column;gap:10px;width:344px}.footer__nav-title{margin:0;font-family:"DM Serif Display","Times New Roman",Times,serif;font-size:25px;line-height:125%;color:#292f36}.footer__nav-list{margin:0;padding:0;list-style-type:none;display:flex;flex-direction:column}.footer__nav-item-link{text-decoration:none;font-family:Jost,Arial,Helvetica,sans-serif;font-size:22px;line-height:300%;letter-spacing:.01em;color:#4d5053;transition:.3s}.footer__nav-item-link:hover{opacity:.6}.footer__column-contacts{max-width:258px}.footer__contacts-title{margin:0;font-family:"DM Serif Display","Times New Roman",Times,serif;font-size:25px;line-height:125%;color:#292f36;margin-bottom:26px}.footer__contacts-office,.footer__contacts-mail,.footer__contacts-tel{display:flex;text-decoration:none;font-family:Jost,Arial,Helvetica,sans-serif;font-style:normal;font-size:22px;line-height:150%;letter-spacing:.01em;color:#4d5053;transition:.3s;margin-bottom:33px}.footer__contacts-office:hover,.footer__contacts-mail:hover,.footer__contacts-tel:hover{opacity:.6}',""]);const s=a},818:(e,n,t)=>{t.d(n,{Z:()=>s});var i=t(81),o=t.n(i),r=t(645),a=t.n(r)()(o());a.push([e.id,'.header{display:flex;justify-content:space-between;width:100%;justify-self:center;padding-bottom:57px;position:relative;padding-top:60px}.header__logo{margin:0;transition:.3s}.header__logo:hover{transform:scale(1.04)}.header__logo-link{text-decoration:none;color:#292f36;display:flex;align-items:center;gap:10px}.header__logo-title{font-family:"DM Serif Display","Times New Roman",Times,serif;font-size:40px;line-height:125%}.header__nav{display:flex;align-items:center}.header__nav-list{list-style-type:none;margin:0;display:flex;gap:48px}.header__nav-link{font-family:Jost,Arial,Helvetica,sans-serif;font-size:20px;line-height:125%;text-decoration:none;color:#292f36}.header__nav-link:hover{opacity:.6}.header__nav-link_active{border-bottom:1px solid #292f36;cursor:default}.header__nav-link_active:hover{opacity:1}',""]);const s=a},676:(e,n,t)=>{t.d(n,{Z:()=>s});var i=t(81),o=t.n(i),r=t(645),a=t.n(r)()(o());a.push([e.id,'.projects{display:flex;flex-direction:column;align-items:center;margin-bottom:100px}.projects__title{font-family:"DM Serif Display","Times New Roman",Times,serif;font-size:50px;line-height:125%;letter-spacing:.02em;color:#292f36;text-align:center;margin-bottom:8px}.projects__subtitle{font-family:Jost,Arial,Helvetica,sans-serif;font-size:22px;line-height:150%;letter-spacing:.01em;color:#4d5053;text-align:center;max-width:737px;margin-bottom:93px}.projects__items{width:100%;display:grid;gap:56px 10px;grid-template-columns:repeat(2, 547px);justify-content:space-between}.projects__item-border-top-left{border-radius:0px 80px 0px 0px}.projects__item-border-top-right{border-radius:80px 0px 0px 0px}.projects__item-border-bottom-left{border-radius:0px 0px 80px 0px}.projects__item-border-bottom-right{border-radius:0px 0px 0px 80px}.projects__item-img{width:100%;margin-bottom:28px}.projects__item-title{margin:0;font-family:"DM Serif Display","Times New Roman",Times,serif;font-size:25px;line-height:125%;letter-spacing:.02em;color:#292f36}.projects__item-subtitle{margin:0;font-family:Jost,Arial,Helvetica,sans-serif;font-size:22px;line-height:150%;letter-spacing:.01em;color:#4d5053}.projects__item-description{display:flex;justify-content:space-between}.projects__item-info{display:flex;flex-direction:column;gap:4px}.projects__item-btn-ico{padding:26px 32px;background-color:#f4f0ec;border-radius:50%}',""]);const s=a},847:(e,n,t)=>{t.d(n,{Z:()=>s});var i=t(81),o=t.n(i),r=t(645),a=t.n(r)()(o());a.push([e.id,'#root{display:grid;min-height:100vh;grid-template-rows:auto 1fr auto;grid-template-columns:minmax(200px, 1201px);justify-content:center;overflow:hidden;position:relative}main{position:relative}.bg__line1,.bg__line2{position:absolute;top:0;left:0;right:0;bottom:0;z-index:-10}.bg__line1::before{content:"";position:absolute;top:0;left:0;width:2px;height:100%;background-color:#e6e6e6;z-index:-1}.bg__line1::after{content:"";position:absolute;top:0;left:33.3333333333%;width:2px;height:100%;background-color:#e6e6e6;z-index:-1}.bg__line2::before{content:"";position:absolute;top:0;right:0;width:2px;height:100%;background-color:#e6e6e6;z-index:-1}.bg__line2::after{content:"";position:absolute;top:0;right:33.3333333333%;width:2px;height:100%;background-color:#e6e6e6;z-index:-1}',""]);const s=a},159:(e,n,t)=>{t.d(n,{Z:()=>f});var i=t(81),o=t.n(i),r=t(645),a=t.n(r),s=t(667),l=t.n(s),c=new URL(t(960),t.b),p=a()(o()),d=l()(c);p.push([e.id,`.startingSection{background-image:url(${d});background-size:cover;background-size:contain;height:758px;border-radius:70px;margin-bottom:96px}.startingSection__title{font-family:"DM Serif Display","Times New Roman",Times,serif;font-size:65px;line-height:125%;color:#292f36;margin:0;max-width:434px;padding-top:208px;padding-left:52px}.startingSection__subtitle{font-family:Jost,Arial,Helvetica,sans-serif;font-size:22px;line-height:150%;letter-spacing:.01em;color:#4d5053;max-width:434px;margin:0;padding-top:18px;padding-left:52px;margin-bottom:21px}.startingSection__btn{display:inline-block;margin-left:52px;padding:26px 48px;font-family:Jost,Arial,Helvetica,sans-serif;font-weight:600;font-size:18px;line-height:125%;color:#fff;text-decoration:none;background-color:#292f36;letter-spacing:.02em;box-shadow:0px 10px 20px rgba(192,192,192,.35);border-radius:18px}.startingSection__btn-wrapper{display:flex;gap:10px;align-items:center}`,""]);const f=p},545:(e,n,t)=>{t.d(n,{Z:()=>s});var i=t(81),o=t.n(i),r=t(645),a=t.n(r)()(o());a.push([e.id,"#rootVue{display:flex;flex-direction:column;justify-content:flex-start;align-items:center;margin-top:10vh;gap:1rem}.task{width:80vw;min-height:100px;border:1px solid #e6e6e6}.task1{align-items:center}.task2{align-items:start}.task1,.task2{display:flex;flex-direction:column;justify-content:center;gap:1rem}.btn{padding:.5rem 1rem}",""]);const s=a},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",i=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),i&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),i&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,i,o,r){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(i)for(var s=0;s<this.length;s++){var l=this[s][0];null!=l&&(a[l]=!0)}for(var c=0;c<e.length;c++){var p=[].concat(e[c]);i&&a[p[0]]||(void 0!==r&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=r),t&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=t):p[2]=t),o&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=o):p[4]="".concat(o)),n.push(p))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,i=0;i<n.length;i++)if(n[i].identifier===e){t=i;break}return t}function i(e,i){for(var r={},a=[],s=0;s<e.length;s++){var l=e[s],c=i.base?l[0]+i.base:l[0],p=r[c]||0,d="".concat(c," ").concat(p);r[c]=p+1;var f=t(d),m={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==f)n[f].references++,n[f].updater(m);else{var h=o(m,i);i.byIndex=s,n.splice(s,0,{identifier:d,updater:h,references:1})}a.push(d)}return a}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var r=i(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<r.length;a++){var s=t(r[a]);n[s].references--}for(var l=i(e,o),c=0;c<r.length;c++){var p=t(r[c]);0===n[p].references&&(n[p].updater(),n.splice(p,1))}r=l}}},569:e=>{var n={};e.exports=function(e,t){var i=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var i="";t.supports&&(i+="@supports (".concat(t.supports,") {")),t.media&&(i+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(i+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),i+=t.css,o&&(i+="}"),t.media&&(i+="}"),t.supports&&(i+="}");var r=t.sourceMap;r&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),n.styleTagTransform(i,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},503:(e,n,t)=>{e.exports=t.p+"cf3e1290e5107ace3b8d.woff"},425:(e,n,t)=>{e.exports=t.p+"8441fd9f34428ae4c4df.woff2"},653:(e,n,t)=>{e.exports=t.p+"5439059adc444f3b0d6a.woff"},541:(e,n,t)=>{e.exports=t.p+"3c20eb8ed5f5e574a97b.woff2"},978:(e,n,t)=>{e.exports=t.p+"8b98a4ca2b44cb7c2469.woff"},258:(e,n,t)=>{e.exports=t.p+"52c068676648d934f673.woff2"},960:(e,n,t)=>{e.exports=t.p+"b0ca4237e0cebb287afa.jpg"}},n={};function t(i){var o=n[i];if(void 0!==o)return o.exports;var r=n[i]={id:i,exports:{}};return e[i](r,r.exports,t),r.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var i in n)t.o(n,i)&&!t.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:n[i]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var i=n.getElementsByTagName("script");if(i.length)for(var o=i.length-1;o>-1&&!e;)e=i[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var e=t(379),n=t.n(e),i=t(795),o=t.n(i),r=t(569),a=t.n(r),s=t(565),l=t.n(s),c=t(216),p=t.n(c),d=t(589),f=t.n(d),m=t(735),h={};h.styleTagTransform=f(),h.setAttributes=l(),h.insert=a().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=p(),n()(m.Z,h),m.Z&&m.Z.locals&&m.Z.locals;var u=t(209),g={};g.styleTagTransform=f(),g.setAttributes=l(),g.insert=a().bind(null,"head"),g.domAPI=o(),g.insertStyleElement=p(),n()(u.Z,g),u.Z&&u.Z.locals&&u.Z.locals;var x=t(847),b={};b.styleTagTransform=f(),b.setAttributes=l(),b.insert=a().bind(null,"head"),b.domAPI=o(),b.insertStyleElement=p(),n()(x.Z,b),x.Z&&x.Z.locals&&x.Z.locals;var y=t(818),v={};v.styleTagTransform=f(),v.setAttributes=l(),v.insert=a().bind(null,"head"),v.domAPI=o(),v.insertStyleElement=p(),n()(y.Z,v),y.Z&&y.Z.locals&&y.Z.locals;var _=t(159),w={};w.styleTagTransform=f(),w.setAttributes=l(),w.insert=a().bind(null,"head"),w.domAPI=o(),w.insertStyleElement=p(),n()(_.Z,w),_.Z&&_.Z.locals&&_.Z.locals;var z=t(676),k={};k.styleTagTransform=f(),k.setAttributes=l(),k.insert=a().bind(null,"head"),k.domAPI=o(),k.insertStyleElement=p(),n()(z.Z,k),z.Z&&z.Z.locals&&z.Z.locals;var T=t(478),S={};S.styleTagTransform=f(),S.setAttributes=l(),S.insert=a().bind(null,"head"),S.domAPI=o(),S.insertStyleElement=p(),n()(T.Z,S),T.Z&&T.Z.locals&&T.Z.locals;var Z=t(674),A={};A.styleTagTransform=f(),A.setAttributes=l(),A.insert=a().bind(null,"head"),A.domAPI=o(),A.insertStyleElement=p(),n()(Z.Z,A),Z.Z&&Z.Z.locals&&Z.Z.locals;var E=t(605),j={};j.styleTagTransform=f(),j.setAttributes=l(),j.insert=a().bind(null,"head"),j.domAPI=o(),j.insertStyleElement=p(),n()(E.Z,j),E.Z&&E.Z.locals&&E.Z.locals;var C=t(545),R={};R.styleTagTransform=f(),R.setAttributes=l(),R.insert=a().bind(null,"head"),R.domAPI=o(),R.insertStyleElement=p(),n()(C.Z,R),C.Z&&C.Z.locals&&C.Z.locals;const I={data:()=>({title:"Перевернуть",add:"Добавить шаблонную строку",add2:"Добавить",del:"Удалить последний элемент",list:[{text:"xz"},{text:"xz2"}],inputValue:""}),methods:{taskOneClick(){this.title=this.title.split("").reverse().join("")},taskTwoClickAdd(){this.list.push({text:"Новый элемент списка"})},taskTwoClickAdd2(e){e.preventDefault(),this.list.push({text:this.inputValue}),this.inputValue=""},taskTwoClickDel(){this.list.pop()}}};Vue.createApp(I).mount("#rootVue")})()})();