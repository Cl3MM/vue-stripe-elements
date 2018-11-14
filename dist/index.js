!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("vue-stripe-elements",[],t):"object"==typeof exports?exports["vue-stripe-elements"]=t():e["vue-stripe-elements"]=t()}(this,function(){return function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=18)}([function(e,t,n){var o=n(2)(n(17),n(21),null,null);o.options.__file="d:\\Dev\\oss\\vue-stripe-elements\\src\\StripeElement.vue",o.esModule&&Object.keys(o.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),o.options.functional&&console.error("[vue-loader] StripeElement.vue: functional components are not supported with templates, they should use render functions."),e.exports=o.exports},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={stripe:{type:[String,Object],required:!0},value:{type:String,required:!1},options:{type:Object,required:!1}}},function(e,t){e.exports=function(e,t,n,o){var r,u=e=e||{},s=typeof e.default;"object"!==s&&"function"!==s||(r=e,u=e.default);var i="function"==typeof u?u.options:u;if(t&&(i.render=t.render,i.staticRenderFns=t.staticRenderFns),n&&(i._scopeId=n),o){var l=i.computed||(i.computed={});Object.keys(o).forEach(function(e){var t=o[e];l[e]=function(){return t}})}return{esModule:r,exports:u,options:i}}},function(e,t,n){"use strict";function o(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};"object"===(void 0===e?"undefined":s(e))&&"function"==typeof e.elements&&(i.instance=e),void 0===window.Stripe&&null===i.instance?console.error("Stripe V3 library not loaded!"):null===i.instance&&(i.instance=window.Stripe(e)),i.instance.elements?null===i.elements&&(i.elements=i.instance.elements(t)):console.error("Stripe V3 library not loaded!")}function r(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};o(t,n.elements||{}),n.style=Object.assign(l,n.style||{});var r=i.elements.create(e,n);return i.createToken=function(e){return i.instance.createToken(r,e)},i.createSource=function(e){return i.instance.createSource(r,e)},i.retrieveSource=function(e){return i.instance.retrieveSource(e)},r}function u(){i.instance=null,i.elements=null,i.createToken=null,i.createSource=null,i.retrieveSource=null}Object.defineProperty(t,"__esModule",{value:!0});var s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.create=r,t.destroy=u;var i=t.Stripe={instance:null,createToken:null,createSource:null,retrieveSource:null,elements:null},l=t.baseStyle={base:{color:"#32325d",lineHeight:"24px",fontFamily:"Helvetica Neue",fontSmoothing:"antialiased",fontSize:"16px","::placeholder":{color:"#aab7c4"}},invalid:{color:"#fa755a",iconColor:"#fa755a"}}},function(e,t,n){"use strict";"function"!=typeof Object.assign&&(Object.assign=function(e,t){if(null==e)throw new TypeError("Cannot convert undefined or null to object");for(var n=Object(e),o=1;o<arguments.length;o++){var r=arguments[o];if(null!=r)for(var u in r)Object.prototype.hasOwnProperty.call(r,u)&&(n[u]=r[u])}return n}),e.exports=Object.assign},function(e,t,n){var o=n(2)(n(11),n(25),null,null);o.options.__file="d:\\Dev\\oss\\vue-stripe-elements\\src\\Card.vue",o.esModule&&Object.keys(o.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),o.options.functional&&console.error("[vue-loader] Card.vue: functional components are not supported with templates, they should use render functions."),e.exports=o.exports},function(e,t,n){var o=n(2)(n(12),n(22),null,null);o.options.__file="d:\\Dev\\oss\\vue-stripe-elements\\src\\CardCvc.vue",o.esModule&&Object.keys(o.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),o.options.functional&&console.error("[vue-loader] CardCvc.vue: functional components are not supported with templates, they should use render functions."),e.exports=o.exports},function(e,t,n){var o=n(2)(n(13),n(24),null,null);o.options.__file="d:\\Dev\\oss\\vue-stripe-elements\\src\\CardExpiry.vue",o.esModule&&Object.keys(o.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),o.options.functional&&console.error("[vue-loader] CardExpiry.vue: functional components are not supported with templates, they should use render functions."),e.exports=o.exports},function(e,t,n){var o=n(2)(n(14),n(23),null,null);o.options.__file="d:\\Dev\\oss\\vue-stripe-elements\\src\\CardNumber.vue",o.esModule&&Object.keys(o.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),o.options.functional&&console.error("[vue-loader] CardNumber.vue: functional components are not supported with templates, they should use render functions."),e.exports=o.exports},function(e,t,n){var o=n(2)(n(15),n(20),null,null);o.options.__file="d:\\Dev\\oss\\vue-stripe-elements\\src\\Iban.vue",o.esModule&&Object.keys(o.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),o.options.functional&&console.error("[vue-loader] Iban.vue: functional components are not supported with templates, they should use render functions."),e.exports=o.exports},function(e,t,n){var o=n(2)(n(16),n(19),null,null);o.options.__file="d:\\Dev\\oss\\vue-stripe-elements\\src\\PostalCode.vue",o.esModule&&Object.keys(o.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),o.options.functional&&console.error("[vue-loader] PostalCode.vue: functional components are not supported with templates, they should use render functions."),e.exports=o.exports},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),u=o(r),s=n(0),i=o(s);t.default={props:u.default,components:{StripeElement:i.default},methods:{blur:function(){this.$refs.element.blur()},clear:function(){this.$refs.element.clear()},focus:function(){this.$refs.element.focus()},update:function(e){this.$refs.element.update(e)}}}},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),u=o(r),s=n(0),i=o(s);t.default={props:u.default,components:{StripeElement:i.default},methods:{blur:function(){this.$refs.element.blur()},clear:function(){this.$refs.element.clear()},focus:function(){this.$refs.element.focus()},update:function(e){this.$refs.element.update(e)}}}},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),u=o(r),s=n(0),i=o(s);t.default={props:u.default,components:{StripeElement:i.default},methods:{blur:function(){this.$refs.element.blur()},clear:function(){this.$refs.element.clear()},focus:function(){this.$refs.element.focus()},update:function(e){this.$refs.element.update(e)}}}},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),u=o(r),s=n(0),i=o(s);t.default={props:u.default,components:{StripeElement:i.default},methods:{blur:function(){this.$refs.element.blur()},clear:function(){this.$refs.element.clear()},focus:function(){this.$refs.element.focus()},update:function(e){this.$refs.element.update(e)}}}},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),u=o(r),s=n(0),i=o(s);t.default={props:u.default,components:{StripeElement:i.default},methods:{blur:function(){this.$refs.element.blur()},clear:function(){this.$refs.element.clear()},focus:function(){this.$refs.element.focus()},update:function(e){this.$refs.element.update(e)}}}},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),u=o(r),s=n(0),i=o(s);t.default={props:u.default,components:{StripeElement:i.default},methods:{blur:function(){this.$refs.element.blur()},clear:function(){this.$refs.element.clear()},focus:function(){this.$refs.element.focus()},update:function(e){this.$refs.element.update(e)}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),r=function(e){return e&&e.__esModule?e:{default:e}}(o),u=n(3);t.default={props:Object.assign({type:{type:String,required:!0}},r.default),beforeMount:function(){var e=this;this._element=(0,u.create)(this.type,this.stripe,this.options),this._element.on("blur",function(t){return e.$emit("blur")}),this._element.on("focus",function(t){return e.$emit("focus")}),this._element.on("change",function(t){return e.$emit("change",t)})},mounted:function(){var e=document.createElement("div");this._element.mount(e),this.$el.appendChild(e)},beforeDestroy:function(){this._element.unmount(),this._element.destroy(),(0,u.destroy)()},methods:{blur:function(){this._element.blur()},clear:function(){this._element.clear()},focus:function(){this._element.focus()},update:function(){this._element.update()}}}},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}n(4);var r=n(3),u=n(0),s=o(u),i=n(5),l=o(i),c=n(7),f=o(c),a=n(6),p=o(a),d=n(8),m=o(d),v=n(9),h=o(v),_=n(10),b=o(_);e.exports={Card:l.default,CardNumber:m.default,CardExpiry:f.default,CardCvc:p.default,Iban:h.default,PostalCode:b.default,StripeElement:s.default,baseStyle:r.baseStyle,get instance(){return r.Stripe.instance},get createToken(){return r.Stripe.createToken},get createSource(){return r.Stripe.createSource},get retrieveSource(){return r.Stripe.retrieveSource}}},function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("stripe-element",{ref:"element",attrs:{type:"postalCode",stripe:e.stripe,value:e.value,options:e.options},on:{blur:function(t){e.$emit("blur")},focus:function(t){e.$emit("focus")},empty:function(t){e.$emit("empty")},change:function(t){e.$emit("change",t)}}})},staticRenderFns:[]},e.exports.render._withStripped=!0},function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("stripe-element",{ref:"element",attrs:{type:"iban",stripe:e.stripe,value:e.value,options:e.options},on:{blur:function(t){e.$emit("blur")},focus:function(t){e.$emit("focus")},change:function(t){e.$emit("change",t)}}})},staticRenderFns:[]},e.exports.render._withStripped=!0},function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("div")},staticRenderFns:[]},e.exports.render._withStripped=!0},function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("stripe-element",{ref:"element",attrs:{type:"cardCvc",stripe:e.stripe,value:e.value,options:e.options},on:{blur:function(t){e.$emit("blur")},focus:function(t){e.$emit("focus")},change:function(t){e.$emit("change",t)}}})},staticRenderFns:[]},e.exports.render._withStripped=!0},function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("stripe-element",{ref:"element",attrs:{type:"cardNumber",stripe:e.stripe,value:e.value,options:e.options},on:{blur:function(t){e.$emit("blur")},focus:function(t){e.$emit("focus")},change:function(t){e.$emit("change",t)}}})},staticRenderFns:[]},e.exports.render._withStripped=!0},function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("stripe-element",{ref:"element",attrs:{type:"cardExpiry",stripe:e.stripe,value:e.value,options:e.options},on:{blur:function(t){e.$emit("blur")},focus:function(t){e.$emit("focus")},change:function(t){e.$emit("change",t)}}})},staticRenderFns:[]},e.exports.render._withStripped=!0},function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("stripe-element",{ref:"element",attrs:{type:"card",stripe:e.stripe,value:e.value,options:e.options},on:{blur:function(t){e.$emit("blur")},focus:function(t){e.$emit("focus")},change:function(t){e.$emit("change",t)}}})},staticRenderFns:[]},e.exports.render._withStripped=!0}])});