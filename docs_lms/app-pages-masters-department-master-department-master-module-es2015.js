(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-pages-masters-department-master-department-master-module"],{

/***/ "AKiD":
/*!********************************************************************************!*\
  !*** ./src/app/pages/masters/department-master/department-master.component.ts ***!
  \********************************************************************************/
/*! exports provided: DepartmentMasterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepartmentMasterComponent", function() { return DepartmentMasterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_department_master_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./department-master.component.html */ "g6jM");
/* harmony import */ var _department_master_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./department-master.component.css */ "GuoR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let DepartmentMasterComponent = class DepartmentMasterComponent {
    constructor() { }
    ngOnInit() {
    }
};
DepartmentMasterComponent.ctorParameters = () => [];
DepartmentMasterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-department-master',
        template: _raw_loader_department_master_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_department_master_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], DepartmentMasterComponent);



/***/ }),

/***/ "GuoR":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/masters/department-master/department-master.component.css ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZXBhcnRtZW50LW1hc3Rlci5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "U1b8":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/masters/department-master/department-master-routing.module.ts ***!
  \*************************************************************************************/
/*! exports provided: DepartmentMasterRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepartmentMasterRoutingModule", function() { return DepartmentMasterRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _department_master_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./department-master.component */ "AKiD");




const routes = [
    { path: '', component: _department_master_component__WEBPACK_IMPORTED_MODULE_3__["DepartmentMasterComponent"] }
];
let DepartmentMasterRoutingModule = class DepartmentMasterRoutingModule {
};
DepartmentMasterRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], DepartmentMasterRoutingModule);



/***/ }),

/***/ "g6jM":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/masters/department-master/department-master.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>department-master works!</p>\r\n");

/***/ }),

/***/ "mDNk":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/masters/department-master/department-master.module.ts ***!
  \*****************************************************************************/
/*! exports provided: DepartmentMasterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepartmentMasterModule", function() { return DepartmentMasterModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _department_master_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./department-master-routing.module */ "U1b8");
/* harmony import */ var _department_master_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./department-master.component */ "AKiD");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");








let DepartmentMasterModule = class DepartmentMasterModule {
};
DepartmentMasterModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_department_master_component__WEBPACK_IMPORTED_MODULE_4__["DepartmentMasterComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _department_master_routing_module__WEBPACK_IMPORTED_MODULE_3__["DepartmentMasterRoutingModule"]
        ]
    })
], DepartmentMasterModule);



/***/ })

}]);
//# sourceMappingURL=app-pages-masters-department-master-department-master-module-es2015.js.map