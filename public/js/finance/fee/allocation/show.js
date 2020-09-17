(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{"1AJr":function(e,t,n){"use strict";var a=n("8eCw");n.n(a).a},"8eCw":function(e,t,n){var a=n("MoWn");"string"==typeof a&&(a=[[e.i,a,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};n("aET+")(a,s);a.locals&&(e.exports=a.locals)},MoWn:function(e,t,n){(e.exports=n("I1BE")(!1)).push([e.i,"\n.loading-overlay.is-full-page{\n    z-index: 1060;\n}\n",""])},OBDL:function(e,t,n){"use strict";n.r(t);var a={components:{},props:["iuuid"],data:function(){return{feeInstallmentForm:new Form({title:"",due_date:"",late_fee_applicable:"",late_fee_frequency:"",late_fee:"",fee_heads:[],selected_transport_fee:null,transport_fee_id:""}),fee_group:{},paid_installment:0,transport_fees:[],late_fee_frequencies:[]}},mounted:function(){this.getPreRequisite(),this.getInstallment()},methods:{getPreRequisite:function(){var e=this,t=this.$loading.show();axios.get("/api/fee/installment/pre-requisite").then((function(n){e.late_fee_frequencies=n.late_fee_frequencies,e.transport_fees=n.transport_fees,t.hide()})).catch((function(e){t.hide(),helper.showErrorMsg(e)}))},getFeeName:function(e,t){return e+"_"+t+"_fee"},getTransportFeeName:function(e){return e+"_transport_fee"},getInstallment:function(){var e=this,t=this.$loading.show();axios.get("/api/fee/installment/"+this.iuuid).then((function(n){e.feeInstallmentForm.fee_heads=[],e.feeInstallmentForm.title=n.title,e.feeInstallmentForm.due_date=n.due_date,e.feeInstallmentForm.late_fee_applicable=n.late_fee_applicable,e.feeInstallmentForm.late_fee_frequency=n.late_fee_frequency,e.feeInstallmentForm.late_fee=n.late_fee,e.feeInstallmentForm.transport_fee_id=n.transport_fee_id,e.feeInstallmentForm.selected_transport_fee=n.transport_fee_id?{id:n.transport_fee_id,name:n.transport_fee.name}:null,e.paid_installment=n.paid_installment,e.fee_group=n.fee_allocation_group.fee_group,n.fee_installment_details.forEach((function(t){e.feeInstallmentForm.fee_heads.push({id:t.fee_head_id,amount:t.amount,is_optional:t.is_optional,name:t.fee_head.name})})),t.hide()})).catch((function(e){t.hide(),helper.showErrorMsg(e)})),this.$emit("loaded")},submit:function(){var e=this,t=this.$loading.show();this.feeInstallmentForm.patch("/api/fee/installment/"+this.iuuid).then((function(n){toastr.success(n.message),e.$emit("completed"),t.hide()})).catch((function(e){t.hide(),helper.showErrorMsg(e)}))},onTransportFeeSelect:function(e,t){this.feeInstallmentForm.transport_fee_id=e.id}}},s=n("KHd+"),o={components:{feeInstallmentForm:Object(s.a)(a,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("form",{on:{submit:function(t){return t.preventDefault(),e.submit(t)},keydown:function(t){return e.feeInstallmentForm.errors.clear(t.target.name)}}},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-12"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-12 col-sm-6"},[n("div",{staticClass:"form-group"},[n("label",{attrs:{for:""}},[e._v(e._s(e.trans("finance.fee_installment_title")))]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.feeInstallmentForm.title,expression:"feeInstallmentForm.title"}],staticClass:"form-control",attrs:{type:"text",name:"title",placeholder:e.trans("finance.fee_installment_title"),disabled:e.paid_installment>0},domProps:{value:e.feeInstallmentForm.title},on:{input:function(t){t.target.composing||e.$set(e.feeInstallmentForm,"title",t.target.value)}}}),e._v(" "),n("show-error",{attrs:{"form-name":e.feeInstallmentForm,"prop-name":"title"}})],1)]),e._v(" "),n("div",{staticClass:"col-12 col-sm-6"},[n("div",{staticClass:"form-group"},[n("label",{attrs:{for:""}},[e._v(e._s(e.trans("finance.fee_installment_due_date")))]),e._v(" "),n("datepicker",{attrs:{bootstrapStyling:!0,placeholder:e.trans("finance.fee_installment_due_date"),name:"due_date"},on:{selected:function(t){return e.feeInstallmentForm.errors.clear("due_date")}},model:{value:e.feeInstallmentForm.due_date,callback:function(t){e.$set(e.feeInstallmentForm,"due_date",t)},expression:"feeInstallmentForm.due_date"}}),e._v(" "),n("show-error",{attrs:{"form-name":e.feeInstallmentForm,"prop-name":"due_date"}})],1)]),e._v(" "),n("div",{staticClass:"col-12 col-sm-4"},[n("div",{staticClass:"form-group"},[n("label",{attrs:{for:""}},[e._v(e._s(e.trans("finance.late_fee_applicable")))]),e._v(" "),n("br"),e._v(" "),n("switches",{staticClass:"m-l-20",attrs:{theme:"bootstrap",color:"success"},model:{value:e.feeInstallmentForm.late_fee_applicable,callback:function(t){e.$set(e.feeInstallmentForm,"late_fee_applicable",t)},expression:"feeInstallmentForm.late_fee_applicable"}})],1)]),e._v(" "),e.feeInstallmentForm.late_fee_applicable?n("div",{staticClass:"col-12 col-sm-4"},[n("div",{staticClass:"form-group"},[n("label",{attrs:{for:""}},[e._v(e._s(e.trans("finance.late_fee_frequency")))]),e._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:e.feeInstallmentForm.late_fee_frequency,expression:"feeInstallmentForm.late_fee_frequency"}],staticClass:"custom-select col-12",attrs:{name:"late_fee_frequency"},on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.feeInstallmentForm,"late_fee_frequency",t.target.multiple?n:n[0])}}},[n("option",{attrs:{value:"0"}},[e._v(e._s(e.trans("general.select_one")))]),e._v(" "),e._l(e.late_fee_frequencies,(function(t){return n("option",{domProps:{value:t.value}},[e._v("\n                                    "+e._s(t.text)+"\n                                  ")])}))],2),e._v(" "),n("show-error",{attrs:{"form-name":e.feeInstallmentForm,"prop-name":"late_fee_frequency"}})],1)]):e._e(),e._v(" "),e.feeInstallmentForm.late_fee_applicable?n("div",{staticClass:"col-12 col-sm-4"},[n("div",{staticClass:"form-group"},[n("label",{attrs:{for:""}},[e._v(e._s(e.trans("finance.late_fee")))]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.feeInstallmentForm.late_fee,expression:"feeInstallmentForm.late_fee"}],staticClass:"form-control",attrs:{type:"text",name:"late_fee",placeholder:e.trans("finance.late_fee")},domProps:{value:e.feeInstallmentForm.late_fee},on:{input:function(t){t.target.composing||e.$set(e.feeInstallmentForm,"late_fee",t.target.value)}}}),e._v(" "),n("show-error",{attrs:{"form-name":e.feeInstallmentForm,"prop-name":"late_fee"}})],1)]):e._e()]),e._v(" "),n("div",{staticClass:"row"},[e._l(e.feeInstallmentForm.fee_heads,(function(t,a){return n("div",{staticClass:"col-12 col-sm-6"},[n("div",{staticClass:"form-group"},[n("label",{attrs:{for:""}},[e._v(e._s(t.name))]),e._v(" "),n("div",{staticClass:"input-group mb-3"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.amount,expression:"fee_head.amount"}],staticClass:"form-control",attrs:{type:"text",name:e.getFeeName(a,t.id),placeholder:e.trans("finance.fee_installment_amount"),disabled:e.paid_installment>0},domProps:{value:t.amount},on:{input:function(n){n.target.composing||e.$set(t,"amount",n.target.value)}}}),e._v(" "),n("div",{staticClass:"input-group-append"},[n("div",{staticClass:"input-group-text"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.is_optional,expression:"fee_head.is_optional"},{name:"tooltip",rawName:"v-tooltip",value:e.trans("finance.fee_is_optional"),expression:"trans('finance.fee_is_optional')"}],attrs:{type:"checkbox",disabled:e.paid_installment>0},domProps:{checked:Array.isArray(t.is_optional)?e._i(t.is_optional,null)>-1:t.is_optional},on:{change:function(n){var a=t.is_optional,s=n.target,o=!!s.checked;if(Array.isArray(a)){var i=e._i(a,null);s.checked?i<0&&e.$set(t,"is_optional",a.concat([null])):i>-1&&e.$set(t,"is_optional",a.slice(0,i).concat(a.slice(i+1)))}else e.$set(t,"is_optional",o)}}})])])]),e._v(" "),n("show-error",{attrs:{"form-name":e.feeInstallmentForm,"prop-name":e.getFeeName(a,t.id)}})],1)])})),e._v(" "),e.fee_group.options&&e.fee_group.options.has_transport?n("div",{staticClass:"col-12 col-sm-6"},[n("div",{staticClass:"form-group"},[n("label",{attrs:{for:""}},[e._v(e._s(e.trans("transport.transport")))]),e._v(" "),n("v-select",{attrs:{label:"name",name:"transport_fee",id:"transport_fee",options:e.transport_fees,placeholder:e.trans("general.select_one"),disabled:e.paid_installment>0},on:{select:e.onTransportFeeSelect,close:function(e){},remove:function(e){}},model:{value:e.feeInstallmentForm.selected_transport_fee,callback:function(t){e.$set(e.feeInstallmentForm,"selected_transport_fee",t)},expression:"feeInstallmentForm.selected_transport_fee"}},[e.transport_fees.length?e._e():n("div",{staticClass:"multiselect__option",attrs:{slot:"afterList"},slot:"afterList"},[e._v("\n                                        "+e._s(e.trans("general.no_option_found"))+"\n                                    ")])]),e._v(" "),n("show-error",{attrs:{"form-name":e.feeInstallmentForm,"prop-name":"transport_fee"}})],1)]):e._e()],2)])]),e._v(" "),n("div",{staticClass:"card-footer text-right"},[n("button",{staticClass:"btn btn-info waves-effect waves-light",attrs:{type:"submit"}},[e._v(e._s(e.trans("general.save")))])])])])}),[],!1,null,null,null).exports},data:function(){return{uuid:this.$route.params.uuid,fee_allocation:{batch:{},course:{},fee_installments:[]},transport_circles:[],transport_fee_details:[],fee_concession_details:[],fee_concessions:[],transport_circle_id:"",selected_transport_circle:null,fee_concession_id:"",selected_fee_concession:null,fee:{groups:[]},iuuid:"",showEditModal:!1}},mounted:function(){helper.hasPermission("list-fee-allocation")||(helper.notAccessibleMsg(),this.$router.push("/dashboard")),this.getPreRequisite(),this.getFeeAllocation()},methods:{getConfig:function(e){return helper.getConfig(e)},hasPermission:function(e){return helper.hasPermission(e)},getPreRequisite:function(){var e=this,t=this.$loading.show();axios.get("/api/fee/allocation/show/pre-requisite").then((function(n){e.transport_circles=n.transport_circles,e.fee_concessions=n.fee_concessions,e.transport_fee_details=n.transport_fee_details,e.fee_concession_details=n.fee_concession_details,t.hide()})).catch((function(e){t.hide(),helper.showErrorMsg(e)}))},getFeeAllocation:function(){var e=this,t=this.$loading.show();axios.get("/api/fee/allocation/"+this.uuid).then((function(n){e.fee_allocation=n,e.calculate(),t.hide()})).catch((function(n){t.hide(),helper.showErrorMsg(n),e.$router.push("/finance/fee/allocation")}))},showEditAction:function(e){this.iuuid=e.uuid,this.showEditModal=!0},calculate:function(){var e=this;this.fee={groups:[]},this.fee_allocation.fee_allocation_groups.forEach((function(t){var n=[],a=[],s=[];a.push(i18n.finance.fee_installment_title),a.push(i18n.finance.fee_installment_due_date),a.push(i18n.finance.late_fee),s.push(i18n.finance.total),s.push(""),s.push(""),t.fee_group.fee_heads.forEach((function(e){a.push(e.name)}));var o=!(!t.fee_group.options||!t.fee_group.options.has_transport);o&&a.push(i18n.transport.fee),a.push(i18n.finance.installment_total),t.fee_installments.forEach((function(a){var s=[];s.push({text:a.title}),s.push({text:e.showDate(a.due_date)});var i=a.late_fee_applicable?e.formatCurrency(a.late_fee)+"/"+e.getLateFeeFrequencyName(a.late_fee_frequency):"-";s.push({text:i}),t.fee_group.fee_heads.forEach((function(t){s.push({text:e.formatCurrency(e.getFee(a,t.id,1)),actual:e.formatCurrency(e.getFee(a,t.id,0)),is_concession:!!e.fee_concession_id,is_optional:e.isFeeHeadOptional(a,t.id)})})),o&&s.push({text:e.getTransportFee(t,a.id)}),s.push({text:e.formatCurrency(e.getInstallmentTotal(t,a))}),n.push({uuid:a.uuid,data:s})})),t.fee_group.fee_heads.forEach((function(n){s.push(e.formatCurrency(e.getTotalFee(t,n.id)))})),o&&s.push(e.getTransportFeeTotal(t)),s.push(e.formatCurrency(e.getInstallmentGrandTotal(t)));var i={name:t.fee_group.name,heads:a,installments:n,foots:s};e.fee.groups.push(i)}))},formatCurrency:function(e){return helper.formatCurrency(e)},getLateFeeFrequencyName:function(e){return helper.getLateFeeFrequencyName(e)},onTransportCircleSelect:function(e){this.transport_circle_id=e.id,this.calculate()},onTransportCircleRemove:function(){this.transport_circle_id="",this.calculate()},onFeeConcessionSelect:function(e){this.fee_concession_id=e.id,this.calculate()},onFeeConcessionRemove:function(){this.fee_concession_id="",this.calculate()},isFeeHeadOptional:function(e,t){var n=e.fee_installment_details.find((function(e){return e.fee_head_id==t}));return!(!n||!n.is_optional)},getFee:function(e,t,n){var a=this,s=e.fee_installment_details.find((function(e){return e.fee_head_id==t})),o=s?s.amount:0,i=0;if(this.fee_concession_id&&n){var r=this.fee_concession_details.find((function(e){return e.fee_concession_id==a.fee_concession_id&&e.fee_head_id==t}));i=r?"percent"==r.type?o*(r.amount/100):r.amount:0}return(o-=i)<0&&(o=0),o},getTotalFee:function(e,t){var n=this,a=0;return e.fee_installments.forEach((function(e){a+=n.getFee(e,t,1)})),a},getInstallmentTotal:function(e,t){var n=this,a=0;return e.fee_group.fee_heads.forEach((function(e){a+=n.getFee(t,e.id,1)})),a+=this.getTransportFeeAmount(e,t.id)},getInstallmentGrandTotal:function(e){var t=this,n=0;return e.fee_installments.forEach((function(a){n+=t.getInstallmentTotal(e,a)})),n},getTransportFeeTotal:function(e){var t=this,n=0;return e.fee_installments.forEach((function(a){n+=t.getTransportFeeAmount(e,a.id)})),n?this.formatCurrency(n):"-"},getTransportFee:function(e,t){var n=this.getTransportFeeAmount(e,t);return n?this.formatCurrency(n):"-"},getTransportFeeAmount:function(e,t){var n=this;if(!e.fee_group.options||e.fee_group.options&&!e.fee_group.options.has_transport)return 0;var a=e.fee_installments.find((function(e){return e.id==t}));if(!a||a&&!a.transport_fee_id)return 0;var s=this.transport_fee_details.find((function(e){return e.transport_fee_id==a.transport_fee_id&&e.transport_circle_id==n.transport_circle_id}));return s?s.amount:0},showDate:function(e){return helper.formatDate(e)},print:function(){var e=this.$loading.show();axios.post("/api/fee/allocation/"+this.uuid+"/print",{fee:this.fee}).then((function(t){var n=window.open("/print");e.hide(),n.document.write(t)})).catch((function(t){e.hide(),helper.showErrorMsg(t)}))},pdf:function(){var e=this,t=this.$loading.show();axios.post("/api/fee/allocation/"+this.uuid+"/pdf",{fee:this.fee}).then((function(n){t.hide(),window.open("/download/report/"+n+"?token="+e.authToken)})).catch((function(e){t.hide(),helper.showErrorMsg(e)}))}},filters:{moment:function(e){return helper.formatDate(e)},momentDateTime:function(e){return helper.formatDateTime(e)}},computed:{authToken:function(){return helper.getAuthToken()}}},i=(n("1AJr"),Object(s.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"page-titles"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-12 col-sm-6"},[n("h3",{staticClass:"text-themecolor"},[e._v(e._s(e.trans("finance.fee_allocation"))+" \n                    "),e.fee_allocation.course?[e._v(e._s(e.fee_allocation.course.name))]:e._e(),e._v(" "),!e.fee_allocation.course&&e.fee_allocation.batch?[e._v(e._s(e.fee_allocation.batch.course.name+" "+e.fee_allocation.batch.name))]:e._e(),e._v(" "),e.fee_allocation.paid_count?n("i",{staticClass:"fas fa-lock fa-lg"}):e._e()],2)]),e._v(" "),n("div",{staticClass:"col-12 col-sm-6"},[n("div",{staticClass:"action-buttons pull-right"},[n("button",{staticClass:"btn btn-info btn-sm",on:{click:function(t){return e.$router.push("/finance/fee/allocation")}}},[n("i",{staticClass:"fas fa-list"}),e._v(" "),n("span",{staticClass:"d-none d-sm-inline"},[e._v(e._s(e.trans("finance.fee_allocation")))])]),e._v(" "),n("div",{staticClass:"btn-group"},[n("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:e.trans("general.more_option"),expression:"trans('general.more_option')"}],staticClass:"btn btn-info btn-sm dropdown-toggle no-caret ",attrs:{type:"button",role:"menu",id:"moreOption","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[n("i",{staticClass:"fas fa-ellipsis-h"}),e._v(" "),n("span",{staticClass:"d-none d-sm-inline"})]),e._v(" "),n("div",{class:["dropdown-menu","ltr"==e.getConfig("direction")?"dropdown-menu-right":""],attrs:{"aria-labelledby":"moreOption"}},[n("button",{staticClass:"dropdown-item custom-dropdown",on:{click:e.print}},[n("i",{staticClass:"fas fa-print"}),e._v(" "+e._s(e.trans("general.print")))]),e._v(" "),n("button",{staticClass:"dropdown-item custom-dropdown",on:{click:e.pdf}},[n("i",{staticClass:"fas fa-file-pdf"}),e._v(" "+e._s(e.trans("general.generate_pdf")))])])])])])])]),e._v(" "),n("div",{staticClass:"container-fluid"},[n("div",{staticClass:"card p-4"},[n("div",{staticClass:"card-body"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-12 col-sm-4"},[n("div",{staticClass:"form-group"},[n("label",{attrs:{for:""}},[e._v(e._s(e.trans("transport.circle")))]),e._v(" "),n("v-select",{attrs:{label:"name",name:"transport_circle_id",id:"transport_circle_id",options:e.transport_circles,placeholder:e.trans("general.select_one")},on:{select:e.onTransportCircleSelect,close:function(e){},remove:e.onTransportCircleRemove},model:{value:e.selected_transport_circle,callback:function(t){e.selected_transport_circle=t},expression:"selected_transport_circle"}},[e.transport_circles.length?e._e():n("div",{staticClass:"multiselect__option",attrs:{slot:"afterList"},slot:"afterList"},[e._v("\n                                    "+e._s(e.trans("general.no_option_found"))+"\n                                ")])])],1)]),e._v(" "),n("div",{staticClass:"col-12 col-sm-4"},[n("div",{staticClass:"form-group"},[n("label",{attrs:{for:""}},[e._v(e._s(e.trans("finance.fee_concession")))]),e._v(" "),n("v-select",{attrs:{label:"name",name:"fee_concession_id",id:"fee_concession_id",options:e.fee_concessions,placeholder:e.trans("general.select_one")},on:{select:e.onFeeConcessionSelect,close:function(e){},remove:e.onFeeConcessionRemove},model:{value:e.selected_fee_concession,callback:function(t){e.selected_fee_concession=t},expression:"selected_fee_concession"}},[e.fee_concessions.length?e._e():n("div",{staticClass:"multiselect__option",attrs:{slot:"afterList"},slot:"afterList"},[e._v("\n                                    "+e._s(e.trans("general.no_option_found"))+"\n                                ")])])],1)])])])]),e._v(" "),e._l(e.fee.groups,(function(t){return n("div",{staticClass:"card"},[n("div",{staticClass:"card-body"},[n("h4",{staticClass:"card-title px-4"},[e._v(e._s(t.name))]),e._v(" "),n("div",{staticClass:"table-responsive"},[n("table",{staticClass:"table table-sm"},[n("thead",[n("tr",[e._l(t.heads,(function(t){return n("th",[e._v(e._s(t))])})),e._v(" "),n("th")],2)]),e._v(" "),n("tbody",[e._l(t.installments,(function(t){return n("tr",[e._l(t.data,(function(t){return n("td",[t.is_concession&&t.text!=t.actual?[n("span",{staticStyle:{"text-decoration":"line-through"}},[e._v(e._s(t.actual))]),e._v(" "+e._s(t.text))]:[e._v(e._s(t.text))],e._v(" "),t.is_optional?[n("small",[e._v("("+e._s(e.trans("finance.optional"))+")")])]:e._e()],2)})),e._v(" "),n("td",[e.hasPermission("edit-fee-allocation")?n("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:e.trans("finance.edit_fee_installment"),expression:"trans('finance.edit_fee_installment')"}],staticClass:"btn btn-info btn-sm",on:{click:function(n){return n.preventDefault(),e.showEditAction(t)}}},[n("i",{staticClass:"fas fa-edit"})]):e._e()])],2)})),e._v(" "),n("tr",[e._l(t.foots,(function(t){return n("td",[e._v(e._s(t))])})),e._v(" "),n("td")],2)],2)])])])])}))],2),e._v(" "),e.showEditModal?n("transition",{attrs:{name:"modal"}},[n("div",{staticClass:"modal-mask"},[n("div",{staticClass:"modal-wrapper"},[n("div",{staticClass:"modal-container modal-lg"},[n("div",{staticClass:"modal-header"},[e._t("header",[e._v("\n                            "+e._s(e.trans("finance.edit_fee_installment"))+"\n                            "),n("span",{staticClass:"float-right pointer",on:{click:function(t){e.showEditModal=!1}}},[e._v("x")])])],2),e._v(" "),n("div",{staticClass:"modal-body"},[e._t("body",[n("fee-installment-form",{attrs:{iuuid:e.iuuid},on:{completed:e.getFeeAllocation,close:function(t){e.showEditModal=!1}}}),e._v(" "),n("div",{staticClass:"clearfix"})])],2)])])])]):e._e()],1)}),[],!1,null,null,null));t.default=i.exports}}]);
//# sourceMappingURL=show.js.map?id=351ea3fe944deb0af33c