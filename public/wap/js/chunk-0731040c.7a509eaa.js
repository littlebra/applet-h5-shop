(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0731040c"],{3999:function(t,e,i){"use strict";var s=i("7848"),o=i("41e6"),a=i("48e1"),n=i("31e8"),c=i("3888"),r=Object.assign;t.exports=!r||i("3f16")(function(){var t={},e={},i=Symbol(),s="abcdefghijklmnopqrst";return t[i]=7,s.split("").forEach(function(t){e[t]=t}),7!=r({},t)[i]||Object.keys(r({},e)).join("")!=s})?function(t,e){var i=n(t),r=arguments.length,l=1,p=o.f,u=a.f;while(r>l){var d,h=c(arguments[l++]),g=p?s(h).concat(p(h)):s(h),m=g.length,f=0;while(m>f)u.call(h,d=g[f++])&&(i[d]=h[d])}return i}:r},"3ddd":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"lists"},[s("scroller",[s("div",{staticClass:"g-flex"},[s("div",{staticClass:"search"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.key,expression:"key"}],staticClass:"search-input",attrs:{type:"text",placeholder:"输入关键字搜索商品","placeholder-style":"color:#aaa"},domProps:{value:t.key},on:{keyup:function(e){return"button"in e||13===e.keyCode?t.startSearch(e):null},input:function(e){e.target.composing||(t.key=e.target.value)}}})]),s("span",{staticClass:"icon-filter",on:{click:function(e){t.isPopup=!0}}})]),t.goods.length>0?s("goodsList",{attrs:{goodsData:t.goods}}):s("div",{staticClass:"hint-page"},[s("img",{attrs:{src:i("5bf6")}}),s("p",{staticClass:"hint-page__text"},[t._v("还没有任何商品")])])],1),s("van-popup",{staticClass:"popup",attrs:{position:"right"},on:{close:function(e){t.isPopup=!1}},model:{value:t.isPopup,callback:function(e){t.isPopup=e},expression:"isPopup"}},[s("from",[s("div",{staticClass:"popup-item"},[s("p",{staticClass:"popup-item__tt"},[t._v("价格区间(元)")]),s("div",{staticClass:"popup-item__price"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.minPrice,expression:"minPrice"}],staticClass:"popup-item__search",attrs:{type:"number","data-index":"1"},domProps:{value:t.minPrice},on:{input:function(e){e.target.composing||(t.minPrice=e.target.value)}}}),s("div",{staticClass:"popup-item__line"},[t._v("—")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.maxPrice,expression:"maxPrice"}],staticClass:"popup-item__search",attrs:{type:"number","data-index":"2"},domProps:{value:t.maxPrice},on:{input:function(e){e.target.composing||(t.maxPrice=e.target.value)}}})])]),t._l(t.sortList.top_list,function(e,i){return t.sortList.sub_list[i]?s("div",{staticClass:"popup-item"},[s("p",{staticClass:"popup-item__tt"},[t._v(t._s(e.title))]),s("div",{staticClass:"popup-item__sort"},t._l(t.sortList.sub_list[i],function(e){return s("span",[s("input",{directives:[{name:"model",rawName:"v-model",value:t.checkSort,expression:"checkSort"}],attrs:{type:"checkbox",id:e.id},domProps:{value:e.id,checked:Array.isArray(t.checkSort)?t._i(t.checkSort,e.id)>-1:t.checkSort},on:{change:function(i){var s=t.checkSort,o=i.target,a=!!o.checked;if(Array.isArray(s)){var n=e.id,c=t._i(s,n);o.checked?c<0&&(t.checkSort=s.concat([n])):c>-1&&(t.checkSort=s.slice(0,c).concat(s.slice(c+1)))}else t.checkSort=a}}}),s("label",{attrs:{for:e.id}},[t._v(t._s(e.title))])])}),0)]):t._e()}),s("div",{staticClass:"popup-button"},[s("button",{staticClass:"popup-button__reset",on:{click:t.reset}},[t._v("重置")]),s("button",{staticClass:"popup-button__sure",on:{click:t.filterData}},[t._v("确定")])])],2)],1),s("tabbar",{attrs:{checkedIndex:2}})],1)},o=[],a=(i("8383"),i("7e96"),i("b726"),i("6134"),i("a0ff"),i("e989")),n=i("24ab"),c=i("ed08"),r=i("26fc"),l={components:{goodsList:n["a"],search:a["a"],tabbar:r["a"]},data:function(){return{datas:[],goods:[],isPopup:!1,minPrice:null,maxPrice:null,key:null,id:null,pid:null,tab:null,sortList:[],checkSort:[]}},computed:{categoryList:function(){}},methods:{reset:function(t){console.log(t),this.minPrice=null,this.maxPrice=null,this.checkSort=[]},startSearch:function(){var t=this;this.getData({search_key:t.key})},filterData:function(t){console.log(t);var e=this,i={cate_id:e.checkSort.join(",")};this.minPrice&&this.maxPrice&&(i.min_price=this.minPrice,i.max_price=this.maxPrice),Object(c["h"])("shop/api/lists",i).then(function(t){console.log(t),e.goods=t.goods}),this.isPopup=!1},setValue:function(t){console.log(t);var e=t.target.value,i=t.target.dataset.index;console.log(t,e,i),1==i?this.minPrice=e||0:this.maxPrice=e||0},getData:function(t){var e=this;Object(c["h"])("shop/api/lists",t).then(function(t){console.log(t),e.goods=t.goods})},getQueryString:function(t){var e=new RegExp("(^|&)"+t+"=([^&]*)(&|$)","i"),i=window.location.search.substr(1).match(e);return null!=i?unescape(i[2]):null}},activated:function(){if(this.$route.meta.isBack){Object.assign(this.$data,this.$options.data());var t=this;this.getQueryString("id")&&(this.id=this.getQueryString("id").replace("/",""),this.pid=this.getQueryString("pid").replace("/","")),this.id||(this.id=this.$route.params.id),this.pid||(this.id=this.$route.params.pid),this.tab=this.$route.params.tab,this.key=this.$route.params.key,this.tab?(console.log("tab不为空"),this.getData({tab_goods_id:t.id,tab:t.tab})):this.key?(console.log("key不为空"),this.getData({search_key:t.key})):(this.pid||this.id)&&(console.log("pid不为空"),this.getData({cate_id:t.id,pid:t.pid}))}this.$route.meta.isBack=!1},beforeRouteEnter:function(t,e,i){t.params.id&&(t.meta.isBack=!0),i()},mounted:function(){var t=this;Object(c["h"])("shop/api/lists").then(function(e){t.goods=e.goods}),Object(c["h"])("shop/api/category").then(function(e){t.sortList=e})}},p=l,u=(i("5350"),i("048f")),d=Object(u["a"])(p,s,o,!1,null,"52413d82",null);d.options.__file="index.vue";e["default"]=d.exports},"41e6":function(t,e){e.f=Object.getOwnPropertySymbols},5350:function(t,e,i){"use strict";var s=i("6825"),o=i.n(s);o.a},"5bf6":function(t,e,i){t.exports=i.p+"img/nothing.b607d5d7.png"},6825:function(t,e,i){},"7e96":function(t,e,i){var s=i("a345");s(s.S+s.F,"Object",{assign:i("3999")})}}]);