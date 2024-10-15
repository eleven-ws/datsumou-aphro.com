"use strict";(self.webpackChunkdatsumou_aphro_com=self.webpackChunkdatsumou_aphro_com||[]).push([[123],{6767:function(o,t,e){var a=e(8473);t.A=a.A},8473:function(o,t,e){e.d(t,{A:function(){return i}});var a=e(4041);function i(o,t){return a.isValidElement(o)&&-1!==t.indexOf(o.type.muiName??o.type?._payload?.value?.muiName)}},5828:function(o,t,e){e.r(t),e.d(t,{Head:function(){return q},default:function(){return V}});var a=e(4041),i=e(6193),s=e(7164),r=e(8239),c=e(7834),n=e(3551),d=e(4357);function f(o,t,e=void 0){const a={};for(const i in o){const s=o[i];let r="";for(let o=0;o<s.length;o+=1){const a=s[o];a&&(r+=t(a)+" ",e&&e[a]&&(r+=e[a]+" "))}a[i]=r}return a}var p=e(1848),l=e(3541);var u=a.createContext({}),m=e(1609),b=e(8413);function w(o){return(0,m.Ay)("MuiTimeline",o)}(0,b.A)("MuiTimeline",["root","positionLeft","positionRight","positionAlternate","positionAlternateReverse"]);var h=e(8466);function g(o){return"alternate-reverse"===o?"positionAlternateReverse":`position${(0,h.A)(o)}`}var x=e(1085);const v=(0,p.Ay)("ul",{name:"MuiTimeline",slot:"Root",overridesResolver:(o,t)=>{const{ownerState:e}=o;return[t.root,e.position&&t[g(e.position)]]}})({display:"flex",flexDirection:"column",padding:"6px 16px",flexGrow:1});var y=a.forwardRef((function(o,t){const e=(0,l.A)({props:o,name:"MuiTimeline"}),{position:i="right",className:s,...r}=e,c={...e,position:i},n=(o=>{const{position:t,classes:e}=o;return f({root:["root",t&&g(t)]},w,e)})(c),p=a.useMemo((()=>({position:i})),[i]);return(0,x.jsx)(u.Provider,{value:p,children:(0,x.jsx)(v,{className:(0,d.A)(n.root,s),ownerState:c,ref:t,...r})})}));function A(o){return(0,m.Ay)("MuiTimelineItem",o)}var j=(0,b.A)("MuiTimelineItem",["root","positionLeft","positionRight","positionAlternate","positionAlternateReverse","missingOppositeContent"]),S=e(6767);function C(o){return(0,m.Ay)("MuiTimelineContent",o)}var Y=(0,b.A)("MuiTimelineContent",["root","positionLeft","positionRight","positionAlternate","positionAlternateReverse"]);var R=(0,b.A)("MuiTimelineOppositeContent",["root","positionLeft","positionRight","positionAlternate","positionAlternateReverse"]);const k=(0,p.Ay)("li",{name:"MuiTimelineItem",slot:"Root",overridesResolver:(o,t)=>{const{ownerState:e}=o;return[t.root,t[g(e.position)]]}})((({ownerState:o})=>({listStyle:"none",display:"flex",position:"relative",minHeight:70,..."left"===o.position&&{flexDirection:"row-reverse"},...("alternate"===o.position||"alternate-reverse"===o.position)&&{[`&:nth-of-type(${"alternate"===o.position?"even":"odd"})`]:{flexDirection:"row-reverse",[`& .${Y.root}`]:{textAlign:"right"},[`& .${R.root}`]:{textAlign:"left"}}},...!o.hasOppositeContent&&{"&::before":{content:'""',flex:1,padding:"6px 16px"}}})));var M=a.forwardRef((function(o,t){const e=(0,l.A)({props:o,name:"MuiTimelineItem"}),{position:i,className:s,...r}=e,{position:c}=a.useContext(u);let n=!1;a.Children.forEach(e.children,(o=>{(0,S.A)(o,["TimelineOppositeContent"])&&(n=!0)}));const p={...e,position:i||c||"right",hasOppositeContent:n},m=(o=>{const{position:t,classes:e,hasOppositeContent:a}=o;return f({root:["root",g(t),!a&&"missingOppositeContent"]},A,e)})(p),b=a.useMemo((()=>({position:p.position})),[p.position]);return(0,x.jsx)(u.Provider,{value:b,children:(0,x.jsx)(k,{className:(0,d.A)(m.root,s),ownerState:p,ref:t,...r})})}));function T(o){return(0,m.Ay)("MuiTimelineSeparator",o)}(0,b.A)("MuiTimelineSeparator",["root"]);const N=(0,p.Ay)("div",{name:"MuiTimelineSeparator",slot:"Root",overridesResolver:(o,t)=>t.root})({display:"flex",flexDirection:"column",flex:0,alignItems:"center"});var _=a.forwardRef((function(o,t){const e=(0,l.A)({props:o,name:"MuiTimelineSeparator"}),{className:a,...i}=e,s=e,r=(o=>{const{classes:t}=o;return f({root:["root"]},T,t)})(s);return(0,x.jsx)(N,{className:(0,d.A)(r.root,a),ownerState:s,ref:t,...i})}));function z(o){return(0,m.Ay)("MuiTimelineConnector",o)}(0,b.A)("MuiTimelineConnector",["root"]);const D=(0,p.Ay)("span",{name:"MuiTimelineConnector",slot:"Root",overridesResolver:(o,t)=>t.root})((({theme:o})=>({width:2,backgroundColor:(o.vars||o).palette.grey[400],flexGrow:1})));var O=a.forwardRef((function(o,t){const e=(0,l.A)({props:o,name:"MuiTimelineConnector"}),{className:a,...i}=e,s=e,r=(o=>{const{classes:t}=o;return f({root:["root"]},z,t)})(s);return(0,x.jsx)(D,{className:(0,d.A)(r.root,a),ownerState:s,ref:t,...i})}));const J=(0,p.Ay)(n.A,{name:"MuiTimelineContent",slot:"Root",overridesResolver:(o,t)=>{const{ownerState:e}=o;return[t.root,t[g(e.position)]]}})((({ownerState:o})=>({flex:1,padding:"6px 16px",textAlign:"left",..."left"===o.position&&{textAlign:"right"}})));var $=a.forwardRef((function(o,t){const e=(0,l.A)({props:o,name:"MuiTimelineContent"}),{className:i,...s}=e,{position:r}=a.useContext(u),c={...e,position:r||"right"},n=(o=>{const{position:t,classes:e}=o;return f({root:["root",g(t)]},C,e)})(c);return(0,x.jsx)(J,{component:"div",className:(0,d.A)(n.root,i),ownerState:c,ref:t,...s})}));function G(o){return(0,m.Ay)("MuiTimelineDot",o)}(0,b.A)("MuiTimelineDot",["root","filled","outlined","filledGrey","outlinedGrey","filledPrimary","outlinedPrimary","filledSecondary","outlinedSecondary"]);const I=(0,p.Ay)("span",{name:"MuiTimelineDot",slot:"Root",overridesResolver:(o,t)=>{const{ownerState:e}=o;return[t.root,t["inherit"!==e.color&&`${e.variant}${(0,h.A)(e.color)}`],t[e.variant]]}})((({ownerState:o,theme:t})=>({display:"flex",alignSelf:"baseline",borderStyle:"solid",borderWidth:2,padding:4,borderRadius:"50%",boxShadow:(t.vars||t).shadows[1],margin:"11.5px 0",..."filled"===o.variant&&{borderColor:"transparent",..."inherit"!==o.color&&{..."grey"===o.color?{color:(t.vars||t).palette.grey[50],backgroundColor:(t.vars||t).palette.grey[400]}:{color:(t.vars||t).palette[o.color].contrastText,backgroundColor:(t.vars||t).palette[o.color].main}}},..."outlined"===o.variant&&{boxShadow:"none",backgroundColor:"transparent",..."inherit"!==o.color&&{..."grey"===o.color?{borderColor:(t.vars||t).palette.grey[400]}:{borderColor:(t.vars||t).palette[o.color].main}}}})));var L=a.forwardRef((function(o,t){const e=(0,l.A)({props:o,name:"MuiTimelineDot"}),{className:a,color:i="grey",variant:s="filled",...r}=e,c={...e,color:i,variant:s},n=(o=>{const{color:t,variant:e,classes:a}=o;return f({root:["root",e,"inherit"!==t&&`${e}${(0,h.A)(t)}`]},G,a)})(c);return(0,x.jsx)(I,{className:(0,d.A)(n.root,a),ownerState:c,ref:t,...r})})),P=e(8263),E=e(1042),F=e(7938),H=e(7212),W=e(7437);const K="5dvw";var V=()=>{const[o,t]=a.useState(!1);return a.useEffect((()=>{t(!0)}),[]),(0,W.Y)(P.PE,null,(0,W.Y)(F.K,{isLoaded:o,images:[{pc:"flowvisual-1.jpg",sp:"flowvisual-1-rp.jpg"},{pc:"flowvisual-2.jpg",sp:"flowvisual-2-rp.jpg"}],messages:[(0,W.Y)(a.Fragment,null,"デイサービスでの"),(0,W.Y)(a.Fragment,null,"一日の流れ")]}),(0,W.Y)(s.A,{sx:{transition:"opacity 2000ms ease-out",opacity:o?1:0,overflow:"hidden"}},(0,W.Y)(s.A,{bgcolor:"background.default"},(0,W.Y)(s.A,{sx:{position:"relative",display:"flex",flexDirection:"column",gap:16}},(0,W.Y)(s.A,{component:"section",id:"about",mt:16,sx:{display:"flex",justifyContent:"center"}},(0,W.Y)(c.A,null,(0,W.Y)(s.A,null,(0,W.Y)(n.A,{variant:"h2",color:"primary"},"スケジュール"),(0,W.Y)(n.A,{variant:"h4"},"ご本人様とご家族のご希望とお伺いし、お身体や精神の状態にあった最適な過ごし方を提案させていただきます。",(0,W.Y)("br",null),"あなたのちょっとだけ、を実現します。"),(0,W.Y)(s.A,null,(0,W.Y)(y,{position:"right",sx:{[`& .${j.root}:before`]:{flex:0,padding:0}}},[{title:"お迎え",description:"午前の部は9:30頃、午後の部は13:45分頃ご自宅までお迎えにまいります。",image:(0,W.Y)(i.S,{src:"../images/flow-1.jpg",alt:"flow",width:480,__imageData:e(5552)})},{title:"看護師による健康チェック",description:"到着後、看護師が体温・血圧・脈拍等のチェックを行います。",image:(0,W.Y)(i.S,{src:"../images/flow-2.jpg",alt:"flow",width:480,__imageData:e(1272)})},{title:"レクリエーション",description:"簡単な心の体操やゲーム、おやつを食べながらの歓談等。季節に応じた催しもします",image:(0,W.Y)(i.S,{src:"../images/flow-3.jpg",alt:"flow",width:480,__imageData:e(4833)})},{title:"運動",description:"ひとりひとりにあった運動をお手伝いします。",image:(0,W.Y)(i.S,{src:"../images/flow-4.jpg",alt:"flow",width:480,__imageData:e(6800)})},{title:"入浴",description:"自宅では味わえないゆったり気分をお楽しみください。",image:(0,W.Y)(i.S,{src:"../images/flow-8.jpg",alt:"flow",width:480,__imageData:e(6640)})},{title:"リラクゼーション",description:"足のむくみや身体の痛みやコリを和らげる最新のマシーンを用意しております。",image:(0,W.Y)(i.S,{src:"../images/flow-6.jpg",alt:"flow",width:480,__imageData:e(4727)})},{title:"お食事",description:"ご希望のある方にはお食事を用意します。",image:(0,W.Y)(i.S,{src:"../images/flow-5.jpg",alt:"flow",width:480,__imageData:e(2298)})},{title:"お送り",description:"終了後ご自宅までお送りします。",image:(0,W.Y)(i.S,{src:"../images/flow-9.jpg",alt:"flow",width:480,__imageData:e(9899)})}].map(((o,t)=>{let{title:e,description:a,image:i}=o;return(0,W.Y)(M,{key:t},(0,W.Y)(_,null,(0,W.Y)(L,{color:"primary",sx:{m:0,width:20,height:20}}),(0,W.Y)(O,{sx:{bgcolor:"primary.main",width:4}})),(0,W.Y)($,{sx:{pb:12}},(0,W.Y)(r.Ay,{container:!0},(0,W.Y)(r.Ay,{item:!0,md:4},(0,W.Y)(n.A,{variant:"h3",color:"primary",fontWeight:"bold",sx:{mt:-1}},e)),(0,W.Y)(r.Ay,{item:!0,md:8},(0,W.Y)(s.A,{sx:{display:"inline-block",borderRadius:K,overflow:"hidden"}},i),(0,W.Y)(n.A,null,a)))))}))),(0,W.Y)(i.S,{src:"../images/flow-footer.jpg",alt:"アイネットデイサービス",style:{borderRadius:K},__imageData:e(2729)}))))))),(0,W.Y)(H.w,null)))};const q=()=>(0,W.Y)(E.G,null)},6800:function(o){o.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#a86838","images":{"fallback":{"src":"/datsumou-aphro.com/static/0047b7564db45486f9619e619026076d/fa695/flow-4.jpg","srcSet":"/datsumou-aphro.com/static/0047b7564db45486f9619e619026076d/9c3ad/flow-4.jpg 120w,\\n/datsumou-aphro.com/static/0047b7564db45486f9619e619026076d/f643e/flow-4.jpg 240w,\\n/datsumou-aphro.com/static/0047b7564db45486f9619e619026076d/fa695/flow-4.jpg 480w,\\n/datsumou-aphro.com/static/0047b7564db45486f9619e619026076d/9f3ff/flow-4.jpg 960w","sizes":"(min-width: 480px) 480px, 100vw"},"sources":[{"srcSet":"/datsumou-aphro.com/static/0047b7564db45486f9619e619026076d/02f98/flow-4.webp 120w,\\n/datsumou-aphro.com/static/0047b7564db45486f9619e619026076d/e46a8/flow-4.webp 240w,\\n/datsumou-aphro.com/static/0047b7564db45486f9619e619026076d/95a23/flow-4.webp 480w,\\n/datsumou-aphro.com/static/0047b7564db45486f9619e619026076d/42d4c/flow-4.webp 960w","type":"image/webp","sizes":"(min-width: 480px) 480px, 100vw"}]},"width":480,"height":320}')},1272:function(o){o.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/datsumou-aphro.com/static/70844b1a71b4b6375a5d4644f9fdb3b1/fa695/flow-2.jpg","srcSet":"/datsumou-aphro.com/static/70844b1a71b4b6375a5d4644f9fdb3b1/9c3ad/flow-2.jpg 120w,\\n/datsumou-aphro.com/static/70844b1a71b4b6375a5d4644f9fdb3b1/f643e/flow-2.jpg 240w,\\n/datsumou-aphro.com/static/70844b1a71b4b6375a5d4644f9fdb3b1/fa695/flow-2.jpg 480w,\\n/datsumou-aphro.com/static/70844b1a71b4b6375a5d4644f9fdb3b1/9f3ff/flow-2.jpg 960w","sizes":"(min-width: 480px) 480px, 100vw"},"sources":[{"srcSet":"/datsumou-aphro.com/static/70844b1a71b4b6375a5d4644f9fdb3b1/02f98/flow-2.webp 120w,\\n/datsumou-aphro.com/static/70844b1a71b4b6375a5d4644f9fdb3b1/e46a8/flow-2.webp 240w,\\n/datsumou-aphro.com/static/70844b1a71b4b6375a5d4644f9fdb3b1/95a23/flow-2.webp 480w,\\n/datsumou-aphro.com/static/70844b1a71b4b6375a5d4644f9fdb3b1/42d4c/flow-2.webp 960w","type":"image/webp","sizes":"(min-width: 480px) 480px, 100vw"}]},"width":480,"height":320}')},9899:function(o){o.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#e8e8e8","images":{"fallback":{"src":"/datsumou-aphro.com/static/49d63d27d871f6f62d12e6d77b58aeb9/fa695/flow-9.jpg","srcSet":"/datsumou-aphro.com/static/49d63d27d871f6f62d12e6d77b58aeb9/9c3ad/flow-9.jpg 120w,\\n/datsumou-aphro.com/static/49d63d27d871f6f62d12e6d77b58aeb9/f643e/flow-9.jpg 240w,\\n/datsumou-aphro.com/static/49d63d27d871f6f62d12e6d77b58aeb9/fa695/flow-9.jpg 480w,\\n/datsumou-aphro.com/static/49d63d27d871f6f62d12e6d77b58aeb9/9f3ff/flow-9.jpg 960w","sizes":"(min-width: 480px) 480px, 100vw"},"sources":[{"srcSet":"/datsumou-aphro.com/static/49d63d27d871f6f62d12e6d77b58aeb9/02f98/flow-9.webp 120w,\\n/datsumou-aphro.com/static/49d63d27d871f6f62d12e6d77b58aeb9/e46a8/flow-9.webp 240w,\\n/datsumou-aphro.com/static/49d63d27d871f6f62d12e6d77b58aeb9/95a23/flow-9.webp 480w,\\n/datsumou-aphro.com/static/49d63d27d871f6f62d12e6d77b58aeb9/42d4c/flow-9.webp 960w","type":"image/webp","sizes":"(min-width: 480px) 480px, 100vw"}]},"width":480,"height":320}')},4727:function(o){o.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/datsumou-aphro.com/static/80d06e663190b471666927f7356cb627/fdd27/flow-6.jpg","srcSet":"/datsumou-aphro.com/static/80d06e663190b471666927f7356cb627/ce903/flow-6.jpg 120w,\\n/datsumou-aphro.com/static/80d06e663190b471666927f7356cb627/be680/flow-6.jpg 240w,\\n/datsumou-aphro.com/static/80d06e663190b471666927f7356cb627/fdd27/flow-6.jpg 480w,\\n/datsumou-aphro.com/static/80d06e663190b471666927f7356cb627/93fdb/flow-6.jpg 960w","sizes":"(min-width: 480px) 480px, 100vw"},"sources":[{"srcSet":"/datsumou-aphro.com/static/80d06e663190b471666927f7356cb627/43b57/flow-6.webp 120w,\\n/datsumou-aphro.com/static/80d06e663190b471666927f7356cb627/226ed/flow-6.webp 240w,\\n/datsumou-aphro.com/static/80d06e663190b471666927f7356cb627/a1501/flow-6.webp 480w,\\n/datsumou-aphro.com/static/80d06e663190b471666927f7356cb627/55375/flow-6.webp 960w","type":"image/webp","sizes":"(min-width: 480px) 480px, 100vw"}]},"width":480,"height":360}')},2298:function(o){o.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/datsumou-aphro.com/static/2f88109a745fd7a6455b27dbb698fb67/fa695/flow-5.jpg","srcSet":"/datsumou-aphro.com/static/2f88109a745fd7a6455b27dbb698fb67/9c3ad/flow-5.jpg 120w,\\n/datsumou-aphro.com/static/2f88109a745fd7a6455b27dbb698fb67/f643e/flow-5.jpg 240w,\\n/datsumou-aphro.com/static/2f88109a745fd7a6455b27dbb698fb67/fa695/flow-5.jpg 480w,\\n/datsumou-aphro.com/static/2f88109a745fd7a6455b27dbb698fb67/9f3ff/flow-5.jpg 960w","sizes":"(min-width: 480px) 480px, 100vw"},"sources":[{"srcSet":"/datsumou-aphro.com/static/2f88109a745fd7a6455b27dbb698fb67/02f98/flow-5.webp 120w,\\n/datsumou-aphro.com/static/2f88109a745fd7a6455b27dbb698fb67/e46a8/flow-5.webp 240w,\\n/datsumou-aphro.com/static/2f88109a745fd7a6455b27dbb698fb67/95a23/flow-5.webp 480w,\\n/datsumou-aphro.com/static/2f88109a745fd7a6455b27dbb698fb67/42d4c/flow-5.webp 960w","type":"image/webp","sizes":"(min-width: 480px) 480px, 100vw"}]},"width":480,"height":320}')},6640:function(o){o.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#f8c8a8","images":{"fallback":{"src":"/datsumou-aphro.com/static/a799ec07708280fc1380c8b63c4195cb/fa695/flow-8.jpg","srcSet":"/datsumou-aphro.com/static/a799ec07708280fc1380c8b63c4195cb/9c3ad/flow-8.jpg 120w,\\n/datsumou-aphro.com/static/a799ec07708280fc1380c8b63c4195cb/f643e/flow-8.jpg 240w,\\n/datsumou-aphro.com/static/a799ec07708280fc1380c8b63c4195cb/fa695/flow-8.jpg 480w,\\n/datsumou-aphro.com/static/a799ec07708280fc1380c8b63c4195cb/9f3ff/flow-8.jpg 960w","sizes":"(min-width: 480px) 480px, 100vw"},"sources":[{"srcSet":"/datsumou-aphro.com/static/a799ec07708280fc1380c8b63c4195cb/02f98/flow-8.webp 120w,\\n/datsumou-aphro.com/static/a799ec07708280fc1380c8b63c4195cb/e46a8/flow-8.webp 240w,\\n/datsumou-aphro.com/static/a799ec07708280fc1380c8b63c4195cb/95a23/flow-8.webp 480w,\\n/datsumou-aphro.com/static/a799ec07708280fc1380c8b63c4195cb/42d4c/flow-8.webp 960w","type":"image/webp","sizes":"(min-width: 480px) 480px, 100vw"}]},"width":480,"height":320}')},5552:function(o){o.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#181818","images":{"fallback":{"src":"/datsumou-aphro.com/static/3ff4e29d9ea8bdd61d09341eb8adc7db/fa695/flow-1.jpg","srcSet":"/datsumou-aphro.com/static/3ff4e29d9ea8bdd61d09341eb8adc7db/9c3ad/flow-1.jpg 120w,\\n/datsumou-aphro.com/static/3ff4e29d9ea8bdd61d09341eb8adc7db/f643e/flow-1.jpg 240w,\\n/datsumou-aphro.com/static/3ff4e29d9ea8bdd61d09341eb8adc7db/fa695/flow-1.jpg 480w,\\n/datsumou-aphro.com/static/3ff4e29d9ea8bdd61d09341eb8adc7db/9f3ff/flow-1.jpg 960w","sizes":"(min-width: 480px) 480px, 100vw"},"sources":[{"srcSet":"/datsumou-aphro.com/static/3ff4e29d9ea8bdd61d09341eb8adc7db/02f98/flow-1.webp 120w,\\n/datsumou-aphro.com/static/3ff4e29d9ea8bdd61d09341eb8adc7db/e46a8/flow-1.webp 240w,\\n/datsumou-aphro.com/static/3ff4e29d9ea8bdd61d09341eb8adc7db/95a23/flow-1.webp 480w,\\n/datsumou-aphro.com/static/3ff4e29d9ea8bdd61d09341eb8adc7db/42d4c/flow-1.webp 960w","type":"image/webp","sizes":"(min-width: 480px) 480px, 100vw"}]},"width":480,"height":320}')},4833:function(o){o.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#e8e8e8","images":{"fallback":{"src":"/datsumou-aphro.com/static/59f58d71e69159b2d79477ceb8328b99/fa695/flow-3.jpg","srcSet":"/datsumou-aphro.com/static/59f58d71e69159b2d79477ceb8328b99/9c3ad/flow-3.jpg 120w,\\n/datsumou-aphro.com/static/59f58d71e69159b2d79477ceb8328b99/f643e/flow-3.jpg 240w,\\n/datsumou-aphro.com/static/59f58d71e69159b2d79477ceb8328b99/fa695/flow-3.jpg 480w,\\n/datsumou-aphro.com/static/59f58d71e69159b2d79477ceb8328b99/9f3ff/flow-3.jpg 960w","sizes":"(min-width: 480px) 480px, 100vw"},"sources":[{"srcSet":"/datsumou-aphro.com/static/59f58d71e69159b2d79477ceb8328b99/02f98/flow-3.webp 120w,\\n/datsumou-aphro.com/static/59f58d71e69159b2d79477ceb8328b99/e46a8/flow-3.webp 240w,\\n/datsumou-aphro.com/static/59f58d71e69159b2d79477ceb8328b99/95a23/flow-3.webp 480w,\\n/datsumou-aphro.com/static/59f58d71e69159b2d79477ceb8328b99/42d4c/flow-3.webp 960w","type":"image/webp","sizes":"(min-width: 480px) 480px, 100vw"}]},"width":480,"height":320}')},2729:function(o){o.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#f8e8e8","images":{"fallback":{"src":"/datsumou-aphro.com/static/551348a3545bc358c0954d0b75307989/f5fc0/flow-footer.jpg","srcSet":"/datsumou-aphro.com/static/551348a3545bc358c0954d0b75307989/ffa8e/flow-footer.jpg 1840w,\\n/datsumou-aphro.com/static/551348a3545bc358c0954d0b75307989/5094f/flow-footer.jpg 3680w,\\n/datsumou-aphro.com/static/551348a3545bc358c0954d0b75307989/f5fc0/flow-footer.jpg 7360w","sizes":"(min-width: 7360px) 7360px, 100vw"},"sources":[{"srcSet":"/datsumou-aphro.com/static/551348a3545bc358c0954d0b75307989/49ca4/flow-footer.webp 1840w,\\n/datsumou-aphro.com/static/551348a3545bc358c0954d0b75307989/9d2a3/flow-footer.webp 3680w,\\n/datsumou-aphro.com/static/551348a3545bc358c0954d0b75307989/c7879/flow-footer.webp 7360w","type":"image/webp","sizes":"(min-width: 7360px) 7360px, 100vw"}]},"width":7360,"height":4140}')}}]);
//# sourceMappingURL=component---src-pages-flow-tsx-16d2b30c6cddc0354d3a.js.map