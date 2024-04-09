(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-pages-masters-industry-master-industry-master-module"],{

/***/ "GA+l":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/masters/industry-master/industry-master-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: IndustryMasterRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndustryMasterRoutingModule", function() { return IndustryMasterRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _industry_master_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./industry-master.component */ "yxUL");




const routes = [
    { path: '', component: _industry_master_component__WEBPACK_IMPORTED_MODULE_3__["IndustryMasterComponent"] }
];
let IndustryMasterRoutingModule = class IndustryMasterRoutingModule {
};
IndustryMasterRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], IndustryMasterRoutingModule);



/***/ }),

/***/ "IIq7":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/masters/industry-master/industry-master.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>industry-master works!</p>\r\n");

/***/ }),

/***/ "MUeD":
/*!*************************************************************************!*\
  !*** ./src/app/pages/masters/industry-master/industry-master.module.ts ***!
  \*************************************************************************/
/*! exports provided: IndustryMasterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndustryMasterModule", function() { return IndustryMasterModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _industry_master_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./industry-master-routing.module */ "GA+l");
/* harmony import */ var _industry_master_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./industry-master.component */ "yxUL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");








let IndustryMasterModule = class IndustryMasterModule {
};
IndustryMasterModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_industry_master_component__WEBPACK_IMPORTED_MODULE_4__["IndustryMasterComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _industry_master_routing_module__WEBPACK_IMPORTED_MODULE_3__["IndustryMasterRoutingModule"]
        ]
    })
], IndustryMasterModule);



/***/ }),

/***/ "olxO":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/masters/industry-master/industry-master.component.css ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbmR1c3RyeS1tYXN0ZXIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "yxUL":
/*!****************************************************************************!*\
  !*** ./src/app/pages/masters/industry-master/industry-master.component.ts ***!
  \****************************************************************************/
/*! exports provided: IndustryMasterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndustryMasterComponent", function() { return IndustryMasterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_industry_master_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./industry-master.component.html */ "IIq7");
/* harmony import */ var _industry_master_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./industry-master.component.css */ "olxO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let IndustryMasterComponent = class IndustryMasterComponent {
    constructor() { }
    ngOnInit() {
    }
};
IndustryMasterComponent.ctorParameters = () => [];
IndustryMasterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-industry-master',
        template: _raw_loader_industry_master_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_industry_master_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], IndustryMasterComponent);



/***/ })

}]);
//# sourceMappingURL=app-pages-masters-industry-master-industry-master-module-es2015.js.map