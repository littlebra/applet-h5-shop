(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-37d23d9b"],{"1dad":function(s,t,i){"use strict";i.r(t);var e=function(){var s=this,t=s.$createElement,i=s._self._c||t;return i("div",{staticClass:"order-detail",class:{pb80:3==s.info.status_code||0===s.info.pay_status}},[i("navbar",{attrs:{text:"订单详情"}}),s.info.address_id?i("scroller",[s.steps&&1==s.info.send_type?i("router-link",{staticClass:"m-list link log",attrs:{to:"/logistics/"+s.orderId}},[i("div",{staticClass:"m-list__l"},[i("p",[s._v(s._s(s.info.status_code_name))]),i("p",[s._v("物流信息："+s._s(s.steps.remark))]),i("small",{staticClass:"log-time"},[s._v(s._s(s.steps.cTime))])]),i("div",{staticClass:"m-list__c"}),i("i",{staticClass:"iconfont icon-fanhui right"})]):s._e(),1==s.info.send_type?i("div",{staticClass:"m-list order-line"},[i("div",{staticClass:"m-list__l"},[s._v(s._s(s.address.truename))]),i("div",{staticClass:"m-list__c"},[i("p",{},[s._v(s._s(s.address.mobile))]),i("p",{staticClass:"f-font-sm"},[s._v(s._s(s.address.address+s.address.address_detail))])]),i("div",{staticClass:"m-list__r"})]):s._e(),s.shops.length>0?i("div",{staticClass:"shop-list__item"},[i("div",{staticClass:"shop-list__bd g-flex"},[i("img",{staticClass:"u-goods__img",attrs:{src:s.shops.img_url}}),i("div",{staticClass:"g-flex__flex"},[i("p",{staticClass:"shop-list__name"},[s._v(s._s(s.shops.name))]),s.shops.address?i("p",{staticClass:"shop-list__address"},[i("span",{staticClass:"iconfont icon-dingwei"}),s._v(s._s(s.shops.address))]):s._e(),s.shops.shop_code?i("p",{staticClass:"shop-list__dist"},[i("span",{staticClass:"iconfont icon-daohang"})]):s._e()])]),i("div",{staticClass:"shop-list__ft g-flex"},[""!=s.shops.phone?i("p",{staticClass:"g-flex__item"},[i("span",{staticClass:"iconfont icon-phone"}),i("a",{attrs:{href:"tel:"+s.shops.phone}},[s._v("电话")])]):s._e(),""!=s.shops.address?i("button",{staticClass:"g-flex__item",on:{click:function(t){s.goUrl(s.shops.address)}}},[i("span",{staticClass:"iconfont icon-daohang"}),s._v("导航")]):s._e()])]):s._e(),i("div",{staticClass:"order-detail__item"},s._l(s.goods,function(t,e){return i("router-link",{key:e,staticClass:"goods-line",attrs:{to:"/goods_detail/"+t.id}},[i("img",{staticClass:"u-goods__img",attrs:{src:t.cover}}),i("div",{staticClass:"goods-line__right"},[i("p",{staticClass:"u-goods__tt overflow-dot"},[s._v(s._s(t.title))]),i("div",{staticClass:"goods-line__ft"},[i("div",{staticClass:"goods-line__price"},[i("span",[s._v("¥"+s._s(t.sale_price))])]),i("p",{staticClass:"f-font-sm"},[s._v("x"+s._s(t.num))])])])])}),1),i("div",{staticClass:"weui-form-preview"},[i("div",{staticClass:"weui-form-preview__hd"},[i("div",{staticClass:"weui-form-preview__item"},[i("label",{staticClass:"weui-form-preview__label"},[s._v("付款金额")]),i("em",{staticClass:"weui-form-preview__value"},[s._v("¥"+s._s(parseFloat(s.info.total_price)+parseFloat(s.info.mail_money)-parseFloat(s.info.dec_money)))])])]),i("div",{staticClass:"weui-form-preview__bd"},[i("div",{staticClass:"weui-form-preview__item"},[i("label",{staticClass:"weui-form-preview__label"},[s._v("买家留言")]),i("span",{staticClass:"weui-form-preview__value"},[s._v(s._s(s.info.remark?s.info.remark:"无"))])]),2!=s.info.send_type?i("div",{staticClass:"weui-form-preview__item"},[i("label",{staticClass:"weui-form-preview__label"},[s._v("邮费：")]),i("span",{staticClass:"weui-form-preview__value"},[s._v("¥"+s._s(s.info.mail_money))])]):s._e(),s.info.dec_money>0?i("div",{staticClass:"weui-form-preview__item"},[i("label",{staticClass:"weui-form-preview__label"},[s._v("优惠卷:")]),i("span",{staticClass:"weui-form-preview__value"},[s._v("- ¥"+s._s(s.info.dec_money))])]):s._e(),i("div",{staticClass:"weui-form-preview__item"},[i("label",{staticClass:"weui-form-preview__label"},[s._v("配送方式：")]),i("span",{staticClass:"weui-form-preview__value"},[s._v(s._s(2==s.info.send_type?"自提":"邮寄"))])])])]),0!=s.info.pay_status?i("div",{staticClass:"m-card order-detail__item"},[i("div",{staticClass:"m-card__tt"},[i("div",{staticClass:"line"}),s._v("订单信息")]),i("div",{staticClass:"m-card__list"},[i("div",{staticClass:"m-card__item"},[s._v("\n          订单编号："+s._s(s.info.order_number)+"\n        ")]),i("div",{staticClass:"m-card__item"},[s._v("\n          支付方式："+s._s(s.info.common)+"\n        ")]),i("div",{staticClass:"m-card__item"},[s._v("\n          下单时间："+s._s(s.info.pay_time)+"\n        ")]),i("div",{directives:[{name:"show",rawName:"v-show",value:s.info.refund>0,expression:"info.refund>0"}],staticClass:"m-card__item"},[s._v("\n          退款状态："+s._s(s.info.refund_title)+"\n        ")])]),3==s.info.status_code||0==s.info.refund?i("router-link",{staticClass:"u-button u-button--border",attrs:{to:"/refund/"+s.info.id}},[s._v("申请退款")]):s._e()],1):s._e()],1):s._e(),i("div",{staticClass:"u-fixed"},[3==s.info.status_code?i("button",{staticClass:"u-button u-button--primary u-button--big",on:{click:function(t){s.goReceiving(s.orderId)}}},[s._v("确认收货")]):s._e(),0==s.info.pay_status?i("button",{staticClass:"u-button u-button--primary u-button--big",on:{click:function(t){s.goPay(s.info.out_trade_no,s.info.total_price)}}},[s._v("立即付款")]):s._e()])],1)},a=[];function o(s,t,i){return t in s?Object.defineProperty(s,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):s[t]=i,s}var n,_=i("ed08"),l=(i("fade"),i("9d8d")),r=(n={data:function(){return{orderId:0,steps:[],info:[],goods:[],active:0,address:[],shops:[]}},computed:{},components:{navbar:l["a"]}},o(n,"computed",{classObject:function(){return{pb80:3==this.info.status_code||0===this.info.pay_status}}}),o(n,"methods",{goPay:function(s,t){Object(_["d"])(s)},goReceiving:function(s){Object(_["e"])(s)},goUrl:function(s){window.location.href="//map.baidu.com/mobile/webapp/search/search/qt=s&wd="+encodeURI(s)+"/&vt=map"}}),o(n,"created",function(){this.orderId=this.$route.params.id||0;var s=this;Object(_["h"])("shop/api/order_detail",{id:s.orderId,PHPSESSID:window.localStorage.getItem("PHPSESSID")}).then(function(t){s.steps=t.log,s.info=t.info,s.address=t.addressInfo,s.goods=t.info.goods,s.shops=t.store_info,s.info.cTime=Object(_["i"])(s.info.cTime),s.info.pay_time=Object(_["i"])(s.info.pay_time),s.info.send_time=Object(_["i"])(s.info.send_time),s.steps&&(s.steps.cTime=Object(_["i"])(s.steps.cTime))})}),n),d=r,c=(i("ff4d"),i("048f")),f=Object(c["a"])(d,e,a,!1,null,"2e563ecc",null);f.options.__file="index.vue";t["default"]=f.exports},"6f9a":function(s,t,i){},ff4d:function(s,t,i){"use strict";var e=i("6f9a"),a=i.n(e);a.a}}]);