(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{Bmul:function(t,e,o){"use strict";o.r(e);var s={components:{categoryForm:o("qRIX").a},data:function(){return{id:this.$route.params.id}},mounted:function(){helper.hasPermission("access-configuration")||(helper.notAccessibleMsg(),this.$router.push("/dashboard"))}},a=o("KHd+"),r=Object(a.a)(s,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"page-titles"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-12 col-sm-6"},[o("h3",{staticClass:"text-themecolor"},[t._v(t._s(t.trans("employee.edit_category")))])]),t._v(" "),o("div",{staticClass:"col-12 col-sm-6"},[o("div",{staticClass:"action-buttons pull-right"},[o("button",{staticClass:"btn btn-info btn-sm",on:{click:function(e){return t.$router.push("/configuration/employee/category")}}},[o("i",{staticClass:"fas fa-list"}),t._v(" "),o("span",{staticClass:"d-none d-sm-inline"},[t._v(t._s(t.trans("employee.category")))])])])])])]),t._v(" "),o("div",{staticClass:"container-fluid"},[o("div",{staticClass:"card card-form"},[o("div",{staticClass:"card-body p-t-20"},[o("category-form",{attrs:{id:t.id}})],1)])])])}),[],!1,null,null,null);e.default=r.exports},qRIX:function(t,e,o){"use strict";var s={components:{},data:function(){return{categoryForm:new Form({name:"",description:""})}},props:["id"],mounted:function(){this.id&&this.get()},methods:{proceed:function(){this.id?this.update():this.store()},store:function(){var t=this,e=this.$loading.show();this.categoryForm.post("/api/employee/category").then((function(o){toastr.success(o.message),t.$emit("completed"),e.hide()})).catch((function(t){e.hide(),helper.showErrorMsg(t)}))},get:function(){var t=this,e=this.$loading.show();axios.get("/api/employee/category/"+this.id).then((function(o){o.name==helper.getConfig("system_admin_employee_category")&&(toastr.error(i18n.user.permission_denied),e.hide(),t.$router.push("/configuration/employee/category")),t.categoryForm.name=o.name,t.categoryForm.description=o.description,e.hide()})).catch((function(o){e.hide(),helper.showErrorMsg(o),t.$router.push("/configuration/employee/category")}))},update:function(){var t=this,e=this.$loading.show();this.categoryForm.patch("/api/employee/category/"+this.id).then((function(o){toastr.success(o.message),e.hide(),t.$router.push("/configuration/employee/category")})).catch((function(t){e.hide(),helper.showErrorMsg(t)}))}}},a=o("KHd+"),r=Object(a.a)(s,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("form",{on:{submit:function(e){return e.preventDefault(),t.proceed(e)},keydown:function(e){return t.categoryForm.errors.clear(e.target.name)}}},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-12 col-sm-6"},[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:""}},[t._v(t._s(t.trans("employee.category_name")))]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.categoryForm.name,expression:"categoryForm.name"}],staticClass:"form-control",attrs:{type:"text",name:"name",placeholder:t.trans("employee.category_name")},domProps:{value:t.categoryForm.name},on:{input:function(e){e.target.composing||t.$set(t.categoryForm,"name",e.target.value)}}}),t._v(" "),o("show-error",{attrs:{"form-name":t.categoryForm,"prop-name":"name"}})],1)]),t._v(" "),o("div",{staticClass:"col-12 col-sm-6"},[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:""}},[t._v(t._s(t.trans("employee.category_description")))]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.categoryForm.description,expression:"categoryForm.description"}],staticClass:"form-control",attrs:{type:"text",name:"description",placeholder:t.trans("employee.category_description")},domProps:{value:t.categoryForm.description},on:{input:function(e){e.target.composing||t.$set(t.categoryForm,"description",e.target.value)}}}),t._v(" "),o("show-error",{attrs:{"form-name":t.categoryForm,"prop-name":"description"}})],1)])]),t._v(" "),o("div",{staticClass:"card-footer text-right"},[o("router-link",{directives:[{name:"show",rawName:"v-show",value:t.id,expression:"id"}],staticClass:"btn btn-danger waves-effect waves-light ",attrs:{to:"/configuration/employee/category"}},[t._v(t._s(t.trans("general.cancel")))]),t._v(" "),t.id?t._e():o("button",{staticClass:"btn btn-danger waves-effect waves-light ",attrs:{type:"button"},on:{click:function(e){return t.$emit("cancel")}}},[t._v(t._s(t.trans("general.cancel")))]),t._v(" "),o("button",{staticClass:"btn btn-info waves-effect waves-light",attrs:{type:"submit"}},[t.id?o("span",[t._v(t._s(t.trans("general.update")))]):o("span",[t._v(t._s(t.trans("general.save")))])])],1)])}),[],!1,null,null,null);e.a=r.exports}}]);
//# sourceMappingURL=edit.js.map?id=e6fc40ac553b5b260f92