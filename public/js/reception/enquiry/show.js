(window.webpackJsonp=window.webpackJsonp||[]).push([[122],{YmCb:function(t,e,s){"use strict";s.r(e);var r,o={components:{},props:["enquiry"],data:function(){return{followUpForm:new Form({date_of_follow_up:"",date_of_next_follow_up:"",status:"",remarks:""}),statuses:[{text:i18n.reception.enquiry_status_open,value:"open"},{text:i18n.reception.enquiry_status_partially_closed,value:"partially_closed"},{text:i18n.reception.enquiry_status_closed,value:"closed"},{text:i18n.reception.enquiry_status_missed,value:"missed"}]}},mounted:function(){this.followUpForm.status=this.enquiry.status},methods:{submit:function(){var t=this,e=this.$loading.show();this.followUpForm.post("/api/enquiry/"+this.enquiry.uuid+"/follow/up").then((function(s){toastr.success(s.message),t.$emit("completed"),e.hide()})).catch((function(t){e.hide(),helper.showErrorMsg(t)}))}},watch:{enquiry:function(t){this.followUpForm.status=t.status}}},a=s("KHd+");function n(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}var i={components:{followUpForm:Object(a.a)(o,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("form",{on:{submit:function(e){return e.preventDefault(),t.submit(e)},keydown:function(e){return t.followUpForm.errors.clear(e.target.name)}}},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 col-sm-6"},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:""}},[t._v(t._s(t.trans("reception.date_of_follow_up")))]),t._v(" "),s("datepicker",{attrs:{bootstrapStyling:!0,placeholder:t.trans("reception.date_of_follow_up")},on:{selected:function(e){return t.followUpForm.errors.clear("date_of_follow_up")}},model:{value:t.followUpForm.date_of_follow_up,callback:function(e){t.$set(t.followUpForm,"date_of_follow_up",e)},expression:"followUpForm.date_of_follow_up"}}),t._v(" "),s("show-error",{attrs:{"form-name":t.followUpForm,"prop-name":"date_of_follow_up"}})],1)]),t._v(" "),s("div",{staticClass:"col-12 col-sm-6"},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:""}},[t._v(t._s(t.trans("reception.date_of_next_follow_up")))]),t._v(" "),s("datepicker",{attrs:{bootstrapStyling:!0,placeholder:t.trans("reception.date_of_next_follow_up")},on:{selected:function(e){return t.followUpForm.errors.clear("date_of_next_follow_up")}},model:{value:t.followUpForm.date_of_next_follow_up,callback:function(e){t.$set(t.followUpForm,"date_of_next_follow_up",e)},expression:"followUpForm.date_of_next_follow_up"}}),t._v(" "),s("show-error",{attrs:{"form-name":t.followUpForm,"prop-name":"date_of_next_follow_up"}})],1)]),t._v(" "),s("div",{staticClass:"col-12 col-sm-6"},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:""}},[t._v(t._s(t.trans("reception.enquiry_status")))]),t._v(" "),s("select",{directives:[{name:"model",rawName:"v-model",value:t.followUpForm.status,expression:"followUpForm.status"}],staticClass:"custom-select col-12",attrs:{name:"status"},on:{change:[function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.followUpForm,"status",e.target.multiple?s:s[0])},function(e){return t.followUpForm.errors.clear("status")}]}},t._l(t.statuses,(function(e){return s("option",{domProps:{value:e.value}},[t._v("\n                            "+t._s(e.text)+"\n                          ")])})),0),t._v(" "),s("show-error",{attrs:{"form-name":t.followUpForm,"prop-name":"status"}})],1)]),t._v(" "),s("div",{staticClass:"col-12 col-sm-6"},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:""}},[t._v("\n                            "+t._s(t.trans("reception.follow_up_remarks"))+"\n                        ")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.followUpForm.remarks,expression:"followUpForm.remarks"}],staticClass:"form-control",attrs:{type:"text",name:"remarks",placeholder:t.trans("reception.follow_up_remarks")},domProps:{value:t.followUpForm.remarks},on:{input:function(e){e.target.composing||t.$set(t.followUpForm,"remarks",e.target.value)}}}),t._v(" "),s("show-error",{attrs:{"form-name":t.followUpForm,"prop-name":"remarks"}})],1)])]),t._v(" "),s("div",{staticClass:"card-footer text-right"},[s("button",{staticClass:"btn btn-info waves-effect waves-light",attrs:{type:"submit"}},[t._v(t._s(t.trans("general.save")))])])]),t._v(" "),s("div",{staticClass:"clearfix"})])}),[],!1,null,null,null).exports},data:function(){return{uuid:this.$route.params.uuid,enquiry:{}}},mounted:function(){this.get()},methods:(r={hasPermission:function(t){return helper.hasPermission(t)},get:function(){var t=this,e=this.$loading.show();axios.get("/api/enquiry/"+this.uuid).then((function(s){t.enquiry=s.enquiry,e.hide()})).catch((function(t){e.hide(),helper.showErrorMsg(t)}))},getEnquiryStatus:function(t){return helper.getEnquiryStatus(t)},getEmployeeName:function(t){return helper.getEmployeeName(t)},confirmDelete:function(t){var e=this;return function(s){return e.deleteFollowUp(t)}},deleteFollowUp:function(t){var e=this,s=this.$loading.show();axios.delete("/api/enquiry/"+this.enquiry.uuid+"/follow/up/"+t.id).then((function(t){toastr.success(t.message),e.get(),s.hide()})).catch((function(t){s.hide(),helper.showErrorMsg(t)}))}},n(r,"getEmployeeName",(function(t){return helper.getEmployeeName(t)})),n(r,"getEmployeeDesignationOnDate",(function(t,e){return helper.getEmployeeDesignationOnDate(t,e)})),r),filters:{moment:function(t){return helper.formatDate(t)},momentDateTime:function(t){return helper.formatDateTime(t)},momentTime:function(t){return helper.formatTime(t)}}},l=Object(a.a)(i,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.enquiry.id?s("div",[s("div",{staticClass:"page-titles"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 col-sm-6"},[s("h3",{staticClass:"text-themecolor"},[t._v(t._s(t.trans("reception.enquiry_detail"))+"\n                    "),s("span",{staticClass:"card-subtitle"},[t._v(t._s("#"+t.enquiry.id))])])]),t._v(" "),s("div",{staticClass:"col-12 col-sm-6"},[s("div",{staticClass:"action-buttons pull-right"},[s("router-link",{staticClass:"btn btn-info btn-sm",attrs:{to:"/reception/enquiry"}},[s("i",{staticClass:"fas fa-list"}),t._v(" "),s("span",{staticClass:"d-none d-sm-inline"},[t._v(t._s(t.trans("reception.enquiry")))])])],1)])])]),t._v(" "),s("div",{staticClass:"container-fluid"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 col-sm-6 pr-0"},[s("div",{staticClass:"card border-right"},[s("div",{staticClass:"card-body"},[s("div",{staticClass:"table-responsive px-2"},[s("table",{staticClass:"table table-sm custom-show-table"},[s("tbody",[s("tr",[s("td",[t._v(t._s(t.trans("reception.enquiry_status")))]),t._v(" "),s("td",t._l(t.getEnquiryStatus(t.enquiry),(function(e){return s("span",{class:["label","label-"+e.color,"m-r-5"]},[t._v(t._s(e.label))])})),0)]),t._v(" "),s("tr",[s("td",[t._v(t._s(t.trans("reception.date_of_enquiry")))]),t._v(" "),s("td",[t._v(t._s(t._f("moment")(t.enquiry.date_of_enquiry)))])]),t._v(" "),s("tr",[s("td",[t._v(t._s(t.trans("reception.enquiry_type")))]),t._v(" "),s("td",[t._v(t._s(t.enquiry.enquiry_type.name))])]),t._v(" "),s("tr",[s("td",[t._v(t._s(t.trans("reception.enquiry_source")))]),t._v(" "),s("td",[t._v(t._s(t.enquiry.enquiry_source.name))])]),t._v(" "),t.enquiry.first_guardian_name?s("tr",[s("td",[t._v(t._s(t.trans("list."+t.enquiry.first_guardian_relation)))]),t._v(" "),s("td",[t._v(t._s(t.enquiry.first_guardian_name))])]):t._e(),t._v(" "),t.enquiry.second_guardian_name?s("tr",[s("td",[t._v(t._s(t.trans("list."+t.enquiry.second_guardian_relation)))]),t._v(" "),s("td",[t._v(t._s(t.enquiry.second_guardian_name))])]):t._e(),t._v(" "),t.enquiry.third_guardian_name?s("tr",[s("td",[t._v(t._s(t.trans("list."+t.enquiry.third_guardian_relation)))]),t._v(" "),s("td",[t._v(t._s(t.enquiry.third_guardian_name))])]):t._e(),t._v(" "),s("tr",[s("td",[t._v(t._s(t.trans("student.email")))]),t._v(" "),s("td",[t._v(t._s(t.enquiry.email))])]),t._v(" "),s("tr",[s("td",[t._v(t._s(t.trans("student.contact_number")))]),t._v(" "),s("td",[t._v(t._s(t.enquiry.contact_number))])]),t._v(" "),s("tr",[s("td",[t._v(t._s(t.trans("student.alternate_contact_number")))]),t._v(" "),s("td",[t._v(t._s(t.enquiry.alternate_contact_number))])]),t._v(" "),s("tr",[s("td",[t._v(t._s(t.trans("employee.employee")))]),t._v(" "),s("td",[t._v(t._s(t.getEmployeeName(t.enquiry.user.employee)))])]),t._v(" "),s("tr",[s("td",[t._v(t._s(t.trans("employee.designation")))]),t._v(" "),s("td",[t._v(t._s(t.getEmployeeDesignationOnDate(t.enquiry.user.employee,t.enquiry.date_of_enquiry)))])]),t._v(" "),s("tr",[s("td",[t._v(t._s(t.trans("reception.enquiry_remarks")))]),t._v(" "),s("td",[t._v(t._s(t.enquiry.remarks))])])])])]),t._v(" "),s("h4",{staticClass:"card-title px-3"},[t._v(t._s(t.trans("student.student_detail")))]),t._v(" "),s("div",{staticClass:"table-responsive px-2"},[s("table",{staticClass:"table table-sm"},[s("thead",[s("tr",[s("th",{staticClass:"p-l-20"},[t._v(t._s(t.trans("student.name")))]),t._v(" "),s("th",[t._v(t._s(t.trans("student.gender")))]),t._v(" "),s("th",[t._v(t._s(t.trans("student.date_of_birth")))]),t._v(" "),s("th",[t._v(t._s(t.trans("academic.course")))]),t._v(" "),s("th",[t._v(t._s(t.trans("academic.institute")))]),t._v(" "),s("th",[t._v(t._s(t.trans("student.remarks")))])])]),t._v(" "),s("tbody",t._l(t.enquiry.enquiry_details,(function(e){return s("tr",[s("td",{staticClass:"p-l-20"},[t._v(t._s(e.student_name))]),t._v(" "),s("td",[t._v(t._s(t.trans("list."+e.gender)))]),t._v(" "),s("td",[t._v(t._s(t._f("moment")(e.date_of_birth)))]),t._v(" "),s("td",[t._v(t._s(e.course_id?e.course.name:""))]),t._v(" "),s("td",[t._v(t._s(e.institute_id?e.institute.name:""))]),t._v(" "),s("td",[t._v(t._s(e.remarks))])])})),0)])])])])]),t._v(" "),s("div",{staticClass:"col-12 col-sm-6 p-0"},[s("div",{staticClass:"card card-form"},[s("div",{staticClass:"card-body"},[s("h4",{staticClass:"card-title"},[t._v(t._s(t.trans("reception.follow_up")))]),t._v(" "),t.hasPermission("edit-enquiry")?s("follow-up-form",{staticClass:"pr-3",attrs:{enquiry:t.enquiry},on:{completed:t.get}}):t._e(),t._v(" "),s("h4",{staticClass:"card-title"},[t._v(t._s(t.trans("reception.follow_up_detail")))]),t._v(" "),t.enquiry.enquiry_follow_ups.length?s("div",{staticClass:"table-responsive"},[s("table",{staticClass:"table table-sm pr-3"},[s("thead",[s("tr",[s("th",[t._v(t._s(t.trans("reception.date_of_follow_up")))]),t._v(" "),s("th",[t._v(t._s(t.trans("reception.follow_up_status")))]),t._v(" "),s("th",[t._v(t._s(t.trans("reception.date_of_next_follow_up")))]),t._v(" "),s("th",[t._v(t._s(t.trans("reception.follow_up_remarks")))]),t._v(" "),s("th",[t._v(t._s(t.trans("employee.employee")))]),t._v(" "),t.hasPermission("edit-enquiry")?s("th",{staticClass:"table-option"},[t._v(t._s(t.trans("general.action")))]):t._e()])]),t._v(" "),s("tbody",t._l(t.enquiry.enquiry_follow_ups,(function(e){return s("tr",[s("td",[t._v(t._s(t._f("moment")(e.date_of_follow_up)))]),t._v(" "),s("td",t._l(t.getEnquiryStatus(e),(function(e){return s("span",{class:["label","label-"+e.color,"m-r-5"]},[t._v(t._s(e.label))])})),0),t._v(" "),s("td",[t._v(t._s(t._f("moment")(e.date_of_next_follow_up)))]),t._v(" "),s("td",[t._v(t._s(e.remarks))]),t._v(" "),s("td",[t._v(t._s(t.getEmployeeName(e.user.employee))+" "),s("br"),t._v(" "+t._s(t.getEmployeeDesignationOnDate(e.user.employee,e.date_of_enquiry)))]),t._v(" "),t.hasPermission("edit-enquiry")?s("td",{staticClass:"table-option"},[s("div",{staticClass:"btn-group"},[s("button",{directives:[{name:"confirm",rawName:"v-confirm",value:{ok:t.confirmDelete(e)},expression:"{ok: confirmDelete(follow_up)}"},{name:"tooltip",rawName:"v-tooltip",value:t.trans("reception.delete_follow_up"),expression:"trans('reception.delete_follow_up')"}],key:e.id,staticClass:"btn btn-danger btn-sm"},[s("i",{staticClass:"fas fa-trash"})])])]):t._e()])})),0)])]):s("div",{staticClass:"px-4 pb-4"},[s("small",[t._v(t._s(t.trans("general.no_result_found")))])])],1)])])])])]):t._e()}),[],!1,null,null,null);e.default=l.exports}}]);
//# sourceMappingURL=show.js.map?id=b0f44562e5e0ce50ec79