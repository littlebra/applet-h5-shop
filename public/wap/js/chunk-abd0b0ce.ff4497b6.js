(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-abd0b0ce"],{"4bf8":function(t,e,a){},"53a3":function(t,e,a){"use strict";var i=a("4bf8"),n=a.n(i);n.a},"6e0a":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"active_index"},[a("scroller",[a("activeBanner",{attrs:{activeInfo:t.activeInfo}}),t.activeData?a("activeGoods",{attrs:{activeData:t.activeData,activeType:"秒杀",activeInfo:t.activeInfo,activeTime:t.activeTime}}):t._e()],1)],1)},n=[],c=a("95eb"),o=a("5ada"),s=a("ed08"),v=a("9d8d"),r={data:function(){return{activeInfo:{},activeData:[],activeTime:"",msg:""}},components:{activeGoods:c["a"],activeBanner:o["a"],navbar:v["a"]},methods:{getData:function(t){var e=this;Object(s["h"])(s["g"]+"/seckill/Api/index",{seckill_id:t}).then(function(t){0==t.code?e.msg=t.msg:(e.activeData=t.goods_lists,e.activeInfo=t.event_info)})},countTime:function(){var t=this,e=t.activeInfo.end_time,a=e-Date.parse(new Date)/1e3,i=parseInt(a/60/60/24),n=parseInt(a/60/60%24),c=parseInt(a/60%60),o=parseInt(a%60);t.activeTime="".concat(i,"天").concat(n,"时").concat(c,"分").concat(o,"秒"),setTimeout(function(){t.countTime()},1e3)}},created:function(){var t=this.$route.params.id;this.getData(t),this.countTime()}},f=r,u=(a("53a3"),a("048f")),d=Object(u["a"])(f,i,n,!1,null,"7266cf56",null);d.options.__file="index.vue";e["default"]=d.exports}}]);