(window.webpackJsonp=window.webpackJsonp||[]).push([[117],{lku0:function(t,e,a){"use strict";a.r(e);var o={components:{callLogForm:a("pJ1D").a},data:function(){return{call_logs:{total:0,data:[]},filter:{sort_by:"created_at",order:"desc",type:null,calling_purpose_id:[],date_start_date:"",date_end_date:"",page_length:helper.getConfig("page_length")},orderByOptions:[{value:"created_at",translation:i18n.general.created_at}],types:[{text:i18n.reception.call_type_incoming,value:"incoming"},{text:i18n.reception.call_type_outgoing,value:"outgoing"}],showFilterPanel:!1,showCreatePanel:!1,calling_purposes:[],selected_calling_purposes:null,help_topic:"",showUuid:"",showModal:!1}},mounted:function(){helper.hasPermission("list-call-log")||(helper.notAccessibleMsg(),this.$router.push("/dashboard")),this.getCallLogs(),helper.showDemoNotification(["reception"])},methods:{hasPermission:function(t){return helper.hasPermission(t)},showAction:function(t){this.showUuid=t.uuid,this.showModal=!0},getCallLogs:function(t){var e=this,a=this.$loading.show();"number"!=typeof t&&(t=1),this.filter.date_start_date=helper.toDate(this.filter.date_start_date),this.filter.date_end_date=helper.toDate(this.filter.date_end_date);var o=helper.getFilterURL(this.filter);axios.get("/api/call/log?page="+t+o).then((function(t){e.call_logs=t.call_logs,e.calling_purposes=t.filters.calling_purposes,a.hide()})).catch((function(t){a.hide(),helper.showErrorMsg(t)}))},editCallLog:function(t){this.$router.push("/reception/call/log/"+t.uuid+"/edit")},confirmDelete:function(t){var e=this;return function(a){return e.deleteCallLog(t)}},deleteCallLog:function(t){var e=this,a=this.$loading.show();axios.delete("/api/call/log/"+t.uuid).then((function(t){toastr.success(t.message),e.getCallLogs(),a.hide()})).catch((function(t){a.hide(),helper.showErrorMsg(t)}))},getConfig:function(t){return helper.getConfig(t)},getEmployeeName:function(t){return helper.getEmployeeName(t)},getEmployeeDesignationOnDate:function(t,e){return helper.getEmployeeDesignationOnDate(t,e)},print:function(){var t=this.$loading.show();axios.post("/api/call/log/print",{filter:this.filter}).then((function(e){var a=window.open("/print");t.hide(),a.document.write(e)})).catch((function(e){t.hide(),helper.showErrorMsg(e)}))},pdf:function(){var t=this,e=this.$loading.show();axios.post("/api/call/log/pdf",{filter:this.filter}).then((function(a){e.hide(),window.open("/download/report/"+a+"?token="+t.authToken)})).catch((function(t){e.hide(),helper.showErrorMsg(t)}))},onCallingPurposeSelect:function(t){this.filter.calling_purpose_id.push(t.id)},onCallingPurposeRemove:function(t){this.filter.calling_purpose_id.splice(this.filter.calling_purpose_id.indexOf(t.id),1)}},filters:{moment:function(t){return helper.formatDate(t)},momentDateTime:function(t){return helper.formatDateTime(t)},momentTime:function(t){return helper.formatTime(t)}},watch:{"filter.sort_by":function(t){this.getCallLogs()},"filter.order":function(t){this.getCallLogs()},"filter.page_length":function(t){this.getCallLogs()}},computed:{authToken:function(){return helper.getAuthToken()}}},i=a("KHd+"),l=Object(i.a)(o,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"page-titles"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-sm-6"},[a("h3",{staticClass:"text-themecolor"},[t._v(t._s(t.trans("reception.call_log"))+" \n                    "),t.call_logs.total?a("span",{staticClass:"card-subtitle d-none d-sm-inline"},[t._v(t._s(t.trans("general.total_result_found",{count:t.call_logs.total,from:t.call_logs.from,to:t.call_logs.to})))]):a("span",{staticClass:"card-subtitle d-none d-sm-inline"},[t._v(t._s(t.trans("general.no_result_found")))])])]),t._v(" "),a("div",{staticClass:"col-12 col-sm-6"},[a("div",{staticClass:"action-buttons pull-right"},[t.call_logs.total&&!t.showCreatePanel&&t.hasPermission("create-call-log")?a("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.trans("general.add_new"),expression:"trans('general.add_new')"}],staticClass:"btn btn-info btn-sm",on:{click:function(e){t.showCreatePanel=!t.showCreatePanel}}},[a("i",{staticClass:"fas fa-plus"}),t._v(" "),a("span",{staticClass:"d-none d-sm-inline"},[t._v(t._s(t.trans("reception.add_new_call_log")))])]):t._e(),t._v(" "),t.showFilterPanel?t._e():a("button",{staticClass:"btn btn-info btn-sm",on:{click:function(e){t.showFilterPanel=!t.showFilterPanel}}},[a("i",{staticClass:"fas fa-filter"}),t._v(" "),a("span",{staticClass:"d-none d-sm-inline"},[t._v(t._s(t.trans("general.filter")))])]),t._v(" "),a("sort-by",{attrs:{"order-by-options":t.orderByOptions,"sort-by":t.filter.sort_by,order:t.filter.order},on:{updateSortBy:function(e){t.filter.sort_by=e},updateOrder:function(e){t.filter.order=e}}}),t._v(" "),a("div",{staticClass:"btn-group"},[a("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.trans("general.more_option"),expression:"trans('general.more_option')"}],staticClass:"btn btn-info btn-sm dropdown-toggle no-caret ",attrs:{type:"button",role:"menu",id:"moreOption","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[a("i",{staticClass:"fas fa-ellipsis-h"}),t._v(" "),a("span",{staticClass:"d-none d-sm-inline"})]),t._v(" "),a("div",{class:["dropdown-menu","ltr"==t.getConfig("direction")?"dropdown-menu-right":""],attrs:{"aria-labelledby":"moreOption"}},[a("button",{staticClass:"dropdown-item custom-dropdown",on:{click:t.print}},[a("i",{staticClass:"fas fa-print"}),t._v(" "+t._s(t.trans("general.print")))]),t._v(" "),a("button",{staticClass:"dropdown-item custom-dropdown",on:{click:t.pdf}},[a("i",{staticClass:"fas fa-file-pdf"}),t._v(" "+t._s(t.trans("general.generate_pdf")))])])]),t._v(" "),a("help-button",{on:{clicked:function(e){t.help_topic="reception.call-log"}}})],1)])])]),t._v(" "),a("div",{staticClass:"container-fluid"},[a("transition",{attrs:{name:"fade"}},[t.showFilterPanel?a("div",{staticClass:"card card-form"},[a("div",{staticClass:"card-body"},[a("h4",{staticClass:"card-title"},[t._v(t._s(t.trans("general.filter")))]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-sm-3"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:""}},[t._v(t._s(t.trans("reception.call_type")))]),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.filter.type,expression:"filter.type"}],staticClass:"custom-select col-12",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.filter,"type",e.target.multiple?a:a[0])}}},[a("option",{attrs:{value:"null",selected:""}},[t._v(t._s(t.trans("general.select_one")))]),t._v(" "),t._l(t.types,(function(e){return a("option",{domProps:{value:e.value}},[t._v("\n                                    "+t._s(e.text)+"\n                                  ")])}))],2)])]),t._v(" "),a("div",{staticClass:"col-12 col-sm-3"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:""}},[t._v(t._s(t.trans("reception.calling_purpose")))]),t._v(" "),a("v-select",{attrs:{label:"name","track-by":"id",name:"calling_purpose_id",id:"calling_purpose_id",options:t.calling_purposes,placeholder:t.trans("reception.select_calling_purpose"),multiple:!0,"close-on-select":!1,"clear-on-select":!1,"hide-selected":!0,selected:t.selected_calling_purposes},on:{select:t.onCallingPurposeSelect,remove:t.onCallingPurposeRemove},model:{value:t.selected_calling_purposes,callback:function(e){t.selected_calling_purposes=e},expression:"selected_calling_purposes"}},[t.calling_purposes.length?t._e():a("div",{staticClass:"multiselect__option",attrs:{slot:"afterList"},slot:"afterList"},[t._v("\n                                        "+t._s(t.trans("general.no_option_found"))+"\n                                    ")])])],1)]),t._v(" "),a("div",{staticClass:"col-12 col-sm-6"},[a("date-range-picker",{attrs:{"start-date":t.filter.date_start_date,"end-date":t.filter.date_end_date,label:t.trans("general.date_between")},on:{"update:startDate":function(e){return t.$set(t.filter,"date_start_date",e)},"update:start-date":function(e){return t.$set(t.filter,"date_start_date",e)},"update:endDate":function(e){return t.$set(t.filter,"date_end_date",e)},"update:end-date":function(e){return t.$set(t.filter,"date_end_date",e)}}})],1)]),t._v(" "),a("div",{staticClass:"card-footer text-right"},[a("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:function(e){t.showFilterPanel=!1}}},[t._v(t._s(t.trans("general.cancel")))]),t._v(" "),a("button",{staticClass:"btn btn-info waves-effect waves-light",attrs:{type:"button"},on:{click:t.getCallLogs}},[t._v(t._s(t.trans("general.filter")))])])])]):t._e()]),t._v(" "),t.hasPermission("create-call-log")?a("transition",{attrs:{name:"fade"}},[t.showCreatePanel?a("div",{staticClass:"card card-form"},[a("div",{staticClass:"card-body"},[a("h4",{staticClass:"card-title"},[t._v(t._s(t.trans("reception.add_new_call_log")))]),t._v(" "),a("call-log-form",{on:{completed:t.getCallLogs,cancel:function(e){t.showCreatePanel=!t.showCreatePanel}}})],1)]):t._e()]):t._e(),t._v(" "),a("div",{staticClass:"card"},[a("div",{staticClass:"card-body"},[t.call_logs.total?a("div",{staticClass:"table-responsive"},[a("table",{staticClass:"table table-sm"},[a("thead",[a("tr",[a("th",[t._v("#")]),t._v(" "),a("th",[t._v(t._s(t.trans("reception.calling_purpose")))]),t._v(" "),a("th",[t._v(t._s(t.trans("reception.call_detail")))]),t._v(" "),a("th",[t._v(t._s(t.trans("reception.call_log_name")))]),t._v(" "),a("th",[t._v(t._s(t.trans("reception.date")))]),t._v(" "),a("th",[t._v(t._s(t.trans("reception.start_time")))]),t._v(" "),a("th",[t._v(t._s(t.trans("reception.end_time")))]),t._v(" "),a("th",[t._v(t._s(t.trans("reception.call_duration")))]),t._v(" "),a("th",[t._v(t._s(t.trans("reception.call_log_description")))]),t._v(" "),a("th",[t._v(t._s(t.trans("general.entry_by")))]),t._v(" "),a("th",{staticClass:"table-option"},[t._v(t._s(t.trans("general.action")))])])]),t._v(" "),a("tbody",t._l(t.call_logs.data,(function(e){return a("tr",[a("td",{domProps:{textContent:t._s(e.id)}}),t._v(" "),a("td",{domProps:{textContent:t._s(e.calling_purpose.name)}}),t._v(" "),a("td",[t._v("\n                                    "+t._s(e.outgoing_number)+" "+t._s(t.trans("general.to"))+" "+t._s(e.incoming_number)+"\n                                ")]),t._v(" "),a("td",[t._v(t._s(e.name))]),t._v(" "),a("td",[t._v(t._s(t._f("moment")(e.date)))]),t._v(" "),a("td",[t._v(t._s(t._f("momentTime")(e.start_time)))]),t._v(" "),a("td",[t._v(t._s(t._f("momentTime")(e.end_time)))]),t._v(" "),a("td",[t._v(t._s(e.call_duration))]),t._v(" "),a("td",[t._v(t._s(e.description))]),t._v(" "),a("td",[t._v(t._s(t.getEmployeeName(e.user.employee))+" "),a("br"),t._v(" "+t._s(t.getEmployeeDesignationOnDate(e.user.employee,e.date)))]),t._v(" "),a("td",{staticClass:"table-option"},[a("div",{staticClass:"btn-group"},[t.hasPermission("edit-call-log")?a("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.trans("reception.edit_call_log"),expression:"trans('reception.edit_call_log')"}],staticClass:"btn btn-info btn-sm",on:{click:function(a){return a.preventDefault(),t.editCallLog(e)}}},[a("i",{staticClass:"fas fa-edit"})]):t._e(),t._v(" "),t.hasPermission("delete-call-log")?a("button",{directives:[{name:"confirm",rawName:"v-confirm",value:{ok:t.confirmDelete(e)},expression:"{ok: confirmDelete(call_log)}"},{name:"tooltip",rawName:"v-tooltip",value:t.trans("reception.delete_call_log"),expression:"trans('reception.delete_call_log')"}],key:e.id,staticClass:"btn btn-danger btn-sm"},[a("i",{staticClass:"fas fa-trash"})]):t._e()])])])})),0)])]):t._e(),t._v(" "),t.call_logs.total?t._e():a("module-info",{attrs:{module:"reception",title:"call_log_module_title",description:"call_log_module_description",icon:"list"}},[a("div",{attrs:{slot:"btn"},slot:"btn"},[!t.showCreatePanel&&t.hasPermission("create-call-log")?a("button",{staticClass:"btn btn-info btn-md",on:{click:function(e){t.showCreatePanel=!t.showCreatePanel}}},[a("i",{staticClass:"fas fa-plus"}),t._v(" "+t._s(t.trans("general.add_new")))]):t._e()])]),t._v(" "),a("pagination-record",{attrs:{"page-length":t.filter.page_length,records:t.call_logs},on:{"update:pageLength":function(e){return t.$set(t.filter,"page_length",e)},"update:page-length":function(e){return t.$set(t.filter,"page_length",e)},updateRecords:t.getCallLogs}})],1)])],1),t._v(" "),a("right-panel",{attrs:{topic:t.help_topic}})],1)}),[],!1,null,null,null);e.default=l.exports},pJ1D:function(t,e,a){"use strict";var o={components:{},data:function(){return{callLogForm:new Form({name:"",incoming_number:"",outgoing_number:"",type:"outgoing",calling_purpose_id:"",date:"",start_time:"",end_time:"",description:""}),loaded:!1,start_time:{hour:"",minute:"",meridiem:"am"},end_time:{hour:"",minute:"",meridiem:"am"},calling_purposes:[],selected_calling_purpose:null}},props:["uuid"],mounted:function(){helper.hasPermission("create-call-log")||helper.hasPermission("edit-call-log")||(helper.notAccessibleMsg(),this.$router.push("/dashboard")),this.getPreRequisite()},methods:{timePadding:function(t){return helper.formatWithPadding(t,2)},proceed:function(){this.uuid?this.update():this.store()},getPreRequisite:function(){var t=this,e=this.$loading.show();axios.get("/api/call/log/pre-requisite").then((function(a){t.calling_purposes=a.calling_purposes,t.callLogForm.date=helper.today(),t.uuid||(t.loaded=!0),t.uuid&&t.get(),e.hide()})).catch((function(t){e.hide(),helper.showErrorMsg(t)}))},store:function(){var t=this;this.callLogForm.start_time=this.start_time.hour&&this.start_time.minute?helper.formatWithPadding(this.start_time.hour,2)+":"+helper.formatWithPadding(this.start_time.minute,2)+" "+this.start_time.meridiem:"",this.callLogForm.end_time=this.end_time.hour&&this.end_time.minute?helper.formatWithPadding(this.end_time.hour,2)+":"+helper.formatWithPadding(this.end_time.minute,2)+" "+this.end_time.meridiem:"";var e=this.$loading.show();this.callLogForm.post("/api/call/log").then((function(a){toastr.success(a.message),t.selected_calling_purpose=null,t.start_time.hour="",t.start_time.minute="",t.start_time.meridiem="am",t.end_time.hour="",t.end_time.minute="",t.end_time.meridiem="am",t.callLogForm.type="outgoing",t.$emit("completed"),e.hide()})).catch((function(t){e.hide(),helper.showErrorMsg(t)}))},get:function(){var t=this,e=this.$loading.show();axios.get("/api/call/log/"+this.uuid).then((function(a){t.callLogForm.type=a.call_log.type,t.callLogForm.name=a.call_log.name,t.callLogForm.incoming_number=a.call_log.incoming_number,t.callLogForm.outgoing_number=a.call_log.outgoing_number,t.callLogForm.calling_purpose_id=a.call_log.calling_purpose_id,t.selected_calling_purpose=a.selected_calling_purpose,t.callLogForm.description=a.call_log.description,t.callLogForm.date=a.call_log.date,t.start_time.hour=a.start_time.hour,t.start_time.minute=a.start_time.minute,t.start_time.meridiem=a.start_time.meridiem,a.call_log.end_time&&(t.end_time.hour=a.end_time.hour,t.end_time.minute=a.end_time.minute,t.end_time.meridiem=a.end_time.meridiem),t.loaded=!0,e.hide()})).catch((function(a){e.hide(),helper.showErrorMsg(a),t.$router.push("/reception/call/log")}))},update:function(){var t=this;this.callLogForm.start_time=this.start_time.hour&&this.start_time.minute?helper.formatWithPadding(this.start_time.hour,2)+":"+helper.formatWithPadding(this.start_time.minute,2)+" "+this.start_time.meridiem:"",this.callLogForm.end_time=this.end_time.hour&&this.end_time.minute?helper.formatWithPadding(this.end_time.hour,2)+":"+helper.formatWithPadding(this.end_time.minute,2)+" "+this.end_time.meridiem:"";var e=this.$loading.show();this.callLogForm.patch("/api/call/log/"+this.uuid).then((function(a){toastr.success(a.message),e.hide(),t.$router.push("/reception/call/log")})).catch((function(t){e.hide(),helper.showErrorMsg(t)}))},onCallingPurposeSelect:function(t){return this.callLogForm.calling_purpose_id=t.id}}},i=a("KHd+"),l=Object(i.a)(o,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("form",{on:{submit:function(e){return e.preventDefault(),t.proceed(e)},keydown:function(e){return t.callLogForm.errors.clear(e.target.name)}}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-sm-3"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:""}},[t._v(t._s(t.trans("reception.calling_purpose")))]),t._v(" "),a("v-select",{attrs:{label:"name",name:"calling_purpose_id",id:"calling_purpose_id",options:t.calling_purposes,placeholder:t.trans("reception.select_calling_purpose")},on:{select:t.onCallingPurposeSelect,close:function(e){return t.callLogForm.errors.clear("calling_purpose_id")},remove:function(e){t.callLogForm.calling_purpose_id=""}},model:{value:t.selected_calling_purpose,callback:function(e){t.selected_calling_purpose=e},expression:"selected_calling_purpose"}},[t.calling_purposes.length?t._e():a("div",{staticClass:"multiselect__option",attrs:{slot:"afterList"},slot:"afterList"},[t._v("\n                        "+t._s(t.trans("general.no_option_found"))+"\n                    ")])]),t._v(" "),a("show-error",{attrs:{"form-name":t.callLogForm,"prop-name":"calling_purpose_id"}})],1)]),t._v(" "),a("div",{staticClass:"col-12 col-sm-3"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:""}},[t._v(t._s(t.trans("reception.call_type")))]),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.callLogForm.type,expression:"callLogForm.type"}],staticClass:"custom-select col-12",on:{select:function(e){return t.callLogForm.errors.clear("type")},change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.callLogForm,"type",e.target.multiple?a:a[0])}}},[a("option",{attrs:{value:"outgoing"}},[t._v(t._s(t.trans("reception.call_type_outgoing")))]),t._v(" "),a("option",{attrs:{value:"incoming"}},[t._v(t._s(t.trans("reception.call_type_incoming")))])]),t._v(" "),a("show-error",{attrs:{"form-name":t.callLogForm,"prop-name":"type"}})],1)])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-sm-3"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:""}},[t._v(t._s(t.trans("reception.call_log_name")))]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.callLogForm.name,expression:"callLogForm.name"}],staticClass:"form-control",attrs:{type:"text",name:"name",placeholder:t.trans("reception.call_log_name")},domProps:{value:t.callLogForm.name},on:{input:function(e){e.target.composing||t.$set(t.callLogForm,"name",e.target.value)}}}),t._v(" "),a("show-error",{attrs:{"form-name":t.callLogForm,"prop-name":"name"}})],1)]),t._v(" "),a("div",{staticClass:"col-12 col-sm-3"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:""}},[t._v(t._s(t.trans("reception.call_log_incoming_number")))]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.callLogForm.incoming_number,expression:"callLogForm.incoming_number"}],staticClass:"form-control",attrs:{type:"text",name:"incoming_number",placeholder:t.trans("reception.call_log_incoming_number")},domProps:{value:t.callLogForm.incoming_number},on:{input:function(e){e.target.composing||t.$set(t.callLogForm,"incoming_number",e.target.value)}}}),t._v(" "),a("show-error",{attrs:{"form-name":t.callLogForm,"prop-name":"incoming_number"}})],1)]),t._v(" "),a("div",{staticClass:"col-12 col-sm-3"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:""}},[t._v(t._s(t.trans("reception.call_log_outgoing_number")))]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.callLogForm.outgoing_number,expression:"callLogForm.outgoing_number"}],staticClass:"form-control",attrs:{type:"text",name:"outgoing_number",placeholder:t.trans("reception.call_log_outgoing_number")},domProps:{value:t.callLogForm.outgoing_number},on:{input:function(e){e.target.composing||t.$set(t.callLogForm,"outgoing_number",e.target.value)}}}),t._v(" "),a("show-error",{attrs:{"form-name":t.callLogForm,"prop-name":"outgoing_number"}})],1)])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-sm-4"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:""}},[t._v(t._s(t.trans("reception.date")))]),t._v(" "),a("datepicker",{attrs:{bootstrapStyling:!0,placeholder:t.trans("reception.date")},on:{selected:function(e){return t.callLogForm.errors.clear("date")}},model:{value:t.callLogForm.date,callback:function(e){t.$set(t.callLogForm,"date",e)},expression:"callLogForm.date"}}),t._v(" "),a("show-error",{attrs:{"form-name":t.callLogForm,"prop-name":"date"}})],1)]),t._v(" "),t.loaded?a("div",{staticClass:"col-12 col-sm-4"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:""}},[t._v(t._s(t.trans("reception.start_time")))]),t._v(" "),a("timepicker",{attrs:{hour:t.start_time.hour,minute:t.start_time.minute,meridiem:t.start_time.meridiem},on:{"update:hour":function(e){return t.$set(t.start_time,"hour",e)},"update:minute":function(e){return t.$set(t.start_time,"minute",e)},"update:meridiem":function(e){return t.$set(t.start_time,"meridiem",e)}}})],1)]):t._e(),t._v(" "),t.loaded?a("div",{staticClass:"col-12 col-sm-4"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:""}},[t._v(t._s(t.trans("reception.end_time")))]),t._v(" "),a("timepicker",{attrs:{hour:t.end_time.hour,minute:t.end_time.minute,meridiem:t.end_time.meridiem},on:{"update:hour":function(e){return t.$set(t.end_time,"hour",e)},"update:minute":function(e){return t.$set(t.end_time,"minute",e)},"update:meridiem":function(e){return t.$set(t.end_time,"meridiem",e)}}})],1)]):t._e(),t._v(" "),a("div",{staticClass:"col-12"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:""}},[t._v(t._s(t.trans("reception.call_log_description")))]),t._v(" "),a("autosize-textarea",{attrs:{rows:"1",name:"description",placeholder:t.trans("reception.call_log_description")},model:{value:t.callLogForm.description,callback:function(e){t.$set(t.callLogForm,"description",e)},expression:"callLogForm.description"}}),t._v(" "),a("show-error",{attrs:{"form-name":t.callLogForm,"prop-name":"description"}})],1)])]),t._v(" "),a("div",{staticClass:"card-footer text-right"},[a("router-link",{directives:[{name:"show",rawName:"v-show",value:t.uuid,expression:"uuid"}],staticClass:"btn btn-danger waves-effect waves-light ",attrs:{to:"/reception/call/log"}},[t._v(t._s(t.trans("general.cancel")))]),t._v(" "),t.uuid?t._e():a("button",{staticClass:"btn btn-danger waves-effect waves-light ",attrs:{type:"button"},on:{click:function(e){return t.$emit("cancel")}}},[t._v(t._s(t.trans("general.cancel")))]),t._v(" "),a("button",{staticClass:"btn btn-info waves-effect waves-light",attrs:{type:"submit"}},[t.uuid?a("span",[t._v(t._s(t.trans("general.update")))]):a("span",[t._v(t._s(t.trans("general.save")))])])],1)])}),[],!1,null,null,null);e.a=l.exports}}]);
//# sourceMappingURL=index.js.map?id=ec3e05ee86dcabf4700d