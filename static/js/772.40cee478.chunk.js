"use strict";(self.webpackChunkdeliciouse=self.webpackChunkdeliciouse||[]).push([[772],{772:function(e,n,t){t.r(n);var r,a,i=t(168),c=t(4165),s=t(5861),o=t(9439),u=t(2791),d=t(7689),p=t(4088),l=t(1087),h=t(1648),f=t(184);var m=(0,p.ZP)(h.E.div)(r||(r=(0,i.Z)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));\n  grid-gap: 2rem;\n"]))),x=p.ZP.div(a||(a=(0,i.Z)(["{\n    border-raidus;2rem;\n}\n  img {\n    width: 100%;\n    border-radius: 2rem;\n    box-shadow:5px 5px 20px rgba(0,0,0,0.2);\n  }\n  a {\n    text-decoration: none;\n  }\n  h4 {\n    padding: 1rem;\n    text-align: center;\n  }\n"])));n.default=function(){var e=(0,u.useState)([]),n=(0,o.Z)(e,2),t=n[0],r=n[1],a=(0,d.UO)(),i=function(){var e=(0,s.Z)((0,c.Z)().mark((function e(n){var t,a;return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.spoonacular.com/recipes/complexSearch?apiKey=".concat("7ade7a5544e84b0aa97c33aa67a0d0e7","&query=").concat(n));case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,r(a.results);case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return(0,u.useEffect)((function(){i(a.search)}),[a.search]),(0,f.jsx)(m,{animate:{opacity:1},initial:{opacity:0},exit:{opacity:0},transition:{duration:.5},children:t.map((function(e){return(0,f.jsx)(x,{children:(0,f.jsxs)(l.rU,{to:"/recipes/"+e.id,children:[(0,f.jsx)("img",{src:e.image,alt:e.title}),(0,f.jsx)("h4",{children:e.title})]})},e.id)}))})}}}]);
//# sourceMappingURL=772.40cee478.chunk.js.map