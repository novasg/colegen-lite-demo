(window.webpackJsonp=window.webpackJsonp||[]).push([[127,128],{"3mvz":function(e,t,r){"use strict";r.r(t);var s=r("YtBg"),o=r("9duV"),a={components:{postalRecordForm:s.a,postalRecordDetail:o.default},data:function(){return{postal_records:{total:0,data:[]},filter:{sort_by:"created_at",order:"desc",type:null,date_start_date:"",date_end_date:"",page_length:helper.getConfig("page_length")},orderByOptions:[{value:"created_at",translation:i18n.general.created_at}],types:[{text:i18n.reception.postal_record_dispatch,value:"dispatch"},{text:i18n.reception.postal_record_receive,value:"receive"}],showFilterPanel:!1,showCreatePanel:!1,postaling_purposes:[],selected_postaling_purposes:null,help_topic:"",showUuid:"",showModal:!1}},mounted:function(){helper.hasPermission("list-postal-record")||(helper.notAccessibleMsg(),this.$router.push("/dashboard")),this.getPostalRecords(),helper.showDemoNotification(["reception"])},methods:{hasPermission:function(e){return helper.hasPermission(e)},showAction:function(e){this.showUuid=e.uuid,this.showModal=!0},getPostalRecords:function(e){var t=this,r=this.$loading.show();"number"!=typeof e&&(e=1),this.filter.date_start_date=helper.toDate(this.filter.date_start_date),this.filter.date_end_date=helper.toDate(this.filter.date_end_date);var s=helper.getFilterURL(this.filter);axios.get("/api/postal/record?page="+e+s).then((function(e){t.postal_records=e.postal_records,r.hide()})).catch((function(e){r.hide(),helper.showErrorMsg(e)}))},editPostalRecord:function(e){this.$router.push("/reception/postal/record/"+e.uuid+"/edit")},confirmDelete:function(e){var t=this;return function(r){return t.deletePostalRecord(e)}},isConfidential:function(e){return e.is_confidential?'<i class="fas fa-check"></i>':'<i class="fas fa-times"></i>'},deletePostalRecord:function(e){var t=this,r=this.$loading.show();axios.delete("/api/postal/record/"+e.uuid).then((function(e){toastr.success(e.message),t.getPostalRecords(),r.hide()})).catch((function(e){r.hide(),helper.showErrorMsg(e)}))},getConfig:function(e){return helper.getConfig(e)},getEmployeeName:function(e){return helper.getEmployeeName(e)},getEmployeeDesignationOnDate:function(e,t){return helper.getEmployeeDesignationOnDate(e,t)},print:function(){var e=this.$loading.show();axios.post("/api/postal/record/print",{filter:this.filter}).then((function(t){var r=window.open("/print");e.hide(),r.document.write(t)})).catch((function(t){e.hide(),helper.showErrorMsg(t)}))},pdf:function(){var e=this,t=this.$loading.show();axios.post("/api/postal/record/pdf",{filter:this.filter}).then((function(r){t.hide(),window.open("/download/report/"+r+"?token="+e.authToken)})).catch((function(e){t.hide(),helper.showErrorMsg(e)}))}},filters:{moment:function(e){return helper.formatDate(e)},momentDateTime:function(e){return helper.formatDateTime(e)},momentTime:function(e){return helper.formatTime(e)}},watch:{"filter.sort_by":function(e){this.getPostalRecords()},"filter.order":function(e){this.getPostalRecords()},"filter.page_length":function(e){this.getPostalRecords()}},computed:{authToken:function(){return helper.getAuthToken()}}},n=r("KHd+"),i=Object(n.a)(a,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"page-titles"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-12 col-sm-6"},[r("h3",{staticClass:"text-themecolor"},[e._v(e._s(e.trans("reception.postal_record"))+" \n                    "),e.postal_records.total?r("span",{staticClass:"card-subtitle d-none d-sm-inline"},[e._v(e._s(e.trans("general.total_result_found",{count:e.postal_records.total,from:e.postal_records.from,to:e.postal_records.to})))]):r("span",{staticClass:"card-subtitle d-none d-sm-inline"},[e._v(e._s(e.trans("general.no_result_found")))])])]),e._v(" "),r("div",{staticClass:"col-12 col-sm-6"},[r("div",{staticClass:"action-buttons pull-right"},[e.postal_records.total&&!e.showCreatePanel&&e.hasPermission("create-postal-record")?r("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:e.trans("general.add_new"),expression:"trans('general.add_new')"}],staticClass:"btn btn-info btn-sm",on:{click:function(t){e.showCreatePanel=!e.showCreatePanel}}},[r("i",{staticClass:"fas fa-plus"}),e._v(" "),r("span",{staticClass:"d-none d-sm-inline"},[e._v(e._s(e.trans("reception.add_new_postal_record")))])]):e._e(),e._v(" "),e.showFilterPanel?e._e():r("button",{staticClass:"btn btn-info btn-sm",on:{click:function(t){e.showFilterPanel=!e.showFilterPanel}}},[r("i",{staticClass:"fas fa-filter"}),e._v(" "),r("span",{staticClass:"d-none d-sm-inline"},[e._v(e._s(e.trans("general.filter")))])]),e._v(" "),r("sort-by",{attrs:{"order-by-options":e.orderByOptions,"sort-by":e.filter.sort_by,order:e.filter.order},on:{updateSortBy:function(t){e.filter.sort_by=t},updateOrder:function(t){e.filter.order=t}}}),e._v(" "),r("div",{staticClass:"btn-group"},[r("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:e.trans("general.more_option"),expression:"trans('general.more_option')"}],staticClass:"btn btn-info btn-sm dropdown-toggle no-caret ",attrs:{type:"button",role:"menu",id:"moreOption","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[r("i",{staticClass:"fas fa-ellipsis-h"}),e._v(" "),r("span",{staticClass:"d-none d-sm-inline"})]),e._v(" "),r("div",{class:["dropdown-menu","ltr"==e.getConfig("direction")?"dropdown-menu-right":""],attrs:{"aria-labelledby":"moreOption"}},[r("button",{staticClass:"dropdown-item custom-dropdown",on:{click:e.print}},[r("i",{staticClass:"fas fa-print"}),e._v(" "+e._s(e.trans("general.print")))]),e._v(" "),r("button",{staticClass:"dropdown-item custom-dropdown",on:{click:e.pdf}},[r("i",{staticClass:"fas fa-file-pdf"}),e._v(" "+e._s(e.trans("general.generate_pdf")))])])]),e._v(" "),r("help-button",{on:{clicked:function(t){e.help_topic="reception.postal-record"}}})],1)])])]),e._v(" "),r("div",{staticClass:"container-fluid"},[r("transition",{attrs:{name:"fade"}},[e.showFilterPanel?r("div",{staticClass:"card card-form"},[r("div",{staticClass:"card-body"},[r("h4",{staticClass:"card-title"},[e._v(e._s(e.trans("general.filter")))]),e._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-12 col-sm-3"},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:""}},[e._v(e._s(e.trans("reception.postal_record_type")))]),e._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:e.filter.type,expression:"filter.type"}],staticClass:"custom-select col-12",on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.filter,"type",t.target.multiple?r:r[0])}}},[r("option",{attrs:{value:"null",selected:""}},[e._v(e._s(e.trans("general.select_one")))]),e._v(" "),e._l(e.types,(function(t){return r("option",{domProps:{value:t.value}},[e._v("\n                                    "+e._s(t.text)+"\n                                  ")])}))],2)])]),e._v(" "),r("div",{staticClass:"col-12 col-sm-6"},[r("date-range-picker",{attrs:{"start-date":e.filter.date_start_date,"end-date":e.filter.date_end_date,label:e.trans("general.date_between")},on:{"update:startDate":function(t){return e.$set(e.filter,"date_start_date",t)},"update:start-date":function(t){return e.$set(e.filter,"date_start_date",t)},"update:endDate":function(t){return e.$set(e.filter,"date_end_date",t)},"update:end-date":function(t){return e.$set(e.filter,"date_end_date",t)}}})],1)]),e._v(" "),r("div",{staticClass:"card-footer text-right"},[r("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:function(t){e.showFilterPanel=!1}}},[e._v(e._s(e.trans("general.cancel")))]),e._v(" "),r("button",{staticClass:"btn btn-info waves-effect waves-light",attrs:{type:"button"},on:{click:e.getPostalRecords}},[e._v(e._s(e.trans("general.filter")))])])])]):e._e()]),e._v(" "),e.hasPermission("create-postal-record")?r("transition",{attrs:{name:"fade"}},[e.showCreatePanel?r("div",{staticClass:"card card-form"},[r("div",{staticClass:"card-body"},[r("h4",{staticClass:"card-title"},[e._v(e._s(e.trans("reception.add_new_postal_record")))]),e._v(" "),r("postal-record-form",{on:{completed:e.getPostalRecords,cancel:function(t){e.showCreatePanel=!e.showCreatePanel}}})],1)]):e._e()]):e._e(),e._v(" "),r("div",{staticClass:"card"},[r("div",{staticClass:"card-body"},[e.postal_records.total?r("div",{staticClass:"table-responsive"},[r("table",{staticClass:"table table-sm"},[r("thead",[r("tr",[r("th",[e._v("#")]),e._v(" "),r("th",[e._v(e._s(e.trans("reception.postal_record_type")))]),e._v(" "),r("th",[e._v(e._s(e.trans("reception.postal_record_reference_number")))]),e._v(" "),r("th",[e._v(e._s(e.trans("reception.postal_record_confidential")))]),e._v(" "),r("th",[e._v(e._s(e.trans("reception.postal_record_sender")))]),e._v(" "),r("th",[e._v(e._s(e.trans("reception.postal_record_receiver")))]),e._v(" "),r("th",[e._v(e._s(e.trans("reception.postal_record_date")))]),e._v(" "),r("th",[e._v(e._s(e.trans("general.entry_by")))]),e._v(" "),r("th",{staticClass:"table-option"},[e._v(e._s(e.trans("general.action")))])])]),e._v(" "),r("tbody",e._l(e.postal_records.data,(function(t){return r("tr",[r("td",{domProps:{textContent:e._s(t.id)}}),e._v(" "),r("td",{domProps:{textContent:e._s(t.type)}}),e._v(" "),r("td",[e._v(e._s(t.reference_number))]),e._v(" "),r("td",{domProps:{innerHTML:e._s(e.isConfidential(t))}}),e._v(" "),r("td",[e._v("\n                                    "+e._s(t.sender_title)+" "),r("br"),e._v("\n                                    "+e._s(t.sender_address)+"\n                                ")]),e._v(" "),r("td",[e._v("\n                                    "+e._s(t.receiver_title)+" "),r("br"),e._v("\n                                    "+e._s(t.receiver_address)+"\n                                ")]),e._v(" "),r("td",[e._v(e._s(e._f("moment")(t.date)))]),e._v(" "),r("td",[e._v(e._s(e.getEmployeeName(t.user.employee))+" "),r("br"),e._v(" "+e._s(e.getEmployeeDesignationOnDate(t.user.employee,t.date)))]),e._v(" "),r("td",{staticClass:"table-option"},[r("div",{staticClass:"btn-group"},[r("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:e.trans("general.view"),expression:"trans('general.view')"}],staticClass:"btn btn-success btn-sm",on:{click:function(r){return r.preventDefault(),e.showAction(t)}}},[r("i",{staticClass:"fas fa-arrow-circle-right"})]),e._v(" "),e.hasPermission("edit-postal-record")?r("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:e.trans("reception.edit_postal_record"),expression:"trans('reception.edit_postal_record')"}],staticClass:"btn btn-info btn-sm",on:{click:function(r){return r.preventDefault(),e.editPostalRecord(t)}}},[r("i",{staticClass:"fas fa-edit"})]):e._e(),e._v(" "),e.hasPermission("delete-postal-record")?r("button",{directives:[{name:"confirm",rawName:"v-confirm",value:{ok:e.confirmDelete(t)},expression:"{ok: confirmDelete(postal_record)}"},{name:"tooltip",rawName:"v-tooltip",value:e.trans("reception.delete_postal_record"),expression:"trans('reception.delete_postal_record')"}],key:t.id,staticClass:"btn btn-danger btn-sm"},[r("i",{staticClass:"fas fa-trash"})]):e._e()])])])})),0)])]):e._e(),e._v(" "),e.postal_records.total?e._e():r("module-info",{attrs:{module:"reception",title:"postal_record_module_title",description:"postal_record_module_description",icon:"list"}},[r("div",{attrs:{slot:"btn"},slot:"btn"},[!e.showCreatePanel&&e.hasPermission("create-postal-record")?r("button",{staticClass:"btn btn-info btn-md",on:{click:function(t){e.showCreatePanel=!e.showCreatePanel}}},[r("i",{staticClass:"fas fa-plus"}),e._v(" "+e._s(e.trans("general.add_new")))]):e._e()])]),e._v(" "),r("pagination-record",{attrs:{"page-length":e.filter.page_length,records:e.postal_records},on:{"update:pageLength":function(t){return e.$set(e.filter,"page_length",t)},"update:page-length":function(t){return e.$set(e.filter,"page_length",t)},updateRecords:e.getPostalRecords}})],1)])],1),e._v(" "),e.showModal?r("postal-record-detail",{attrs:{uuid:e.showUuid},on:{close:function(t){e.showModal=!1}}}):e._e(),e._v(" "),r("right-panel",{attrs:{topic:e.help_topic}})],1)}),[],!1,null,null,null);t.default=i.exports},"9duV":function(e,t,r){"use strict";r.r(t);var s={components:{},props:["uuid"],mounted:function(){this.uuid&&this.get()},data:function(){return{postal_record:[],attachments:[]}},methods:{get:function(){var e=this,t=this.$loading.show();axios.get("/api/postal/record/"+this.uuid).then((function(r){e.postal_record=r.postal_record,e.attachments=r.attachments,t.hide()})).catch((function(e){t.hide(),helper.showErrorMsg(e)}))},getEmployeeName:function(e){return helper.getEmployeeName(e)},getEmployeeDesignation:function(e,t){return helper.getEmployeeDesignation(e,t)}},computed:{authToken:function(){return helper.getAuthToken()}},filters:{momentDateTime:function(e){return helper.formatDateTime(e)},moment:function(e){return helper.formatDate(e)}}},o=r("KHd+"),a=Object(o.a)(s,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("transition",{attrs:{name:"modal"}},[r("div",{staticClass:"modal-mask"},[r("div",{staticClass:"modal-wrapper"},[r("div",{staticClass:"modal-container modal-lg"},[e.postal_record.id?r("div",{staticClass:"modal-header"},[e._t("header",[r("span",[e._v("#"+e._s(e.postal_record.id)+" "+e._s(e.postal_record.reference_number))]),e._v(" "),r("span",{staticClass:"float-right pointer",on:{click:function(t){return e.$emit("close")}}},[e._v("x")])])],2):e._e(),e._v(" "),e.postal_record.id?r("div",{staticClass:"modal-body"},[e._t("body",[r("h6",{staticClass:"card-title"},[r("p",[r("strong",[e._v(e._s(e.trans("reception.postal_record_date"))+":")]),e._v(" "+e._s(e._f("moment")(e.postal_record.date)))]),e._v(" "),r("strong",[e._v(e._s(e.trans("reception.postal_record_sender"))+":")]),e._v(" "+e._s(e.postal_record.sender_title)+" "),r("br"),e._v("\n                                "+e._s(e.postal_record.sender_address)+"\n                            "),r("br"),e._v(" "),r("strong",[e._v(e._s(e.trans("reception.postal_record_receiver"))+":")]),e._v(" "+e._s(e.postal_record.receiver_title)+" "),r("br"),e._v("\n                                "+e._s(e.postal_record.receiver_address)+" \n                            "),e.postal_record.employee?r("p",{staticClass:"pull-right"},[r("strong",[e._v(e._s(e.trans("general.entry_by"))+":")]),e._v(" "+e._s(e.getEmployeeName(e.postal_record.employee))+" "+e._s(e.getEmployeeDesignation(e.postal_record.employee,e.postal_record.date))+"\n                            ")]):e._e()]),e._v(" "),r("div",{staticClass:"m-t-20",domProps:{innerHTML:e._s(e.postal_record.description)}}),e._v(" "),e.attachments.length?r("div",[r("ul",{staticClass:"m-t-10 upload-file-list"},e._l(e.attachments,(function(t){return r("li",{staticClass:"upload-file-list-item"},[r("a",{staticClass:"no-link-color",attrs:{href:"/reception/postal/record/"+e.postal_record.uuid+"/attachment/"+t.uuid+"/download?token="+e.authToken}},[r("i",{class:["file-icon","fas","fa-lg",t.file_info.icon]}),e._v(" "),r("span",{staticClass:"upload-file-list-item-size"},[e._v(e._s(t.file_info.size))]),e._v(" "+e._s(t.user_filename))])])})),0)]):e._e(),e._v(" "),r("hr"),e._v(" "),r("p",[r("i",{staticClass:"far fa-clock"}),e._v(" "),r("small",[e._v(e._s(e.trans("general.created_at"))+" "+e._s(e._f("momentDateTime")(e.postal_record.created_at)))]),e._v(" "),r("span",{staticClass:"pull-right"},[r("i",{staticClass:"far fa-clock"}),e._v(" "),r("small",[e._v(e._s(e.trans("general.updated_at"))+" "+e._s(e._f("momentDateTime")(e.postal_record.updated_at)))])])])])],2):e._e()])])])])}),[],!1,null,null,null);t.default=a.exports},YtBg:function(e,t,r){"use strict";var s={components:{},data:function(){return{postalRecordForm:new Form({reference_number:"",sender_title:"",sender_address:"",receiver_title:"",receiver_address:"",type:"dispatch",date:"",is_confidential:0,description:"",upload_token:""}),module_id:"",clearAttachment:!0}},props:["uuid"],mounted:function(){helper.hasPermission("create-postal-record")||helper.hasPermission("edit-postal-record")||(helper.notAccessibleMsg(),this.$router.push("/dashboard")),this.uuid?this.get():(this.postalRecordForm.date=helper.today(),this.postalRecordForm.upload_token=this.$uuid.v4())},methods:{proceed:function(){this.uuid?this.update():this.store()},getPreRequisite:function(){var e=this.$loading.show();axios.get("/api/postal/record/pre-requisite").then((function(t){e.hide()})).catch((function(t){e.hide(),helper.showErrorMsg(t)}))},store:function(){var e=this,t=this.$loading.show();this.postalRecordForm.post("/api/postal/record").then((function(r){toastr.success(r.message),e.clearAttachment=!e.clearAttachment,e.postalRecordForm.upload_token=e.$uuid.v4(),e.postalRecordForm.type="dispatch",e.$emit("completed"),t.hide()})).catch((function(e){t.hide(),helper.showErrorMsg(e)}))},get:function(){var e=this,t=this.$loading.show();axios.get("/api/postal/record/"+this.uuid).then((function(r){e.postalRecordForm.upload_token=r.postal_record.upload_token,e.postalRecordForm.type=r.postal_record.type,e.postalRecordForm.reference_number=r.postal_record.reference_number,e.postalRecordForm.sender_title=r.postal_record.sender_title,e.postalRecordForm.sender_address=r.postal_record.sender_address,e.postalRecordForm.receiver_title=r.postal_record.receiver_title,e.postalRecordForm.receiver_address=r.postal_record.receiver_address,e.postalRecordForm.description=r.postal_record.description,e.postalRecordForm.is_confidential=r.postal_record.is_confidential,e.postalRecordForm.date=r.postal_record.date,e.module_id=r.postal_record.id,e.loaded=!0,t.hide()})).catch((function(r){t.hide(),helper.showErrorMsg(r),e.$router.push("/reception/postal/record")}))},update:function(){var e=this,t=this.$loading.show();this.postalRecordForm.patch("/api/postal/record/"+this.uuid).then((function(r){toastr.success(r.message),t.hide(),e.$router.push("/reception/postal/record")})).catch((function(e){t.hide(),helper.showErrorMsg(e)}))}}},o=r("KHd+"),a=Object(o.a)(s,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("form",{on:{submit:function(t){return t.preventDefault(),e.proceed(t)},keydown:function(t){return e.postalRecordForm.errors.clear(t.target.name)}}},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-12 col-sm-3"},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:""}},[e._v(e._s(e.trans("reception.postal_record_type")))]),e._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:e.postalRecordForm.type,expression:"postalRecordForm.type"}],staticClass:"custom-select col-12",on:{select:function(t){return e.postalRecordForm.errors.clear("type")},change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.postalRecordForm,"type",t.target.multiple?r:r[0])}}},[r("option",{attrs:{value:"dispatch"}},[e._v(e._s(e.trans("reception.postal_record_dispatch")))]),e._v(" "),r("option",{attrs:{value:"receive"}},[e._v(e._s(e.trans("reception.postal_record_receive")))])]),e._v(" "),r("show-error",{attrs:{"form-name":e.postalRecordForm,"prop-name":"type"}})],1)]),e._v(" "),r("div",{staticClass:"col-12 col-sm-3"},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:""}},[e._v(e._s(e.trans("reception.postal_record_reference_number")))]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.postalRecordForm.reference_number,expression:"postalRecordForm.reference_number"}],staticClass:"form-control",attrs:{type:"text",name:"reference_number",placeholder:e.trans("reception.postal_record_reference_number")},domProps:{value:e.postalRecordForm.reference_number},on:{input:function(t){t.target.composing||e.$set(e.postalRecordForm,"reference_number",t.target.value)}}}),e._v(" "),r("show-error",{attrs:{"form-name":e.postalRecordForm,"prop-name":"reference_number"}})],1)]),e._v(" "),r("div",{staticClass:"col-12 col-sm-3"},[r("div",{staticClass:"form-group"},[r("switches",{staticClass:"m-l-20",attrs:{theme:"bootstrap",color:"success"},model:{value:e.postalRecordForm.is_confidential,callback:function(t){e.$set(e.postalRecordForm,"is_confidential",t)},expression:"postalRecordForm.is_confidential"}}),e._v(" "+e._s(e.trans("reception.postal_record_confidential"))+"\n            ")],1)])]),e._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-12 col-sm-3"},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:""}},[e._v(e._s(e.trans("reception.postal_record_sender_title")))]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.postalRecordForm.sender_title,expression:"postalRecordForm.sender_title"}],staticClass:"form-control",attrs:{type:"text",name:"sender_title",placeholder:e.trans("reception.postal_record_sender_title")},domProps:{value:e.postalRecordForm.sender_title},on:{input:function(t){t.target.composing||e.$set(e.postalRecordForm,"sender_title",t.target.value)}}}),e._v(" "),r("show-error",{attrs:{"form-name":e.postalRecordForm,"prop-name":"sender_title"}})],1)]),e._v(" "),r("div",{staticClass:"col-12 col-sm-6"},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:""}},[e._v(e._s(e.trans("reception.postal_record_sender_address")))]),e._v(" "),r("autosize-textarea",{attrs:{rows:"1",name:"sender_address",placeholder:e.trans("reception.postal_record_sender_address")},model:{value:e.postalRecordForm.sender_address,callback:function(t){e.$set(e.postalRecordForm,"sender_address",t)},expression:"postalRecordForm.sender_address"}}),e._v(" "),r("show-error",{attrs:{"form-name":e.postalRecordForm,"prop-name":"sender_address"}})],1)])]),e._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-12 col-sm-3"},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:""}},[e._v(e._s(e.trans("reception.postal_record_receiver_title")))]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.postalRecordForm.receiver_title,expression:"postalRecordForm.receiver_title"}],staticClass:"form-control",attrs:{type:"text",name:"receiver_title",placeholder:e.trans("reception.postal_record_receiver_title")},domProps:{value:e.postalRecordForm.receiver_title},on:{input:function(t){t.target.composing||e.$set(e.postalRecordForm,"receiver_title",t.target.value)}}}),e._v(" "),r("show-error",{attrs:{"form-name":e.postalRecordForm,"prop-name":"receiver_title"}})],1)]),e._v(" "),r("div",{staticClass:"col-12 col-sm-6"},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:""}},[e._v(e._s(e.trans("reception.postal_record_receiver_address")))]),e._v(" "),r("autosize-textarea",{attrs:{rows:"1",name:"receiver_address",placeholder:e.trans("reception.postal_record_receiver_address")},model:{value:e.postalRecordForm.receiver_address,callback:function(t){e.$set(e.postalRecordForm,"receiver_address",t)},expression:"postalRecordForm.receiver_address"}}),e._v(" "),r("show-error",{attrs:{"form-name":e.postalRecordForm,"prop-name":"receiver_address"}})],1)])]),e._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-12 col-sm-4"},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:""}},[e._v(e._s(e.trans("reception.postal_record_date")))]),e._v(" "),r("datepicker",{attrs:{bootstrapStyling:!0,placeholder:e.trans("reception.date")},on:{selected:function(t){return e.postalRecordForm.errors.clear("date")}},model:{value:e.postalRecordForm.date,callback:function(t){e.$set(e.postalRecordForm,"date",t)},expression:"postalRecordForm.date"}}),e._v(" "),r("show-error",{attrs:{"form-name":e.postalRecordForm,"prop-name":"date"}})],1)]),e._v(" "),r("div",{staticClass:"col-12"},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:""}},[e._v(e._s(e.trans("reception.postal_record_description")))]),e._v(" "),r("autosize-textarea",{attrs:{rows:"1",name:"description",placeholder:e.trans("reception.postal_record_description")},model:{value:e.postalRecordForm.description,callback:function(t){e.$set(e.postalRecordForm,"description",t)},expression:"postalRecordForm.description"}}),e._v(" "),r("show-error",{attrs:{"form-name":e.postalRecordForm,"prop-name":"description"}})],1)]),e._v(" "),r("div",{staticClass:"col-12"},[r("div",{staticClass:"form-group"},[r("file-upload-input",{attrs:{"button-text":e.trans("general.upload_document"),token:e.postalRecordForm.upload_token,module:"postal_record","clear-file":e.clearAttachment,"module-id":e.module_id}})],1)])]),e._v(" "),r("div",{staticClass:"card-footer text-right"},[r("router-link",{directives:[{name:"show",rawName:"v-show",value:e.uuid,expression:"uuid"}],staticClass:"btn btn-danger waves-effect waves-light ",attrs:{to:"/reception/postal/record"}},[e._v(e._s(e.trans("general.cancel")))]),e._v(" "),e.uuid?e._e():r("button",{staticClass:"btn btn-danger waves-effect waves-light ",attrs:{type:"button"},on:{click:function(t){return e.$emit("cancel")}}},[e._v(e._s(e.trans("general.cancel")))]),e._v(" "),r("button",{staticClass:"btn btn-info waves-effect waves-light",attrs:{type:"submit"}},[e.uuid?r("span",[e._v(e._s(e.trans("general.update")))]):r("span",[e._v(e._s(e.trans("general.save")))])])],1)])}),[],!1,null,null,null);t.a=a.exports}}]);
//# sourceMappingURL=index.js.map?id=5f3b7f05d6b1286618ae