"use strict";(self.webpackChunkdatsumou_aphro_com=self.webpackChunkdatsumou_aphro_com||[]).push([[279],{5832:function(e){const t=/[\p{Lu}]/u,a=/[\p{Ll}]/u,n=/^[\p{Lu}](?![\p{Lu}])/gu,r=/([\p{Alpha}\p{N}_]|$)/u,s=/[_.\- ]+/,i=new RegExp("^"+s.source),o=new RegExp(s.source+r.source,"gu"),l=new RegExp("\\d+"+r.source,"gu"),c=(e,r)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(r={pascalCase:!1,preserveConsecutiveUppercase:!1,...r},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const s=!1===r.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(r.locale),c=!1===r.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(r.locale);if(1===e.length)return r.pascalCase?c(e):s(e);return e!==s(e)&&(e=((e,n,r)=>{let s=!1,i=!1,o=!1;for(let l=0;l<e.length;l++){const c=e[l];s&&t.test(c)?(e=e.slice(0,l)+"-"+e.slice(l),s=!1,o=i,i=!0,l++):i&&o&&a.test(c)?(e=e.slice(0,l-1)+"-"+e.slice(l-1),o=i,i=!1,s=!0):(s=n(c)===c&&r(c)!==c,o=i,i=r(c)===c&&n(c)!==c)}return e})(e,s,c)),e=e.replace(i,""),e=r.preserveConsecutiveUppercase?((e,t)=>(n.lastIndex=0,e.replace(n,(e=>t(e)))))(e,s):s(e),r.pascalCase&&(e=c(e.charAt(0))+e.slice(1)),((e,t)=>(o.lastIndex=0,l.lastIndex=0,e.replace(o,((e,a)=>t(a))).replace(l,(e=>t(e)))))(e,c)};e.exports=c,e.exports.default=c},6193:function(e,t,a){a.d(t,{G:function(){return O},L:function(){return h},M:function(){return k},P:function(){return x},S:function(){return M},_:function(){return o},a:function(){return i},b:function(){return d},c:function(){return c},g:function(){return g},h:function(){return l}});var n=a(4041),r=(a(5832),a(9067)),s=a.n(r);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},i.apply(this,arguments)}function o(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)t.indexOf(a=s[n])>=0||(r[a]=e[a]);return r}const l=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;const c=e=>{var t;return(e=>{var t,a;return Boolean(null==e||null==(t=e.images)||null==(a=t.fallback)?void 0:a.src)})(e)?e:(e=>Boolean(null==e?void 0:e.gatsbyImageData))(e)?e.gatsbyImageData:(e=>Boolean(null==e?void 0:e.gatsbyImage))(e)?e.gatsbyImage:null==e||null==(t=e.childImageSharp)?void 0:t.gatsbyImageData};function u(e,t,a){const n={};let r="gatsby-image-wrapper";return"fixed"===a?(n.width=e,n.height=t):"constrained"===a&&(r="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:r,"data-gatsby-image-wrapper":"",style:n}}function d(e,t,a,n,r){return void 0===r&&(r={}),i({},a,{loading:n,shouldLoad:e,"data-main-image":"",style:i({},r,{opacity:t?1:0})})}function g(e,t,a,n,r,s,o,l){const c={};s&&(c.backgroundColor=s,"fixed"===a?(c.width=n,c.height=r,c.backgroundColor=s,c.position="relative"):("constrained"===a||"fullWidth"===a)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),o&&(c.objectFit=o),l&&(c.objectPosition=l);const u=i({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:i({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return u}const p=["children"],m=function(e){let{layout:t,width:a,height:r}=e;return"fullWidth"===t?n.createElement("div",{"aria-hidden":!0,style:{paddingTop:r/a*100+"%"}}):"constrained"===t?n.createElement("div",{style:{maxWidth:a,display:"block"}},n.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:`data:image/svg+xml;charset=utf-8,%3Csvg%20height='${r}'%20width='${a}'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E`,style:{maxWidth:"100%",display:"block",position:"static"}})):null},h=function(e){let{children:t}=e,a=o(e,p);return n.createElement(n.Fragment,null,n.createElement(m,i({},a)),t,null)},f=["src","srcSet","loading","alt","shouldLoad"],y=["fallback","sources","shouldLoad"],b=function(e){let{src:t,srcSet:a,loading:r,alt:s="",shouldLoad:l}=e,c=o(e,f);return n.createElement("img",i({},c,{decoding:"async",loading:r,src:l?t:void 0,"data-src":l?void 0:t,srcSet:l?a:void 0,"data-srcset":l?void 0:a,alt:s}))},v=function(e){let{fallback:t,sources:a=[],shouldLoad:r=!0}=e,s=o(e,y);const l=s.sizes||(null==t?void 0:t.sizes),c=n.createElement(b,i({},s,t,{sizes:l,shouldLoad:r}));return a.length?n.createElement("picture",null,a.map((e=>{let{media:t,srcSet:a,type:s}=e;return n.createElement("source",{key:`${t}-${s}-${a}`,type:s,media:t,srcSet:r?a:void 0,"data-srcset":r?void 0:a,sizes:l})})),c):c};var w;b.propTypes={src:r.string.isRequired,alt:r.string.isRequired,sizes:r.string,srcSet:r.string,shouldLoad:r.bool},v.displayName="Picture",v.propTypes={alt:r.string.isRequired,shouldLoad:r.bool,fallback:r.exact({src:r.string.isRequired,srcSet:r.string,sizes:r.string}),sources:r.arrayOf(r.oneOfType([r.exact({media:r.string.isRequired,type:r.string,sizes:r.string,srcSet:r.string.isRequired}),r.exact({media:r.string,type:r.string.isRequired,sizes:r.string,srcSet:r.string.isRequired})]))};const E=["fallback"],x=function(e){let{fallback:t}=e,a=o(e,E);return t?n.createElement(v,i({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):n.createElement("div",i({},a))};x.displayName="Placeholder",x.propTypes={fallback:r.string,sources:null==(w=v.propTypes)?void 0:w.sources,alt:function(e,t,a){return e[t]?new Error(`Invalid prop \`${t}\` supplied to \`${a}\`. Validation failed.`):null}};const k=function(e){return n.createElement(n.Fragment,null,n.createElement(v,i({},e)),n.createElement("noscript",null,n.createElement(v,i({},e,{shouldLoad:!0}))))};k.displayName="MainImage",k.propTypes=v.propTypes;const L=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],S=["style","className"],C=e=>e.replace(/\n/g,""),I=function(e,t,a){for(var n=arguments.length,r=new Array(n>3?n-3:0),i=3;i<n;i++)r[i-3]=arguments[i];return e.alt||""===e.alt?s().string.apply(s(),[e,t,a].concat(r)):new Error(`The "alt" prop is required in ${a}. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html`)},T={image:s().object.isRequired,alt:I},$=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],N=["style","className"],A=new Set;let j,_;const z=function(e){let{as:t="div",image:r,style:s,backgroundColor:c,className:d,class:g,onStartLoad:p,onLoad:m,onError:h}=e,f=o(e,$);const{width:y,height:b,layout:v}=r,w=u(y,b,v),{style:E,className:x}=w,k=o(w,N),L=(0,n.useRef)(),S=(0,n.useMemo)((()=>JSON.stringify(r.images)),[r.images]);g&&(d=g);const C=function(e,t,a){let n="";return"fullWidth"===e&&(n=`<div aria-hidden="true" style="padding-top: ${a/t*100}%;"></div>`),"constrained"===e&&(n=`<div style="max-width: ${t}px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height='${a}'%20width='${t}'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E" style="max-width: 100%; display: block; position: static;"></div>`),n}(v,y,b);return(0,n.useEffect)((()=>{j||(j=a.e(511).then(a.bind(a,9511)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:a}=e;return _=t,{renderImageToString:t,swapPlaceholderImage:a}})));const e=L.current.querySelector("[data-gatsby-image-ssr]");if(e&&l())return e.complete?(null==p||p({wasCached:!0}),null==m||m({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==p||p({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==m||m({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void A.add(S);if(_&&A.has(S))return;let t,n;return j.then((e=>{let{renderImageToString:a,swapPlaceholderImage:o}=e;L.current&&(L.current.innerHTML=a(i({isLoading:!0,isLoaded:A.has(S),image:r},f)),A.has(S)||(t=requestAnimationFrame((()=>{L.current&&(n=o(L.current,S,A,s,p,m,h))}))))})),()=>{t&&cancelAnimationFrame(t),n&&n()}}),[r]),(0,n.useLayoutEffect)((()=>{A.has(S)&&_&&(L.current.innerHTML=_(i({isLoading:A.has(S),isLoaded:A.has(S),image:r},f)),null==p||p({wasCached:!0}),null==m||m({wasCached:!0}))}),[r]),(0,n.createElement)(t,i({},k,{style:i({},E,s,{backgroundColor:c}),className:`${x}${d?` ${d}`:""}`,ref:L,dangerouslySetInnerHTML:{__html:C},suppressHydrationWarning:!0}))},O=(0,n.memo)((function(e){return e.image?(0,n.createElement)(z,e):null}));O.propTypes=T,O.displayName="GatsbyImage";const P=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function R(e){return function(t){let{src:a,__imageData:r,__error:s}=t,l=o(t,P);return s&&console.warn(s),r?n.createElement(e,i({image:r},l)):(console.warn("Image not loaded",a),null)}}const q=R((function(e){let{as:t="div",className:a,class:r,style:s,image:l,loading:c="lazy",imgClassName:p,imgStyle:m,backgroundColor:f,objectFit:y,objectPosition:b}=e,v=o(e,L);if(!l)return console.warn("[gatsby-plugin-image] Missing image prop"),null;r&&(a=r),m=i({objectFit:y,objectPosition:b,backgroundColor:f},m);const{width:w,height:E,layout:I,images:T,placeholder:$,backgroundColor:N}=l,A=u(w,E,I),{style:j,className:_}=A,z=o(A,S),O={fallback:void 0,sources:[]};return T.fallback&&(O.fallback=i({},T.fallback,{srcSet:T.fallback.srcSet?C(T.fallback.srcSet):void 0})),T.sources&&(O.sources=T.sources.map((e=>i({},e,{srcSet:C(e.srcSet)})))),n.createElement(t,i({},z,{style:i({},j,s,{backgroundColor:f}),className:`${_}${a?` ${a}`:""}`}),n.createElement(h,{layout:I,width:w,height:E},n.createElement(x,i({},g($,!1,I,w,E,N,y,b))),n.createElement(k,i({"data-gatsby-image-ssr":"",className:p},v,d("eager"===c,!1,O,c,m)))))})),F=function(e,t){for(var a=arguments.length,n=new Array(a>2?a-2:0),r=2;r<a;r++)n[r-2]=arguments[r];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?s().number.apply(s(),[e,t].concat(n)):new Error(`"${t}" ${e[t]} may not be passed when layout is fullWidth.`)},W=new Set(["fixed","fullWidth","constrained"]),Y={src:s().string.isRequired,alt:I,width:F,height:F,sizes:s().string,layout:e=>{if(void 0!==e.layout&&!W.has(e.layout))return new Error(`Invalid value ${e.layout}" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".`)}};q.displayName="StaticImage",q.propTypes=Y;const M=R(O);M.displayName="StaticImage",M.propTypes=Y},7938:function(e,t,a){a.d(t,{K:function(){return p}});var n=a(4041),r=a(6193),s=a(7164),i=a(7834),o=a(3551),l=a(8263),c=a(8930),u=a(7437);const d=1e3,g=e=>new Promise((t=>setTimeout(t,e))),p=e=>{let{isLoaded:t,images:a,messages:p}=e;const[m,h]=n.useState(0),[f,y]=n.useState(!1),[b,v]=n.useState(!1);n.useEffect((()=>{const e=()=>{v(document.documentElement.clientWidth<document.documentElement.clientHeight)};return e(),window.addEventListener("load",e),window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}}),[]),n.useEffect((()=>{const e=async()=>{y(!0),await g(d),await g(3e3),y(!1),await g(d),h((e=>(e+1)%a.length))};let t;return a.length>1?(t=setInterval(e,5e3),e()):y(!0),()=>{clearTimeout(t)}}),[]);const w=(0,c.useStaticQuery)("58035054"),E=w.allFile.nodes.find((e=>{let{relativePath:t}=e;return t===a[m].pc})),x=w.allFile.nodes.find((e=>{let{relativePath:t}=e;return t===a[m].sp}));if(!E||!(0,r.c)(E))return(0,u.Y)(n.Fragment,null);const k=(0,r.c)(E);if(!x||!(0,r.c)(x))return(0,u.Y)(n.Fragment,null);const L=(0,r.c)(x);return(0,u.Y)(s.A,{sx:{position:"relative",marginTop:-1*l.V6+"px",transition:"height 250ms ease-out",height:"100vh",overflow:"hidden"}},(0,u.Y)(s.A,{sx:{position:"absolute",width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center",zIndex:9}},(0,u.Y)(s.A,{sx:{position:"absolute",width:"100dvw",height:"100dvh",overflow:"hidden",backgroundColor:"white"}},(0,u.Y)(s.A,{sx:{position:"absolute",width:"100%",height:"100%",backgroundColor:"rgba(0, 0, 0, 0.25)",zIndex:99}}),(0,u.Y)(r.G,{image:b?L:k,alt:"main",objectPosition:"50% 0%",style:{width:"100%",height:"100%",opacity:f?1:0,transition:"all 1000ms ease-out"}})),(0,u.Y)(i.A,null,(0,u.Y)(s.A,{sx:{display:"flex",height:"100dvh",justifyContent:"flex-end",mb:"35%",alignItems:"flex-start",flexDirection:"column"}},null==p?void 0:p.map(((e,a)=>{const n=500*a+1e3;return(0,u.Y)(s.A,{key:a,sx:{zIndex:999,transition:[`opacity 1000ms ease-out ${n}ms`,`transform 1000ms ease-out ${n}ms`].join(","),opacity:t?1:0,transform:`translateY(${t?0:100}px)`}},(0,u.Y)(o.A,{color:"white",sx:{display:"block",fontSize:{lg:80,md:60,sm:40,xs:40},textShadow:"1px 1px 4px #555",fontWeight:300,fontFamily:"serif",etterSpacing:"0.1em",lineHeight:1.5}},e))}))))))}}}]);
//# sourceMappingURL=24da49c5efbb99e0861b0a6c61abb6d61e08c569-4ac074c47fee2bf4c47e.js.map