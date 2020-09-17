(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/configuration/system/index~js/setup"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/configuration/system/form.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/configuration/system/form.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
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
  props: {
    setupWizard: {
      "default": false
    },
    configurations: {
      required: false
    }
  },
  components: {},
  data: function data() {
    return {
      configForm: new Form({
        color_theme: '',
        direction: '',
        sidebar: '',
        date_format: '',
        time_format: '',
        notification_position: '',
        timezone: '',
        first_day_of_week: '',
        page_length: 10,
        currency: '',
        https: 0,
        todo: 0,
        config_type: ''
      }, false),
      systemConfigVariables: {
        color_themes: [],
        directions: [],
        sidebar: [],
        date_formats: [],
        time_formats: [],
        notification_positions: [],
        timezones: [],
        currencies: [],
        days: []
      },
      direction: '',
      sidebar: ''
    };
  },
  mounted: function mounted() {
    if (!helper.hasPermission('access-configuration')) {
      helper.notAccessibleMsg();
      this.$router.push('/dashboard');
    }

    this.getPreRequisite();
    if (!this.setupWizard) this.getConfiguration();
  },
  methods: {
    getPreRequisite: function getPreRequisite() {
      var _this = this;

      var loader = this.$loading.show();
      axios.get('/api/configuration/variable?type=system').then(function (response) {
        _this.systemConfigVariables.color_themes = response.color_themes;
        _this.systemConfigVariables.directions = response.directions;
        _this.systemConfigVariables.currencies = response.currencies;
        _this.systemConfigVariables.sidebar = response.sidebar;
        _this.systemConfigVariables.date_formats = response.date_formats;
        _this.systemConfigVariables.time_formats = response.time_formats;
        _this.systemConfigVariables.days = response.days;
        _this.systemConfigVariables.notification_positions = response.notification_positions;
        _this.systemConfigVariables.timezones = response.timezones;
        loader.hide();
      })["catch"](function (error) {
        loader.hide();
        helper.showErrorMsg(error);
      });
    },
    getConfiguration: function getConfiguration() {
      var _this2 = this;

      var loader = this.$loading.show();
      axios.get('/api/configuration').then(function (response) {
        _this2.configForm = helper.formAssign(_this2.configForm, response);
        _this2.direction = response.direction;
        _this2.sidebar = response.sidebar;
        loader.hide();
      })["catch"](function (error) {
        loader.hide();
        helper.showErrorMsg(error);
      });
    },
    submit: function submit() {
      var _this3 = this;

      var loader = this.$loading.show();
      this.configForm.config_type = 'system';
      this.configForm.https = this.configForm.https ? 1 : 0;
      this.configForm.todo = this.configForm.todo ? 1 : 0;
      return this.configForm.post('/api/configuration').then(function (response) {
        _this3.$store.dispatch('setConfig', {
          loaded: false
        });

        toastr.success(response.message);
        loader.hide();
        return true;
      })["catch"](function (error) {
        loader.hide();
        helper.showErrorMsg(error);
        return false;
      });
    },
    getConfig: function getConfig(config) {
      return helper.getConfig(config);
    }
  },
  watch: {
    configurations: function configurations(val) {
      if (val) helper.formAssign(this.configForm, val);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/configuration/system/form.vue?vue&type=template&id=9d9258c8&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/configuration/system/form.vue?vue&type=template&id=9d9258c8& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "card" }, [
    _c("div", { staticClass: "card-body p-4" }, [
      _c(
        "form",
        {
          on: {
            submit: function($event) {
              $event.preventDefault()
              return _vm.submit($event)
            },
            keydown: function($event) {
              return _vm.configForm.errors.clear($event.target.name)
            }
          }
        },
        [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-12 col-sm-6" }, [
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-12 col-sm-4" }, [
                  _c(
                    "div",
                    { staticClass: "form-group" },
                    [
                      _c("label", { attrs: { for: "" } }, [
                        _vm._v(
                          _vm._s(_vm.trans("configuration.default_color_theme"))
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.configForm.color_theme,
                              expression: "configForm.color_theme"
                            }
                          ],
                          staticClass: "custom-select col-12",
                          attrs: { name: "color_theme" },
                          on: {
                            change: [
                              function($event) {
                                var $$selectedVal = Array.prototype.filter
                                  .call($event.target.options, function(o) {
                                    return o.selected
                                  })
                                  .map(function(o) {
                                    var val = "_value" in o ? o._value : o.value
                                    return val
                                  })
                                _vm.$set(
                                  _vm.configForm,
                                  "color_theme",
                                  $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                )
                              },
                              function($event) {
                                return _vm.configForm.errors.clear(
                                  "color_theme"
                                )
                              }
                            ]
                          }
                        },
                        _vm._l(_vm.systemConfigVariables.color_themes, function(
                          option
                        ) {
                          return _c(
                            "option",
                            { domProps: { value: option.value } },
                            [
                              _vm._v(
                                "\n                                    " +
                                  _vm._s(option.text) +
                                  "\n                                  "
                              )
                            ]
                          )
                        }),
                        0
                      ),
                      _vm._v(" "),
                      _c("show-error", {
                        attrs: {
                          "form-name": _vm.configForm,
                          "prop-name": "color_theme"
                        }
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
                        _vm._v(
                          _vm._s(_vm.trans("configuration.default_direction"))
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.configForm.direction,
                              expression: "configForm.direction"
                            }
                          ],
                          staticClass: "custom-select col-12",
                          attrs: { name: "direction" },
                          on: {
                            change: [
                              function($event) {
                                var $$selectedVal = Array.prototype.filter
                                  .call($event.target.options, function(o) {
                                    return o.selected
                                  })
                                  .map(function(o) {
                                    var val = "_value" in o ? o._value : o.value
                                    return val
                                  })
                                _vm.$set(
                                  _vm.configForm,
                                  "direction",
                                  $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                )
                              },
                              function($event) {
                                return _vm.configForm.errors.clear("direction")
                              }
                            ]
                          }
                        },
                        _vm._l(_vm.systemConfigVariables.directions, function(
                          option
                        ) {
                          return _c(
                            "option",
                            { domProps: { value: option.value } },
                            [
                              _vm._v(
                                "\n                                    " +
                                  _vm._s(option.text) +
                                  "\n                                  "
                              )
                            ]
                          )
                        }),
                        0
                      ),
                      _vm._v(" "),
                      _c("show-error", {
                        attrs: {
                          "form-name": _vm.configForm,
                          "prop-name": "direction"
                        }
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
                        _vm._v(
                          _vm._s(_vm.trans("configuration.default_sidebar"))
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.configForm.sidebar,
                              expression: "configForm.sidebar"
                            }
                          ],
                          staticClass: "custom-select col-12",
                          attrs: { name: "sidebar" },
                          on: {
                            change: [
                              function($event) {
                                var $$selectedVal = Array.prototype.filter
                                  .call($event.target.options, function(o) {
                                    return o.selected
                                  })
                                  .map(function(o) {
                                    var val = "_value" in o ? o._value : o.value
                                    return val
                                  })
                                _vm.$set(
                                  _vm.configForm,
                                  "sidebar",
                                  $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                )
                              },
                              function($event) {
                                return _vm.configForm.errors.clear("sidebar")
                              }
                            ]
                          }
                        },
                        _vm._l(_vm.systemConfigVariables.sidebar, function(
                          option
                        ) {
                          return _c(
                            "option",
                            { domProps: { value: option.value } },
                            [
                              _vm._v(
                                "\n                                    " +
                                  _vm._s(option.text) +
                                  "\n                                  "
                              )
                            ]
                          )
                        }),
                        0
                      ),
                      _vm._v(" "),
                      _c("show-error", {
                        attrs: {
                          "form-name": _vm.configForm,
                          "prop-name": "sidebar"
                        }
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
                        _vm._v(_vm._s(_vm.trans("configuration.date_format")))
                      ]),
                      _vm._v(" "),
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.configForm.date_format,
                              expression: "configForm.date_format"
                            }
                          ],
                          staticClass: "custom-select col-12",
                          attrs: { name: "date_format" },
                          on: {
                            change: [
                              function($event) {
                                var $$selectedVal = Array.prototype.filter
                                  .call($event.target.options, function(o) {
                                    return o.selected
                                  })
                                  .map(function(o) {
                                    var val = "_value" in o ? o._value : o.value
                                    return val
                                  })
                                _vm.$set(
                                  _vm.configForm,
                                  "date_format",
                                  $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                )
                              },
                              function($event) {
                                return _vm.configForm.errors.clear(
                                  "date_format"
                                )
                              }
                            ]
                          }
                        },
                        _vm._l(_vm.systemConfigVariables.date_formats, function(
                          option
                        ) {
                          return _c(
                            "option",
                            { domProps: { value: option.value } },
                            [
                              _vm._v(
                                "\n                                    " +
                                  _vm._s(option.text) +
                                  "\n                                  "
                              )
                            ]
                          )
                        }),
                        0
                      ),
                      _vm._v(" "),
                      _c("show-error", {
                        attrs: {
                          "form-name": _vm.configForm,
                          "prop-name": "date_format"
                        }
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
                        _vm._v(_vm._s(_vm.trans("configuration.time_format")))
                      ]),
                      _vm._v(" "),
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.configForm.time_format,
                              expression: "configForm.time_format"
                            }
                          ],
                          staticClass: "custom-select col-12",
                          attrs: { name: "time_format" },
                          on: {
                            change: [
                              function($event) {
                                var $$selectedVal = Array.prototype.filter
                                  .call($event.target.options, function(o) {
                                    return o.selected
                                  })
                                  .map(function(o) {
                                    var val = "_value" in o ? o._value : o.value
                                    return val
                                  })
                                _vm.$set(
                                  _vm.configForm,
                                  "time_format",
                                  $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                )
                              },
                              function($event) {
                                return _vm.configForm.errors.clear(
                                  "time_format"
                                )
                              }
                            ]
                          }
                        },
                        _vm._l(_vm.systemConfigVariables.time_formats, function(
                          option
                        ) {
                          return _c(
                            "option",
                            { domProps: { value: option.value } },
                            [
                              _vm._v(
                                "\n                                    " +
                                  _vm._s(option.text) +
                                  "\n                                  "
                              )
                            ]
                          )
                        }),
                        0
                      ),
                      _vm._v(" "),
                      _c("show-error", {
                        attrs: {
                          "form-name": _vm.configForm,
                          "prop-name": "time_format"
                        }
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
                        _vm._v(
                          _vm._s(
                            _vm.trans("configuration.notification_position")
                          )
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.configForm.notification_position,
                              expression: "configForm.notification_position"
                            }
                          ],
                          staticClass: "custom-select col-12",
                          attrs: { name: "notification_position" },
                          on: {
                            change: [
                              function($event) {
                                var $$selectedVal = Array.prototype.filter
                                  .call($event.target.options, function(o) {
                                    return o.selected
                                  })
                                  .map(function(o) {
                                    var val = "_value" in o ? o._value : o.value
                                    return val
                                  })
                                _vm.$set(
                                  _vm.configForm,
                                  "notification_position",
                                  $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                )
                              },
                              function($event) {
                                return _vm.configForm.errors.clear(
                                  "notification_position"
                                )
                              }
                            ]
                          }
                        },
                        _vm._l(
                          _vm.systemConfigVariables.notification_positions,
                          function(option) {
                            return _c(
                              "option",
                              { domProps: { value: option.value } },
                              [
                                _vm._v(
                                  "\n                                    " +
                                    _vm._s(option.text) +
                                    "\n                                  "
                                )
                              ]
                            )
                          }
                        ),
                        0
                      ),
                      _vm._v(" "),
                      _c("show-error", {
                        attrs: {
                          "form-name": _vm.configForm,
                          "prop-name": "notification_position"
                        }
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
                        _vm._v(_vm._s(_vm.trans("configuration.timezone")))
                      ]),
                      _vm._v(" "),
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.configForm.timezone,
                              expression: "configForm.timezone"
                            }
                          ],
                          staticClass: "custom-select col-12",
                          attrs: { name: "timezone" },
                          on: {
                            change: [
                              function($event) {
                                var $$selectedVal = Array.prototype.filter
                                  .call($event.target.options, function(o) {
                                    return o.selected
                                  })
                                  .map(function(o) {
                                    var val = "_value" in o ? o._value : o.value
                                    return val
                                  })
                                _vm.$set(
                                  _vm.configForm,
                                  "timezone",
                                  $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                )
                              },
                              function($event) {
                                return _vm.configForm.errors.clear("timezone")
                              }
                            ]
                          }
                        },
                        _vm._l(_vm.systemConfigVariables.timezones, function(
                          option
                        ) {
                          return _c(
                            "option",
                            { domProps: { value: option.value } },
                            [
                              _vm._v(
                                "\n                                    " +
                                  _vm._s(option.text) +
                                  "\n                                  "
                              )
                            ]
                          )
                        }),
                        0
                      ),
                      _vm._v(" "),
                      _c("show-error", {
                        attrs: {
                          "form-name": _vm.configForm,
                          "prop-name": "timezone"
                        }
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
                        _vm._v(_vm._s(_vm.trans("calendar.first_day_of_week")))
                      ]),
                      _vm._v(" "),
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.configForm.first_day_of_week,
                              expression: "configForm.first_day_of_week"
                            }
                          ],
                          staticClass: "custom-select col-12",
                          attrs: { name: "first_day_of_week" },
                          on: {
                            change: [
                              function($event) {
                                var $$selectedVal = Array.prototype.filter
                                  .call($event.target.options, function(o) {
                                    return o.selected
                                  })
                                  .map(function(o) {
                                    var val = "_value" in o ? o._value : o.value
                                    return val
                                  })
                                _vm.$set(
                                  _vm.configForm,
                                  "first_day_of_week",
                                  $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                )
                              },
                              function($event) {
                                return _vm.configForm.errors.clear(
                                  "first_day_of_week"
                                )
                              }
                            ]
                          }
                        },
                        _vm._l(_vm.systemConfigVariables.days, function(
                          option
                        ) {
                          return _c(
                            "option",
                            { domProps: { value: option.value } },
                            [
                              _vm._v(
                                "\n                                    " +
                                  _vm._s(option.text) +
                                  "\n                                  "
                              )
                            ]
                          )
                        }),
                        0
                      ),
                      _vm._v(" "),
                      _c("show-error", {
                        attrs: {
                          "form-name": _vm.configForm,
                          "prop-name": "first_day_of_week"
                        }
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
                        _vm._v(_vm._s(_vm.trans("configuration.currency")))
                      ]),
                      _vm._v(" "),
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.configForm.currency,
                              expression: "configForm.currency"
                            }
                          ],
                          staticClass: "custom-select col-12",
                          attrs: { name: "currency" },
                          on: {
                            change: [
                              function($event) {
                                var $$selectedVal = Array.prototype.filter
                                  .call($event.target.options, function(o) {
                                    return o.selected
                                  })
                                  .map(function(o) {
                                    var val = "_value" in o ? o._value : o.value
                                    return val
                                  })
                                _vm.$set(
                                  _vm.configForm,
                                  "currency",
                                  $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                )
                              },
                              function($event) {
                                return _vm.configForm.errors.clear("currency")
                              }
                            ]
                          }
                        },
                        _vm._l(_vm.systemConfigVariables.currencies, function(
                          option
                        ) {
                          return _c(
                            "option",
                            { domProps: { value: option.value } },
                            [
                              _vm._v(
                                "\n                                    " +
                                  _vm._s(option.text) +
                                  "\n                                  "
                              )
                            ]
                          )
                        }),
                        0
                      ),
                      _vm._v(" "),
                      _c("show-error", {
                        attrs: {
                          "form-name": _vm.configForm,
                          "prop-name": "currency"
                        }
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
                        _vm._v(_vm._s(_vm.trans("configuration.page_length")))
                      ]),
                      _vm._v(" "),
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.configForm.page_length,
                              expression: "configForm.page_length"
                            }
                          ],
                          staticClass: "custom-select col-12",
                          attrs: { name: "page_length" },
                          on: {
                            change: [
                              function($event) {
                                var $$selectedVal = Array.prototype.filter
                                  .call($event.target.options, function(o) {
                                    return o.selected
                                  })
                                  .map(function(o) {
                                    var val = "_value" in o ? o._value : o.value
                                    return val
                                  })
                                _vm.$set(
                                  _vm.configForm,
                                  "page_length",
                                  $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                )
                              },
                              function($event) {
                                return _vm.configForm.errors.clear(
                                  "page_length"
                                )
                              }
                            ]
                          }
                        },
                        _vm._l(_vm.getConfig("pagination"), function(option) {
                          return _c("option", { domProps: { value: option } }, [
                            _vm._v(
                              "\n                                    " +
                                _vm._s(
                                  option + " " + _vm.trans("general.per_page")
                                ) +
                                "\n                                  "
                            )
                          ])
                        }),
                        0
                      ),
                      _vm._v(" "),
                      _c("show-error", {
                        attrs: {
                          "form-name": _vm.configForm,
                          "prop-name": "page_length"
                        }
                      })
                    ],
                    1
                  )
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-12 col-sm-6" }, [
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-12 col-sm-4" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { attrs: { for: "" } }, [
                      _vm._v(_vm._s(_vm.trans("configuration.https")))
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      [
                        _c("switches", {
                          attrs: { theme: "bootstrap", color: "success" },
                          model: {
                            value: _vm.configForm.https,
                            callback: function($$v) {
                              _vm.$set(_vm.configForm, "https", $$v)
                            },
                            expression: "configForm.https"
                          }
                        })
                      ],
                      1
                    )
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-12 col-sm-4" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { attrs: { for: "" } }, [
                      _vm._v(_vm._s(_vm.trans("utility.todo")))
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      [
                        _c("switches", {
                          attrs: { theme: "bootstrap", color: "success" },
                          model: {
                            value: _vm.configForm.todo,
                            callback: function($$v) {
                              _vm.$set(_vm.configForm, "todo", $$v)
                            },
                            expression: "configForm.todo"
                          }
                        })
                      ],
                      1
                    )
                  ])
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          !_vm.setupWizard
            ? _c(
                "button",
                {
                  staticClass:
                    "btn btn-info waves-effect waves-light pull-right m-t-10",
                  attrs: { type: "submit" }
                },
                [_vm._v(_vm._s(_vm.trans("general.save")))]
              )
            : _vm._e()
        ]
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/configuration/system/form.vue":
/*!**********************************************************!*\
  !*** ./resources/js/views/configuration/system/form.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _form_vue_vue_type_template_id_9d9258c8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form.vue?vue&type=template&id=9d9258c8& */ "./resources/js/views/configuration/system/form.vue?vue&type=template&id=9d9258c8&");
/* harmony import */ var _form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form.vue?vue&type=script&lang=js& */ "./resources/js/views/configuration/system/form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _form_vue_vue_type_template_id_9d9258c8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _form_vue_vue_type_template_id_9d9258c8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/configuration/system/form.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/configuration/system/form.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/views/configuration/system/form.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./form.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/configuration/system/form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/configuration/system/form.vue?vue&type=template&id=9d9258c8&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/views/configuration/system/form.vue?vue&type=template&id=9d9258c8& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_9d9258c8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./form.vue?vue&type=template&id=9d9258c8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/configuration/system/form.vue?vue&type=template&id=9d9258c8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_9d9258c8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_9d9258c8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=setup.js.map?id=5f8f4f71ca80720a7fe9