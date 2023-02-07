(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-pages-masters-role-master-role-master-module"],{

/***/ "H4RX":
/*!*********************************************************************!*\
  !*** ./src/app/pages/masters/role-master/role-master.component.css ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyb2xlLW1hc3Rlci5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "QYOZ":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/masters/role-master/role-master.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "rxYD":
/*!********************************************************************!*\
  !*** ./src/app/pages/masters/role-master/role-master.component.ts ***!
  \********************************************************************/
/*! exports provided: RoleMasterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleMasterComponent", function() { return RoleMasterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_role_master_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./role-master.component.html */ "QYOZ");
/* harmony import */ var _role_master_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./role-master.component.css */ "H4RX");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let RoleMasterComponent = class RoleMasterComponent {
    constructor() { }
    ngOnInit() {
    }
};
RoleMasterComponent.ctorParameters = () => [];
RoleMasterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-role-master',
        template: _raw_loader_role_master_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_role_master_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], RoleMasterComponent);



/***/ }),

/***/ "tRmm":
/*!*****************************************************************!*\
  !*** ./src/app/pages/masters/role-master/role-master.module.ts ***!
  \*****************************************************************/
/*! exports provided: RoleMasterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleMasterModule", function() { return RoleMasterModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _role_master_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./role-master-routing.module */ "zKcJ");
/* harmony import */ var _role_master_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./role-master.component */ "rxYD");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "tk/3");








let RoleMasterModule = class RoleMasterModule {
};
RoleMasterModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_role_master_component__WEBPACK_IMPORTED_MODULE_4__["RoleMasterComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _role_master_routing_module__WEBPACK_IMPORTED_MODULE_3__["RoleMasterRoutingModule"]
        ]
    })
], RoleMasterModule);



/***/ }),

/***/ "zKcJ":
/*!*************************************************************************!*\
  !*** ./src/app/pages/masters/role-master/role-master-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: RoleMasterRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleMasterRoutingModule", function() { return RoleMasterRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _role_master_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./role-master.component */ "rxYD");




const routes = [
    { path: '', component: _role_master_component__WEBPACK_IMPORTED_MODULE_3__["RoleMasterComponent"] }
];
let RoleMasterRoutingModule = class RoleMasterRoutingModule {
};
RoleMasterRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], RoleMasterRoutingModule);



/***/ })

}]);
//# sourceMappingURL=app-pages-masters-role-master-role-master-module-es2015.js.map