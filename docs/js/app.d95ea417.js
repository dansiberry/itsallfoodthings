(function(e){function t(t){for(var r,a,c=t[0],o=t[1],l=t[2],p=0,d=[];p<c.length;p++)a=c[p],Object.prototype.hasOwnProperty.call(n,a)&&n[a]&&d.push(n[a][0]),n[a]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r]);u&&u(t);while(d.length)d.shift()();return s.push.apply(s,l||[]),i()}function i(){for(var e,t=0;t<s.length;t++){for(var i=s[t],r=!0,c=1;c<i.length;c++){var o=i[c];0!==n[o]&&(r=!1)}r&&(s.splice(t--,1),e=a(a.s=i[0]))}return e}var r={},n={app:0},s=[];function a(t){if(r[t])return r[t].exports;var i=r[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,a),i.l=!0,i.exports}a.m=e,a.c=r,a.d=function(e,t,i){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(a.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(i,r,function(t){return e[t]}.bind(null,r));return i},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var u=o;s.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("56d7")},"0d48":function(e,t,i){"use strict";i("3f77")},"3f77":function(e,t,i){},"43c9":function(e,t,i){},"56d7":function(e,t,i){"use strict";i.r(t);i("cadf"),i("551c"),i("f751"),i("097d");var r=i("2b0e"),n=i("8ab1"),s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ais-instant-search",{attrs:{"search-client":e.searchClient,"index-name":"itsallfoodthings",routing:e.routing}},[i("header",{staticClass:"navbar"},[i("ais-search-box",{attrs:{placeholder:""}})],1),i("main",[i("div",{class:{active:e.sideBarActive}},[i("SidePannel",{attrs:{active:e.sideBarActive}})],1),i("div",{staticClass:"Toggler",on:{click:function(t){e.sideBarActive=!e.sideBarActive}}},[e._v("\n            📂\n        ")]),i("section",{staticClass:"content"},[i("div",{staticClass:"results"},[i("div",{staticClass:"results-header"},[i("ais-stats")],1),i("ais-hits",{scopedSlots:e._u([{key:"default",fn:function(e){var t=e.items;return i("div",{staticClass:"movies"},[i("Groups",{attrs:{items:t}})],1)}}])})],1)])])])},a=[],c=i("1320"),o=i.n(c),l=i("feef"),u=i("f02a"),p=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",e._l(Object.keys(e.grouped),(function(t){return i("div",{key:t,staticClass:"Group",class:{"Group--active":e.active===t}},[i("h2",{staticClass:"Group__title",on:{click:function(i){e.active=e.active===t?null:t}}},[e._v(e._s(t))]),i("div",{staticClass:"Group__list"},e._l(e.grouped[t],(function(e){return i("Recipe",{key:e.title,attrs:{recipe:e}})})),1)])})),0)},d=[],f=(i("ac6a"),function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"Recipe",class:{"Recipe--active":e.active}},[i("h3",{staticClass:"Recipe__title",on:{click:function(t){e.active=!e.active}}},[e._v("\n        "+e._s(e.recipe.title)+"\n    ")]),i("div",{staticClass:"Recipe__expandable",class:e.active&&"active"},[i("ol",{staticClass:"Recipe__steps"},e._l(e.recipe.steps,(function(t,r){return i("li",{key:r},[e._v(e._s(t))])})),0),e._l(e.recipe.ingredients,(function(t){return i("div",{key:t.group,staticClass:"Recipe__ingredient-group"},[t.group?i("p",{staticClass:"Recipe__ingredient-heading"},[e._v(e._s(t.group))]):e._e(),i("div",{staticClass:"Recipe__ingredient-table"},e._l(t.items,(function(t){return i("p",{key:t},[e._v("\n                    "+e._s(t)+"\n                ")])})),0)])}))],2)])}),h=[],v={data:function(){return{active:!1}},props:{recipe:{type:Object,required:!0}}},_=v,b=(i("0d48"),i("2877")),m=Object(b["a"])(_,f,h,!1,null,null,null),g=m.exports,y={data:function(){return{active:!1}},props:{items:{type:Array,required:!0}},components:{Recipe:g},computed:{grouped:function(){return this.items.length?this.items.reduce((function(e,t){return t.group.forEach((function(i){e[i]?e[i].push(t):e[i]=[t]})),e}),{}):[]}}},C=y,O=(i("bf8c"),Object(b["a"])(C,p,d,!1,null,null,null)),w=O.exports,j=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("aside",[i("ais-panel",[i("h5",{attrs:{slot:"header"},slot:"header"},[e._v("Group")]),i("ais-refinement-list",{attrs:{limit:5,"sort-by":["count:desc"],"show-more":!0,attribute:"group"}})],1),i("ais-panel",[i("h5",{attrs:{slot:"header"},slot:"header"},[e._v("Cuisine")]),i("ais-refinement-list",{attrs:{limit:5,"sort-by":["count:desc"],"show-more":!0,attribute:"cuisine"}})],1),i("ais-panel",[i("h5",{attrs:{slot:"header"},slot:"header"},[e._v("Ocasion")]),i("ais-refinement-list",{attrs:{limit:5,"sort-by":["count:desc"],"show-more":!0,attribute:"occasion"}})],1),i("ais-panel",[i("h5",{attrs:{slot:"header"},slot:"header"},[e._v("Course")]),i("ais-refinement-list",{attrs:{limit:5,"sort-by":["count:desc"],"show-more":!0,attribute:"course"}})],1),i("ais-panel",[i("h5",{attrs:{slot:"header"},slot:"header"},[e._v("Chef")]),i("ais-refinement-list",{attrs:{limit:5,"sort-by":["count:desc"],"show-more":!0,attribute:"chef"}})],1),i("ais-panel",[i("h5",{attrs:{slot:"header"},slot:"header"},[e._v("Time")]),i("ais-refinement-list",{attrs:{limit:5,"sort-by":["count:desc"],"show-more":!0,attribute:"time"}})],1),i("ais-panel",[i("h5",{attrs:{slot:"header"},slot:"header"},[e._v("Diet")]),i("ais-refinement-list",{attrs:{limit:5,"sort-by":["count:desc"],"show-more":!0,attribute:"diet"}})],1)],1)},k=[],x={},R=x,P=Object(b["a"])(R,j,k,!1,null,null,null),S=P.exports,A=(i("43c9"),{data:function(){return{sideBarActive:!1,searchClient:o()("OZIAMBH3SH","ae54064ae96523820ee8cbe123eee971"),routing:{router:Object(l["a"])(),stateMapping:Object(u["a"])()}}},components:{SidePannel:S,Groups:w}}),G=A,B=Object(b["a"])(G,s,a,!1,null,null,null),M=B.exports;r["a"].use(n["a"]),r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(M)}}).$mount("#app")},"5e3e":function(e,t,i){},bf8c:function(e,t,i){"use strict";i("5e3e")}});
//# sourceMappingURL=app.d95ea417.js.map