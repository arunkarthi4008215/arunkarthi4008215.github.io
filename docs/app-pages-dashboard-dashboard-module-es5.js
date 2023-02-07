(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-pages-dashboard-dashboard-module"], {
    /***/
    "/2RN":
    /*!*****************************************************!*\
      !*** ./src/app/pages/dashboard/dashboard.module.ts ***!
      \*****************************************************/

    /*! exports provided: DashboardModule */

    /***/
    function RN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DashboardModule", function () {
        return DashboardModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../pages/dashboard/dashboard.component */
      "U5Cf");
      /* harmony import */


      var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./dashboard-routing.module */
      "ea/W");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");

      var DashboardModule = /*#__PURE__*/_createClass(function DashboardModule() {
        _classCallCheck(this, DashboardModule);
      });

      DashboardModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"]],
        imports: [_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_4__["DashboardRoutingModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]]
      })], DashboardModule);
      /***/
    },

    /***/
    "Ixm7":
    /*!************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/dashboard.component.html ***!
      \************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Ixm7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"row\">\r\n  <div class=\"col-lg-3 col-md-6 col-sm-6\">\r\n    <div class=\"card card-stats\">\r\n      <div class=\"card-body\">\r\n        <div class=\"row\">\r\n          <div class=\"col-5 col-md-4\">\r\n            <div class=\"icon-big text-center icon-warning\">\r\n              <i class=\"nc-icon nc-globe text-warning\"></i>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-7 col-md-8\">\r\n            <div class=\"numbers\">\r\n              <p class=\"card-category\">Total Study Materials</p>\r\n              <p class=\"card-title\">150\r\n                <p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"card-footer \">\r\n        <hr>\r\n        <div class=\"stats\">\r\n          <i class=\"fa fa-refresh\"></i> Update Now\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-lg-3 col-md-6 col-sm-6\">\r\n    <div class=\"card card-stats\">\r\n      <div class=\"card-body \">\r\n        <div class=\"row\">\r\n          <div class=\"col-5 col-md-4\">\r\n            <div class=\"icon-big text-center icon-warning\">\r\n              <i class=\"nc-icon nc-money-coins text-success\"></i>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-7 col-md-8\">\r\n            <div class=\"numbers\">\r\n              <p class=\"card-category\">Revenue</p>\r\n              <p class=\"card-title\">$ 1,345\r\n                <p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"card-footer \">\r\n        <hr>\r\n        <div class=\"stats\">\r\n          <i class=\"fa fa-calendar-o\"></i> Last day\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-lg-3 col-md-6 col-sm-6\">\r\n    <div class=\"card card-stats\">\r\n      <div class=\"card-body \">\r\n        <div class=\"row\">\r\n          <div class=\"col-5 col-md-4\">\r\n            <div class=\"icon-big text-center icon-warning\">\r\n              <i class=\"nc-icon nc-vector text-danger\"></i>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-7 col-md-8\">\r\n            <div class=\"numbers\">\r\n              <p class=\"card-category\">Errors</p>\r\n              <p class=\"card-title\">23\r\n                <p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"card-footer \">\r\n        <hr>\r\n        <div class=\"stats\">\r\n          <i class=\"fa fa-clock-o\"></i> In the last hour\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-lg-3 col-md-6 col-sm-6\">\r\n    <div class=\"card card-stats\">\r\n      <div class=\"card-body \">\r\n        <div class=\"row\">\r\n          <div class=\"col-5 col-md-4\">\r\n            <div class=\"icon-big text-center icon-warning\">\r\n              <i class=\"nc-icon nc-favourite-28 text-primary\"></i>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-7 col-md-8\">\r\n            <div class=\"numbers\">\r\n              <p class=\"card-category\">Followers</p>\r\n              <p class=\"card-title\">+45K\r\n                <p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"card-footer \">\r\n        <hr>\r\n        <div class=\"stats\">\r\n          <i class=\"fa fa-refresh\"></i> Update now\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col-md-12\">\r\n    <div class=\"card \">\r\n      <div class=\"card-header \">\r\n        <h5 class=\"card-title\">\r\n          <i class=\"fas fa-search\"></i> Users Behavior</h5>\r\n        <p class=\"card-category\">24 Hours performance</p>\r\n      </div>\r\n      <div class=\"card-body \">\r\n        <canvas id=chartHours width=\"400\" height=\"100\"></canvas>\r\n      </div>\r\n      <div class=\"card-footer \">\r\n        <hr>\r\n        <div class=\"stats\">\r\n          <i class=\"fa fa-history\"></i> Updated 3 minutes ago\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col-md-4\">\r\n    <div class=\"card \">\r\n      <div class=\"card-header \">\r\n        <h5 class=\"card-title\">Email Statistics</h5>\r\n        <p class=\"card-category\">Last Campaign Performance</p>\r\n      </div>\r\n      <div class=\"card-body \">\r\n        <canvas id=\"chartEmail\"></canvas>\r\n      </div>\r\n      <div class=\"card-footer \">\r\n        <div class=\"legend\">\r\n          <i class=\"fa fa-circle text-primary\"></i> Opened\r\n          <i class=\"fa fa-circle text-warning\"></i> Read\r\n          <i class=\"fa fa-circle text-danger\"></i> Deleted\r\n          <i class=\"fa fa-circle text-gray\"></i> Unopened\r\n        </div>\r\n        <hr>\r\n        <div class=\"stats\">\r\n          <i class=\"fa fa-calendar\"></i> Number of emails sent\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-8\">\r\n    <div class=\"card card-chart\">\r\n      <div class=\"card-header\">\r\n        <h5 class=\"card-title\">NASDAQ: AAPL</h5>\r\n        <p class=\"card-category\">Line Chart with Points</p>\r\n      </div>\r\n      <div class=\"card-body\">\r\n        <canvas id=\"speedChart\" width=\"400\" height=\"100\"></canvas>\r\n      </div>\r\n      <div class=\"card-footer\">\r\n        <div class=\"chart-legend\">\r\n          <i class=\"fa fa-circle text-info\"></i> Tesla Model S\r\n          <i class=\"fa fa-circle text-warning\"></i> BMW 5 Series\r\n        </div>\r\n        <hr/>\r\n        <div class=\"card-stats\">\r\n          <i class=\"fa fa-check\"></i> Data information certified\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
      /***/
    },

    /***/
    "U5Cf":
    /*!********************************************************!*\
      !*** ./src/app/pages/dashboard/dashboard.component.ts ***!
      \********************************************************/

    /*! exports provided: DashboardComponent */

    /***/
    function U5Cf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
        return DashboardComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_dashboard_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./dashboard.component.html */
      "Ixm7");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var chart_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! chart.js */
      "MO+k");
      /* harmony import */


      var chart_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_3__);

      var DashboardComponent = /*#__PURE__*/function () {
        function DashboardComponent() {
          _classCallCheck(this, DashboardComponent);
        }

        _createClass(DashboardComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.chartColor = "#FFFFFF";
            this.canvas = document.getElementById("chartHours");
            this.ctx = this.canvas.getContext("2d");
            this.chartHours = new chart_js__WEBPACK_IMPORTED_MODULE_3___default.a(this.ctx, {
              type: 'line',
              data: {
                labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
                datasets: [{
                  borderColor: "#6bd098",
                  backgroundColor: "#6bd098",
                  pointRadius: 0,
                  pointHoverRadius: 0,
                  borderWidth: 3,
                  data: [300, 310, 316, 322, 330, 326, 333, 345, 338, 354]
                }, {
                  borderColor: "#f17e5d",
                  backgroundColor: "#f17e5d",
                  pointRadius: 0,
                  pointHoverRadius: 0,
                  borderWidth: 3,
                  data: [320, 340, 365, 360, 370, 385, 390, 384, 408, 420]
                }, {
                  borderColor: "#fcc468",
                  backgroundColor: "#fcc468",
                  pointRadius: 0,
                  pointHoverRadius: 0,
                  borderWidth: 3,
                  data: [370, 394, 415, 409, 425, 445, 460, 450, 478, 484]
                }]
              },
              options: {
                legend: {
                  display: false
                },
                tooltips: {
                  enabled: false
                },
                scales: {
                  yAxes: [{
                    ticks: {
                      fontColor: "#9f9f9f",
                      beginAtZero: false,
                      maxTicksLimit: 5
                    },
                    gridLines: {
                      drawBorder: false,
                      zeroLineColor: "#ccc",
                      color: 'rgba(255,255,255,0.05)'
                    }
                  }],
                  xAxes: [{
                    barPercentage: 1.6,
                    gridLines: {
                      drawBorder: false,
                      color: 'rgba(255,255,255,0.1)',
                      zeroLineColor: "transparent",
                      display: false
                    },
                    ticks: {
                      padding: 20,
                      fontColor: "#9f9f9f"
                    }
                  }]
                }
              }
            });
            this.canvas = document.getElementById("chartEmail");
            this.ctx = this.canvas.getContext("2d");
            this.chartEmail = new chart_js__WEBPACK_IMPORTED_MODULE_3___default.a(this.ctx, {
              type: 'pie',
              data: {
                labels: [1, 2, 3],
                datasets: [{
                  label: "Emails",
                  pointRadius: 0,
                  pointHoverRadius: 0,
                  backgroundColor: ['#e3e3e3', '#4acccd', '#fcc468', '#ef8157'],
                  borderWidth: 0,
                  data: [342, 480, 530, 120]
                }]
              },
              options: {
                legend: {
                  display: false
                },
                pieceLabel: {
                  render: 'percentage',
                  fontColor: ['white'],
                  precision: 2
                },
                tooltips: {
                  enabled: false
                },
                scales: {
                  yAxes: [{
                    ticks: {
                      display: false
                    },
                    gridLines: {
                      drawBorder: false,
                      zeroLineColor: "transparent",
                      color: 'rgba(255,255,255,0.05)'
                    }
                  }],
                  xAxes: [{
                    barPercentage: 1.6,
                    gridLines: {
                      drawBorder: false,
                      color: 'rgba(255,255,255,0.1)',
                      zeroLineColor: "transparent"
                    },
                    ticks: {
                      display: false
                    }
                  }]
                }
              }
            });
            var speedCanvas = document.getElementById("speedChart");
            var dataFirst = {
              data: [0, 19, 15, 20, 30, 40, 40, 50, 25, 30, 50, 70],
              fill: false,
              borderColor: '#fbc658',
              backgroundColor: 'transparent',
              pointBorderColor: '#fbc658',
              pointRadius: 4,
              pointHoverRadius: 4,
              pointBorderWidth: 8
            };
            var dataSecond = {
              data: [0, 5, 10, 12, 20, 27, 30, 34, 42, 45, 55, 63],
              fill: false,
              borderColor: '#51CACF',
              backgroundColor: 'transparent',
              pointBorderColor: '#51CACF',
              pointRadius: 4,
              pointHoverRadius: 4,
              pointBorderWidth: 8
            };
            var speedData = {
              labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
              datasets: [dataFirst, dataSecond]
            };
            var chartOptions = {
              legend: {
                display: false,
                position: 'top'
              }
            };
            var lineChart = new chart_js__WEBPACK_IMPORTED_MODULE_3___default.a(speedCanvas, {
              type: 'line',
              hover: false,
              data: speedData,
              options: chartOptions
            });
          }
        }]);

        return DashboardComponent;
      }();

      DashboardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'dashboard-cmp',
        template: _raw_loader_dashboard_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], DashboardComponent);
      /***/
    },

    /***/
    "ea/W":
    /*!*************************************************************!*\
      !*** ./src/app/pages/dashboard/dashboard-routing.module.ts ***!
      \*************************************************************/

    /*! exports provided: routes, DashboardRoutingModule */

    /***/
    function eaW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "routes", function () {
        return routes;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function () {
        return DashboardRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./dashboard.component */
      "U5Cf");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var routes = [{
        path: '',
        component: _dashboard_component__WEBPACK_IMPORTED_MODULE_1__["DashboardComponent"]
      }];

      var DashboardRoutingModule = /*#__PURE__*/_createClass(function DashboardRoutingModule() {
        _classCallCheck(this, DashboardRoutingModule);
      });

      DashboardRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
      })], DashboardRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=app-pages-dashboard-dashboard-module-es5.js.map