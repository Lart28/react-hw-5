"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[131],{131:function(e,t,n){n.r(t),n.d(t,{default:function(){return l}});var r=n(439),u=n(791),a=n(87),c=n(689),i=n(184);function l(){var e,t=(0,u.useState)(""),n=(0,r.Z)(t,2),l=n[0],o=n[1],s=(0,u.useState)(null),f=(0,r.Z)(s,2),h=f[0],d=f[1],m=(0,u.useState)(null),p=(0,r.Z)(m,2),j=p[0],b=p[1],v=(0,a.lr)(),x=(0,r.Z)(v,2),g=x[0],k=x[1],y=null!==(e=g.get("query"))&&void 0!==e?e:"",S=(0,c.TH)();(0,u.useEffect)((function(){y&&fetch("".concat("https://api.themoviedb.org","/3/search/movie?query=").concat(y,"&include_adult=false&language=en-US&page=1&api_key=").concat("af02fe4d7c3feb4bd28b36239d2e4dd2")).then((function(e){return e.ok?e.json():Promise.reject(new Error("\u0421\u0442\u0430\u043b\u0430\u0441\u044c \u043f\u043e\u043c\u0438\u043b\u043a\u0430"))})).then((function(e){return d(e)})).catch((function(e){return b(e)}))}),[y]);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("form",{onSubmit:function(e){e.preventDefault(),k({query:l}),o("")},children:(0,i.jsxs)("label",{name:"query",children:[(0,i.jsx)("input",{onChange:function(e){o(e.target.value)},name:"query",type:"text",value:l}),(0,i.jsx)("button",{type:"submit",children:"Search"})]})}),j&&(0,i.jsx)("h1",{children:j.message}),h&&(0,i.jsx)("ul",{children:h.results.map((function(e){var t=e.id,n=e.title;return(0,i.jsx)("li",{children:(0,i.jsx)(a.rU,{to:"/movies/".concat(t),state:{from:S},children:n})},t)}))})]})}}}]);
//# sourceMappingURL=131.797d4a5d.chunk.js.map