(window.webpackJsonp=window.webpackJsonp||[]).push([[112],{"3h6m":function(t,e,a){(t.exports=a("I1BE")(!1)).push([t.i,"\n.loading-overlay.is-full-page{\n    z-index: 1060;\n}\n",""])},CRQj:function(t,e,a){"use strict";a.r(e);var i=a("O/e0"),s=a("rath"),r={components:{articleForm:i.a,articleDetail:s.a},data:function(){return{articles:{total:0,data:[]},filter:{sort_by:"date_of_article",order:"desc",keyword:"",article_type_id:[],date_of_article_start_date:"",date_of_article_end_date:"",page_length:helper.getConfig("page_length")},orderByOptions:[{value:"date_of_article",translation:i18n.post.date_of_article},{value:"title",translation:i18n.post.article_title}],article_types:[],selected_article_types:null,showFilterPanel:!1,showCreatePanel:!1,help_topic:"",showUuid:"",showModal:!1}},mounted:function(){helper.hasPermission("list-article")||(helper.notAccessibleMsg(),this.$router.push("/dashboard")),this.getArticles(),helper.showDemoNotification(["post"])},methods:{hasPermission:function(t){return helper.hasPermission(t)},showAction:function(t){this.showUuid=t.uuid,this.showModal=!0},getEmployeeName:function(t){return helper.getEmployeeName(t)},getEmployeeDesignationOnDate:function(t,e){return helper.getEmployeeDesignationOnDate(t,e)},getArticles:function(t){var e=this,a=this.$loading.show();"number"!=typeof t&&(t=1),this.filter.date_of_article_start_date=helper.toDate(this.filter.date_of_article_start_date),this.filter.date_of_article_end_date=helper.toDate(this.filter.date_of_article_end_date);var i=helper.getFilterURL(this.filter);axios.get("/api/article?page="+t+i).then((function(t){e.articles=t.articles,e.article_types=t.filters.article_types,a.hide()})).catch((function(t){a.hide(),helper.showErrorMsg(t)}))},editArticle:function(t){this.$router.push("/post/article/"+t.uuid+"/edit")},confirmDelete:function(t){var e=this;return function(a){return e.deleteArticle(t)}},deleteArticle:function(t){var e=this,a=this.$loading.show();axios.delete("/api/article/"+t.uuid).then((function(t){toastr.success(t.message),e.getArticles(),a.hide()})).catch((function(t){a.hide(),helper.showErrorMsg(t)}))},getConfig:function(t){return helper.getConfig(t)},print:function(){var t=this.$loading.show();axios.post("/api/article/print",{filter:this.filter}).then((function(e){var a=window.open("/print");t.hide(),a.document.write(e)})).catch((function(e){t.hide(),helper.showErrorMsg(e)}))},pdf:function(){var t=this,e=this.$loading.show();axios.post("/api/article/pdf",{filter:this.filter}).then((function(a){e.hide(),window.open("/download/report/"+a+"?token="+t.authToken)})).catch((function(t){e.hide(),helper.showErrorMsg(t)}))},onArticleTypeSelect:function(t){this.filter.article_type_id.push(t.id)},onArticleTypeRemove:function(t){this.filter.article_type_id.splice(this.filter.article_type_id.indexOf(t.id),1)}},filters:{moment:function(t){return helper.formatDate(t)},momentDateTime:function(t){return helper.formatDateTime(t)}},watch:{"filter.sort_by":function(t){this.getArticles()},"filter.order":function(t){this.getArticles()},"filter.page_length":function(t){this.getArticles()}},computed:{authToken:function(){return helper.getAuthToken()}}},o=a("KHd+"),l=Object(o.a)(r,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"page-titles"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-sm-6"},[a("h3",{staticClass:"text-themecolor"},[t._v(t._s(t.trans("post.article"))+" \n                    "),t.articles.total?a("span",{staticClass:"card-subtitle d-none d-sm-inline"},[t._v(t._s(t.trans("general.total_result_found",{count:t.articles.total,from:t.articles.from,to:t.articles.to})))]):a("span",{staticClass:"card-subtitle d-none d-sm-inline"},[t._v(t._s(t.trans("general.no_result_found")))])])]),t._v(" "),a("div",{staticClass:"col-12 col-sm-6"},[a("div",{staticClass:"action-buttons pull-right"},[t.articles.total&&!t.showCreatePanel&&t.hasPermission("create-article")?a("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.trans("general.add_new"),expression:"trans('general.add_new')"}],staticClass:"btn btn-info btn-sm",on:{click:function(e){t.showCreatePanel=!t.showCreatePanel}}},[a("i",{staticClass:"fas fa-plus"}),t._v(" "),a("span",{staticClass:"d-none d-sm-inline"},[t._v(t._s(t.trans("post.add_new_article")))])]):t._e(),t._v(" "),t.showFilterPanel?t._e():a("button",{staticClass:"btn btn-info btn-sm",on:{click:function(e){t.showFilterPanel=!t.showFilterPanel}}},[a("i",{staticClass:"fas fa-filter"}),t._v(" "),a("span",{staticClass:"d-none d-sm-inline"},[t._v(t._s(t.trans("general.filter")))])]),t._v(" "),a("sort-by",{attrs:{"order-by-options":t.orderByOptions,"sort-by":t.filter.sort_by,order:t.filter.order},on:{updateSortBy:function(e){t.filter.sort_by=e},updateOrder:function(e){t.filter.order=e}}}),t._v(" "),a("div",{staticClass:"btn-group"},[a("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.trans("general.more_option"),expression:"trans('general.more_option')"}],staticClass:"btn btn-info btn-sm dropdown-toggle no-caret ",attrs:{type:"button",role:"menu",id:"moreOption","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[a("i",{staticClass:"fas fa-ellipsis-h"}),t._v(" "),a("span",{staticClass:"d-none d-sm-inline"})]),t._v(" "),a("div",{class:["dropdown-menu","ltr"==t.getConfig("direction")?"dropdown-menu-right":""],attrs:{"aria-labelledby":"moreOption"}},[a("button",{staticClass:"dropdown-item custom-dropdown",on:{click:t.print}},[a("i",{staticClass:"fas fa-print"}),t._v(" "+t._s(t.trans("general.print")))]),t._v(" "),a("button",{staticClass:"dropdown-item custom-dropdown",on:{click:t.pdf}},[a("i",{staticClass:"fas fa-file-pdf"}),t._v(" "+t._s(t.trans("general.generate_pdf")))])])]),t._v(" "),a("help-button",{on:{clicked:function(e){t.help_topic="post.article"}}})],1)])])]),t._v(" "),a("div",{staticClass:"container-fluid"},[a("transition",{attrs:{name:"fade"}},[t.showFilterPanel?a("div",{staticClass:"card card-form"},[a("div",{staticClass:"card-body"},[a("h4",{staticClass:"card-title"},[t._v(t._s(t.trans("general.filter")))]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-sm-3"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:""}},[t._v(t._s(t.trans("post.article_type")))]),t._v(" "),a("v-select",{attrs:{label:"name","track-by":"id",name:"article_type_id",id:"article_type_id",options:t.article_types,placeholder:t.trans("post.select_article_type"),multiple:!0,"close-on-select":!1,"clear-on-select":!1,"hide-selected":!0,selected:t.selected_article_types},on:{select:t.onArticleTypeSelect,remove:t.onArticleTypeRemove},model:{value:t.selected_article_types,callback:function(e){t.selected_article_types=e},expression:"selected_article_types"}},[t.article_types.length?t._e():a("div",{staticClass:"multiselect__option",attrs:{slot:"afterList"},slot:"afterList"},[t._v("\n                                        "+t._s(t.trans("general.no_option_found"))+"\n                                    ")])])],1)]),t._v(" "),a("div",{staticClass:"col-12 col-sm-3"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:""}},[t._v(t._s(t.trans("post.article_keyword")))]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.filter.keyword,expression:"filter.keyword"}],staticClass:"form-control",attrs:{name:"keyword"},domProps:{value:t.filter.keyword},on:{input:function(e){e.target.composing||t.$set(t.filter,"keyword",e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"col-12 col-sm-6"},[a("date-range-picker",{attrs:{"start-date":t.filter.date_of_article_start_date,"end-date":t.filter.date_of_article_end_date,label:t.trans("post.date_of_article_between")},on:{"update:startDate":function(e){return t.$set(t.filter,"date_of_article_start_date",e)},"update:start-date":function(e){return t.$set(t.filter,"date_of_article_start_date",e)},"update:endDate":function(e){return t.$set(t.filter,"date_of_article_end_date",e)},"update:end-date":function(e){return t.$set(t.filter,"date_of_article_end_date",e)}}})],1)]),t._v(" "),a("div",{staticClass:"card-footer text-right"},[a("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:function(e){t.showFilterPanel=!1}}},[t._v(t._s(t.trans("general.cancel")))]),t._v(" "),a("button",{staticClass:"btn btn-info waves-effect waves-light",attrs:{type:"button"},on:{click:t.getArticles}},[t._v(t._s(t.trans("general.filter")))])])])]):t._e()]),t._v(" "),t.hasPermission("create-article")?a("transition",{attrs:{name:"fade"}},[t.showCreatePanel?a("div",{staticClass:"card card-form"},[a("div",{staticClass:"card-body"},[a("h4",{staticClass:"card-title"},[t._v(t._s(t.trans("post.add_new_article")))]),t._v(" "),a("article-form",{on:{completed:t.getArticles,cancel:function(e){t.showCreatePanel=!t.showCreatePanel}}})],1)]):t._e()]):t._e(),t._v(" "),a("div",{staticClass:"card"},[a("div",{staticClass:"card-body"},[t.articles.total?a("div",{staticClass:"table-responsive"},[a("table",{staticClass:"table table-sm"},[a("thead",[a("tr",[a("th",[t._v(t._s(t.trans("post.article_type")))]),t._v(" "),a("th",[t._v(t._s(t.trans("post.article_title")))]),t._v(" "),a("th",[t._v(t._s(t.trans("post.date_of_article")))]),t._v(" "),a("th",[t._v(t._s(t.trans("post.article_is_public")))]),t._v(" "),a("th",[t._v(t._s(t.trans("post.article_posted_by")))]),t._v(" "),a("th",[t._v(t._s(t.trans("general.created_at")))]),t._v(" "),a("th",{staticClass:"table-option"},[t._v(t._s(t.trans("general.action")))])])]),t._v(" "),a("tbody",t._l(t.articles.data,(function(e){return a("tr",[a("td",{domProps:{textContent:t._s(e.article_type.name)}}),t._v(" "),a("td",{domProps:{textContent:t._s(e.title)}}),t._v(" "),a("td",[t._v(t._s(t._f("moment")(e.date_of_article)))]),t._v(" "),a("td",[e.is_public?a("span",[a("i",{staticClass:"fas fa-check"})]):a("span",[a("i",{staticClass:"fas fa-times"})])]),t._v(" "),a("td",[t._v(t._s(t.getEmployeeName(e.user.employee))+" "),a("br"),t._v(" "+t._s(t.getEmployeeDesignationOnDate(e.user.employee,e.date_of_article)))]),t._v(" "),a("td",[t._v(t._s(t._f("momentDateTime")(e.created_at)))]),t._v(" "),a("td",{staticClass:"table-option"},[a("div",{staticClass:"btn-group"},[a("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.trans("post.view_article"),expression:"trans('post.view_article')"}],staticClass:"btn btn-success btn-sm",on:{click:function(a){return a.preventDefault(),t.showAction(e)}}},[a("i",{staticClass:"fas fa-arrow-circle-right"})]),t._v(" "),t.hasPermission("edit-article")?a("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.trans("post.edit_article"),expression:"trans('post.edit_article')"}],staticClass:"btn btn-info btn-sm",on:{click:function(a){return a.preventDefault(),t.editArticle(e)}}},[a("i",{staticClass:"fas fa-edit"})]):t._e(),t._v(" "),t.hasPermission("delete-article")?a("button",{directives:[{name:"confirm",rawName:"v-confirm",value:{ok:t.confirmDelete(e)},expression:"{ok: confirmDelete(article)}"},{name:"tooltip",rawName:"v-tooltip",value:t.trans("post.delete_article"),expression:"trans('post.delete_article')"}],key:e.id,staticClass:"btn btn-danger btn-sm"},[a("i",{staticClass:"fas fa-trash"})]):t._e()])])])})),0)])]):t._e(),t._v(" "),t.articles.total?t._e():a("module-info",{attrs:{module:"post",title:"article_module_title",description:"article_module_description",icon:"list"}},[a("div",{attrs:{slot:"btn"},slot:"btn"},[!t.showCreatePanel&&t.hasPermission("create-article")?a("button",{staticClass:"btn btn-info btn-md",on:{click:function(e){t.showCreatePanel=!t.showCreatePanel}}},[a("i",{staticClass:"fas fa-plus"}),t._v(" "+t._s(t.trans("general.add_new")))]):t._e()])]),t._v(" "),a("pagination-record",{attrs:{"page-length":t.filter.page_length,records:t.articles},on:{"update:pageLength":function(e){return t.$set(t.filter,"page_length",e)},"update:page-length":function(e){return t.$set(t.filter,"page_length",e)},updateRecords:t.getArticles}})],1)])],1),t._v(" "),t.showModal?a("article-detail",{attrs:{uuid:t.showUuid},on:{close:function(e){t.showModal=!1}}}):t._e(),t._v(" "),a("right-panel",{attrs:{topic:t.help_topic}})],1)}),[],!1,null,null,null);e.default=l.exports},"O/e0":function(t,e,a){"use strict";var i={components:{articleTypeForm:a("t1P2").a},data:function(){return{articleForm:new Form({article_type_id:"",title:"",is_public:0,date_of_article:"",description:"",upload_token:""}),article_types:[],selected_article_type:null,module_id:"",clearAttachment:!0,showArticleTypeModal:!1}},props:["uuid"],mounted:function(){helper.hasPermission("create-article")||helper.hasPermission("edit-article")||(helper.notAccessibleMsg(),this.$router.push("/dashboard")),this.uuid?this.get():this.articleForm.upload_token=this.$uuid.v4(),this.getPreRequisite()},methods:{hasPermission:function(t){return helper.hasPermission(t)},getPreRequisite:function(){var t=this,e=this.$loading.show();this.showArticleTypeModal=!1,axios.get("/api/article/pre-requisite").then((function(a){t.article_types=a.article_types,e.hide()})).catch((function(t){e.hide(),helper.showErrorMsg(t)}))},proceed:function(){this.uuid?this.update():this.store()},store:function(){var t=this,e=this.$loading.show();this.articleForm.post("/api/article").then((function(a){toastr.success(a.message),t.clearAttachment=!t.clearAttachment,t.articleForm.upload_token=t.$uuid.v4(),t.selected_article_type=null,t.$emit("completed"),e.hide()})).catch((function(t){e.hide(),helper.showErrorMsg(t)}))},get:function(){var t=this,e=this.$loading.show();axios.get("/api/article/"+this.uuid).then((function(a){t.articleForm.title=a.article.title,t.articleForm.date_of_article=a.article.date_of_article,t.articleForm.description=a.article.description,t.articleForm.article_type_id=a.article.article_type_id,t.selected_article_type=a.article.article_type_id?{id:a.article.article_type_id,name:a.article.article_type.name}:null,t.articleForm.is_public=a.article.is_public,t.articleForm.upload_token=a.article.upload_token,t.module_id=a.article.id,a.is_editable||(toastr.error(i18n.user.permission_denied),e.hide(),t.$router.push("/post/article")),e.hide()})).catch((function(a){e.hide(),helper.showErrorMsg(a),t.$router.push("/post/article")}))},update:function(){var t=this,e=this.$loading.show();this.articleForm.patch("/api/article/"+this.uuid).then((function(a){toastr.success(a.message),e.hide(),t.$router.push("/post/article")})).catch((function(t){e.hide(),helper.showErrorMsg(t)}))},onArticleTypeSelect:function(t){this.articleForm.article_type_id=t.id}}},s=(a("o/Aw"),a("KHd+")),r=Object(s.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("form",{on:{submit:function(e){return e.preventDefault(),t.proceed(e)},keydown:function(e){return t.articleForm.errors.clear(e.target.name)}}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-sm-6"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:""}},[t._v(t._s(t.trans("post.article_type"))+" ")]),t._v(" "),t.hasPermission("access-configuration")?a("button",{staticClass:"btn btn-xs btn-info pull-right",attrs:{type:"button"},on:{click:function(e){t.showArticleTypeModal=!0}}},[t._v(t._s(t.trans("general.add_new")))]):t._e(),t._v(" "),a("v-select",{attrs:{label:"name",name:"article_type_id",id:"article_type_id",options:t.article_types,placeholder:t.trans("post.select_article_type")},on:{select:t.onArticleTypeSelect,close:function(e){return t.articleForm.errors.clear("article_type_id")},remove:function(e){t.articleForm.article_type_id=""}},model:{value:t.selected_article_type,callback:function(e){t.selected_article_type=e},expression:"selected_article_type"}},[t.article_types.length?t._e():a("div",{staticClass:"multiselect__option",attrs:{slot:"afterList"},slot:"afterList"},[t._v("\n                            "+t._s(t.trans("general.no_option_found"))+"\n                        ")])]),t._v(" "),a("show-error",{attrs:{"form-name":t.articleForm,"prop-name":"article_type_id"}})],1),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:""}},[t._v(t._s(t.trans("post.article_title")))]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.articleForm.title,expression:"articleForm.title"}],staticClass:"form-control",attrs:{type:"text",name:"title",placeholder:t.trans("post.article_title")},domProps:{value:t.articleForm.title},on:{input:function(e){e.target.composing||t.$set(t.articleForm,"title",e.target.value)}}}),t._v(" "),a("show-error",{attrs:{"form-name":t.articleForm,"prop-name":"title"}})],1),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:""}},[t._v(t._s(t.trans("post.date_of_article")))]),t._v(" "),a("datepicker",{attrs:{bootstrapStyling:!0,placeholder:t.trans("post.date_of_article")},on:{selected:function(e){return t.articleForm.errors.clear("date_of_article")}},model:{value:t.articleForm.date_of_article,callback:function(e){t.$set(t.articleForm,"date_of_article",e)},expression:"articleForm.date_of_article"}}),t._v(" "),a("show-error",{attrs:{"form-name":t.articleForm,"prop-name":"date_of_article"}})],1),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{staticClass:"custom-control custom-checkbox"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.articleForm.is_public,expression:"articleForm.is_public"}],staticClass:"custom-control-input",attrs:{type:"checkbox",value:"1"},domProps:{checked:Array.isArray(t.articleForm.is_public)?t._i(t.articleForm.is_public,"1")>-1:t.articleForm.is_public},on:{change:function(e){var a=t.articleForm.is_public,i=e.target,s=!!i.checked;if(Array.isArray(a)){var r=t._i(a,"1");i.checked?r<0&&t.$set(t.articleForm,"is_public",a.concat(["1"])):r>-1&&t.$set(t.articleForm,"is_public",a.slice(0,r).concat(a.slice(r+1)))}else t.$set(t.articleForm,"is_public",s)}}}),t._v(" "),a("span",{staticClass:"custom-control-label"},[t._v(t._s(t.trans("post.article_is_public")))])])]),t._v(" "),a("div",{staticClass:"form-group"},[a("file-upload-input",{attrs:{"button-text":t.trans("general.upload_document"),token:t.articleForm.upload_token,module:"article","clear-file":t.clearAttachment,"module-id":t.module_id}})],1)]),t._v(" "),a("div",{staticClass:"col-12 col-sm-6"},[a("div",{staticClass:"form-group"},[a("html-editor",{attrs:{name:"description",model:t.articleForm.description,height:"300",isUpdate:!!t.uuid},on:{"update:model":function(e){return t.$set(t.articleForm,"description",e)},clearErrors:function(e){return t.articleForm.errors.clear("description")}}}),t._v(" "),a("show-error",{attrs:{"form-name":t.articleForm,"prop-name":"description"}})],1)])]),t._v(" "),a("div",{staticClass:"card-footer text-right"},[a("router-link",{directives:[{name:"show",rawName:"v-show",value:t.uuid,expression:"uuid"}],staticClass:"btn btn-danger waves-effect waves-light ",attrs:{to:"/post/article"}},[t._v(t._s(t.trans("general.cancel")))]),t._v(" "),t.uuid?t._e():a("button",{staticClass:"btn btn-danger waves-effect waves-light ",attrs:{type:"button"},on:{click:function(e){return t.$emit("cancel")}}},[t._v(t._s(t.trans("general.cancel")))]),t._v(" "),a("button",{staticClass:"btn btn-info waves-effect waves-light",attrs:{type:"submit"}},[t.uuid?a("span",[t._v(t._s(t.trans("general.update")))]):a("span",[t._v(t._s(t.trans("general.save")))])])],1)]),t._v(" "),t.showArticleTypeModal?a("transition",{attrs:{name:"modal"}},[a("div",{staticClass:"modal-mask"},[a("div",{staticClass:"modal-wrapper"},[a("div",{staticClass:"modal-container modal-lg"},[a("div",{staticClass:"modal-header"},[t._t("header",[t._v("\n                            "+t._s(t.trans("post.add_new_article_type"))+"\n                            "),a("span",{staticClass:"float-right pointer",on:{click:function(e){t.showArticleTypeModal=!1}}},[t._v("x")])])],2),t._v(" "),a("div",{staticClass:"modal-body"},[t._t("body",[a("article-type-form",{on:{completed:t.getPreRequisite,cancel:function(e){t.showArticleTypeModal=!1}}}),t._v(" "),a("div",{staticClass:"clearfix"})])],2)])])])]):t._e()],1)}),[],!1,null,null,null);e.a=r.exports},m8MU:function(t,e,a){var i=a("3h6m");"string"==typeof i&&(i=[[t.i,i,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(i,s);i.locals&&(t.exports=i.locals)},"o/Aw":function(t,e,a){"use strict";var i=a("m8MU");a.n(i).a},rath:function(t,e,a){"use strict";var i={components:{},props:["uuid","url"],mounted:function(){this.uuid&&this.get()},data:function(){return{article:[],attachments:[]}},methods:{get:function(){var t=this,e=this.$loading.show(),a=this.url?"/api"+this.url:"/api/article/"+this.uuid;axios.get(a).then((function(a){t.article=a.article,t.attachments=a.attachments,e.hide()})).catch((function(t){e.hide(),helper.showErrorMsg(t)}))},getEmployeeName:function(t){return helper.getEmployeeName(t)},getEmployeeDesignation:function(t,e){return helper.getEmployeeDesignation(t,e)}},computed:{authToken:function(){return helper.getAuthToken()}},filters:{momentDateTime:function(t){return helper.formatDateTime(t)},moment:function(t){return helper.formatDate(t)}}},s=a("KHd+"),r=Object(s.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:"modal"}},[a("div",{staticClass:"modal-mask"},[a("div",{staticClass:"modal-wrapper"},[a("div",{staticClass:"modal-container modal-lg"},[t.article.id?a("div",{staticClass:"modal-header"},[t._t("header",[a("span",[t._v(t._s(t.article.title)+" "),t.article.is_public?a("span",{staticClass:"label label-success"},[t._v(t._s(t.trans("post.article_public")))]):t._e()]),t._v(" "),a("span",{staticClass:"float-right pointer",on:{click:function(e){return t.$emit("close")}}},[t._v("x")])])],2):t._e(),t._v(" "),t.article.id?a("div",{staticClass:"modal-body"},[t._t("body",[a("h6",{staticClass:"card-title"},[t._v("\n                            "+t._s(t.trans("post.date_of_article"))+": "+t._s(t._f("moment")(t.article.date_of_article))+" \n                            "),t.article.user?a("p",{staticClass:"pull-right"},[a("strong",[t._v(t._s(t.trans("post.article_posted_by"))+":")]),t._v(" "+t._s(t.getEmployeeName(t.article.user.employee))+" "+t._s(t.getEmployeeDesignation(t.article.user.employee,t.article.date_of_article))+"\n                            ")]):t._e()]),t._v(" "),a("div",{staticClass:"m-t-20 html-view",domProps:{innerHTML:t._s(t.article.description)}}),t._v(" "),t.attachments.length?a("div",[a("ul",{staticClass:"m-t-10 upload-file-list"},t._l(t.attachments,(function(e){return a("li",{staticClass:"upload-file-list-item"},[a("a",{staticClass:"no-link-color",attrs:{href:"/post/article/"+t.article.uuid+"/attachment/"+e.uuid+"/download?token="+t.authToken}},[a("i",{class:["file-icon","fas","fa-lg",e.file_info.icon]}),t._v(" "),a("span",{staticClass:"upload-file-list-item-size"},[t._v(t._s(e.file_info.size))]),t._v(" "+t._s(e.user_filename))])])})),0)]):t._e(),t._v(" "),a("hr"),t._v(" "),a("p",[a("i",{staticClass:"far fa-clock"}),t._v(" "),a("small",[t._v(t._s(t.trans("general.created_at"))+" "+t._s(t._f("momentDateTime")(t.article.created_at)))]),t._v(" "),a("span",{staticClass:"pull-right"},[a("i",{staticClass:"far fa-clock"}),t._v(" "),a("small",[t._v(t._s(t.trans("general.updated_at"))+" "+t._s(t._f("momentDateTime")(t.article.updated_at)))])])])])],2):t._e()])])])])}),[],!1,null,null,null);e.a=r.exports},t1P2:function(t,e,a){"use strict";var i={data:function(){return{articleTypeForm:new Form({name:"",description:""})}},props:["id"],mounted:function(){this.id&&this.get()},methods:{proceed:function(){this.id?this.update():this.store()},store:function(){var t=this,e=this.$loading.show();this.articleTypeForm.post("/api/post/article/type").then((function(a){toastr.success(a.message),t.$emit("completed"),e.hide()})).catch((function(t){e.hide(),helper.showErrorMsg(t)}))},get:function(){var t=this,e=this.$loading.show();axios.get("/api/post/article/type/"+this.id).then((function(a){t.articleTypeForm.name=a.name,t.articleTypeForm.description=a.description,e.hide()})).catch((function(a){e.hide(),helper.showErrorMsg(a),t.$router.push("/configuration/post/article/type")}))},update:function(){var t=this,e=this.$loading.show();this.articleTypeForm.patch("/api/post/article/type/"+this.id).then((function(a){toastr.success(a.message),e.hide(),t.$router.push("/configuration/post/article/type")})).catch((function(t){e.hide(),helper.showErrorMsg(t)}))}}},s=a("KHd+"),r=Object(s.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("form",{on:{submit:function(e){return e.preventDefault(),t.proceed(e)},keydown:function(e){return t.articleTypeForm.errors.clear(e.target.name)}}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-sm-6"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:""}},[t._v(t._s(t.trans("post.article_type_name")))]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.articleTypeForm.name,expression:"articleTypeForm.name"}],staticClass:"form-control",attrs:{type:"text",name:"name",placeholder:t.trans("post.article_type_name")},domProps:{value:t.articleTypeForm.name},on:{input:function(e){e.target.composing||t.$set(t.articleTypeForm,"name",e.target.value)}}}),t._v(" "),a("show-error",{attrs:{"form-name":t.articleTypeForm,"prop-name":"name"}})],1)]),t._v(" "),a("div",{staticClass:"col-12 col-sm-6"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:""}},[t._v(t._s(t.trans("post.article_type_description")))]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.articleTypeForm.description,expression:"articleTypeForm.description"}],staticClass:"form-control",attrs:{type:"text",name:"description",placeholder:t.trans("post.article_type_description")},domProps:{value:t.articleTypeForm.description},on:{input:function(e){e.target.composing||t.$set(t.articleTypeForm,"description",e.target.value)}}}),t._v(" "),a("show-error",{attrs:{"form-name":t.articleTypeForm,"prop-name":"description"}})],1)])]),t._v(" "),a("div",{staticClass:"card-footer text-right"},[a("router-link",{directives:[{name:"show",rawName:"v-show",value:t.id,expression:"id"}],staticClass:"btn btn-danger waves-effect waves-light ",attrs:{to:"/configuration/post/article/type"}},[t._v(t._s(t.trans("general.cancel")))]),t._v(" "),t.id?t._e():a("button",{staticClass:"btn btn-danger waves-effect waves-light ",attrs:{type:"button"},on:{click:function(e){return t.$emit("cancel")}}},[t._v(t._s(t.trans("general.cancel")))]),t._v(" "),a("button",{staticClass:"btn btn-info waves-effect waves-light",attrs:{type:"submit"}},[t.id?a("span",[t._v(t._s(t.trans("general.update")))]):a("span",[t._v(t._s(t.trans("general.save")))])])],1)])}),[],!1,null,null,null);e.a=r.exports}}]);
//# sourceMappingURL=index.js.map?id=41dbc8b5314d479ac29a