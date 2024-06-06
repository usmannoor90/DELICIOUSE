"use strict";(self.webpackChunkdeliciouse=self.webpackChunkdeliciouse||[]).push([[476],{1803:function(n,e,t){t.r(e),t.d(e,{default:function(){return E}});var i,r,a,s=t(2791),o=t(168),c=t(4165),d=t(5861),p=t(9439),l=t(4088),u=t(8282),h=(t(1180),t(1087)),g=t(1648),f=t(184);var x,m,b,v=(0,l.ZP)(g.E.div)(i||(i=(0,o.Z)(["\n  margin: 4rem 0;\n"]))),j=l.ZP.div(r||(r=(0,o.Z)(["\n  min-height: 25rem;\n  border-radius: 2rem;\n  overflow: hidden;\n  position: relative;\n  box-shadow: 5px 5px 20px 0 rgba(0, 0, 0, 0.2);\n  img {\n    border-radius: 2rem;\n    width: 100%;\n    height: 100%;\n    left: 0;\n    position: absolute;\n    object-fit: cover;\n  }\n  p {\n    position: absolute;\n    z-index: 10;\n    left: 50%;\n    bottom: 0%;\n    transform: translate(-50%, 0);\n    color: white;\n    width: 100%;\n    text-align: center;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-weight: 600;\n    font-size: 1rem;\n    height: 40%;\n  }\n"]))),w=l.ZP.div(a||(a=(0,o.Z)(["\n   {\n    z-index: 3;\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));\n  }\n"]))),Z=function(){var n=(0,s.useState)([]),e=(0,p.Z)(n,2),t=e[0],i=e[1];(0,s.useEffect)((function(){r()}),[]);var r=function(){var n=(0,d.Z)((0,c.Z)().mark((function n(){var e,t,r;return(0,c.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!(e=localStorage.getItem("vaggie"))){n.next=5;break}i(JSON.parse(e)),n.next=13;break;case 5:return n.next=7,fetch("https://api.spoonacular.com/recipes/random?apiKey=".concat("7ade7a5544e84b0aa97c33aa67a0d0e7","&number=9&tags=vegetarian"));case 7:return t=n.sent,n.next=10,t.json();case 10:r=n.sent,localStorage.setItem("vaggie",JSON.stringify(r.recipes)),i(r.recipes);case 13:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return(0,f.jsx)("div",{children:(0,f.jsxs)(v,{animate:{opacity:1},initial:{opacity:0},exit:{opacity:0},transition:{duration:.5},children:[(0,f.jsx)("h3",{children:"Our Vagitarian Picks"}),(0,f.jsx)(u.tv,{options:{breakpoints:{700:{perPage:1},1200:{perPage:2}},perPage:3,arrows:!1,pagination:!1,drag:"free",gap:"5rem"},children:t.map((function(n){return(0,f.jsx)(u.jw,{children:(0,f.jsx)(j,{children:(0,f.jsxs)(h.rU,{to:"/DELICIOUSE/recipes/"+n.id,children:[(0,f.jsxs)("p",{children:[" ",n.title]}),(0,f.jsx)("img",{src:n.image,alt:n.title}),(0,f.jsx)(w,{})]})})},n.id)}))})]})})};var y=(0,l.ZP)(g.E.div)(x||(x=(0,o.Z)(["\n  margin: 4rem 0;\n"]))),k=l.ZP.div(m||(m=(0,o.Z)(["\n  min-height: 25rem;\n  border-radius: 2rem;\n  overflow: hidden;\n  position: relative;\n  box-shadow: 0px 0px 2px 0 rgba(0, 0, 0, 1);\n\n  img {\n    border-radius: 2rem;\n    width: 100%;\n    height: 100%;\n    left: 0;\n    position: absolute;\n    object-fit: cover;\n  }\n  p {\n    position: absolute;\n    z-index: 10;\n    left: 50%;\n    bottom: 0%;\n    transform: translate(-50%, 0);\n    color: white;\n    width: 100%;\n    text-align: center;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-weight: 600;\n    font-size: 1rem;\n    height: 40%;\n  }\n"]))),P=l.ZP.div(b||(b=(0,o.Z)(["\n   {\n    z-index: 3;\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));\n  }\n"]))),S=function(){var n=(0,s.useState)([]),e=(0,p.Z)(n,2),t=e[0],i=e[1];(0,s.useEffect)((function(){r()}),[]);var r=function(){var n=(0,d.Z)((0,c.Z)().mark((function n(){var e,t;return(0,c.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://api.spoonacular.com/recipes/random?apiKey=".concat("7ade7a5544e84b0aa97c33aa67a0d0e7","&number=9"));case 2:return e=n.sent,n.next=5,e.json();case 5:t=n.sent,localStorage.setItem("popular",JSON.stringify(t.recipes)),i(t.recipes);case 8:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return(0,f.jsx)("div",{children:(0,f.jsxs)(y,{children:[(0,f.jsx)("h3",{children:" Popular picks"}),(0,f.jsx)(u.tv,{options:{breakpoints:{700:{perPage:1},1200:{perPage:2}},perPage:3,arrows:!1,pagination:!1,drag:"free",gap:"5rem"},children:t.map((function(n){return(0,f.jsxs)(u.jw,{children:[" ",(0,f.jsx)(k,{children:(0,f.jsxs)(h.rU,{to:"/DELICIOUSE/recipes/"+n.id,children:[(0,f.jsxs)("p",{children:[" ",n.title]}),(0,f.jsx)("img",{src:n.image,alt:n.title}),(0,f.jsx)(P,{})]})})]},n.id)}))})]})})};var E=function(){return(0,f.jsxs)(g.E.div,{animate:{opacity:1},initial:{opacity:0},exit:{opacity:0},transition:{duration:.5},children:[(0,f.jsx)(Z,{}),(0,f.jsx)(S,{})]})}}}]);
//# sourceMappingURL=476.14320a84.chunk.js.map