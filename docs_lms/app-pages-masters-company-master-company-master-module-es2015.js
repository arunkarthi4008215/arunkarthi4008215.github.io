(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-pages-masters-company-master-company-master-module"],{

/***/ "9nEn":
/*!***************************************************************************!*\
  !*** ./src/app/pages/masters/company-master/company-master.component.css ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb21wYW55LW1hc3Rlci5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "VFkB":
/*!**************************************************************************!*\
  !*** ./src/app/pages/masters/company-master/company-master.component.ts ***!
  \**************************************************************************/
/*! exports provided: CompanyMasterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyMasterComponent", function() { return CompanyMasterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_company_master_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./company-master.component.html */ "sNeu");
/* harmony import */ var _company_master_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./company-master.component.css */ "9nEn");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let CompanyMasterComponent = class CompanyMasterComponent {
    constructor() { }
    ngOnInit() {
    }
};
CompanyMasterComponent.ctorParameters = () => [];
CompanyMasterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-company-master',
        template: _raw_loader_company_master_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_company_master_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], CompanyMasterComponent);



/***/ }),

/***/ "X3rt":
/*!***********************************************************************!*\
  !*** ./src/app/pages/masters/company-master/company-master.module.ts ***!
  \***********************************************************************/
/*! exports provided: CompanyMasterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyMasterModule", function() { return CompanyMasterModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _company_master_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./company-master-routing.module */ "hpWC");
/* harmony import */ var _company_master_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./company-master.component */ "VFkB");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");








let CompanyMasterModule = class CompanyMasterModule {
};
CompanyMasterModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_company_master_component__WEBPACK_IMPORTED_MODULE_4__["CompanyMasterComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _company_master_routing_module__WEBPACK_IMPORTED_MODULE_3__["CompanyMasterRoutingModule"]
        ]
    })
], CompanyMasterModule);



/***/ }),

/***/ "hpWC":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/masters/company-master/company-master-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: CompanyMasterRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyMasterRoutingModule", function() { return CompanyMasterRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _company_master_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./company-master.component */ "VFkB");




const routes = [
    { path: '', component: _company_master_component__WEBPACK_IMPORTED_MODULE_3__["CompanyMasterComponent"] }
];
let CompanyMasterRoutingModule = class CompanyMasterRoutingModule {
};
CompanyMasterRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], CompanyMasterRoutingModule);



/***/ }),

/***/ "sNeu":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/masters/company-master/company-master.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>company-master works!</p>\r\n");

/***/ })

}]);
//# sourceMappingURL=app-pages-masters-company-master-company-master-module-es2015.js.map