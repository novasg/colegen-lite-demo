(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{oeGj:function(e,t,s){"use strict";s.r(t);var n=s("fGFN"),a=s("zk3C"),i={components:{eventForm:n.a,eventDetail:a.a},data:function(){return{events:{total:0,data:[]},filter:{sort_by:"start_date",order:"desc",keyword:"",event_type_id:[],course_id:[],batch_id:[],department_id:[],employee_category_id:[],page_length:helper.getConfig("page_length")},orderByOptions:[{value:"start_date",translation:i18n.calendar.event_start_date},{value:"end_date",translation:i18n.calendar.event_end_date},{value:"title",translation:i18n.calendar.event_title}],event_types:[],selected_event_types:null,courses:[],selected_courses:null,batches:[],selected_batches:null,departments:[],selected_departments:null,employee_categories:[],selected_employee_categories:null,showFilterPanel:!1,showCreatePanel:!1,help_topic:"",showUuid:"",showModal:!1}},mounted:function(){helper.hasPermission("list-event")||(helper.notAccessibleMsg(),this.$router.push("/dashboard")),this.getEvents(),helper.showDemoNotification(["calendar"])},methods:{hasPermission:function(e){return helper.hasPermission(e)},showAction:function(e){this.showUuid=e.uuid,this.showModal=!0},getEmployeeName:function(e){return helper.getEmployeeName(e)},getEmployeeDesignationOnDate:function(e,t){return helper.getEmployeeDesignationOnDate(e,t)},getEvents:function(e){var t=this,s=this.$loading.show();"number"!=typeof e&&(e=1);var n=helper.getFilterURL(this.filter);axios.get("/api/event?page="+e+n).then((function(e){t.events=e.events,t.event_types=e.filters.event_types,t.courses=e.filters.courses,t.batches=e.filters.batches,t.departments=e.filters.departments,t.employee_categories=e.filters.employee_categories,s.hide()})).catch((function(e){s.hide(),helper.showErrorMsg(e)}))},editEvent:function(e){this.$router.push("/calendar/event/"+e.uuid+"/edit")},confirmDelete:function(e){var t=this;return function(s){return t.deleteEvent(e)}},deleteEvent:function(e){var t=this,s=this.$loading.show();axios.delete("/api/event/"+e.uuid).then((function(e){toastr.success(e.message),t.getEvents(),s.hide()})).catch((function(e){s.hide(),helper.showErrorMsg(e)}))},getConfig:function(e){return helper.getConfig(e)},print:function(){var e=this.$loading.show();axios.post("/api/event/print",{filter:this.filter}).then((function(t){var s=window.open("/print");e.hide(),s.document.write(t)})).catch((function(t){e.hide(),helper.showErrorMsg(t)}))},pdf:function(){var e=this,t=this.$loading.show();axios.post("/api/event/pdf",{filter:this.filter}).then((function(s){t.hide(),window.open("/download/report/"+s+"?token="+e.authToken)})).catch((function(e){t.hide(),helper.showErrorMsg(e)}))},onEventTypeSelect:function(e){this.filter.event_type_id.push(e.id)},onEventTypeRemove:function(e){this.filter.event_type_id.splice(this.filter.event_type_id.indexOf(e.id),1)},onCourseSelect:function(e){this.filter.course_id.push(e.id)},onCourseRemove:function(e){this.filter.course_id.splice(this.filter.course_id.indexOf(e.id),1)},onBatchSelect:function(e){this.filter.batch_id.push(e.id)},onBatchRemove:function(e){this.filter.batch_id.splice(this.filter.batch_id.indexOf(e.id),1)},onDepartmentSelect:function(e){this.filter.department_id.push(e.id)},onDepartmentRemove:function(e){this.filter.department_id.splice(this.filter.department_id.indexOf(e.id),1)},onEmployeeCategorySelect:function(e){this.filter.employee_category_id.push(e.id)},onEmployeeCategoryRemove:function(e){this.filter.employee_category_id.splice(this.filter.employee_category_id.indexOf(e.id),1)}},filters:{moment:function(e){return helper.formatDate(e)},momentDateTime:function(e){return helper.formatDateTime(e)},momentTime:function(e){return helper.formatTime(e)}},watch:{"filter.sort_by":function(e){this.getEvents()},"filter.order":function(e){this.getEvents()},"filter.page_length":function(e){this.getEvents()}},computed:{authToken:function(){return helper.getAuthToken()}}},o=s("KHd+"),l=Object(o.a)(i,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{staticClass:"page-titles"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 col-sm-6"},[s("h3",{staticClass:"text-themecolor"},[e._v(e._s(e.trans("calendar.event"))+" \n                    "),e.events.total?s("span",{staticClass:"card-subtitle d-none d-sm-inline"},[e._v(e._s(e.trans("general.total_result_found",{count:e.events.total,from:e.events.from,to:e.events.to})))]):s("span",{staticClass:"card-subtitle d-none d-sm-inline"},[e._v(e._s(e.trans("general.no_result_found")))])])]),e._v(" "),s("div",{staticClass:"col-12 col-sm-6"},[s("div",{staticClass:"action-buttons pull-right"},[e.events.total&&!e.showCreatePanel&&e.hasPermission("create-event")?s("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:e.trans("general.add_new"),expression:"trans('general.add_new')"}],staticClass:"btn btn-info btn-sm",on:{click:function(t){e.showCreatePanel=!e.showCreatePanel}}},[s("i",{staticClass:"fas fa-plus"}),e._v(" "),s("span",{staticClass:"d-none d-sm-inline"},[e._v(e._s(e.trans("calendar.add_new_event")))])]):e._e(),e._v(" "),e.showFilterPanel?e._e():s("button",{staticClass:"btn btn-info btn-sm",on:{click:function(t){e.showFilterPanel=!e.showFilterPanel}}},[s("i",{staticClass:"fas fa-filter"}),e._v(" "),s("span",{staticClass:"d-none d-sm-inline"},[e._v(e._s(e.trans("general.filter")))])]),e._v(" "),s("sort-by",{attrs:{"order-by-options":e.orderByOptions,"sort-by":e.filter.sort_by,order:e.filter.order},on:{updateSortBy:function(t){e.filter.sort_by=t},updateOrder:function(t){e.filter.order=t}}}),e._v(" "),s("div",{staticClass:"btn-group"},[s("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:e.trans("general.more_option"),expression:"trans('general.more_option')"}],staticClass:"btn btn-info btn-sm dropdown-toggle no-caret ",attrs:{type:"button",role:"menu",id:"moreOption","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[s("i",{staticClass:"fas fa-ellipsis-h"}),e._v(" "),s("span",{staticClass:"d-none d-sm-inline"})]),e._v(" "),s("div",{class:["dropdown-menu","ltr"==e.getConfig("direction")?"dropdown-menu-right":""],attrs:{"aria-labelledby":"moreOption"}},[s("button",{staticClass:"dropdown-item custom-dropdown",on:{click:e.print}},[s("i",{staticClass:"fas fa-print"}),e._v(" "+e._s(e.trans("general.print")))]),e._v(" "),s("button",{staticClass:"dropdown-item custom-dropdown",on:{click:e.pdf}},[s("i",{staticClass:"fas fa-file-pdf"}),e._v(" "+e._s(e.trans("general.generate_pdf")))])])]),e._v(" "),s("help-button",{on:{clicked:function(t){e.help_topic="event"}}})],1)])])]),e._v(" "),s("div",{staticClass:"container-fluid"},[s("transition",{attrs:{name:"fade"}},[e.showFilterPanel?s("div",{staticClass:"card card-form"},[s("div",{staticClass:"card-body"},[s("h4",{staticClass:"card-title"},[e._v(e._s(e.trans("general.filter"))+"\n                    ")]),e._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 col-sm-3"},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:""}},[e._v(e._s(e.trans("calendar.event_type")))]),e._v(" "),s("v-select",{attrs:{label:"name","track-by":"id",name:"event_type_id",id:"event_type_id",options:e.event_types,placeholder:e.trans("calendar.select_event_type"),multiple:!0,"close-on-select":!1,"clear-on-select":!1,"hide-selected":!0,selected:e.selected_event_types},on:{select:e.onEventTypeSelect,remove:e.onEventTypeRemove},model:{value:e.selected_event_types,callback:function(t){e.selected_event_types=t},expression:"selected_event_types"}},[e.event_types.length?e._e():s("div",{staticClass:"multiselect__option",attrs:{slot:"afterList"},slot:"afterList"},[e._v("\n                                        "+e._s(e.trans("general.no_option_found"))+"\n                                    ")])])],1)]),e._v(" "),s("div",{staticClass:"col-12 col-sm-3"},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:""}},[e._v(e._s(e.trans("academic.course")))]),e._v(" "),s("v-select",{attrs:{label:"name","track-by":"id","group-values":"courses","group-label":"course_group","group-select":!1,name:"course_id",id:"course_id",options:e.courses,placeholder:e.trans("academic.select_course"),multiple:!0,"close-on-select":!1,"clear-on-select":!1,"hide-selected":!0,selected:e.selected_courses},on:{select:e.onCourseSelect,remove:e.onCourseRemove},model:{value:e.selected_courses,callback:function(t){e.selected_courses=t},expression:"selected_courses"}},[e.courses.length?e._e():s("div",{staticClass:"multiselect__option",attrs:{slot:"afterList"},slot:"afterList"},[e._v("\n                                        "+e._s(e.trans("general.no_option_found"))+"\n                                    ")])])],1)]),e._v(" "),s("div",{staticClass:"col-12 col-sm-3"},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:""}},[e._v(e._s(e.trans("academic.batch")))]),e._v(" "),s("v-select",{attrs:{label:"name","track-by":"id","group-values":"batches","group-label":"course_group","group-select":!1,name:"batch_id",id:"batch_id",options:e.batches,placeholder:e.trans("academic.select_batch"),multiple:!0,"close-on-select":!1,"clear-on-select":!1,"hide-selected":!0,selected:e.selected_batches},on:{select:e.onBatchSelect,remove:e.onBatchRemove},model:{value:e.selected_batches,callback:function(t){e.selected_batches=t},expression:"selected_batches"}},[e.batches.length?e._e():s("div",{staticClass:"multiselect__option",attrs:{slot:"afterList"},slot:"afterList"},[e._v("\n                                        "+e._s(e.trans("general.no_option_found"))+"\n                                    ")])])],1)]),e._v(" "),s("div",{staticClass:"col-12 col-sm-3"},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:""}},[e._v(e._s(e.trans("employee.department")))]),e._v(" "),s("v-select",{attrs:{label:"name","track-by":"id",name:"department_id",id:"department_id",options:e.departments,placeholder:e.trans("employee.select_department"),multiple:!0,"close-on-select":!1,"clear-on-select":!1,"hide-selected":!0,selected:e.selected_departments},on:{select:e.onDepartmentSelect,remove:e.onDepartmentRemove},model:{value:e.selected_departments,callback:function(t){e.selected_departments=t},expression:"selected_departments"}},[e.departments.length?e._e():s("div",{staticClass:"multiselect__option",attrs:{slot:"afterList"},slot:"afterList"},[e._v("\n                                        "+e._s(e.trans("general.no_option_found"))+"\n                                    ")])])],1)]),e._v(" "),s("div",{staticClass:"col-12 col-sm-3"},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:""}},[e._v(e._s(e.trans("employee.category")))]),e._v(" "),s("v-select",{attrs:{label:"name","track-by":"id",name:"employee_category_id",id:"employee_category_id",options:e.employee_categories,placeholder:e.trans("employee.select_category"),multiple:!0,"close-on-select":!1,"clear-on-select":!1,"hide-selected":!0,selected:e.selected_employee_categories},on:{select:e.onEmployeeCategorySelect,remove:e.onEmployeeCategoryRemove},model:{value:e.selected_employee_categories,callback:function(t){e.selected_employee_categories=t},expression:"selected_employee_categories"}},[e.employee_categories.length?e._e():s("div",{staticClass:"multiselect__option",attrs:{slot:"afterList"},slot:"afterList"},[e._v("\n                                        "+e._s(e.trans("general.no_option_found"))+"\n                                    ")])])],1)]),e._v(" "),s("div",{staticClass:"col-12 col-sm-3"},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:""}},[e._v(e._s(e.trans("calendar.event_keyword")))]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.filter.keyword,expression:"filter.keyword"}],staticClass:"form-control",attrs:{name:"keyword"},domProps:{value:e.filter.keyword},on:{input:function(t){t.target.composing||e.$set(e.filter,"keyword",t.target.value)}}})])])]),e._v(" "),s("div",{staticClass:"card-footer text-right"},[s("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:function(t){e.showFilterPanel=!1}}},[e._v(e._s(e.trans("general.cancel")))]),e._v(" "),s("button",{staticClass:"btn btn-info waves-effect waves-light",attrs:{type:"button"},on:{click:e.getEvents}},[e._v(e._s(e.trans("general.filter")))])])])]):e._e()]),e._v(" "),e.hasPermission("create-event")?s("transition",{attrs:{name:"fade"}},[e.showCreatePanel?s("div",{staticClass:"card card-form"},[s("div",{staticClass:"card-body"},[s("h4",{staticClass:"card-title"},[e._v(e._s(e.trans("calendar.add_new_event")))]),e._v(" "),s("event-form",{on:{completed:e.getEvents,cancel:function(t){e.showCreatePanel=!e.showCreatePanel}}})],1)]):e._e()]):e._e(),e._v(" "),s("div",{staticClass:"card"},[s("div",{staticClass:"card-body"},[e.events.total?s("div",{staticClass:"table-responsive"},[s("table",{staticClass:"table table-sm"},[s("thead",[s("tr",[s("th",[e._v(e._s(e.trans("calendar.event_type")))]),e._v(" "),s("th",[e._v(e._s(e.trans("calendar.event_title")))]),e._v(" "),s("th",[e._v(e._s(e.trans("calendar.event_venue")))]),e._v(" "),s("th",[e._v(e._s(e.trans("calendar.event_duration")))]),e._v(" "),s("th",[e._v(e._s(e.trans("calendar.event_audience")))]),e._v(" "),s("th",[e._v(e._s(e.trans("calendar.event_posted_by")))]),e._v(" "),s("th",[e._v(e._s(e.trans("general.created_at")))]),e._v(" "),s("th",{staticClass:"table-option"},[e._v(e._s(e.trans("general.action")))])])]),e._v(" "),s("tbody",e._l(e.events.data,(function(t){return s("tr",[s("td",{domProps:{textContent:e._s(t.event_type.name)}}),e._v(" "),s("td",{domProps:{textContent:e._s(t.title)}}),e._v(" "),s("td",{domProps:{textContent:e._s(t.venue)}}),e._v(" "),s("td",[e._v("\n                                    "+e._s(e._f("moment")(t.start_date))+" "),t.start_time?s("span",[e._v(e._s(e._f("momentTime")(t.start_time)))]):e._e(),e._v(" "),s("br"),e._v(" "+e._s(e.trans("general.to"))+"  "),s("br"),e._v("\n                                    "+e._s(e._f("moment")(t.end_date))+" "),t.end_time?s("span",[e._v(e._s(e._f("momentTime")(t.end_time)))]):e._e()]),e._v(" "),s("td",["everyone"==t.audience?s("span",[e._v(e._s(e.trans("calendar.event_for_everyone")))]):e._e(),e._v(" "),"selected_course"==t.audience?[e._v("\n                                        "+e._s(e.trans("academic.course"))+" "),s("br"),e._v(" "),s("ul",{staticStyle:{"list-style":"none",padding:"0",margin:"0"}},e._l(t.courses,(function(t){return s("li",[e._v(e._s(t.name+"("+t.course_group.name+")"))])})),0)]:"selected_batch"==t.audience?[e._v("\n                                        "+e._s(e.trans("academic.batch"))+" "),s("br"),e._v(" "),s("ul",{staticStyle:{"list-style":"none",padding:"0",margin:"0"}},e._l(t.batches,(function(t){return s("li",[e._v(e._s(t.name+"("+t.course.name+")"))])})),0)]:"selected_department"==t.audience?[e._v("\n                                        "+e._s(e.trans("employee.department"))+" "),s("br"),e._v(" "),s("ul",{staticStyle:{"list-style":"none",padding:"0",margin:"0"}},e._l(t.departments,(function(t){return s("li",[e._v(e._s(t.name))])})),0)]:"selected_employee_category"==t.audience?[e._v("\n                                        "+e._s(e.trans("employee.category"))+" "),s("br"),e._v(" "),s("ul",{staticStyle:{"list-style":"none",padding:"0",margin:"0"}},e._l(t.employee_categorys,(function(t){return s("li",[e._v(e._s(t.name))])})),0)]:e._e()],2),e._v(" "),s("td",[e._v(e._s(e.getEmployeeName(t.user.employee))+" "),s("br"),e._v(" "+e._s(e.getEmployeeDesignationOnDate(t.user.employee,t.start_date)))]),e._v(" "),s("td",[e._v(e._s(e._f("momentDateTime")(t.created_at)))]),e._v(" "),s("td",{staticClass:"table-option"},[s("div",{staticClass:"btn-group"},[s("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:e.trans("general.view_detail"),expression:"trans('general.view_detail')"}],staticClass:"btn btn-success btn-sm",on:{click:function(s){return s.preventDefault(),e.showAction(t)}}},[s("i",{staticClass:"fas fa-arrow-circle-right"})]),e._v(" "),e.hasPermission("edit-event")?s("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:e.trans("calendar.edit_event"),expression:"trans('calendar.edit_event')"}],staticClass:"btn btn-info btn-sm",on:{click:function(s){return s.preventDefault(),e.editEvent(t)}}},[s("i",{staticClass:"fas fa-edit"})]):e._e(),e._v(" "),e.hasPermission("delete-event")?s("button",{directives:[{name:"confirm",rawName:"v-confirm",value:{ok:e.confirmDelete(t)},expression:"{ok: confirmDelete(event)}"},{name:"tooltip",rawName:"v-tooltip",value:e.trans("calendar.delete_event"),expression:"trans('calendar.delete_event')"}],key:t.id,staticClass:"btn btn-danger btn-sm"},[s("i",{staticClass:"fas fa-trash"})]):e._e()])])])})),0)])]):e._e(),e._v(" "),e.events.total?e._e():s("module-info",{attrs:{module:"calendar",title:"event_module_title",description:"event_module_description",icon:"list"}},[s("div",{attrs:{slot:"btn"},slot:"btn"},[!e.showCreatePanel&&e.hasPermission("create-event")?s("button",{staticClass:"btn btn-info btn-md",on:{click:function(t){e.showCreatePanel=!e.showCreatePanel}}},[s("i",{staticClass:"fas fa-plus"}),e._v(" "+e._s(e.trans("general.add_new")))]):e._e()])]),e._v(" "),s("pagination-record",{attrs:{"page-length":e.filter.page_length,records:e.events},on:{"update:pageLength":function(t){return e.$set(e.filter,"page_length",t)},"update:page-length":function(t){return e.$set(e.filter,"page_length",t)},updateRecords:e.getEvents}})],1)])],1),e._v(" "),e.showModal?s("event-detail",{attrs:{uuid:e.showUuid},on:{close:function(t){e.showModal=!1}}}):e._e(),e._v(" "),s("right-panel",{attrs:{topic:e.help_topic}})],1)}),[],!1,null,null,null);t.default=l.exports},zk3C:function(e,t,s){"use strict";var n={components:{},props:["uuid","url"],mounted:function(){this.uuid&&this.get()},data:function(){return{event:[],attachments:[]}},methods:{get:function(){var e=this,t=this.$loading.show(),s=this.url?"/api"+this.url:"/api/event/"+this.uuid;axios.get(s).then((function(s){e.event=s.event,e.attachments=s.attachments,t.hide()})).catch((function(e){t.hide(),helper.showErrorMsg(e)}))},getEmployeeName:function(e){return helper.getEmployeeName(e)},getEmployeeDesignationOnDate:function(e,t){return helper.getEmployeeDesignationOnDate(e,t)}},computed:{authToken:function(){return helper.getAuthToken()}},filters:{momentDateTime:function(e){return helper.formatDateTime(e)},moment:function(e){return helper.formatDate(e)},momentTime:function(e){return helper.formatTime(e)}}},a=s("KHd+"),i=Object(a.a)(n,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("transition",{attrs:{name:"modal"}},[s("div",{staticClass:"modal-mask"},[s("div",{staticClass:"modal-wrapper"},[e.event.id?s("div",{staticClass:"modal-container modal-lg"},[s("div",{staticClass:"modal-header"},[e._t("header",[s("span",[e._v(e._s(e.event.title))]),e._v(" "),s("span",{staticClass:"float-right pointer",on:{click:function(t){return e.$emit("close")}}},[e._v("x")])])],2),e._v(" "),s("div",{staticClass:"modal-body"},[e._t("body",[s("h6",{staticClass:"card-title"},[s("strong",[e._v(e._s(e.trans("calendar.event_duration"))+":")]),e._v(" "+e._s(e._f("moment")(e.event.start_date))+" "),e.event.start_time?s("span",[e._v(e._s(e._f("momentTime")(e.event.start_time)))]):e._e(),e._v(" "+e._s(e.trans("general.to"))+"  "+e._s(e._f("moment")(e.event.end_date))+" "),e.event.end_time?s("span",[e._v(e._s(e._f("momentTime")(e.event.end_time)))]):e._e(),e._v(" "),s("br"),s("br"),e._v(" "),s("strong",[e._v(e._s(e.trans("calendar.event_venue"))+":")]),e._v(" "+e._s(e.event.venue)),s("br"),s("br"),e._v(" "),s("strong",[e._v(e._s(e.trans("calendar.event_audience"))+":")]),e._v(" "),"everyone"==e.event.audience?s("span",[e._v(e._s(e.trans("calendar.event_for_everyone")))]):e._e(),e._v(" "),"selected_course"==e.event.audience?[e._v("\n                                "+e._s(e.trans("academic.course"))+" "),s("br"),e._v(" "),s("ul",{staticStyle:{"list-style":"none"}},[e._l(e.event.courses,(function(t){return[s("li",[s("i",{staticClass:"fas fa-check"}),e._v(" "+e._s(t.name+" ("+t.course_group.name+")"))])]}))],2)]:"selected_batch"==e.event.audience?[e._v("\n                                "+e._s(e.trans("academic.batch"))+" "),s("br"),e._v(" "),s("ul",{staticStyle:{"list-style":"none"}},[e._l(e.event.batches,(function(t){return[s("li",[s("i",{staticClass:"fas fa-check"}),e._v(" "+e._s(t.name+" ("+t.course.name+")"))])]}))],2)]:"selected_department"==e.event.audience?[e._v("\n                                "+e._s(e.trans("employee.department"))+" "),s("br"),e._v(" "),s("ul",{staticStyle:{"list-style":"none"}},[e._l(e.event.departments,(function(t){return[s("li",[s("i",{staticClass:"fas fa-check"}),e._v(" "+e._s(t.name))])]}))],2)]:"selected_employee_category"==e.event.audience?[e._v("\n                                "+e._s(e.trans("employee.category"))+" "),s("br"),e._v(" "),s("ul",{staticStyle:{"list-style":"none"}},[e._l(e.event.employee_categorys,(function(t){return[s("li",[s("i",{staticClass:"fas fa-check"}),e._v(" "+e._s(t.name))])]}))],2)]:e._e(),e._v(" "),e.event.user?s("p",{staticClass:"pull-right"},[s("strong",[e._v(e._s(e.trans("calendar.event_posted_by"))+":")]),e._v(" "+e._s(e.getEmployeeName(e.event.user.employee))+" "+e._s(e.getEmployeeDesignationOnDate(e.event.user.employee,e.event.start_date))+"\n                            ")]):e._e()],2),e._v(" "),s("div",{staticClass:"m-t-20 html-view",domProps:{innerHTML:e._s(e.event.description)}}),e._v(" "),e.attachments.length?s("div",[s("ul",{staticClass:"m-t-10 upload-file-list"},e._l(e.attachments,(function(t){return s("li",{staticClass:"upload-file-list-item"},[s("a",{staticClass:"no-link-color",attrs:{href:"/calendar/event/"+e.event.uuid+"/attachment/"+t.uuid+"/download?token="+e.authToken}},[s("i",{class:["file-icon","fas","fa-lg",t.file_info.icon]}),e._v(" "),s("span",{staticClass:"upload-file-list-item-size"},[e._v(e._s(t.file_info.size))]),e._v(" "+e._s(t.user_filename))])])})),0)]):e._e(),e._v(" "),s("hr"),e._v(" "),s("p",[s("i",{staticClass:"far fa-clock"}),e._v(" "),s("small",[e._v(e._s(e.trans("general.created_at"))+" "+e._s(e._f("momentDateTime")(e.event.created_at)))]),e._v(" "),s("span",{staticClass:"pull-right"},[s("i",{staticClass:"far fa-clock"}),e._v(" "),s("small",[e._v(e._s(e.trans("general.updated_at"))+" "+e._s(e._f("momentDateTime")(e.event.updated_at)))])])])])],2)]):e._e()])])])}),[],!1,null,null,null);t.a=i.exports}}]);
//# sourceMappingURL=index.js.map?id=6291ad224328503f96d0