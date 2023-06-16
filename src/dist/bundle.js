(()=>{"use strict";var e={735:(e,t,n)=>{n.d(t,{Z:()=>s});var i=n(81),o=n.n(i),r=n(645),a=n.n(r)()(o());a.push([e.id,'/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type="button"],\n[type="reset"],\n[type="submit"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type="button"]::-moz-focus-inner,\n[type="reset"]::-moz-focus-inner,\n[type="submit"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type="button"]:-moz-focusring,\n[type="reset"]:-moz-focusring,\n[type="submit"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type="checkbox"],\n[type="radio"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type="number"]::-webkit-inner-spin-button,\n[type="number"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type="search"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type="search"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n',""]);const s=a},209:(e,t,n)=>{n.d(t,{Z:()=>k});var i=n(81),o=n.n(i),r=n(645),a=n.n(r),s=n(667),l=n.n(s),c=new URL(n(541),n.b),p=new URL(n(653),n.b),d=new URL(n(174),n.b),f=new URL(n(708),n.b),m=new URL(n(258),n.b),g=new URL(n(978),n.b),h=new URL(n(425),n.b),u=new URL(n(503),n.b),x=a()(o()),b=l()(c),y=l()(p),_=l()(d),v=l()(f),w=l()(m),z=l()(g),S=l()(h),T=l()(u);x.push([e.id,`@font-face{font-family:Jost;font-weight:400;src:url(${b}),url(${y})}@font-face{font-family:Jost;font-weight:500;src:url(${_}),url(${v})}@font-face{font-family:Jost;font-weight:600;src:url(${w}),url(${z})}@font-face{font-family:"DM Serif Display";font-weight:400;src:url(${S}),url(${T})}`,""]);const k=x},547:(e,t,n)=>{n.d(t,{Z:()=>s});var i=n(81),o=n.n(i),r=n(645),a=n.n(r)()(o());a.push([e.id,'.blog-title{position:relative;margin-bottom:200px}.blog-title__img{position:relative;max-width:1920px;left:-360px;margin:0 auto;display:flex;justify-content:center}.blog-title__intro{position:absolute;bottom:0;left:50%;transform:translateX(-50%);padding:41px 78px;background-color:#fff;border-radius:37px 37px 0px 0px;display:flex;flex-direction:column;align-items:center}.blog-title__title{margin:0;font-family:"DM Serif Display","Times New Roman",Times,serif;font-size:50px;line-height:125%;color:#292f36}.blog-title__subtitle{margin:0;font-family:Jost,Arial,Helvetica,sans-serif;font-size:22px;line-height:150%;color:#4d5053}.blog-latest-post{margin-bottom:150px}.blog-latest-post__title{margin:0;font-family:"DM Serif Display","Times New Roman",Times,serif;font-size:50px;line-height:125%;letter-spacing:.02em;color:#292f36;margin-bottom:25px}.blog-latest-post__item{display:flex;gap:64px;padding:22px;border:1px solid #e7e7e7;filter:drop-shadow(0px 10px 30px rgba(255, 255, 255, 0.25));border-radius:62px}.blog-latest-post__item-img{border-radius:50px}.blog-latest-post__item-info{padding-right:34px;margin-top:51px;display:flex;flex-direction:column}.blog-latest-post__item-title{margin:0;font-family:"DM Serif Display","Times New Roman",Times,serif;font-size:25px;line-height:125%;letter-spacing:.02em;color:#292f36;margin-bottom:22px}.blog-latest-post__item-text{margin:0;padding-right:6px;font-family:Jost,Arial,Helvetica,sans-serif;font-size:22px;line-height:150%;letter-spacing:.01em;color:#4d5053;margin-bottom:33px}.blog-latest-post__item-text:last-of-type{margin-bottom:39px}.blog-latest-post__item-more{display:flex;width:100%;justify-content:space-between;align-items:center}.blog-latest-post__item-date{margin:0;font-family:Jost,Arial,Helvetica,sans-serif;font-size:16px;line-height:150%;letter-spacing:.01em;text-transform:capitalize;color:#4d5053}.blog-articles{margin-bottom:200px}.blog-articles__title{margin:0;font-family:"DM Serif Display","Times New Roman",Times,serif;font-size:50px;line-height:125%;letter-spacing:.02em;color:#292f36;margin-bottom:30px}.blog-articles__items{display:flex;justify-content:center;gap:30px 27px;flex-wrap:wrap;margin-bottom:51px}.blog-articles__pagination{display:flex;gap:20px;justify-content:center}.blog-articles__pagination-item:hover{cursor:pointer;background-color:#cda274}.blog-articles__pagination-item{display:flex;justify-content:center;align-items:center;box-sizing:border-box;min-width:55px;padding:14px 17px;border:1px solid #cda274;border-radius:50%;font-family:Jost,Arial,Helvetica,sans-serif;font-weight:500;font-size:16px;line-height:150%;color:#292f36;text-decoration:none;transition:all .3s}.blog-articles__pagination-item_active{pointer-events:none;background-color:#f4f0ec;border:none}.blog-articles__pagination-item_active:hover{cursor:default;background-color:#f4f0ec}.blog-articles__pagination-item:last-of-type{box-sizing:border-box;display:flex;justify-content:center;width:55px}',""]);const s=a},605:(e,t,n)=>{n.d(t,{Z:()=>s});var i=n(81),o=n.n(i),r=n(645),a=n.n(r)()(o());a.push([e.id,'.footer{display:flex;justify-content:space-between;width:100%;position:relative;padding-bottom:100px}.footer__column{display:flex;flex-direction:column;max-width:393px}.footer__logo{display:flex;width:176px;margin:0;transition:.3s;margin-bottom:18px}.footer__logo:hover{transform:scale(1.04)}.footer__logo-link{text-decoration:none;color:#292f36;display:flex;align-items:center;gap:10px}.footer__logo-title{font-family:"DM Serif Display","Times New Roman",Times,serif;font-size:40px;line-height:125%}.footer__description{margin:0;font-family:Jost,Arial,Helvetica,sans-serif;font-size:22px;line-height:150%;letter-spacing:.01em;color:#4d5053;margin-bottom:34px}.footer__social-item{transition:opacity .3s}.footer__social-item:hover{opacity:.6}.footer__social-list{padding:0;margin:0;display:flex;list-style-type:none;gap:52px}.footer__column-nav{display:flex;flex-direction:column;gap:10px;width:344px}.footer__nav-title{margin:0;font-family:"DM Serif Display","Times New Roman",Times,serif;font-size:25px;line-height:125%;color:#292f36}.footer__nav-list{margin:0;padding:0;list-style-type:none;display:flex;flex-direction:column}.footer__nav-item-link{text-decoration:none;font-family:Jost,Arial,Helvetica,sans-serif;font-size:22px;line-height:300%;letter-spacing:.01em;color:#4d5053;transition:.3s}.footer__nav-item-link:hover{opacity:.6}.footer__column-contacts{max-width:258px}.footer__contacts-title{margin:0;font-family:"DM Serif Display","Times New Roman",Times,serif;font-size:25px;line-height:125%;color:#292f36;margin-bottom:26px}.footer__contacts-office,.footer__contacts-mail,.footer__contacts-tel{display:flex;text-decoration:none;font-family:Jost,Arial,Helvetica,sans-serif;font-style:normal;font-size:22px;line-height:150%;letter-spacing:.01em;color:#4d5053;transition:.3s;margin-bottom:33px}.footer__contacts-office:hover,.footer__contacts-mail:hover,.footer__contacts-tel:hover{opacity:.6}',""]);const s=a},818:(e,t,n)=>{n.d(t,{Z:()=>s});var i=n(81),o=n.n(i),r=n(645),a=n.n(r)()(o());a.push([e.id,'.header{display:flex;justify-content:space-between;width:100%;justify-self:center;padding-bottom:57px;position:relative;padding-top:60px}.header__logo{margin:0;transition:.3s}.header__logo:hover{transform:scale(1.04)}.header__logo-link{text-decoration:none;color:#292f36;display:flex;align-items:center;gap:10px}.header__logo-title{font-family:"DM Serif Display","Times New Roman",Times,serif;font-size:40px;line-height:125%}.header__nav{display:flex;align-items:center}.header__nav-list{list-style-type:none;margin:0;display:flex;gap:48px}.header__nav-link{font-family:Jost,Arial,Helvetica,sans-serif;font-size:20px;line-height:125%;text-decoration:none;color:#4d5053}.header__nav-link:hover{opacity:.6}.header__nav-link_active{pointer-events:none;border-bottom:1px solid #292f36;cursor:default}.header__nav-link_active:hover{opacity:1}',""]);const s=a},262:(e,t,n)=>{n.d(t,{Z:()=>f});var i=n(81),o=n.n(i),r=n(645),a=n.n(r),s=n(667),l=n.n(s),c=new URL(n(928),n.b),p=a()(o()),d=l()(c);p.push([e.id,`.startingSection{background-image:url(${d});background-size:cover;background-size:contain;height:758px;border-radius:70px;margin-bottom:96px}.startingSection__title{font-family:"DM Serif Display","Times New Roman",Times,serif;font-size:65px;line-height:125%;color:#292f36;margin:0;max-width:434px;padding-top:208px;padding-left:52px}.startingSection__subtitle{font-family:Jost,Arial,Helvetica,sans-serif;font-size:22px;line-height:150%;letter-spacing:.01em;color:#4d5053;max-width:434px;margin:0;padding-top:18px;padding-left:52px;margin-bottom:21px}.startingSection__btn{display:inline-block;margin-left:52px;padding:26px 48px;font-family:Jost,Arial,Helvetica,sans-serif;font-weight:600;font-size:18px;line-height:125%;color:#fff;text-decoration:none;background-color:#292f36;letter-spacing:.02em;box-shadow:0px 10px 20px rgba(192,192,192,.35);border-radius:18px}.startingSection__btn-wrapper{display:flex;gap:10px;align-items:center}.projects{display:flex;flex-direction:column;align-items:center;margin-bottom:100px}.projects__title{font-family:"DM Serif Display","Times New Roman",Times,serif;font-size:50px;line-height:125%;letter-spacing:.02em;color:#292f36;text-align:center;margin-bottom:8px}.projects__subtitle{font-family:Jost,Arial,Helvetica,sans-serif;font-size:22px;line-height:150%;letter-spacing:.01em;color:#4d5053;text-align:center;max-width:737px;margin-bottom:93px}.projects__items{width:100%;display:grid;gap:56px 10px;grid-template-columns:repeat(2, 547px);justify-content:space-between}.projects__item-border-top-left{border-radius:0px 80px 0px 0px}.projects__item-border-top-right{border-radius:80px 0px 0px 0px}.projects__item-border-bottom-left{border-radius:0px 0px 80px 0px}.projects__item-border-bottom-right{border-radius:0px 0px 0px 80px}.projects__item-img{width:100%;margin-bottom:28px}.projects__item-title{margin:0;font-family:"DM Serif Display","Times New Roman",Times,serif;font-size:25px;line-height:125%;letter-spacing:.02em;color:#292f36}.projects__item-subtitle{margin:0;font-family:Jost,Arial,Helvetica,sans-serif;font-size:22px;line-height:150%;letter-spacing:.01em;color:#4d5053}.projects__item-description{display:flex;justify-content:space-between}.projects__item-info{display:flex;flex-direction:column;gap:4px}.projects__item-btn-ico{padding:26px 32px;background-color:#f4f0ec;border-radius:50%}.achievements{background-color:#f4f0ec;width:100vw;position:relative;left:calc(-50vw + 50%);display:flex;justify-content:center;margin-bottom:96px}.achievements__item{margin:151px 0;padding:0 54px;display:flex;flex-direction:column;align-items:center;gap:16px}.achievements__item-title{margin:0;font-family:"DM Serif Display","Times New Roman",Times,serif;font-size:85px;line-height:125%;letter-spacing:.02em;color:#cda274}.achievements__item-subtitle{margin:0;font-family:Jost,Arial,Helvetica,sans-serif;font-size:22px;line-height:150%;letter-spacing:.01em;color:#4d5053}.achievements__item:not(:last-of-type){border-right:1px solid #cda274}.articles{display:flex;flex-direction:column;align-items:center;margin-bottom:96px}.articles__title{margin:0;font-family:"DM Serif Display","Times New Roman",Times,serif;font-size:50px;line-height:125%;letter-spacing:.02em;color:#292f36;margin-bottom:12px}.articles__subtitle{margin:0;max-width:811px;text-align:center;font-family:Jost,Arial,Helvetica,sans-serif;font-size:22px;line-height:150%;letter-spacing:.01em;color:#4d5053;margin-bottom:52px}.articles__items{width:100%;display:flex;justify-content:space-between}.articles__item:hover{cursor:pointer;background-color:#f4f0ec}.articles__item:hover .articles__item-btn-ico{background-color:#fff}.articles__item{box-sizing:border-box;border:1px solid #e7e7e7;filter:drop-shadow(0px 10px 30px rgba(255, 255, 255, 0.25));border-radius:62px;display:flex;flex-direction:column;padding:21px 21px 34px 21px;position:relative;width:382px;transition:.3s}.articles__item-img{border-radius:45px 45px 0px 0px;margin-bottom:9px}.articles__item-design{font-family:Jost,Arial,Helvetica,sans-serif;font-size:16px;line-height:150%;letter-spacing:.01em;text-transform:capitalize;position:absolute;top:247px;left:40px;padding:9px 11px;background-color:#fff;border-radius:8px 8px 8px 0px}.articles__item-title{margin:0;max-width:275px;font-family:"DM Serif Display","Times New Roman",Times,serif;font-size:25px;line-height:125%;letter-spacing:.02em;color:#292f36}.articles__item-info{display:flex;flex-direction:column;justify-content:space-between;gap:14px}.articles__item-description{display:flex;justify-content:space-between;align-items:center}.articles__item-date{margin:0;font-family:Jost,Arial,Helvetica,sans-serif;font-size:16px;line-height:150%;letter-spacing:.01em;text-transform:capitalize;color:#4d5053}.articles__item-btn-ico{padding:19px 21px;border-radius:50%;background-color:#f4f0ec;transition:all .3s}`,""]);const f=p},847:(e,t,n)=>{n.d(t,{Z:()=>s});var i=n(81),o=n.n(i),r=n(645),a=n.n(r)()(o());a.push([e.id,'#root{display:grid;min-height:100vh;grid-template-rows:auto 1fr auto;grid-template-columns:minmax(200px, 1201px);justify-content:center;overflow:hidden;position:relative}main{position:relative}.bg__line1,.bg__line2{position:absolute;top:0;left:0;right:0;bottom:0;z-index:-10}.bg__line1::before{content:"";position:absolute;top:0;left:0;width:2px;height:100%;background-color:#e6e6e6;z-index:-1}.bg__line1::after{content:"";position:absolute;top:0;left:33.3333333333%;width:2px;height:100%;background-color:#e6e6e6;z-index:-1}.bg__line2::before{content:"";position:absolute;top:0;right:0;width:2px;height:100%;background-color:#e6e6e6;z-index:-1}.bg__line2::after{content:"";position:absolute;top:0;right:33.3333333333%;width:2px;height:100%;background-color:#e6e6e6;z-index:-1}',""]);const s=a},545:(e,t,n)=>{n.d(t,{Z:()=>s});var i=n(81),o=n.n(i),r=n(645),a=n.n(r)()(o());a.push([e.id,"#rootVue{display:flex;flex-direction:column;justify-content:flex-start;align-items:center;margin-top:10vh;gap:1rem}.task{width:80vw;min-height:100px;border:1px solid #e6e6e6}.task1{align-items:center}.task1,.task2{display:flex;flex-direction:column;justify-content:center;gap:1rem}.task2{align-items:start}.products{padding:0}.product{display:grid;grid-template-columns:100px auto}.product__title,.product__price{margin:0;border-bottom:1px solid #000}.product__title{margin:0;border-right:1px solid #000}",""]);const s=a},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",i=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),i&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),i&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,i,o,r){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(i)for(var s=0;s<this.length;s++){var l=this[s][0];null!=l&&(a[l]=!0)}for(var c=0;c<e.length;c++){var p=[].concat(e[c]);i&&a[p[0]]||(void 0!==r&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=r),n&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=n):p[2]=n),o&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=o):p[4]="".concat(o)),t.push(p))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,i=0;i<t.length;i++)if(t[i].identifier===e){n=i;break}return n}function i(e,i){for(var r={},a=[],s=0;s<e.length;s++){var l=e[s],c=i.base?l[0]+i.base:l[0],p=r[c]||0,d="".concat(c," ").concat(p);r[c]=p+1;var f=n(d),m={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==f)t[f].references++,t[f].updater(m);else{var g=o(m,i);i.byIndex=s,t.splice(s,0,{identifier:d,updater:g,references:1})}a.push(d)}return a}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var r=i(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<r.length;a++){var s=n(r[a]);t[s].references--}for(var l=i(e,o),c=0;c<r.length;c++){var p=n(r[c]);0===t[p].references&&(t[p].updater(),t.splice(p,1))}r=l}}},569:e=>{var t={};e.exports=function(e,n){var i=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var i="";n.supports&&(i+="@supports (".concat(n.supports,") {")),n.media&&(i+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(i+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),i+=n.css,o&&(i+="}"),n.media&&(i+="}"),n.supports&&(i+="}");var r=n.sourceMap;r&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleTagTransform(i,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},928:(e,t,n)=>{e.exports=n.p+"21af5e44e490c7261570.jpg"},503:(e,t,n)=>{e.exports=n.p+"cf3e1290e5107ace3b8d.woff"},425:(e,t,n)=>{e.exports=n.p+"8441fd9f34428ae4c4df.woff2"},708:(e,t,n)=>{e.exports=n.p+"fa12add5e210e6134182.woff"},174:(e,t,n)=>{e.exports=n.p+"6321c81e73198619f5ca.woff2"},653:(e,t,n)=>{e.exports=n.p+"5439059adc444f3b0d6a.woff"},541:(e,t,n)=>{e.exports=n.p+"3c20eb8ed5f5e574a97b.woff2"},978:(e,t,n)=>{e.exports=n.p+"8b98a4ca2b44cb7c2469.woff"},258:(e,t,n)=>{e.exports=n.p+"52c068676648d934f673.woff2"}},t={};function n(i){var o=t[i];if(void 0!==o)return o.exports;var r=t[i]={id:i,exports:{}};return e[i](r,r.exports,n),r.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var i=t.getElementsByTagName("script");if(i.length)for(var o=i.length-1;o>-1&&!e;)e=i[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,n.nc=void 0,(()=>{var e=n(379),t=n.n(e),i=n(795),o=n.n(i),r=n(569),a=n.n(r),s=n(565),l=n.n(s),c=n(216),p=n.n(c),d=n(589),f=n.n(d),m=n(735),g={};g.styleTagTransform=f(),g.setAttributes=l(),g.insert=a().bind(null,"head"),g.domAPI=o(),g.insertStyleElement=p(),t()(m.Z,g),m.Z&&m.Z.locals&&m.Z.locals;var h=n(209),u={};u.styleTagTransform=f(),u.setAttributes=l(),u.insert=a().bind(null,"head"),u.domAPI=o(),u.insertStyleElement=p(),t()(h.Z,u),h.Z&&h.Z.locals&&h.Z.locals;var x=n(847),b={};b.styleTagTransform=f(),b.setAttributes=l(),b.insert=a().bind(null,"head"),b.domAPI=o(),b.insertStyleElement=p(),t()(x.Z,b),x.Z&&x.Z.locals&&x.Z.locals;var y=n(818),_={};_.styleTagTransform=f(),_.setAttributes=l(),_.insert=a().bind(null,"head"),_.domAPI=o(),_.insertStyleElement=p(),t()(y.Z,_),y.Z&&y.Z.locals&&y.Z.locals;var v=n(262),w={};w.styleTagTransform=f(),w.setAttributes=l(),w.insert=a().bind(null,"head"),w.domAPI=o(),w.insertStyleElement=p(),t()(v.Z,w),v.Z&&v.Z.locals&&v.Z.locals;var z=n(547),S={};S.styleTagTransform=f(),S.setAttributes=l(),S.insert=a().bind(null,"head"),S.domAPI=o(),S.insertStyleElement=p(),t()(z.Z,S),z.Z&&z.Z.locals&&z.Z.locals;var T=n(605),k={};k.styleTagTransform=f(),k.setAttributes=l(),k.insert=a().bind(null,"head"),k.domAPI=o(),k.insertStyleElement=p(),t()(T.Z,k),T.Z&&T.Z.locals&&T.Z.locals;var A=n(545),j={};j.styleTagTransform=f(),j.setAttributes=l(),j.insert=a().bind(null,"head"),j.domAPI=o(),j.insertStyleElement=p(),t()(A.Z,j),A.Z&&A.Z.locals&&A.Z.locals;const D=Vue.createApp({data:()=>({products:[{id:3,title:"Bread",price:30},{id:8,title:"Ice Cream",price:80},{id:6,title:"Cucumber",price:60},{id:1,title:"Apple",price:10},{id:7,title:"Juice",price:70},{id:10,title:"Cookie",price:100},{id:4,title:"Banana",price:40},{id:5,title:"Meat",price:50},{id:2,title:"Milk",price:20},{id:9,title:"Cheese",price:90}],selected:"",title:"Перевернуть",add:"Добавить шаблонную строку",add2:"Добавить",del:"Удалить последний элемент",list:[{id:1,text:"xz"},{id:2,text:"xz2"}],inputValue:""}),methods:{handleSort(){"Descending"===this.selected?this.descendingSort():"Ascending"===this.selected&&this.ascendingSort()},descendingSort(){this.products.sort(((e,t)=>t.price-e.price))},ascendingSort(){this.products.sort(((e,t)=>e.price-t.price))},reverseText(){this.title=this.title.split("").reverse().join("")},pushTemplateStringToArray(){this.list.push({id:this.list.length+1,text:"Новый элемент списка"})},pushStringToArray(e){e.preventDefault(),this.list.push({id:this.list.length+1,text:this.inputValue}),this.inputValue=""},deleteLastElementFromArray(){this.list.pop()},deleteElementFromArray(e,t){this.list.forEach(((e,n)=>{e.id===t.id&&this.list.splice(n,1)}))}}}),I=Vue.createApp({data:()=>({cards:[{id:1,title:"Let’s Get Solution For Building Construction Work",url:"../assets/img/art1.jpg",tag:"Kitchan Design",date:"26 December,2022 "},{id:2,title:"Low Cost Latest Invented Interior Designing Ideas",url:"../assets/img/art2.jpg",tag:"Living Design",date:"22 December,2022 "},{id:3,title:"Best For Any Office & Business Interior Solution",url:"../assets/img/art3.jpg",tag:"Interior Design",date:"25 December,2022 "},{id:4,title:"Let’s Get Solution For Building Construction Work",url:"../assets/img/art4.jpg",tag:"Kitchan Design",date:"26 December,2022 "},{id:5,title:"Low Cost Latest Invented Interior Designing Ideas",url:"../assets/img/art5.jpg",tag:"Living Design",date:"22 December,2022 "},{id:6,title:"Best For Any Office & Business Interior Solution",url:"../assets/img/art6.jpg",tag:"Interior Design",date:"25 December,2022 "}]}),methods:{}});D.mount("#rootVue"),I.mount("#root")})()})();