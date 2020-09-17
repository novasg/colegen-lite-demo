(window.webpackJsonp=window.webpackJsonp||[]).push([[160],{"9Z33":function(t,o,s){"use strict";s.r(o);var e={components:{todoForm:s("XlOy").a},data:function(){return{id:this.$route.params.id}},mounted:function(){helper.hasPermission("access-todo")||(helper.notAccessibleMsg(),this.$router.push("/dashboard")),helper.featureAvailable("todo")||(helper.featureNotAvailableMsg(),this.$router.push("/dashboard"))}},i=s("KHd+"),r=Object(i.a)(e,(function(){var t=this,o=t.$createElement,s=t._self._c||o;return s("div",[s("div",{staticClass:"page-titles"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 col-sm-6"},[s("h3",{staticClass:"text-themecolor"},[t._v(t._s(t.trans("utility.edit_todo")))])]),t._v(" "),s("div",{staticClass:"col-12 col-sm-6"},[s("div",{staticClass:"action-buttons pull-right"},[s("button",{staticClass:"btn btn-info btn-sm",on:{click:function(o){return t.$router.push("/utility/todo")}}},[s("i",{staticClass:"fas fa-list"}),t._v(" "),s("span",{staticClass:"d-none d-sm-inline"},[t._v(t._s(t.trans("utility.todo")))])])])])])]),t._v(" "),s("div",{staticClass:"container-fluid"},[s("div",{staticClass:"card card-form"},[s("div",{staticClass:"card-body p-t-20"},[s("todo-form",{attrs:{id:t.id}})],1)])])])}),[],!1,null,null,null);o.default=r.exports},XlOy:function(t,o,s){"use strict";var e={components:{},data:function(){return{todoForm:new Form({title:"",description:"",date:""})}},props:["id"],mounted:function(){this.id&&this.getTodo()},methods:{proceed:function(){this.id?this.updateTodo():this.storeTodo()},storeTodo:function(){var t=this,o=this.$loading.show();this.todoForm.post("/api/todo").then((function(s){toastr.success(s.message),t.$emit("completed"),o.hide()})).catch((function(t){o.hide(),helper.showErrorMsg(t)}))},getTodo:function(){var t=this,o=this.$loading.show();axios.get("/api/todo/"+this.id).then((function(s){t.todoForm.title=s.title,t.todoForm.description=s.description,t.todoForm.date=s.date,o.hide()})).catch((function(s){o.hide(),helper.showErrorMsg(s),t.$router.push("/utility/todo")}))},updateTodo:function(){var t=this,o=this.$loading.show();this.todoForm.patch("/api/todo/"+this.id).then((function(s){toastr.success(s.message),o.hide(),t.$router.push("/utility/todo")})).catch((function(t){o.hide(),helper.showErrorMsg(t)}))}}},i=s("KHd+"),r=Object(i.a)(e,(function(){var t=this,o=t.$createElement,s=t._self._c||o;return s("form",{on:{submit:function(o){return o.preventDefault(),t.proceed(o)},keydown:function(o){return t.todoForm.errors.clear(o.target.name)}}},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 col-sm-3"},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:""}},[t._v(t._s(t.trans("utility.todo_title")))]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.todoForm.title,expression:"todoForm.title"}],staticClass:"form-control",attrs:{type:"text",name:"title",placeholder:t.trans("utility.todo_title")},domProps:{value:t.todoForm.title},on:{input:function(o){o.target.composing||t.$set(t.todoForm,"title",o.target.value)}}}),t._v(" "),s("show-error",{attrs:{"form-name":t.todoForm,"prop-name":"title"}})],1)]),t._v(" "),s("div",{staticClass:"col-12 col-sm-3"},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:""}},[t._v(t._s(t.trans("utility.todo_date")))]),t._v(" "),s("datepicker",{attrs:{bootstrapStyling:!0,placeholder:t.trans("utility.todo_date")},on:{selected:function(o){return t.todoForm.errors.clear("date")}},model:{value:t.todoForm.date,callback:function(o){t.$set(t.todoForm,"date",o)},expression:"todoForm.date"}}),t._v(" "),s("show-error",{attrs:{"form-name":t.todoForm,"prop-name":"date"}})],1)]),t._v(" "),s("div",{staticClass:"col-12 col-sm-6"},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:""}},[t._v(t._s(t.trans("utility.todo_description")))]),t._v(" "),s("autosize-textarea",{attrs:{rows:"1",name:"description",placeholder:t.trans("utility.todo_description")},model:{value:t.todoForm.description,callback:function(o){t.$set(t.todoForm,"description",o)},expression:"todoForm.description"}}),t._v(" "),s("show-error",{attrs:{"form-name":t.todoForm,"prop-name":"description"}})],1)])]),t._v(" "),s("div",{staticClass:"card-footer text-right"},[s("router-link",{directives:[{name:"show",rawName:"v-show",value:t.id,expression:"id"}],staticClass:"btn btn-danger waves-effect waves-light ",attrs:{to:"/utility/todo"}},[t._v(t._s(t.trans("general.cancel")))]),t._v(" "),t.id?t._e():s("button",{staticClass:"btn btn-danger waves-effect waves-light ",attrs:{type:"button"},on:{click:function(o){return t.$emit("cancel")}}},[t._v(t._s(t.trans("general.cancel")))]),t._v(" "),s("button",{staticClass:"btn btn-info waves-effect waves-light",attrs:{type:"submit"}},[t.id?s("span",[t._v(t._s(t.trans("general.update")))]):s("span",[t._v(t._s(t.trans("general.save")))])])],1)])}),[],!1,null,null,null);o.a=r.exports}}]);
//# sourceMappingURL=edit.js.map?id=d1975e7c8c8bfdddc9d2