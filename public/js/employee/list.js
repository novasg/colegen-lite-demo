(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{"/35S":function(e,t,o){"use strict";o.r(t);var s={components:{employeeForm:o("fdhs").a},data:function(){return{employees:{total:0,data:[]},selectAll:!1,employeeGroupForm:new Form({ids:[],employee_group_id:"",action:"attach"}),employee_groups:[],selected_group:null,filter:{sort_by:"first_name",order:"asc",page_length:helper.getConfig("page_length"),first_name:"",middle_name:"",last_name:"",father_name:"",department_id:[],designation_id:[],employee_group_id:[],status:"active"},orderByOptions:[{value:"first_name",translation:i18n.employee.first_name}],showFilterPanel:!1,showCreatePanel:!1,help_topic:"",departments:[],selected_departments:null,designations:[],selected_designations:null,selected_employee_groups:null,statuses:[{text:i18n.employee.status_active,value:"active"},{text:i18n.employee.status_inactive,value:"inactive"}]}},mounted:function(){helper.hasPermission("list-employee")||(helper.notAccessibleMsg(),this.$router.push("/dashboard")),this.getEmployees(),helper.showDemoNotification(["employee"])},methods:{hasPermission:function(e){return helper.hasPermission(e)},getConfig:function(e){return helper.getConfig(e)},getEmployeeName:function(e){return helper.getEmployeeName(e)},getEmployeeCode:function(e){return helper.getEmployeeCode(e)},getEmployees:function(e){var t=this,o=this.$loading.show();"number"!=typeof e&&(e=1),this.selectAll=!1;var s=helper.getFilterURL(this.filter);axios.get("/api/employee?page="+e+s).then((function(e){t.employees=e.employees,t.departments=e.filters.departments,t.designations=e.filters.designations,t.employee_categories=e.filters.employee_categories,t.employee_groups=e.filters.employee_groups;var s=[];t.employees.data.forEach((function(e){s.push(e.id)})),t.selectAll=s.every((function(e){return t.employeeGroupForm.ids.indexOf(e)>-1}))?1:0,o.hide()})).catch((function(e){o.hide(),helper.showErrorMsg(e)}))},toggleSelectAll:function(){var e=this;this.selectAll?this.employees.data.forEach((function(t){e.employeeGroupForm.ids.indexOf(t.id)<0&&e.employeeGroupForm.ids.push(t.id)})):this.employees.data.forEach((function(t){var o=e.employeeGroupForm.ids.indexOf(t.id);o>=0&&e.employeeGroupForm.ids.splice(o,1)}))},getStatus:function(e){var t=e.employee_terms;return t.length&&t[0].date_of_joining<=helper.today()&&(!t[0].date_of_leaving||t[0].date_of_leaving>=helper.today())?'<span class="label label-success">'+i18n.employee.status_active+"</span>":'<span class="label label-danger">'+i18n.employee.status_inactive+"</span>"},print:function(){var e=this.$loading.show();axios.post("/api/employee/print",{filter:this.filter}).then((function(t){var o=window.open("/print");e.hide(),o.document.write(t)})).catch((function(t){e.hide(),helper.showErrorMsg(t)}))},pdf:function(){var e=this,t=this.$loading.show();axios.post("/api/employee/pdf",{filter:this.filter}).then((function(o){t.hide(),window.open("/download/report/"+o+"?token="+e.authToken)})).catch((function(e){t.hide(),helper.showErrorMsg(e)}))},exportExcel:function(){return"/api/employee?action=excel"+helper.getFilterURL(this.filter)+"&token="+this.authToken},onDepartmentSelect:function(e){this.filter.department_id.push(e.id)},onDepartmentRemove:function(e){this.filter.department_id.splice(this.filter.department_id.indexOf(e.id),1)},onDesignationSelect:function(e){this.filter.designation_id.push(e.id)},onDesignationRemove:function(e){this.filter.designation_id.splice(this.filter.designation_id.indexOf(e.id),1)},onEmployeeGroupSelect:function(e){this.filter.employee_group_id.push(e.id)},onEmployeeGroupRemove:function(e){this.filter.employee_group_id.splice(this.filter.employee_group_id.indexOf(e.id),1)},onGroupSelect:function(e){this.employeeGroupForm.employee_group_id=e.id},confirmGroupAction:function(){var e=this;return function(t){return e.groupAction()}},groupAction:function(){var e=this,t=this.$loading.show();this.employeeGroupForm.post("/api/employee/action/group").then((function(o){toastr.success(o.message),e.getEmployees(),e.employeeGroupForm.action="attach",e.selected_group=null,e.employeeGroupForm.ids=[],t.hide()})).catch((function(e){t.hide(),helper.showErrorMsg(e)}))}},filters:{moment:function(e){return helper.formatDate(e)},momentDateTime:function(e){return helper.formatDateTime(e)}},watch:{"filter.sort_by":function(e){this.getEmployees()},"filter.order":function(e){this.getEmployees()},"filter.page_length":function(e){this.getEmployees()}},computed:{authToken:function(){return helper.getAuthToken()}}},a=o("KHd+"),r=Object(a.a)(s,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("div",{staticClass:"page-titles"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-12 col-sm-6"},[o("h3",{staticClass:"text-themecolor"},[e._v(e._s(e.trans("employee.employee"))+" \n                    "),e.employees.total?o("span",{staticClass:"card-subtitle d-none d-sm-inline"},[e._v(e._s(e.trans("general.total_result_found",{count:e.employees.total,from:e.employees.from,to:e.employees.to})))]):o("span",{staticClass:"card-subtitle d-none d-sm-inline"},[e._v(e._s(e.trans("general.no_result_found")))])])]),e._v(" "),o("div",{staticClass:"col-12 col-sm-6"},[o("div",{staticClass:"action-buttons pull-right"},[o("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:e.trans("general.card_view"),expression:"trans('general.card_view')"}],staticClass:"btn btn-info btn-sm",on:{click:function(t){return e.$router.push("/employee/card-view")}}},[o("i",{staticClass:"fas fa-th"}),e._v(" "),o("span",{staticClass:"d-none d-sm-inline"},[e._v(e._s(e.trans("general.card_view")))])]),e._v(" "),e.employees.total&&!e.showCreatePanel&&e.hasPermission("create-employee")?o("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:e.trans("general.add_new"),expression:"trans('general.add_new')"}],staticClass:"btn btn-info btn-sm",on:{click:function(t){e.showCreatePanel=!e.showCreatePanel}}},[o("i",{staticClass:"fas fa-plus"}),e._v(" "),o("span",{staticClass:"d-none d-sm-inline"},[e._v(e._s(e.trans("employee.add_new_employee")))])]):e._e(),e._v(" "),e.showFilterPanel?e._e():o("button",{staticClass:"btn btn-info btn-sm",on:{click:function(t){e.showFilterPanel=!e.showFilterPanel}}},[o("i",{staticClass:"fas fa-filter"}),e._v(" "),o("span",{staticClass:"d-none d-sm-inline"},[e._v(e._s(e.trans("general.filter")))])]),e._v(" "),o("sort-by",{attrs:{"order-by-options":e.orderByOptions,"sort-by":e.filter.sort_by,order:e.filter.order},on:{updateSortBy:function(t){e.filter.sort_by=t},updateOrder:function(t){e.filter.order=t}}}),e._v(" "),o("div",{staticClass:"btn-group"},[o("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:e.trans("general.more_option"),expression:"trans('general.more_option')"}],staticClass:"btn btn-info btn-sm dropdown-toggle no-caret ",attrs:{type:"button",role:"menu",id:"moreOption","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[o("i",{staticClass:"fas fa-ellipsis-h"}),e._v(" "),o("span",{staticClass:"d-none d-sm-inline"})]),e._v(" "),o("div",{class:["dropdown-menu","ltr"==e.getConfig("direction")?"dropdown-menu-right":""],attrs:{"aria-labelledby":"moreOption"}},[o("button",{staticClass:"dropdown-item custom-dropdown",on:{click:e.print}},[o("i",{staticClass:"fas fa-print"}),e._v(" "+e._s(e.trans("general.print")))]),e._v(" "),o("button",{staticClass:"dropdown-item custom-dropdown",on:{click:e.pdf}},[o("i",{staticClass:"fas fa-file-pdf"}),e._v(" "+e._s(e.trans("general.generate_pdf")))]),e._v(" "),o("a",{staticClass:"dropdown-item custom-dropdown",attrs:{href:e.exportExcel()}},[o("i",{staticClass:"fas fa-file-excel"}),e._v(" "+e._s(e.trans("general.generate_excel")))])])]),e._v(" "),o("help-button",{on:{clicked:function(t){e.help_topic="employee"}}})],1)])])]),e._v(" "),o("div",{staticClass:"container-fluid"},[o("transition",{attrs:{name:"fade"}},[e.showFilterPanel?o("div",{staticClass:"card card-form"},[o("div",{staticClass:"card-body"},[o("h4",{staticClass:"card-title"},[e._v(e._s(e.trans("general.filter")))]),e._v(" "),o("div",{staticClass:"row"},[o("div",{staticClass:"col-12 col-sm-3"},[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:""}},[e._v(e._s(e.trans("employee.first_name")))]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.filter.first_name,expression:"filter.first_name"}],staticClass:"form-control",attrs:{name:"first_name",placeholder:e.trans("employee.first_name")},domProps:{value:e.filter.first_name},on:{input:function(t){t.target.composing||e.$set(e.filter,"first_name",t.target.value)}}})])]),e._v(" "),o("div",{staticClass:"col-12 col-sm-3"},[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:""}},[e._v(e._s(e.trans("employee.middle_name")))]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.filter.middle_name,expression:"filter.middle_name"}],staticClass:"form-control",attrs:{name:"middle_name",placeholder:e.trans("employee.middle_name")},domProps:{value:e.filter.middle_name},on:{input:function(t){t.target.composing||e.$set(e.filter,"middle_name",t.target.value)}}})])]),e._v(" "),o("div",{staticClass:"col-12 col-sm-3"},[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:""}},[e._v(e._s(e.trans("employee.last_name")))]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.filter.last_name,expression:"filter.last_name"}],staticClass:"form-control",attrs:{name:"last_name",placeholder:e.trans("employee.last_name")},domProps:{value:e.filter.last_name},on:{input:function(t){t.target.composing||e.$set(e.filter,"last_name",t.target.value)}}})])]),e._v(" "),o("div",{staticClass:"col-12 col-sm-3"},[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:""}},[e._v(e._s(e.trans("employee.father_name")))]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.filter.father_name,expression:"filter.father_name"}],staticClass:"form-control",attrs:{name:"father_name",placeholder:e.trans("employee.father_name")},domProps:{value:e.filter.father_name},on:{input:function(t){t.target.composing||e.$set(e.filter,"father_name",t.target.value)}}})])])]),e._v(" "),o("div",{staticClass:"row"},[o("div",{staticClass:"col-12 col-sm-3"},[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:""}},[e._v(e._s(e.trans("employee.department")))]),e._v(" "),o("v-select",{attrs:{label:"name","track-by":"id",name:"department_id",id:"department_id",options:e.departments,placeholder:e.trans("employee.select_department"),multiple:!0,"close-on-select":!1,"clear-on-select":!1,"hide-selected":!0,selected:e.selected_departments},on:{select:e.onDepartmentSelect,remove:e.onDepartmentRemove},model:{value:e.selected_departments,callback:function(t){e.selected_departments=t},expression:"selected_departments"}},[e.departments.length?e._e():o("div",{staticClass:"multiselect__option",attrs:{slot:"afterList"},slot:"afterList"},[e._v("\n                                        "+e._s(e.trans("general.no_option_found"))+"\n                                    ")])])],1)]),e._v(" "),o("div",{staticClass:"col-12 col-sm-3"},[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:""}},[e._v(e._s(e.trans("employee.designation")))]),e._v(" "),o("v-select",{attrs:{label:"name","track-by":"id","group-values":"designations","group-label":"employee_category","group-select":!1,name:"designation_id",id:"designation_id",options:e.designations,placeholder:e.trans("employee.select_designation"),multiple:!0,"close-on-select":!1,"clear-on-select":!1,"hide-selected":!0,selected:e.selected_designations},on:{select:e.onDesignationSelect,remove:e.onDesignationRemove},model:{value:e.selected_designations,callback:function(t){e.selected_designations=t},expression:"selected_designations"}},[e.designations.length?e._e():o("div",{staticClass:"multiselect__option",attrs:{slot:"afterList"},slot:"afterList"},[e._v("\n                                        "+e._s(e.trans("general.no_option_found"))+"\n                                    ")])])],1)]),e._v(" "),o("div",{staticClass:"col-12 col-sm-3"},[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:""}},[e._v(e._s(e.trans("employee.employee_group")))]),e._v(" "),o("v-select",{attrs:{label:"name","track-by":"id",name:"employee_group_id",id:"employee_group_id",options:e.employee_groups,placeholder:e.trans("employee.select_employee_group"),multiple:!0,"close-on-select":!1,"clear-on-select":!1,"hide-selected":!0,selected:e.selected_employee_groups},on:{select:e.onEmployeeGroupSelect,remove:e.onEmployeeGroupRemove},model:{value:e.selected_employee_groups,callback:function(t){e.selected_employee_groups=t},expression:"selected_employee_groups"}},[e.employee_groups.length?e._e():o("div",{staticClass:"multiselect__option",attrs:{slot:"afterList"},slot:"afterList"},[e._v("\n                                        "+e._s(e.trans("general.no_option_found"))+"\n                                    ")])])],1)]),e._v(" "),o("div",{staticClass:"col-12 col-sm-3"},[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:""}},[e._v(e._s(e.trans("employee.status")))]),e._v(" "),o("select",{directives:[{name:"model",rawName:"v-model",value:e.filter.status,expression:"filter.status"}],staticClass:"custom-select col-12",on:{change:function(t){var o=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.filter,"status",t.target.multiple?o:o[0])}}},[o("option",{attrs:{value:"null",selected:""}},[e._v(e._s(e.trans("general.select_one")))]),e._v(" "),e._l(e.statuses,(function(t){return o("option",{domProps:{value:t.value}},[e._v("\n                                    "+e._s(t.text)+"\n                                  ")])}))],2)])])]),e._v(" "),o("div",{staticClass:"card-footer text-right"},[o("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:function(t){e.showFilterPanel=!1}}},[e._v(e._s(e.trans("general.cancel")))]),e._v(" "),o("button",{staticClass:"btn btn-info waves-effect waves-light",attrs:{type:"button"},on:{click:e.getEmployees}},[e._v(e._s(e.trans("general.filter")))])])])]):e._e()]),e._v(" "),o("transition",{attrs:{name:"fade"}},[e.showCreatePanel?o("div",{staticClass:"card card-form"},[o("div",{staticClass:"card-body"},[o("h4",{staticClass:"card-title"},[e._v(e._s(e.trans("employee.add_new_employee")))]),e._v(" "),o("employee-form",{on:{completed:e.getEmployees,cancel:function(t){e.showCreatePanel=!e.showCreatePanel}}})],1)]):e._e()]),e._v(" "),o("div",{staticClass:"card"},[o("div",{staticClass:"card-body"},[e.employees.total?o("div",{staticClass:"table-responsive"},[o("table",{staticClass:"table table-sm"},[o("thead",[o("tr",[e.hasPermission("edit-employee")?o("th",{staticClass:"select-all"},[o("label",{staticClass:"custom-control custom-checkbox"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.selectAll,expression:"selectAll"}],staticClass:"custom-control-input",attrs:{type:"checkbox",value:"1"},domProps:{checked:Array.isArray(e.selectAll)?e._i(e.selectAll,"1")>-1:e.selectAll},on:{change:[function(t){var o=e.selectAll,s=t.target,a=!!s.checked;if(Array.isArray(o)){var r=e._i(o,"1");s.checked?r<0&&(e.selectAll=o.concat(["1"])):r>-1&&(e.selectAll=o.slice(0,r).concat(o.slice(r+1)))}else e.selectAll=a},e.toggleSelectAll]}}),e._v(" "),o("span",{staticClass:"custom-control-label"})])]):e._e(),e._v(" "),o("th",[e._v(e._s(e.trans("employee.code")))]),e._v(" "),o("th",[e._v(e._s(e.trans("employee.name")))]),e._v(" "),o("th",[e._v(e._s(e.trans("employee.status")))]),e._v(" "),o("th",[e._v(e._s(e.trans("employee.father_name")))]),e._v(" "),o("th",[e._v(e._s(e.trans("employee.date_of_birth")))]),e._v(" "),o("th",[e._v(e._s(e.trans("employee.contact_number")))]),e._v(" "),o("th",[e._v(e._s(e.trans("employee.department")))]),e._v(" "),o("th",[e._v(e._s(e.trans("employee.designation")))]),e._v(" "),o("th",[e._v(e._s(e.trans("employee.date_of_joining")))]),e._v(" "),o("th",{staticClass:"table-option"},[e._v(e._s(e.trans("general.action")))])])]),e._v(" "),o("tbody",e._l(e.employees.data,(function(t){return o("tr",[e.hasPermission("edit-employee")?o("td",{staticClass:"select-all"},[o("label",{staticClass:"custom-control custom-checkbox"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.employeeGroupForm.ids,expression:"employeeGroupForm.ids"}],staticClass:"custom-control-input",attrs:{type:"checkbox"},domProps:{value:t.id,checked:Array.isArray(e.employeeGroupForm.ids)?e._i(e.employeeGroupForm.ids,t.id)>-1:e.employeeGroupForm.ids},on:{change:function(o){var s=e.employeeGroupForm.ids,a=o.target,r=!!a.checked;if(Array.isArray(s)){var n=t.id,l=e._i(s,n);a.checked?l<0&&e.$set(e.employeeGroupForm,"ids",s.concat([n])):l>-1&&e.$set(e.employeeGroupForm,"ids",s.slice(0,l).concat(s.slice(l+1)))}else e.$set(e.employeeGroupForm,"ids",r)}}}),e._v(" "),o("span",{staticClass:"custom-control-label"})])]):e._e(),e._v(" "),o("td",{domProps:{textContent:e._s(e.getEmployeeCode(t))}}),e._v(" "),o("td",{domProps:{textContent:e._s(e.getEmployeeName(t))}}),e._v(" "),o("td",{domProps:{innerHTML:e._s(e.getStatus(t))}}),e._v(" "),o("td",{domProps:{textContent:e._s(t.father_name)}}),e._v(" "),o("td",[e._v(e._s(e._f("moment")(t.date_of_birth)))]),e._v(" "),o("td",{domProps:{textContent:e._s(t.contact_number)}}),e._v(" "),o("td",[t.employee_designations.length&&t.employee_designations[0].department_id?o("span",[e._v(e._s(t.employee_designations[0].department.name))]):o("span",[e._v("-")])]),e._v(" "),o("td",[t.employee_designations.length?o("span",[e._v("\n                                        "+e._s(t.employee_designations[0].designation.name+" ("+t.employee_designations[0].designation.employee_category.name+")")+"\n                                    ")]):o("span",[e._v("-")])]),e._v(" "),o("td",[t.employee_terms[0]?o("span",[e._v(e._s(e._f("moment")(t.employee_terms[0].date_of_joining)))]):o("span",[e._v("-")])]),e._v(" "),o("td",{staticClass:"table-option"},[o("div",{staticClass:"btn-group"},[o("router-link",{directives:[{name:"tooltip",rawName:"v-tooltip",value:e.trans("employee.view_detail"),expression:"trans('employee.view_detail')"}],staticClass:"btn btn-info btn-sm",attrs:{to:"/employee/"+t.uuid}},[o("i",{staticClass:"fas fa-arrow-circle-right"})])],1)])])})),0)])]):e._e(),e._v(" "),e.employees.total?e._e():o("module-info",{attrs:{module:"employee",title:"employee_module_title",description:"employee_module_description",icon:"check-circle"}},[o("div",{attrs:{slot:"btn"},slot:"btn"},[e.showCreatePanel?e._e():o("button",{staticClass:"btn btn-info btn-md",on:{click:function(t){e.showCreatePanel=!e.showCreatePanel}}},[o("i",{staticClass:"fas fa-plus"}),e._v(" "+e._s(e.trans("general.add_new")))])])]),e._v(" "),o("pagination-record",{attrs:{"page-length":e.filter.page_length,records:e.employees},on:{"update:pageLength":function(t){return e.$set(e.filter,"page_length",t)},"update:page-length":function(t){return e.$set(e.filter,"page_length",t)},updateRecords:e.getEmployees}})],1),e._v(" "),e.employeeGroupForm.ids.length&&e.hasPermission("edit-employee")?o("div",{staticClass:"m-t-10 card-body border-top p-4"},[o("h4",{staticClass:"card-title"}),e._v(" "),o("form",{on:{submit:function(t){return t.preventDefault(),e.submit(t)},keydown:function(t){return e.employeeGroupForm.errors.clear(t.target.name)}}},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-12 col-sm-3"},[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:""}},[e._v(e._s(e.trans("employee.employee_group")))]),e._v(" "),o("v-select",{attrs:{label:"name","track-by":"id",name:"group_id",id:"group_id",options:e.employee_groups,placeholder:e.trans("employee.select_employee_group")},on:{select:e.onGroupSelect,remove:function(t){e.employeeGroupForm.employee_group_id=""}},model:{value:e.selected_group,callback:function(t){e.selected_group=t},expression:"selected_group"}},[e.employee_groups.length?e._e():o("div",{staticClass:"multiselect__option",attrs:{slot:"afterList"},slot:"afterList"},[e._v("\n                                        "+e._s(e.trans("general.no_option_found"))+"\n                                    ")])]),e._v(" "),o("show-error",{attrs:{"form-name":e.employeeGroupForm,"prop-name":"group_id"}})],1)]),e._v(" "),o("div",{staticClass:"col-12 col-md-6"},[o("div",{staticClass:"form-group"},[o("div",{staticClass:"radio radio-success m-t-20"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.employeeGroupForm.action,expression:"employeeGroupForm.action"}],attrs:{type:"radio",value:"attach",id:"type_attach",name:"action"},domProps:{checked:"attach"==e.employeeGroupForm.action,checked:e._q(e.employeeGroupForm.action,"attach")},on:{click:function(t){return e.employeeGroupForm.errors.clear("action")},change:function(t){return e.$set(e.employeeGroupForm,"action","attach")}}}),e._v(" "),o("label",{attrs:{for:"type_attach"}},[e._v(e._s(e.trans("general.add")))])]),e._v(" "),o("div",{staticClass:"radio radio-success"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.employeeGroupForm.action,expression:"employeeGroupForm.action"}],attrs:{type:"radio",value:"detach",id:"type_detach",name:"action"},domProps:{checked:"detach"==e.employeeGroupForm.action,checked:e._q(e.employeeGroupForm.action,"detach")},on:{click:function(t){return e.employeeGroupForm.errors.clear("action")},change:function(t){return e.$set(e.employeeGroupForm,"action","detach")}}}),e._v(" "),o("label",{attrs:{for:"type_detach"}},[e._v(e._s(e.trans("general.remove")))])]),e._v(" "),o("show-error",{attrs:{"form-name":e.employeeGroupForm,"prop-name":"action"}})],1)])]),e._v(" "),o("button",{directives:[{name:"confirm",rawName:"v-confirm",value:{ok:e.confirmGroupAction()},expression:"{ok: confirmGroupAction()}"}],key:"group-action",staticClass:"btn btn-info waves-effect waves-light",attrs:{type:"button"}},[e._v(e._s(e.trans("general.save")))])])]):e._e()])],1),e._v(" "),o("right-panel",{attrs:{topic:e.help_topic}})],1)}),[],!1,null,null,null);t.default=r.exports},fdhs:function(e,t,o){"use strict";var s={components:{},data:function(){return{employeeForm:new Form({first_name:"",middle_name:"",last_name:"",father_name:"",mother_name:"",contact_number:"",date_of_joining:"",date_of_birth:"",department_id:"",designation_id:"",gender:"",code:"",prefix:""}),codes:[],genders:[],departments:[],selected_department:null,designations:[],selected_designation:null}},mounted:function(){this.getPreRequisite()},methods:{getPreRequisite:function(){var e=this,t=this.$loading.show();axios.get("/api/employee/pre-requisite").then((function(o){e.departments=o.departments,e.designations=o.designations,e.genders=o.genders,e.codes=o.codes,e.employeeForm.prefix=helper.getConfig("employee_code_prefix"),t.hide()})).catch((function(e){t.hide(),helper.showErrorMsg(e)}))},submit:function(){var e=this,t=this.$loading.show();this.employeeForm.post("/api/employee").then((function(o){toastr.success(o.message),e.selected_designation=null,e.selected_department=null,e.getPreRequisite(),e.$emit("completed"),t.hide()})).catch((function(e){t.hide(),helper.showErrorMsg(e)}))},onDesignationSelect:function(e){this.employeeForm.designation_id=e.id},onDepartmentSelect:function(e){this.employeeForm.department_id=e.id},getConfig:function(e){return helper.getConfig(e)}},watch:{"employeeForm.prefix":function(e){var t=this.codes.find((function(t){return t.prefix==e}));this.employeeForm.code=void 0===t?helper.formatWithPadding(1,helper.getConfig("employee_code_digit")):helper.formatWithPadding(t.code+1,helper.getConfig("employee_code_digit"))}}},a=o("KHd+"),r=Object(a.a)(s,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("form",{on:{submit:function(t){return t.preventDefault(),e.submit(t)},keydown:function(t){return e.employeeForm.errors.clear(t.target.name)}}},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-12 col-sm-3"},[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:""}},[e._v(e._s(e.trans("employee.code")))]),e._v(" "),o("div",{staticClass:"row"},[o("div",{staticClass:"col-12 col-sm-4"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.employeeForm.prefix,expression:"employeeForm.prefix"}],staticClass:"form-control",attrs:{type:"text",name:"prefix",placeholder:e.trans("employee.employee_code_prefix")},domProps:{value:e.employeeForm.prefix},on:{input:function(t){t.target.composing||e.$set(e.employeeForm,"prefix",t.target.value)}}})]),e._v(" "),o("div",{staticClass:"col-12 col-sm-8"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.employeeForm.code,expression:"employeeForm.code"}],staticClass:"form-control",attrs:{type:"text",name:"code",placeholder:e.trans("employee.code")},domProps:{value:e.employeeForm.code},on:{input:function(t){t.target.composing||e.$set(e.employeeForm,"code",t.target.value)}}})])]),e._v(" "),o("show-error",{attrs:{"form-name":e.employeeForm,"prop-name":"code"}})],1)]),e._v(" "),o("div",{staticClass:"col-12 col-sm-6"},[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:""}},[e._v(e._s(e.trans("employee.name")))]),e._v(" "),o("div",{staticClass:"row"},[o("div",{staticClass:"col-12 col-sm-4"},[o("div",{staticClass:"form-group"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.employeeForm.first_name,expression:"employeeForm.first_name"}],staticClass:"form-control",attrs:{type:"text",name:"first_name",placeholder:e.trans("employee.first_name")},domProps:{value:e.employeeForm.first_name},on:{input:function(t){t.target.composing||e.$set(e.employeeForm,"first_name",t.target.value)}}}),e._v(" "),o("show-error",{attrs:{"form-name":e.employeeForm,"prop-name":"first_name"}})],1)]),e._v(" "),o("div",{staticClass:"col-12 col-sm-4"},[o("div",{staticClass:"form-group"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.employeeForm.middle_name,expression:"employeeForm.middle_name"}],staticClass:"form-control",attrs:{type:"text",name:"middle_name",placeholder:e.trans("employee.middle_name")},domProps:{value:e.employeeForm.middle_name},on:{input:function(t){t.target.composing||e.$set(e.employeeForm,"middle_name",t.target.value)}}}),e._v(" "),o("show-error",{attrs:{"form-name":e.employeeForm,"prop-name":"middle_name"}})],1)]),e._v(" "),o("div",{staticClass:"col-12 col-sm-4"},[o("div",{staticClass:"form-group"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.employeeForm.last_name,expression:"employeeForm.last_name"}],staticClass:"form-control",attrs:{type:"text",name:"last_name",placeholder:e.trans("employee.last_name")},domProps:{value:e.employeeForm.last_name},on:{input:function(t){t.target.composing||e.$set(e.employeeForm,"last_name",t.target.value)}}}),e._v(" "),o("show-error",{attrs:{"form-name":e.employeeForm,"prop-name":"last_name"}})],1)])])])]),e._v(" "),o("div",{staticClass:"col-12 col-sm-3"},[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:""}},[e._v(e._s(e.trans("employee.department")))]),e._v(" "),o("v-select",{attrs:{label:"name",name:"department_id",id:"department_id",options:e.departments,placeholder:e.trans("employee.select_department")},on:{select:e.onDepartmentSelect,close:function(t){return e.employeeForm.errors.clear("department_id")},remove:function(t){e.employeeForm.department_id=""}},model:{value:e.selected_department,callback:function(t){e.selected_department=t},expression:"selected_department"}},[e.departments.length?e._e():o("div",{staticClass:"multiselect__option",attrs:{slot:"afterList"},slot:"afterList"},[e._v("\n                        "+e._s(e.trans("general.no_option_found"))+"\n                    ")])]),e._v(" "),o("show-error",{attrs:{"form-name":e.employeeForm,"prop-name":"department_id"}})],1)]),e._v(" "),o("div",{staticClass:"col-12 col-sm-3"},[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:""}},[e._v(e._s(e.trans("employee.designation")))]),e._v(" "),o("v-select",{attrs:{label:"name","group-values":"designations","group-label":"employee_category","group-select":!1,name:"designation_id",id:"designation_id",options:e.designations,placeholder:e.trans("employee.select_designation")},on:{select:e.onDesignationSelect,close:function(t){return e.employeeForm.errors.clear("designation_id")},remove:function(t){e.employeeForm.designation_id=""}},model:{value:e.selected_designation,callback:function(t){e.selected_designation=t},expression:"selected_designation"}},[e.designations.length?e._e():o("div",{staticClass:"multiselect__option",attrs:{slot:"afterList"},slot:"afterList"},[e._v("\n                        "+e._s(e.trans("general.no_option_found"))+"\n                    ")])]),e._v(" "),o("show-error",{attrs:{"form-name":e.employeeForm,"prop-name":"designation_id"}})],1)]),e._v(" "),o("div",{staticClass:"col-12 col-sm-3"},[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:""}},[e._v(e._s(e.trans("employee.father_name")))]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.employeeForm.father_name,expression:"employeeForm.father_name"}],staticClass:"form-control",attrs:{type:"text",name:"father_name",placeholder:e.trans("employee.father_name")},domProps:{value:e.employeeForm.father_name},on:{input:function(t){t.target.composing||e.$set(e.employeeForm,"father_name",t.target.value)}}}),e._v(" "),o("show-error",{attrs:{"form-name":e.employeeForm,"prop-name":"father_name"}})],1)]),e._v(" "),o("div",{staticClass:"col-12 col-sm-3"},[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:""}},[e._v(e._s(e.trans("employee.mother_name")))]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.employeeForm.mother_name,expression:"employeeForm.mother_name"}],staticClass:"form-control",attrs:{type:"text",name:"mother_name",placeholder:e.trans("employee.mother_name")},domProps:{value:e.employeeForm.mother_name},on:{input:function(t){t.target.composing||e.$set(e.employeeForm,"mother_name",t.target.value)}}}),e._v(" "),o("show-error",{attrs:{"form-name":e.employeeForm,"prop-name":"mother_name"}})],1)]),e._v(" "),o("div",{staticClass:"col-12 col-sm-3"},[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:""}},[e._v(e._s(e.trans("employee.contact_number")))]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.employeeForm.contact_number,expression:"employeeForm.contact_number"}],staticClass:"form-control",attrs:{type:"text",name:"contact_number",placeholder:e.trans("employee.contact_number")},domProps:{value:e.employeeForm.contact_number},on:{input:function(t){t.target.composing||e.$set(e.employeeForm,"contact_number",t.target.value)}}}),e._v(" "),o("show-error",{attrs:{"form-name":e.employeeForm,"prop-name":"contact_number"}})],1)]),e._v(" "),o("div",{staticClass:"col-12 col-sm-3"},[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:""}},[e._v(e._s(e.trans("employee.gender")))]),e._v(" "),o("div",{staticClass:"radio radio-info p-l-0"},e._l(e.genders,(function(t){return o("div",{staticClass:"form-check form-check-inline "},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.employeeForm.gender,expression:"employeeForm.gender"}],staticClass:"form-check-input",attrs:{type:"radio",id:t.id,name:"gender"},domProps:{value:t.id,checked:e.employeeForm.gender==t.id,checked:e._q(e.employeeForm.gender,t.id)},on:{click:function(t){return e.employeeForm.errors.clear("gender")},change:function(o){return e.$set(e.employeeForm,"gender",t.id)}}}),e._v(" "),o("label",{staticClass:"form-check-label",attrs:{for:t.id}},[e._v(" "+e._s(e.trans("list."+t.id)))])])})),0),e._v(" "),o("show-error",{attrs:{"form-name":e.employeeForm,"prop-name":"gender"}})],1)]),e._v(" "),o("div",{staticClass:"col-12 col-sm-3"},[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:""}},[e._v(e._s(e.trans("employee.date_of_birth")))]),e._v(" "),o("datepicker",{attrs:{bootstrapStyling:!0,placeholder:e.trans("employee.date_of_birth")},on:{selected:function(t){return e.employeeForm.errors.clear("date_of_birth")}},model:{value:e.employeeForm.date_of_birth,callback:function(t){e.$set(e.employeeForm,"date_of_birth",t)},expression:"employeeForm.date_of_birth"}}),e._v(" "),o("show-error",{attrs:{"form-name":e.employeeForm,"prop-name":"date_of_birth"}})],1)]),e._v(" "),o("div",{staticClass:"col-12 col-sm-3"},[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:""}},[e._v(e._s(e.trans("employee.date_of_joining")))]),e._v(" "),o("datepicker",{attrs:{bootstrapStyling:!0,placeholder:e.trans("employee.date_of_joining")},on:{selected:function(t){return e.employeeForm.errors.clear("date_of_joining")}},model:{value:e.employeeForm.date_of_joining,callback:function(t){e.$set(e.employeeForm,"date_of_joining",t)},expression:"employeeForm.date_of_joining"}}),e._v(" "),o("show-error",{attrs:{"form-name":e.employeeForm,"prop-name":"date_of_joining"}})],1)])]),e._v(" "),o("div",{staticClass:"card-footer text-right"},[o("button",{staticClass:"btn btn-danger waves-effect waves-light ",attrs:{type:"button"},on:{click:function(t){return e.$emit("cancel")}}},[e._v(e._s(e.trans("general.cancel")))]),e._v(" "),o("button",{staticClass:"btn btn-info waves-effect waves-light",attrs:{type:"submit"}},[e._v(e._s(e.trans("general.save")))])])])}),[],!1,null,null,null);t.a=r.exports}}]);
//# sourceMappingURL=list.js.map?id=298763d2b748d69ca134