(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{13:function(t,n,e){},14:function(t,n,e){},17:function(t,n,e){"use strict";e.r(n);var c=e(1),o=e.n(c),r=e(3),a=e.n(r),i=(e(13),e(4)),l=e(5),s=e(8),u=e(7),h=(e(14),e(6)),d=e.n(h),j=e(0),O=function(t){Object(s.a)(e,t);var n=Object(u.a)(e);function e(t){var c;return Object(i.a)(this,e),(c=n.call(this,t)).state={Dollar:null,Euro:null,loading:!0},c}return Object(l.a)(e,[{key:"componentDidMount",value:function(){var t=this,n=Object({NODE_ENV:"production",PUBLIC_URL:"/consuming-API",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_API||"http://localhost:3002";d()("".concat(n,"/exchange-rate")).then((function(t){return t.json()})).then((function(n){t.setState({loading:!1,Euro:n.Euro,Dollar:n.Dollar})}))}},{key:"render",value:function(){return this.state.loading?"Loading...":Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("header",{children:Object(j.jsx)("h1",{children:"Exchange rates for Real currency"})}),Object(j.jsxs)("ul",{children:[Object(j.jsxs)("li",{children:["Euro:",this.state.Euro]}),Object(j.jsxs)("li",{children:["Dollar:",this.state.Dollar]})]})]})}}]),e}(o.a.Component),b=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,18)).then((function(n){var e=n.getCLS,c=n.getFID,o=n.getFCP,r=n.getLCP,a=n.getTTFB;e(t),c(t),o(t),r(t),a(t)}))};a.a.render(Object(j.jsx)(o.a.StrictMode,{children:Object(j.jsx)(O,{})}),document.getElementById("root")),b()}},[[17,1,2]]]);
//# sourceMappingURL=main.6cc00572.chunk.js.map