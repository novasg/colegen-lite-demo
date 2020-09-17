(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{"51lG":function(t,o,e){"use strict";e.r(o);var s={components:{},data:function(){return{configForm:new Form({config_type:"",token_lifetime:"",reset_password_token_lifetime:"",reset_password:0,login_with_otp:0,two_factor_security:0,two_factor_security_method:"",reset_password_recaptcha:0,lock_screen:0,lock_screen_timeout:"",login_throttle:0,login_throttle_attempt:"",login_throttle_timeout:"",providers:[]},!1),social_login_providers:[],help_topic:""}},mounted:function(){helper.hasPermission("access-configuration")||(helper.notAccessibleMsg(),this.$router.push("/dashboard")),this.getConfiguration()},methods:{getConfiguration:function(){var t=this,o=this.$loading.show();axios.get("/api/configuration").then((function(e){t.configForm=helper.formAssign(t.configForm,e),o.hide()})).catch((function(t){o.hide(),helper.showErrorMsg(t)}))},submit:function(){var t=this,o=this.$loading.show();this.configForm.config_type="authentication",this.configForm.reset_password=this.configForm.reset_password?1:0,this.configForm.two_factor_security=this.configForm.two_factor_security?1:0,this.configForm.lock_screen=this.configForm.lock_screen?1:0,this.configForm.login_throttle=this.configForm.login_throttle?1:0,this.configForm.post("/api/configuration").then((function(e){t.$store.dispatch("setConfig",{loaded:!1}),toastr.success(e.message),o.hide()})).catch((function(t){o.hide(),helper.showErrorMsg(t)}))},getConfig:function(t){return helper.getConfig(t)}}},r=e("KHd+"),i=Object(r.a)(s,(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",[e("div",{staticClass:"page-titles"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 col-sm-6"},[e("h3",{staticClass:"text-themecolor"},[t._v(t._s(t.trans("auth.authentication")))])]),t._v(" "),e("div",{staticClass:"col-12 col-sm-6"},[e("div",{staticClass:"action-buttons pull-right"},[e("button",{staticClass:"btn btn-info btn-sm",on:{click:function(o){return t.$router.push("/dashboard")}}},[e("i",{staticClass:"fas fa-home"}),t._v(" "),e("span",{staticClass:"d-none d-sm-inline"},[t._v(t._s(t.trans("general.home")))])]),t._v(" "),e("help-button",{on:{clicked:function(o){t.help_topic="configuration.authentication"}}})],1)])])]),t._v(" "),e("div",{staticClass:"container-fluid"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-body p-4"},[e("form",{on:{submit:function(o){return o.preventDefault(),t.submit(o)},keydown:function(o){return t.configForm.errors.clear(o.target.name)}}},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 col-sm-6"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 col-sm-6"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[t._v(t._s(t.trans("auth.token_lifetime")+" "+t.trans("auth.in_minute")))]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.configForm.token_lifetime,expression:"configForm.token_lifetime"}],staticClass:"form-control",attrs:{type:"number",name:"token_lifetime",placeholder:t.trans("auth.token_lifetime")},domProps:{value:t.configForm.token_lifetime},on:{input:function(o){o.target.composing||t.$set(t.configForm,"token_lifetime",o.target.value)}}}),t._v(" "),e("show-error",{attrs:{"form-name":t.configForm,"prop-name":"token_lifetime"}})],1)]),t._v(" "),e("div",{staticClass:"col-12 col-sm-6"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[e("small",[t._v(t._s(t.trans("auth.reset_password_token_lifetime")+" "+t.trans("auth.in_minute")))])]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.configForm.reset_password_token_lifetime,expression:"configForm.reset_password_token_lifetime"}],staticClass:"form-control",attrs:{type:"number",name:"reset_password_token_lifetime",placeholder:t.trans("auth.reset_password_token_lifetime")},domProps:{value:t.configForm.reset_password_token_lifetime},on:{input:function(o){o.target.composing||t.$set(t.configForm,"reset_password_token_lifetime",o.target.value)}}}),t._v(" "),e("show-error",{attrs:{"form-name":t.configForm,"prop-name":"reset_password_token_lifetime"}})],1)])]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 col-sm-6"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[t._v(t._s(t.trans("auth.reset_password")))]),t._v(" "),e("div",[e("switches",{attrs:{theme:"bootstrap",color:"success"},model:{value:t.configForm.reset_password,callback:function(o){t.$set(t.configForm,"reset_password",o)},expression:"configForm.reset_password"}})],1)])]),t._v(" "),e("div",{staticClass:"col-12 col-sm-6"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[t._v(t._s(t.trans("auth.login_with_otp")))]),t._v(" "),e("div",[e("switches",{attrs:{theme:"bootstrap",color:"success"},model:{value:t.configForm.login_with_otp,callback:function(o){t.$set(t.configForm,"login_with_otp",o)},expression:"configForm.login_with_otp"}})],1)])]),t._v(" "),e("div",{staticClass:"col-12 col-sm-6"},[t.configForm.two_factor_security?e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[t._v(t._s(t.trans("auth.two_factor_security_method")))]),t._v(" "),e("div",{staticClass:"radio radio-info p-l-0"},[e("div",{staticClass:"form-check form-check-inline "},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.configForm.two_factor_security_method,expression:"configForm.two_factor_security_method"}],staticClass:"form-check-input",attrs:{type:"radio",value:"sms",id:"two_factor_security_via_sms",name:"two_factor_security_method"},domProps:{checked:"sms"==t.configForm.two_factor_security_method,checked:t._q(t.configForm.two_factor_security_method,"sms")},on:{click:function(o){return t.configForm.errors.clear("two_factor_security_method")},change:function(o){return t.$set(t.configForm,"two_factor_security_method","sms")}}}),t._v(" "),e("label",{staticClass:"form-check-label",attrs:{for:"two_factor_security_via_sms"}},[t._v(" "+t._s(t.trans("auth.two_factor_security_via_sms")))])]),t._v(" "),e("div",{staticClass:"form-check form-check-inline "},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.configForm.two_factor_security_method,expression:"configForm.two_factor_security_method"}],staticClass:"form-check-input",attrs:{type:"radio",value:"email",id:"two_factor_security_via_email",name:"two_factor_security_method"},domProps:{checked:"email"==t.configForm.two_factor_security_method,checked:t._q(t.configForm.two_factor_security_method,"email")},on:{click:function(o){return t.configForm.errors.clear("two_factor_security_method")},change:function(o){return t.$set(t.configForm,"two_factor_security_method","email")}}}),t._v(" "),e("label",{staticClass:"form-check-label",attrs:{for:"two_factor_security_via_email"}},[t._v(" "+t._s(t.trans("auth.two_factor_security_via_email")))])])])]):t._e()]),t._v(" "),e("div",{staticClass:"col-12 col-sm-6"},[t.configForm.lock_screen?e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[t._v(t._s(t.trans("auth.lock_screen_timeout")+" "+t.trans("auth.in_minute")))]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.configForm.lock_screen_timeout,expression:"configForm.lock_screen_timeout"}],staticClass:"form-control",attrs:{type:"number",name:"lock_screen_timeout",placeholder:t.trans("auth.lock_screen_timeout")},domProps:{value:t.configForm.lock_screen_timeout},on:{input:function(o){o.target.composing||t.$set(t.configForm,"lock_screen_timeout",o.target.value)}}}),t._v(" "),e("show-error",{attrs:{"form-name":t.configForm,"prop-name":"lock_screen_timeout"}})],1):t._e()])]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 col-sm-4"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[t._v(t._s(t.trans("auth.login_throttle")))]),t._v(" "),e("div",[e("switches",{attrs:{theme:"bootstrap",color:"success"},model:{value:t.configForm.login_throttle,callback:function(o){t.$set(t.configForm,"login_throttle",o)},expression:"configForm.login_throttle"}})],1)])]),t._v(" "),t.configForm.login_throttle?e("div",{staticClass:"col-12 col-sm-8"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 col-sm-6"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[e("small",[t._v(t._s(t.trans("auth.login_throttle_attempt")))])]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.configForm.login_throttle_attempt,expression:"configForm.login_throttle_attempt"}],staticClass:"form-control",attrs:{type:"number",name:"login_throttle_attempt",placeholder:t.trans("auth.login_throttle_attempt")},domProps:{value:t.configForm.login_throttle_attempt},on:{input:function(o){o.target.composing||t.$set(t.configForm,"login_throttle_attempt",o.target.value)}}}),t._v(" "),e("show-error",{attrs:{"form-name":t.configForm,"prop-name":"login_throttle_attempt"}})],1)]),t._v(" "),e("div",{staticClass:"col-12 col-sm-6"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[e("small",[t._v(t._s(t.trans("auth.login_throttle_timeout")+" "+t.trans("auth.in_minute")))])]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.configForm.login_throttle_timeout,expression:"configForm.login_throttle_timeout"}],staticClass:"form-control",attrs:{type:"number",name:"login_throttle_timeout",placeholder:t.trans("auth.login_throttle_timeout")},domProps:{value:t.configForm.login_throttle_timeout},on:{input:function(o){o.target.composing||t.$set(t.configForm,"login_throttle_timeout",o.target.value)}}}),t._v(" "),e("show-error",{attrs:{"form-name":t.configForm,"prop-name":"login_throttle_timeout"}})],1)])])]):t._e()]),t._v(" "),e("button",{staticClass:"btn btn-info waves-effect waves-light m-t-10 pull-right",attrs:{type:"submit"}},[t._v(t._s(t.trans("general.save")))])]),t._v(" "),e("div",{staticClass:"col-12 col-sm-6"})])])])])]),t._v(" "),e("right-panel",{attrs:{topic:t.help_topic}})],1)}),[],!1,null,null,null);o.default=i.exports}}]);
//# sourceMappingURL=index.js.map?id=7ae1fb653db1e83d3dd2