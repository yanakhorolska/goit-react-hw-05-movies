"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[278],{524:function(n,t,r){r.d(t,{OT:function(){return s},QY:function(){return u},Y5:function(){return p},oO:function(){return f},y:function(){return l}});var e=r(861),a=r(757),o=r.n(a),i=r(44),c="0ad512fb225eecaea999568cb90b6aa0";i.ZP.defaults.baseURL="https://api.themoviedb.org/3";var u=function(){var n=(0,e.Z)(o().mark((function n(){var t,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.ZP.get("/trending/movie/day?api_key=".concat(c,"&page=1"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,e.Z)(o().mark((function n(t){var r,e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.ZP.get("/search/movie?api_key=".concat(c,"&query=").concat(t,"&language=en-US&page=1&include_adult=false"));case 2:return r=n.sent,e=r.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,e.Z)(o().mark((function n(t){var r,e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.ZP.get("/movie/".concat(t,"?api_key=").concat(c,"&language=en-US"));case 2:return r=n.sent,e=r.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,e.Z)(o().mark((function n(t){var r,e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.ZP.get("/movie/".concat(t,"/credits?api_key=").concat(c,"&language=en-US"));case 2:return r=n.sent,e=r.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,e.Z)(o().mark((function n(t){var r,e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.ZP.get("/movie/".concat(t,"/reviews?api_key=").concat(c,"&language=en-US&page=1"));case 2:return r=n.sent,e=r.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},278:function(n,t,r){r.r(t),r.d(t,{Movies:function(){return x}});var e=r(861),a=r(885),o=r(757),i=r.n(o),c=r(791),u=r(524),s=r(731),p=r(689),l=r(562),f=r.n(l),d=r(558),g=r(184),x=function(){var n,t=(0,c.useState)([]),r=(0,a.Z)(t,2),o=r[0],l=r[1],x=(0,s.lr)(),h=(0,a.Z)(x,2),b=h[0],v=h[1],Z=(0,c.useState)(""),m=(0,a.Z)(Z,2),k=m[0],w=m[1],y=null!==(n=b.get("filter"))&&void 0!==n?n:"",P=(0,p.TH)();(0,c.useEffect)((function(){function n(){return(n=(0,e.Z)(i().mark((function n(){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,u.OT)(y);case 3:t=n.sent,(r=t.results).length<1&&f().Notify.warning("We can't find it, try again"),l(r),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),f().Notify.warning("Something wrong, try again please");case 12:case"end":return n.stop()}}),n,null,[[0,9]])})))).apply(this,arguments)}y&&function(){n.apply(this,arguments)}()}),[y]);return o?(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)(d.kD,{onSubmit:function(n){k||f().Notify.warning("Please fill in the gap"),n.preventDefault(),v(""!==k?{filter:k}:{}),w("")},children:[(0,g.jsx)(d.MA,{type:"text",value:k,name:"input",onChange:function(n){return t=n.currentTarget.value.toLowerCase(),void w(t);var t}}),(0,g.jsx)(d.qX,{type:"submit",children:"Search"})]}),o&&(0,g.jsx)(d.OM,{children:o.map((function(n){var t;return t=n.poster_path?"https://image.tmdb.org/t/p/w400/".concat(n.poster_path):"https://i.pinimg.com/originals/a0/57/48/a05748c84d7093e382c560bbc57665ce.jpg",(0,g.jsxs)(d.nf,{to:"".concat(n.id),state:{from:P},children:[(0,g.jsx)("img",{src:t,width:"400",alt:n.title}),(0,g.jsx)(d.rS,{children:n.title})]},n.id)}))})]}):null}},558:function(n,t,r){r.d(t,{$L:function(){return q},H:function(){return T},LY:function(){return L},MA:function(){return S},OM:function(){return w},Qj:function(){return P},fG:function(){return M},kD:function(){return j},nf:function(){return k},qX:function(){return _},rS:function(){return y},tP:function(){return U},tk:function(){return z},vr:function(){return C},z_:function(){return O}});var e,a,o,i,c,u,s,p,l,f,d,g,x,h,b,v=r(168),Z=r(444),m=r(731),k=(0,Z.ZP)(m.rU)(e||(e=(0,v.Z)(["\n  width: 400px;\n  background-color: black;\n  display: flex;\n  justify-content: space-between;\n  flex-direction: column;\n  text-decoration: none;\n  margin-bottom: 40px;\n  transition: scale 250ms linear, box-shadow 250ms linear;\n  &:hover {\n    scale: calc(1.03);\n    box-shadow: 0px 0px 20px 8px gray;\n  }\n  &:nth-last-child(-n + 4) {\n    margin-bottom: 0;\n  }\n"]))),w=(0,Z.ZP)("div")(a||(a=(0,v.Z)(["\n  padding: 50px;\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n"]))),y=(0,Z.ZP)("h2")(o||(o=(0,v.Z)(["\n  text-align: center;\n  font-size: 25px;\n  color: white;\n"]))),P=(0,Z.ZP)(m.rU)(i||(i=(0,v.Z)(["\n  display: inline-block;\n  padding: 10px;\n  text-decoration: none;\n  border-radius: 5px;\n  font-size: 20px;\n  font-weight: 700;\n  color: white;\n  border: 2px solid black;\n  background-color: black;\n  transition: background-color 250ms linear, color 250ms linear;\n  &:hover,\n  :focus {\n    background-color: white;\n    color: black;\n  }\n"]))),_=(0,Z.ZP)("button")(c||(c=(0,v.Z)(["\n  font-size: 20px;\n  background-color: black;\n  color: white;\n  border: none;\n  border-radius: 5px;\n  cursor: pointer;\n  border: 2px solid black;\n  transition: background-color 250ms linear, color 250ms linear;\n  &:hover,\n  focus {\n    color: black;\n    background-color: white;\n  }\n"]))),j=(0,Z.ZP)("form")(u||(u=(0,v.Z)(["\n  display: flex;\n  gap: 20px;\n  padding: 20px;\n"]))),S=(0,Z.ZP)("input")(s||(s=(0,v.Z)(["\n  padding: 10px;\n  font-size: 20px;\n  outline: none;\n  border: 2px solid black;\n  border-radius: 5px;\n"]))),z=(0,Z.ZP)("h1")(p||(p=(0,v.Z)(["\n  text-align: center;\n  font-weight: 900;\n  font-size: 40px;\n"]))),U=(0,Z.ZP)("div")(l||(l=(0,v.Z)(["\n  padding: 50px;\n"]))),O=(0,Z.ZP)("h3")(f||(f=(0,v.Z)(["\n  margin-top: 0;\n  font-size: 25px;\n"]))),L=(0,Z.ZP)(m.OL)(d||(d=(0,v.Z)(["\n  display: inline-block;\n  padding: 10px;\n  text-decoration: none;\n  font-size: 25px;\n  color: black;\n  border-radius: 5px;\n  border: 2px solid black;\n  transition: color 250ms linear, background-color 250ms linear;\n  &:focus,\n  :hover {\n    color: white;\n    background-color: black;\n  }\n  &.active {\n    color: white;\n    background-color: black;\n  }\n  &:not(:last-child) {\n    margin-right: 20px;\n  }\n"]))),M=(0,Z.ZP)("div")(g||(g=(0,v.Z)(["\n  padding: 20px;\n"]))),C=(0,Z.ZP)("div")(x||(x=(0,v.Z)(["\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n"]))),T=(0,Z.ZP)("p")(h||(h=(0,v.Z)(["\n  font-size: 40px;\n"]))),q=(0,Z.ZP)(m.rU)(b||(b=(0,v.Z)([""])))}}]);
//# sourceMappingURL=278.48b17c26.chunk.js.map