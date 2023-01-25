"use strict";(self.webpackChunkgoit_react_hw_05=self.webpackChunkgoit_react_hw_05||[]).push([[244],{244:function(e,r,t){t.r(r),t.d(r,{default:function(){return d}});var n=t(439),a=t(791),s=t(10),o=t(689),c=t(87),i="style_movieSection__jHV7U",u="style_button__7kZmM",p=t(184);var l=function(e){var r,t=e.data,s=(0,o.TH)().state,l=(0,a.useState)(null),d=(0,n.Z)(l,2),h=d[0],v=d[1];if((0,a.useEffect)((function(){console.log(s),v(s.pathname)}),[]),null!==(r=h)&&void 0!==r||(h="/"),null===t)return(0,p.jsx)("div",{children:"Oops, there is no such film"});var f=t.backdrop_path,m=t.original_title,g=t.tagline,w=t.budget,b=t.genres,x=t.overview,_=t.release_date,k=t.vote_average,Z=b.map((function(e){return e.name})).join(", ");return(0,p.jsxs)("section",{className:i,children:[(0,p.jsx)(c.OL,{className:u,state:s.searchValue,to:h,children:"Go back"}),(0,p.jsx)("h1",{children:m}),(0,p.jsx)("p",{children:g}),(0,p.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/".concat(f),alt:m}),(0,p.jsx)("p",{children:Z}),(0,p.jsxs)("p",{children:["Budget: $ ",w]}),(0,p.jsxs)("p",{children:["Released: ",_]}),(0,p.jsxs)("p",{children:["Average vote: ",k]}),(0,p.jsx)("p",{children:x}),(0,p.jsx)(c.OL,{className:u,to:"cast",children:"Cast"}),(0,p.jsx)(c.OL,{className:u,to:"reviews",children:"Reviews"}),(0,p.jsx)("hr",{}),(0,p.jsx)(o.j3,{})]})};var d=function(){var e=(0,a.useState)(null),r=(0,n.Z)(e,2),t=r[0],c=r[1],i=(0,o.UO)().movieId;return(0,a.useEffect)((function(){void 0!==i&&(0,s.s6)({id:i}).then((function(e){void 0!==e&&c(e.data)})).catch((function(e){return console.log(e.message)}))}),[]),(0,p.jsx)(l,{data:t})}},10:function(e,r,t){t.d(r,{Hg:function(){return c},IQ:function(){return p},Jh:function(){return l},V0:function(){return i},s6:function(){return u}});var n=t(165),a=t(861),s=t(263),o="a8c13239d5351cd341496e4bdbeed27b",c=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(r){var t,a,c;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.pageNumber,"https://api.themoviedb.org/3/trending/movie/week",e.prev=2,e.next=5,s.Z.get("https://api.themoviedb.org/3/trending/movie/week",{params:{api_key:o,include_adult:!1,page:t}});case 5:return a=e.sent,e.abrupt("return",a);case 9:e.prev=9,e.t0=e.catch(2),c="Unknown Error",e.t0 instanceof Error&&(c=e.t0.message),console.error(c);case 14:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(r){return e.apply(this,arguments)}}(),i=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(r){var t,a,c,i,u;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.pageNumber,a=r.query,c=void 0===a?"":a,"https://api.themoviedb.org/3/search/movie",e.prev=2,e.next=5,s.Z.get("https://api.themoviedb.org/3/search/movie",{params:{api_key:o,include_adult:!1,page:t,query:c}});case 5:return i=e.sent,e.abrupt("return",i);case 9:e.prev=9,e.t0=e.catch(2),u="Unknown Error",e.t0 instanceof Error&&(u=e.t0.message),console.error(u);case 14:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(r){return e.apply(this,arguments)}}(),u=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(r){var t,a,c,i;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.id,e.prev=1,a="https://api.themoviedb.org/3/movie/".concat(t),e.next=5,s.Z.get(a,{params:{api_key:o,include_adult:!1}});case 5:return c=e.sent,e.abrupt("return",c);case 9:e.prev=9,e.t0=e.catch(1),i="Unknown Error",e.t0 instanceof Error&&(i=e.t0.message),console.error(i,'; You should pass object with "id" element as function parameter');case 14:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(r){return e.apply(this,arguments)}}(),p=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(r){var t,a,c,i;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.id,e.prev=1,a="https://api.themoviedb.org/3/movie/".concat(t,"/credits"),e.next=5,s.Z.get(a,{params:{api_key:o,include_adult:!1}});case 5:return c=e.sent,e.abrupt("return",c);case 9:e.prev=9,e.t0=e.catch(1),i="Unknown Error",e.t0 instanceof Error&&(i=e.t0.message),console.error(i,'; You should pass object with "id" element as function parameter');case 14:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(r){return e.apply(this,arguments)}}(),l=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(r){var t,a,c,i;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.id,e.prev=1,a="https://api.themoviedb.org/3/movie/".concat(t,"/reviews"),e.next=5,s.Z.get(a,{params:{api_key:o,include_adult:!1}});case 5:return c=e.sent,e.abrupt("return",c);case 9:e.prev=9,e.t0=e.catch(1),i="Unknown Error",e.t0 instanceof Error&&(i=e.t0.message),console.error(i,'; You should pass object with "id" element as function parameter');case 14:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(r){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=244.4a0e8caa.chunk.js.map