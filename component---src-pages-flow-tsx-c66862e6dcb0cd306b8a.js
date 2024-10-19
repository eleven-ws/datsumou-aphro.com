"use strict";(self.webpackChunkdatsumou_aphro_com=self.webpackChunkdatsumou_aphro_com||[]).push([[123],{6767:function(e,t,o){var i=o(8473);t.A=i.A},8473:function(e,t,o){o.d(t,{A:function(){return a}});var i=o(4041);function a(e,t){return i.isValidElement(e)&&-1!==t.indexOf(e.type.muiName??e.type?._payload?.value?.muiName)}},5828:function(e,t,o){o.r(t),o.d(t,{Head:function(){return q},default:function(){return V}});var i=o(4041),a=o(6193),n=o(7164),s=o(8239),r=o(7834),c=o(3551),f=o(4357);function l(e,t,o=void 0){const i={};for(const a in e){const n=e[a];let s="";for(let e=0;e<n.length;e+=1){const i=n[e];i&&(s+=t(i)+" ",o&&o[i]&&(s+=o[i]+" "))}i[a]=s}return i}var d=o(1848),b=o(3541);var p=i.createContext({}),w=o(1609),u=o(8413);function g(e){return(0,w.Ay)("MuiTimeline",e)}(0,u.A)("MuiTimeline",["root","positionLeft","positionRight","positionAlternate","positionAlternateReverse"]);var m=o(8466);function h(e){return"alternate-reverse"===e?"positionAlternateReverse":`position${(0,m.A)(e)}`}var x=o(1085);const v=(0,d.Ay)("ul",{name:"MuiTimeline",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.position&&t[h(o.position)]]}})({display:"flex",flexDirection:"column",padding:"6px 16px",flexGrow:1});var y=i.forwardRef((function(e,t){const o=(0,b.A)({props:e,name:"MuiTimeline"}),{position:a="right",className:n,...s}=o,r={...o,position:a},c=(e=>{const{position:t,classes:o}=e;return l({root:["root",t&&h(t)]},g,o)})(r),d=i.useMemo((()=>({position:a})),[a]);return(0,x.jsx)(p.Provider,{value:d,children:(0,x.jsx)(v,{className:(0,f.A)(c.root,n),ownerState:r,ref:t,...s})})}));function A(e){return(0,w.Ay)("MuiTimelineItem",e)}var j=(0,u.A)("MuiTimelineItem",["root","positionLeft","positionRight","positionAlternate","positionAlternateReverse","missingOppositeContent"]),S=o(6767);function C(e){return(0,w.Ay)("MuiTimelineContent",e)}var Y=(0,u.A)("MuiTimelineContent",["root","positionLeft","positionRight","positionAlternate","positionAlternateReverse"]);var R=(0,u.A)("MuiTimelineOppositeContent",["root","positionLeft","positionRight","positionAlternate","positionAlternateReverse"]);const k=(0,d.Ay)("li",{name:"MuiTimelineItem",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,t[h(o.position)]]}})((({ownerState:e})=>({listStyle:"none",display:"flex",position:"relative",minHeight:70,..."left"===e.position&&{flexDirection:"row-reverse"},...("alternate"===e.position||"alternate-reverse"===e.position)&&{[`&:nth-of-type(${"alternate"===e.position?"even":"odd"})`]:{flexDirection:"row-reverse",[`& .${Y.root}`]:{textAlign:"right"},[`& .${R.root}`]:{textAlign:"left"}}},...!e.hasOppositeContent&&{"&::before":{content:'""',flex:1,padding:"6px 16px"}}})));var M=i.forwardRef((function(e,t){const o=(0,b.A)({props:e,name:"MuiTimelineItem"}),{position:a,className:n,...s}=o,{position:r}=i.useContext(p);let c=!1;i.Children.forEach(o.children,(e=>{(0,S.A)(e,["TimelineOppositeContent"])&&(c=!0)}));const d={...o,position:a||r||"right",hasOppositeContent:c},w=(e=>{const{position:t,classes:o,hasOppositeContent:i}=e;return l({root:["root",h(t),!i&&"missingOppositeContent"]},A,o)})(d),u=i.useMemo((()=>({position:d.position})),[d.position]);return(0,x.jsx)(p.Provider,{value:u,children:(0,x.jsx)(k,{className:(0,f.A)(w.root,n),ownerState:d,ref:t,...s})})}));function T(e){return(0,w.Ay)("MuiTimelineSeparator",e)}(0,u.A)("MuiTimelineSeparator",["root"]);const N=(0,d.Ay)("div",{name:"MuiTimelineSeparator",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"flex",flexDirection:"column",flex:0,alignItems:"center"});var _=i.forwardRef((function(e,t){const o=(0,b.A)({props:e,name:"MuiTimelineSeparator"}),{className:i,...a}=o,n=o,s=(e=>{const{classes:t}=e;return l({root:["root"]},T,t)})(n);return(0,x.jsx)(N,{className:(0,f.A)(s.root,i),ownerState:n,ref:t,...a})}));function z(e){return(0,w.Ay)("MuiTimelineConnector",e)}(0,u.A)("MuiTimelineConnector",["root"]);const D=(0,d.Ay)("span",{name:"MuiTimelineConnector",slot:"Root",overridesResolver:(e,t)=>t.root})((({theme:e})=>({width:2,backgroundColor:(e.vars||e).palette.grey[400],flexGrow:1})));var O=i.forwardRef((function(e,t){const o=(0,b.A)({props:e,name:"MuiTimelineConnector"}),{className:i,...a}=o,n=o,s=(e=>{const{classes:t}=e;return l({root:["root"]},z,t)})(n);return(0,x.jsx)(D,{className:(0,f.A)(s.root,i),ownerState:n,ref:t,...a})}));const J=(0,d.Ay)(c.A,{name:"MuiTimelineContent",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,t[h(o.position)]]}})((({ownerState:e})=>({flex:1,padding:"6px 16px",textAlign:"left",..."left"===e.position&&{textAlign:"right"}})));var $=i.forwardRef((function(e,t){const o=(0,b.A)({props:e,name:"MuiTimelineContent"}),{className:a,...n}=o,{position:s}=i.useContext(p),r={...o,position:s||"right"},c=(e=>{const{position:t,classes:o}=e;return l({root:["root",h(t)]},C,o)})(r);return(0,x.jsx)(J,{component:"div",className:(0,f.A)(c.root,a),ownerState:r,ref:t,...n})}));function G(e){return(0,w.Ay)("MuiTimelineDot",e)}(0,u.A)("MuiTimelineDot",["root","filled","outlined","filledGrey","outlinedGrey","filledPrimary","outlinedPrimary","filledSecondary","outlinedSecondary"]);const I=(0,d.Ay)("span",{name:"MuiTimelineDot",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,t["inherit"!==o.color&&`${o.variant}${(0,m.A)(o.color)}`],t[o.variant]]}})((({ownerState:e,theme:t})=>({display:"flex",alignSelf:"baseline",borderStyle:"solid",borderWidth:2,padding:4,borderRadius:"50%",boxShadow:(t.vars||t).shadows[1],margin:"11.5px 0",..."filled"===e.variant&&{borderColor:"transparent",..."inherit"!==e.color&&{..."grey"===e.color?{color:(t.vars||t).palette.grey[50],backgroundColor:(t.vars||t).palette.grey[400]}:{color:(t.vars||t).palette[e.color].contrastText,backgroundColor:(t.vars||t).palette[e.color].main}}},..."outlined"===e.variant&&{boxShadow:"none",backgroundColor:"transparent",..."inherit"!==e.color&&{..."grey"===e.color?{borderColor:(t.vars||t).palette.grey[400]}:{borderColor:(t.vars||t).palette[e.color].main}}}})));var L=i.forwardRef((function(e,t){const o=(0,b.A)({props:e,name:"MuiTimelineDot"}),{className:i,color:a="grey",variant:n="filled",...s}=o,r={...o,color:a,variant:n},c=(e=>{const{color:t,variant:o,classes:i}=e;return l({root:["root",o,"inherit"!==t&&`${o}${(0,m.A)(t)}`]},G,i)})(r);return(0,x.jsx)(I,{className:(0,f.A)(c.root,i),ownerState:r,ref:t,...s})})),P=o(8263),E=o(1042),F=o(7938),H=o(7212),W=o(7437);const K="5dvw";var V=()=>{const[e,t]=i.useState(!1);return i.useEffect((()=>{t(!0)}),[]),(0,W.Y)(P.PE,null,(0,W.Y)(F.K,{isLoaded:e,images:[{pc:"flowvisual-1.jpg",sp:"flowvisual-1-rp.jpg"},{pc:"flowvisual-2.jpg",sp:"flowvisual-2-rp.jpg"}],messages:[(0,W.Y)(i.Fragment,null,"デイサービスでの"),(0,W.Y)(i.Fragment,null,"一日の流れ")]}),(0,W.Y)(n.A,{sx:{transition:"opacity 2000ms ease-out",opacity:e?1:0,overflow:"hidden"}},(0,W.Y)(n.A,{bgcolor:"background.default"},(0,W.Y)(n.A,{sx:{position:"relative",display:"flex",flexDirection:"column",gap:16}},(0,W.Y)(n.A,{component:"section",id:"about",mt:16,sx:{display:"flex",justifyContent:"center"}},(0,W.Y)(r.A,null,(0,W.Y)(n.A,null,(0,W.Y)(c.A,{variant:"h2",color:"primary"},"スケジュール"),(0,W.Y)(c.A,{variant:"h4"},"ご本人様とご家族のご希望とお伺いし、お身体や精神の状態にあった最適な過ごし方を提案させていただきます。",(0,W.Y)("br",null),"あなたのちょっとだけ、を実現します。"),(0,W.Y)(n.A,null,(0,W.Y)(y,{position:"right",sx:{[`& .${j.root}:before`]:{flex:0,padding:0}}},[{title:"お迎え",description:"午前の部は9:30頃、午後の部は13:45分頃ご自宅までお迎えにまいります。",image:(0,W.Y)(a.S,{src:"../images/flow-1.jpg",alt:"flow",width:480,__imageData:o(5552)})},{title:"看護師による健康チェック",description:"到着後、看護師が体温・血圧・脈拍等のチェックを行います。",image:(0,W.Y)(a.S,{src:"../images/flow-2.jpg",alt:"flow",width:480,__imageData:o(1272)})},{title:"レクリエーション",description:"簡単な心の体操やゲーム、おやつを食べながらの歓談等。季節に応じた催しもします",image:(0,W.Y)(a.S,{src:"../images/flow-3.jpg",alt:"flow",width:480,__imageData:o(4833)})},{title:"運動",description:"ひとりひとりにあった運動をお手伝いします。",image:(0,W.Y)(a.S,{src:"../images/flow-4.jpg",alt:"flow",width:480,__imageData:o(6800)})},{title:"入浴",description:"自宅では味わえないゆったり気分をお楽しみください。",image:(0,W.Y)(a.S,{src:"../images/flow-8.jpg",alt:"flow",width:480,__imageData:o(6640)})},{title:"リラクゼーション",description:"足のむくみや身体の痛みやコリを和らげる最新のマシーンを用意しております。",image:(0,W.Y)(a.S,{src:"../images/flow-6.jpg",alt:"flow",width:480,__imageData:o(4727)})},{title:"お食事",description:"ご希望のある方にはお食事を用意します。",image:(0,W.Y)(a.S,{src:"../images/flow-5.jpg",alt:"flow",width:480,__imageData:o(2298)})},{title:"お送り",description:"終了後ご自宅までお送りします。",image:(0,W.Y)(a.S,{src:"../images/flow-9.jpg",alt:"flow",width:480,__imageData:o(9899)})}].map(((e,t)=>{let{title:o,description:i,image:a}=e;return(0,W.Y)(M,{key:t},(0,W.Y)(_,null,(0,W.Y)(L,{color:"primary",sx:{m:0,width:20,height:20}}),(0,W.Y)(O,{sx:{bgcolor:"primary.main",width:4}})),(0,W.Y)($,{sx:{pb:12}},(0,W.Y)(s.Ay,{container:!0},(0,W.Y)(s.Ay,{item:!0,md:4},(0,W.Y)(c.A,{variant:"h3",color:"primary",fontWeight:"bold",sx:{mt:-1}},o)),(0,W.Y)(s.Ay,{item:!0,md:8},(0,W.Y)(n.A,{sx:{display:"inline-block",borderRadius:K,overflow:"hidden"}},a),(0,W.Y)(c.A,null,i)))))}))),(0,W.Y)(a.S,{src:"../images/flow-footer.jpg",alt:"アイネットデイサービス",style:{borderRadius:K},__imageData:o(2729)}))))))),(0,W.Y)(H.w,null)))};const q=()=>(0,W.Y)(E.G,null)},6800:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#a86838","images":{"fallback":{"src":"/static/0047b7564db45486f9619e619026076d/fa695/flow-4.jpg","srcSet":"/static/0047b7564db45486f9619e619026076d/9c3ad/flow-4.jpg 120w,\\n/static/0047b7564db45486f9619e619026076d/f643e/flow-4.jpg 240w,\\n/static/0047b7564db45486f9619e619026076d/fa695/flow-4.jpg 480w,\\n/static/0047b7564db45486f9619e619026076d/9f3ff/flow-4.jpg 960w","sizes":"(min-width: 480px) 480px, 100vw"},"sources":[{"srcSet":"/static/0047b7564db45486f9619e619026076d/02f98/flow-4.webp 120w,\\n/static/0047b7564db45486f9619e619026076d/e46a8/flow-4.webp 240w,\\n/static/0047b7564db45486f9619e619026076d/95a23/flow-4.webp 480w,\\n/static/0047b7564db45486f9619e619026076d/42d4c/flow-4.webp 960w","type":"image/webp","sizes":"(min-width: 480px) 480px, 100vw"}]},"width":480,"height":320}')},1272:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/70844b1a71b4b6375a5d4644f9fdb3b1/fa695/flow-2.jpg","srcSet":"/static/70844b1a71b4b6375a5d4644f9fdb3b1/9c3ad/flow-2.jpg 120w,\\n/static/70844b1a71b4b6375a5d4644f9fdb3b1/f643e/flow-2.jpg 240w,\\n/static/70844b1a71b4b6375a5d4644f9fdb3b1/fa695/flow-2.jpg 480w,\\n/static/70844b1a71b4b6375a5d4644f9fdb3b1/9f3ff/flow-2.jpg 960w","sizes":"(min-width: 480px) 480px, 100vw"},"sources":[{"srcSet":"/static/70844b1a71b4b6375a5d4644f9fdb3b1/02f98/flow-2.webp 120w,\\n/static/70844b1a71b4b6375a5d4644f9fdb3b1/e46a8/flow-2.webp 240w,\\n/static/70844b1a71b4b6375a5d4644f9fdb3b1/95a23/flow-2.webp 480w,\\n/static/70844b1a71b4b6375a5d4644f9fdb3b1/42d4c/flow-2.webp 960w","type":"image/webp","sizes":"(min-width: 480px) 480px, 100vw"}]},"width":480,"height":320}')},9899:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#e8e8e8","images":{"fallback":{"src":"/static/49d63d27d871f6f62d12e6d77b58aeb9/fa695/flow-9.jpg","srcSet":"/static/49d63d27d871f6f62d12e6d77b58aeb9/9c3ad/flow-9.jpg 120w,\\n/static/49d63d27d871f6f62d12e6d77b58aeb9/f643e/flow-9.jpg 240w,\\n/static/49d63d27d871f6f62d12e6d77b58aeb9/fa695/flow-9.jpg 480w,\\n/static/49d63d27d871f6f62d12e6d77b58aeb9/9f3ff/flow-9.jpg 960w","sizes":"(min-width: 480px) 480px, 100vw"},"sources":[{"srcSet":"/static/49d63d27d871f6f62d12e6d77b58aeb9/02f98/flow-9.webp 120w,\\n/static/49d63d27d871f6f62d12e6d77b58aeb9/e46a8/flow-9.webp 240w,\\n/static/49d63d27d871f6f62d12e6d77b58aeb9/95a23/flow-9.webp 480w,\\n/static/49d63d27d871f6f62d12e6d77b58aeb9/42d4c/flow-9.webp 960w","type":"image/webp","sizes":"(min-width: 480px) 480px, 100vw"}]},"width":480,"height":320}')},4727:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/80d06e663190b471666927f7356cb627/fdd27/flow-6.jpg","srcSet":"/static/80d06e663190b471666927f7356cb627/ce903/flow-6.jpg 120w,\\n/static/80d06e663190b471666927f7356cb627/be680/flow-6.jpg 240w,\\n/static/80d06e663190b471666927f7356cb627/fdd27/flow-6.jpg 480w,\\n/static/80d06e663190b471666927f7356cb627/93fdb/flow-6.jpg 960w","sizes":"(min-width: 480px) 480px, 100vw"},"sources":[{"srcSet":"/static/80d06e663190b471666927f7356cb627/43b57/flow-6.webp 120w,\\n/static/80d06e663190b471666927f7356cb627/226ed/flow-6.webp 240w,\\n/static/80d06e663190b471666927f7356cb627/a1501/flow-6.webp 480w,\\n/static/80d06e663190b471666927f7356cb627/55375/flow-6.webp 960w","type":"image/webp","sizes":"(min-width: 480px) 480px, 100vw"}]},"width":480,"height":360}')},2298:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/2f88109a745fd7a6455b27dbb698fb67/fa695/flow-5.jpg","srcSet":"/static/2f88109a745fd7a6455b27dbb698fb67/9c3ad/flow-5.jpg 120w,\\n/static/2f88109a745fd7a6455b27dbb698fb67/f643e/flow-5.jpg 240w,\\n/static/2f88109a745fd7a6455b27dbb698fb67/fa695/flow-5.jpg 480w,\\n/static/2f88109a745fd7a6455b27dbb698fb67/9f3ff/flow-5.jpg 960w","sizes":"(min-width: 480px) 480px, 100vw"},"sources":[{"srcSet":"/static/2f88109a745fd7a6455b27dbb698fb67/02f98/flow-5.webp 120w,\\n/static/2f88109a745fd7a6455b27dbb698fb67/e46a8/flow-5.webp 240w,\\n/static/2f88109a745fd7a6455b27dbb698fb67/95a23/flow-5.webp 480w,\\n/static/2f88109a745fd7a6455b27dbb698fb67/42d4c/flow-5.webp 960w","type":"image/webp","sizes":"(min-width: 480px) 480px, 100vw"}]},"width":480,"height":320}')},6640:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#f8c8a8","images":{"fallback":{"src":"/static/a799ec07708280fc1380c8b63c4195cb/fa695/flow-8.jpg","srcSet":"/static/a799ec07708280fc1380c8b63c4195cb/9c3ad/flow-8.jpg 120w,\\n/static/a799ec07708280fc1380c8b63c4195cb/f643e/flow-8.jpg 240w,\\n/static/a799ec07708280fc1380c8b63c4195cb/fa695/flow-8.jpg 480w,\\n/static/a799ec07708280fc1380c8b63c4195cb/9f3ff/flow-8.jpg 960w","sizes":"(min-width: 480px) 480px, 100vw"},"sources":[{"srcSet":"/static/a799ec07708280fc1380c8b63c4195cb/02f98/flow-8.webp 120w,\\n/static/a799ec07708280fc1380c8b63c4195cb/e46a8/flow-8.webp 240w,\\n/static/a799ec07708280fc1380c8b63c4195cb/95a23/flow-8.webp 480w,\\n/static/a799ec07708280fc1380c8b63c4195cb/42d4c/flow-8.webp 960w","type":"image/webp","sizes":"(min-width: 480px) 480px, 100vw"}]},"width":480,"height":320}')},5552:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#181818","images":{"fallback":{"src":"/static/3ff4e29d9ea8bdd61d09341eb8adc7db/fa695/flow-1.jpg","srcSet":"/static/3ff4e29d9ea8bdd61d09341eb8adc7db/9c3ad/flow-1.jpg 120w,\\n/static/3ff4e29d9ea8bdd61d09341eb8adc7db/f643e/flow-1.jpg 240w,\\n/static/3ff4e29d9ea8bdd61d09341eb8adc7db/fa695/flow-1.jpg 480w,\\n/static/3ff4e29d9ea8bdd61d09341eb8adc7db/9f3ff/flow-1.jpg 960w","sizes":"(min-width: 480px) 480px, 100vw"},"sources":[{"srcSet":"/static/3ff4e29d9ea8bdd61d09341eb8adc7db/02f98/flow-1.webp 120w,\\n/static/3ff4e29d9ea8bdd61d09341eb8adc7db/e46a8/flow-1.webp 240w,\\n/static/3ff4e29d9ea8bdd61d09341eb8adc7db/95a23/flow-1.webp 480w,\\n/static/3ff4e29d9ea8bdd61d09341eb8adc7db/42d4c/flow-1.webp 960w","type":"image/webp","sizes":"(min-width: 480px) 480px, 100vw"}]},"width":480,"height":320}')},4833:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#e8e8e8","images":{"fallback":{"src":"/static/59f58d71e69159b2d79477ceb8328b99/fa695/flow-3.jpg","srcSet":"/static/59f58d71e69159b2d79477ceb8328b99/9c3ad/flow-3.jpg 120w,\\n/static/59f58d71e69159b2d79477ceb8328b99/f643e/flow-3.jpg 240w,\\n/static/59f58d71e69159b2d79477ceb8328b99/fa695/flow-3.jpg 480w,\\n/static/59f58d71e69159b2d79477ceb8328b99/9f3ff/flow-3.jpg 960w","sizes":"(min-width: 480px) 480px, 100vw"},"sources":[{"srcSet":"/static/59f58d71e69159b2d79477ceb8328b99/02f98/flow-3.webp 120w,\\n/static/59f58d71e69159b2d79477ceb8328b99/e46a8/flow-3.webp 240w,\\n/static/59f58d71e69159b2d79477ceb8328b99/95a23/flow-3.webp 480w,\\n/static/59f58d71e69159b2d79477ceb8328b99/42d4c/flow-3.webp 960w","type":"image/webp","sizes":"(min-width: 480px) 480px, 100vw"}]},"width":480,"height":320}')},2729:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#f8e8e8","images":{"fallback":{"src":"/static/551348a3545bc358c0954d0b75307989/f5fc0/flow-footer.jpg","srcSet":"/static/551348a3545bc358c0954d0b75307989/ffa8e/flow-footer.jpg 1840w,\\n/static/551348a3545bc358c0954d0b75307989/5094f/flow-footer.jpg 3680w,\\n/static/551348a3545bc358c0954d0b75307989/f5fc0/flow-footer.jpg 7360w","sizes":"(min-width: 7360px) 7360px, 100vw"},"sources":[{"srcSet":"/static/551348a3545bc358c0954d0b75307989/49ca4/flow-footer.webp 1840w,\\n/static/551348a3545bc358c0954d0b75307989/9d2a3/flow-footer.webp 3680w,\\n/static/551348a3545bc358c0954d0b75307989/c7879/flow-footer.webp 7360w","type":"image/webp","sizes":"(min-width: 7360px) 7360px, 100vw"}]},"width":7360,"height":4140}')}}]);
//# sourceMappingURL=component---src-pages-flow-tsx-c66862e6dcb0cd306b8a.js.map