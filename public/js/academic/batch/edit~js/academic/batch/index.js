(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/academic/batch/edit~js/academic/batch/index"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/academic/batch/form.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/academic/batch/form.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {},
  data: function data() {
    return {
      batchForm: new Form({
        name: '',
        course_id: '',
        max_strength: '',
        roll_number_prefix: '',
        roll_number_digit: 0,
        default_attendance_method: 'once',
        description: '',
        holidays_except: []
      }),
      holiday: '',
      attendance_methods: [],
      courses: [],
      selected_course: null
    };
  },
  props: ['id'],
  mounted: function mounted() {
    if (!helper.hasPermission('create-batch') && !helper.hasPermission('edit-batch')) {
      helper.notAccessibleMsg();
      this.$router.push('/dashboard');
    }

    if (this.id) this.get();
    this.getPreRequisite();
  },
  methods: {
    proceed: function proceed() {
      if (this.id) this.update();else this.store();
    },
    getPreRequisite: function getPreRequisite() {
      var _this = this;

      var loader = this.$loading.show();
      axios.get('/api/batch/pre-requisite').then(function (response) {
        _this.courses = response.courses;
        _this.attendance_methods = response.attendance_methods;
        loader.hide();
      })["catch"](function (error) {
        loader.hide();
        helper.showErrorMsg(error);
      });
    },
    store: function store() {
      var _this2 = this;

      var loader = this.$loading.show();
      this.batchForm.post('/api/batch').then(function (response) {
        toastr.success(response.message);
        _this2.selected_course = null;

        _this2.$emit('completed');

        loader.hide();
      })["catch"](function (error) {
        loader.hide();
        helper.showErrorMsg(error);
      });
    },
    get: function get() {
      var _this3 = this;

      var loader = this.$loading.show();
      axios.get('/api/batch/' + this.id).then(function (response) {
        _this3.batchForm.name = response.batch.name;
        _this3.batchForm.course_id = response.batch.course_id;
        _this3.batchForm.description = response.batch.description;
        _this3.batchForm.max_strength = response.batch.options ? response.batch.options.max_strength : helper.getConfig('default_max_strength_per_batch');
        _this3.batchForm.default_attendance_method = response.batch.options ? response.batch.options.default_attendance_method : '';
        _this3.batchForm.roll_number_prefix = response.batch.options ? response.batch.options.roll_number_prefix : helper.getConfig('default_roll_number_prefix');
        _this3.batchForm.roll_number_digit = response.batch.options && response.batch.options.hasOwnProperty('roll_number_digit') ? response.batch.options.roll_number_digit : 0, _this3.selected_course = response.selected_course;
        _this3.batchForm.holidays_except = response.batch.options.holidays_except || [];
        loader.hide();
      })["catch"](function (error) {
        loader.hide();
        helper.showErrorMsg(error);

        _this3.$router.push('/academic/batch');
      });
    },
    update: function update() {
      var _this4 = this;

      var loader = this.$loading.show();
      this.batchForm.patch('/api/batch/' + this.id).then(function (response) {
        toastr.success(response.message);
        loader.hide();
        _this4.batchForm.holidays_except = [];

        _this4.$router.push('/academic/batch');
      })["catch"](function (error) {
        loader.hide();
        helper.showErrorMsg(error);
      });
    },
    onCourseSelect: function onCourseSelect(selectedOption) {
      return this.batchForm.course_id = selectedOption.id;
    },
    onSelected: function onSelected(val) {
      this.holiday = '';
      val = helper.toDate(val);
      if (this.batchForm.holidays_except.indexOf(val) < 0) this.batchForm.holidays_except.push(val);
      this.batchForm.errors.clear('holidays_except');
      this.holiday = '';
    },
    remove: function remove(date) {
      var idx = this.batchForm.holidays_except.indexOf(date);
      if (idx < 0) return;
      this.batchForm.holidays_except.splice(idx, 1);
      this.holiday = '';
    }
  },
  filters: {
    momentWithDay: function momentWithDay(date) {
      return helper.formatDateWithDay(date);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/academic/batch/form.vue?vue&type=template&id=5fdb6ad2&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/academic/batch/form.vue?vue&type=template&id=5fdb6ad2& ***!
  \*****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "form",
    {
      on: {
        submit: function($event) {
          $event.preventDefault()
          return _vm.proceed($event)
        },
        keydown: function($event) {
          return _vm.batchForm.errors.clear($event.target.name)
        }
      }
    },
    [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-12 col-sm-4" }, [
          _c(
            "div",
            { staticClass: "form-group" },
            [
              _c("label", { attrs: { for: "" } }, [
                _vm._v(_vm._s(_vm.trans("academic.batch_name")))
              ]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.batchForm.name,
                    expression: "batchForm.name"
                  }
                ],
                staticClass: "form-control",
                attrs: {
                  type: "text",
                  name: "name",
                  placeholder: _vm.trans("academic.batch_name")
                },
                domProps: { value: _vm.batchForm.name },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.batchForm, "name", $event.target.value)
                  }
                }
              }),
              _vm._v(" "),
              _c("show-error", {
                attrs: { "form-name": _vm.batchForm, "prop-name": "name" }
              })
            ],
            1
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-12 col-sm-4" }, [
          _c(
            "div",
            { staticClass: "form-group" },
            [
              _c("label", { attrs: { for: "" } }, [
                _vm._v(_vm._s(_vm.trans("academic.course")))
              ]),
              _vm._v(" "),
              _c(
                "v-select",
                {
                  attrs: {
                    label: "name",
                    "group-values": "courses",
                    "group-label": "course_group",
                    "group-select": false,
                    name: "course_id",
                    id: "course_id",
                    options: _vm.courses,
                    placeholder: _vm.trans("academic.select_course")
                  },
                  on: {
                    select: _vm.onCourseSelect,
                    close: function($event) {
                      return _vm.batchForm.errors.clear("course_id")
                    },
                    remove: function($event) {
                      _vm.batchForm.course_id = ""
                    }
                  },
                  model: {
                    value: _vm.selected_course,
                    callback: function($$v) {
                      _vm.selected_course = $$v
                    },
                    expression: "selected_course"
                  }
                },
                [
                  !_vm.courses.length
                    ? _c(
                        "div",
                        {
                          staticClass: "multiselect__option",
                          attrs: { slot: "afterList" },
                          slot: "afterList"
                        },
                        [
                          _vm._v(
                            "\n                        " +
                              _vm._s(_vm.trans("general.no_option_found")) +
                              "\n                    "
                          )
                        ]
                      )
                    : _vm._e()
                ]
              ),
              _vm._v(" "),
              _c("show-error", {
                attrs: { "form-name": _vm.batchForm, "prop-name": "course_id" }
              })
            ],
            1
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-12 col-sm-4" }, [
          _c(
            "div",
            { staticClass: "form-group" },
            [
              _c("label", { attrs: { for: "" } }, [
                _vm._v(_vm._s(_vm.trans("academic.max_strength")))
              ]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.batchForm.max_strength,
                    expression: "batchForm.max_strength"
                  }
                ],
                staticClass: "form-control",
                attrs: {
                  type: "text",
                  name: "max_strength",
                  placeholder: _vm.trans("academic.max_strength")
                },
                domProps: { value: _vm.batchForm.max_strength },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.batchForm, "max_strength", $event.target.value)
                  }
                }
              }),
              _vm._v(" "),
              _c("show-error", {
                attrs: {
                  "form-name": _vm.batchForm,
                  "prop-name": "max_strength"
                }
              })
            ],
            1
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-12 col-sm-4" }, [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-12 col-sm-6" }, [
              _c(
                "div",
                { staticClass: "form-group" },
                [
                  _c("label", { attrs: { for: "" } }, [
                    _vm._v(_vm._s(_vm.trans("academic.roll_number_prefix")))
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.batchForm.roll_number_prefix,
                        expression: "batchForm.roll_number_prefix"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      type: "text",
                      name: "roll_number_prefix",
                      placeholder: _vm.trans("academic.roll_number_prefix")
                    },
                    domProps: { value: _vm.batchForm.roll_number_prefix },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.batchForm,
                          "roll_number_prefix",
                          $event.target.value
                        )
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("show-error", {
                    attrs: {
                      "form-name": _vm.batchForm,
                      "prop-name": "roll_number_prefix"
                    }
                  })
                ],
                1
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-12 col-sm-6" }, [
              _c(
                "div",
                { staticClass: "form-group" },
                [
                  _c("label", { attrs: { for: "" } }, [
                    _vm._v(_vm._s(_vm.trans("academic.roll_number_digit")))
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.batchForm.roll_number_digit,
                        expression: "batchForm.roll_number_digit"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      type: "text",
                      name: "roll_number_digit",
                      placeholder: _vm.trans("academic.roll_number_digit")
                    },
                    domProps: { value: _vm.batchForm.roll_number_digit },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.batchForm,
                          "roll_number_digit",
                          $event.target.value
                        )
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("show-error", {
                    attrs: {
                      "form-name": _vm.batchForm,
                      "prop-name": "roll_number_digit"
                    }
                  })
                ],
                1
              )
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-12 col-sm-4" }, [
          _c(
            "div",
            { staticClass: "form-group" },
            [
              _c("label", { attrs: { for: "" } }, [
                _vm._v(_vm._s(_vm.trans("academic.batch_description")))
              ]),
              _vm._v(" "),
              _c("autosize-textarea", {
                attrs: {
                  rows: "1",
                  name: "description",
                  placeholder: _vm.trans("academic.batch_description")
                },
                model: {
                  value: _vm.batchForm.description,
                  callback: function($$v) {
                    _vm.$set(_vm.batchForm, "description", $$v)
                  },
                  expression: "batchForm.description"
                }
              }),
              _vm._v(" "),
              _c("show-error", {
                attrs: {
                  "form-name": _vm.batchForm,
                  "prop-name": "description"
                }
              })
            ],
            1
          )
        ])
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "card-footer text-right" },
        [
          _c(
            "router-link",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.id,
                  expression: "id"
                }
              ],
              staticClass: "btn btn-danger waves-effect waves-light ",
              attrs: { to: "/academic/batch" }
            },
            [_vm._v(_vm._s(_vm.trans("general.cancel")))]
          ),
          _vm._v(" "),
          !_vm.id
            ? _c(
                "button",
                {
                  staticClass: "btn btn-danger waves-effect waves-light ",
                  attrs: { type: "button" },
                  on: {
                    click: function($event) {
                      return _vm.$emit("cancel")
                    }
                  }
                },
                [_vm._v(_vm._s(_vm.trans("general.cancel")))]
              )
            : _vm._e(),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "btn btn-info waves-effect waves-light",
              attrs: { type: "submit" }
            },
            [
              _vm.id
                ? _c("span", [_vm._v(_vm._s(_vm.trans("general.update")))])
                : _c("span", [_vm._v(_vm._s(_vm.trans("general.save")))])
            ]
          )
        ],
        1
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/academic/batch/form.vue":
/*!****************************************************!*\
  !*** ./resources/js/views/academic/batch/form.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _form_vue_vue_type_template_id_5fdb6ad2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form.vue?vue&type=template&id=5fdb6ad2& */ "./resources/js/views/academic/batch/form.vue?vue&type=template&id=5fdb6ad2&");
/* harmony import */ var _form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form.vue?vue&type=script&lang=js& */ "./resources/js/views/academic/batch/form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _form_vue_vue_type_template_id_5fdb6ad2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _form_vue_vue_type_template_id_5fdb6ad2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/academic/batch/form.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/academic/batch/form.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/academic/batch/form.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./form.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/academic/batch/form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/academic/batch/form.vue?vue&type=template&id=5fdb6ad2&":
/*!***********************************************************************************!*\
  !*** ./resources/js/views/academic/batch/form.vue?vue&type=template&id=5fdb6ad2& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_5fdb6ad2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./form.vue?vue&type=template&id=5fdb6ad2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/academic/batch/form.vue?vue&type=template&id=5fdb6ad2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_5fdb6ad2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_5fdb6ad2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=index.js.map?id=d5a5527f2e2e958ee2d1