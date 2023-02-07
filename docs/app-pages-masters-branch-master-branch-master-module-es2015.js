(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-pages-masters-branch-master-branch-master-module"],{

/***/ "/2yL":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/masters/branch-master/branch-master-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: BranchMasterRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BranchMasterRoutingModule", function() { return BranchMasterRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _branch_master_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./branch-master.component */ "58eX");




const routes = [
    { path: '', component: _branch_master_component__WEBPACK_IMPORTED_MODULE_3__["BranchMasterComponent"] }
];
let BranchMasterRoutingModule = class BranchMasterRoutingModule {
};
BranchMasterRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], BranchMasterRoutingModule);



/***/ }),

/***/ "3THn":
/*!************************************************************************************!*\
  !*** ./src/app/pages/masters/master-modal/branch-modal/branch-modal.component.css ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJicmFuY2gtbW9kYWwuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "58eX":
/*!************************************************************************!*\
  !*** ./src/app/pages/masters/branch-master/branch-master.component.ts ***!
  \************************************************************************/
/*! exports provided: BranchMasterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BranchMasterComponent", function() { return BranchMasterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_branch_master_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./branch-master.component.html */ "sjnW");
/* harmony import */ var _branch_master_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./branch-master.component.css */ "9BTg");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var services_utility_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! services/utility.service */ "2qeI");
/* harmony import */ var app_services_data_table_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/services/data-table.service */ "vO8+");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-datatables */ "njyG");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _branch_master_sevice__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./branch-master.sevice */ "qUgR");
/* harmony import */ var _master_modal_branch_modal_branch_modal_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../master-modal/branch-modal/branch-modal.component */ "S2n0");












// import { NgbOffcanvasConfig, NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
let BranchMasterComponent = class BranchMasterComponent {
    constructor(utility, dataTable, ngmodal, formBuilder, branchService) {
        this.utility = utility;
        this.dataTable = dataTable;
        this.ngmodal = ngmodal;
        this.formBuilder = formBuilder;
        this.branchService = branchService;
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this.isFilterModalOpen = false;
    }
    ngOnInit() {
        this.dtOptions = this.dataTable.getDataTableOptions(false, true, 'Stock Receive List');
        this.getBranchList();
    }
    get registerFormControl() {
        return this.branchForm.controls;
    }
    getBranchList() {
        this.loader = true;
        this.nodata = true;
        this.branchService.getBranchList().subscribe(response => {
            const branchlist = response.data || {};
            this.loader = false;
            if (branchlist.length > 0) {
                setTimeout(() => (this.nodata = false), 500);
                this.branchList = branchlist;
            }
        }, error => { this.loader = false, this.nodata = true, this.utility.toast('top', 'right', '!Response Error', 'warning'); });
    }
    addBranch() {
        const addDialog = this.ngmodal.open(_master_modal_branch_modal_branch_modal_component__WEBPACK_IMPORTED_MODULE_11__["BranchModalComponent"], { size: 'md', backdropClass: 'bg-secondary' });
        addDialog.componentInstance.Title = 'Addbranch';
        addDialog.componentInstance.edit = false;
        addDialog.result.then((result) => {
            this.getBranchList();
        }).catch((error) => {
        });
    }
    editBranch(id) {
        const editDialog = this.ngmodal.open(_master_modal_branch_modal_branch_modal_component__WEBPACK_IMPORTED_MODULE_11__["BranchModalComponent"], { size: 'md', backdropClass: 'bg-secondary' });
        editDialog.componentInstance.Title = 'Editbranch';
        editDialog.componentInstance.edit = true;
        editDialog.componentInstance.branchId = id;
        editDialog.result.then((result) => {
            this.getBranchList();
        }).catch((error) => {
        });
    }
    closeFilterModal() {
    }
    navigateToBack() {
        this.utility.navigateBackWard();
    }
};
BranchMasterComponent.ctorParameters = () => [
    { type: services_utility_service__WEBPACK_IMPORTED_MODULE_5__["UtilityService"] },
    { type: app_services_data_table_service__WEBPACK_IMPORTED_MODULE_6__["DataTableService"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModal"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _branch_master_sevice__WEBPACK_IMPORTED_MODULE_10__["BranchService"] }
];
BranchMasterComponent.propDecorators = {
    BranchModalComponent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['BranchModalComponent',] }],
    dtElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [angular_datatables__WEBPACK_IMPORTED_MODULE_8__["DataTableDirective"], { static: false },] }]
};
BranchMasterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-branch-master',
        template: _raw_loader_branch_master_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_branch_master_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [services_utility_service__WEBPACK_IMPORTED_MODULE_5__["UtilityService"],
        app_services_data_table_service__WEBPACK_IMPORTED_MODULE_6__["DataTableService"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModal"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
        _branch_master_sevice__WEBPACK_IMPORTED_MODULE_10__["BranchService"]])
], BranchMasterComponent);



/***/ }),

/***/ "9BTg":
/*!*************************************************************************!*\
  !*** ./src/app/pages/masters/branch-master/branch-master.component.css ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJicmFuY2gtbWFzdGVyLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "S2n0":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/masters/master-modal/branch-modal/branch-modal.component.ts ***!
  \***********************************************************************************/
/*! exports provided: BranchModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BranchModalComponent", function() { return BranchModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_branch_modal_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./branch-modal.component.html */ "athZ");
/* harmony import */ var _branch_modal_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./branch-modal.component.css */ "3THn");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var services_utility_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! services/utility.service */ "2qeI");
/* harmony import */ var app_services_data_table_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/services/data-table.service */ "vO8+");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _branch_master_branch_master_sevice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../branch-master/branch-master.sevice */ "qUgR");
/* harmony import */ var app_services_dropdownlist_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/services/dropdownlist.service */ "Kipx");










let BranchModalComponent = class BranchModalComponent {
    constructor(utility, dataTable, activedialog, formBuilder, branchService, dropdownService) {
        this.utility = utility;
        this.dataTable = dataTable;
        this.activedialog = activedialog;
        this.formBuilder = formBuilder;
        this.branchService = branchService;
        this.dropdownService = dropdownService;
        this.isFilterModalOpen = false;
        this.edit = false;
        this.branchForm = this.formBuilder.group({
            branchCode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            branchName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            locationId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        });
    }
    ngOnInit() {
        this.dropdownService.getDDLocationMaster().subscribe(resp => {
            if (resp.success) {
                this.locationList = resp.data;
            }
        });
        if (this.branchId) {
            this.branchService.getBranchData(this.branchId).subscribe(resp => {
                const branchData = resp.data || {};
                this.branchForm.controls['branchCode'].setValue(branchData[0].branchCode);
                this.branchForm.controls['branchName'].setValue(branchData[0].branchName);
                this.branchForm.controls['locationId'].setValue(branchData[0].locationId);
            }, error => {
                console.log(error);
            });
        }
        else {
            this.branchService.getBranchCode().subscribe(resp => {
                const branchCode = resp.data[0] || {};
                this.branchForm.controls['branchCode'].setValue(branchCode.Branch_Code);
            }, error => {
                console.log(error);
            });
        }
    }
    get branchform() { return this.branchForm.controls; }
    onSubmit() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.branchForm.invalid) {
            return;
        }
        else {
            if (this.branchId) {
                this.branchForm.value.branchId = this.branchId;
                this.branchService.updateBranchMaster(this.branchForm.value).subscribe(resp => {
                    const branchCode = resp.data || {};
                    if (resp.success) {
                        this.utility.toast('top', 'right', 'Updated Successfully', 'success');
                        this.closeModal();
                    }
                    else if (resp.status == 404) {
                        this.utility.toast('top', 'right', 'Failed to Update', 'warning');
                    }
                }, error => {
                    this.utility.toast('top', 'right', '!Server Error', 'warning');
                });
            }
            else {
                this.branchService.saveBranchMaster(this.branchForm.value).subscribe(resp => {
                    const branchCode = resp.data || {};
                    if (resp.success) {
                        this.utility.toast('top', 'right', 'Saved Successfully', 'success');
                        this.closeModal();
                    }
                    else if (resp.status == 404) {
                        this.utility.toast('top', 'right', 'Failed to Save', 'warning');
                    }
                }, error => {
                    this.utility.toast('top', 'right', '!Server Error', 'warning');
                });
            }
        }
    }
    updateBranch() {
        if (this.branchForm.invalid) {
            return;
        }
        else {
        }
    }
    onReset() {
        this.submitted = false;
        this.branchForm.reset();
    }
    closeModal() {
        this.activedialog.close();
    }
};
BranchModalComponent.ctorParameters = () => [
    { type: services_utility_service__WEBPACK_IMPORTED_MODULE_5__["UtilityService"] },
    { type: app_services_data_table_service__WEBPACK_IMPORTED_MODULE_6__["DataTableService"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbActiveModal"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _branch_master_branch_master_sevice__WEBPACK_IMPORTED_MODULE_8__["BranchService"] },
    { type: app_services_dropdownlist_service__WEBPACK_IMPORTED_MODULE_9__["DropdownlistService"] }
];
BranchModalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-branch-modal',
        template: _raw_loader_branch_modal_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_branch_modal_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [services_utility_service__WEBPACK_IMPORTED_MODULE_5__["UtilityService"],
        app_services_data_table_service__WEBPACK_IMPORTED_MODULE_6__["DataTableService"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbActiveModal"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
        _branch_master_branch_master_sevice__WEBPACK_IMPORTED_MODULE_8__["BranchService"],
        app_services_dropdownlist_service__WEBPACK_IMPORTED_MODULE_9__["DropdownlistService"]])
], BranchModalComponent);



/***/ }),

/***/ "ZFdf":
/*!*********************************************************************!*\
  !*** ./src/app/pages/masters/branch-master/branch-master.module.ts ***!
  \*********************************************************************/
/*! exports provided: BranchMasterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BranchMasterModule", function() { return BranchMasterModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _branch_master_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./branch-master-routing.module */ "/2yL");
/* harmony import */ var _branch_master_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./branch-master.component */ "58eX");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-datatables */ "njyG");
/* harmony import */ var _master_modal_branch_modal_branch_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../master-modal/branch-modal/branch-modal.component */ "S2n0");










let BranchMasterModule = class BranchMasterModule {
};
BranchMasterModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _branch_master_component__WEBPACK_IMPORTED_MODULE_4__["BranchMasterComponent"],
            _master_modal_branch_modal_branch_modal_component__WEBPACK_IMPORTED_MODULE_9__["BranchModalComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
            angular_datatables__WEBPACK_IMPORTED_MODULE_8__["DataTablesModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _branch_master_routing_module__WEBPACK_IMPORTED_MODULE_3__["BranchMasterRoutingModule"]
        ]
    })
], BranchMasterModule);



/***/ }),

/***/ "athZ":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/masters/master-modal/branch-modal/branch-modal.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-content bg-light\">\r\n    <div class=\"modal-header\">\r\n      <h4 *ngIf=\"!edit\" class=\"modal-title\" id=\"modal-basic-title\">Add Branch</h4>\r\n      <h4 *ngIf=\"edit\" class=\"modal-title\" id=\"modal-basic-title\">Edit Branch</h4>\r\n      <button type=\"button\" class=\"btn-close\" aria-label=\"Close\" (click)=\"closeModal()\"></button>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n      <form class=\"form\" [formGroup]=\"branchForm\" (ngSubmit)=\"onSubmit()\">\r\n        <div class=\"form-group\">\r\n            <label>Branch Code</label>\r\n            <input type=\"text\" class=\"form-control\" disabled name=\"branchCode\" formControlName=\"branchCode\">\r\n            <span class=\"text-danger\"\r\n                *ngIf=\"(branchform.branchCode.touched || submitted) && branchform.branchCode.errors?.required\">\r\n                Branch Code is required\r\n            </span>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label>Branch Name</label>\r\n            <input type=\"text\" class=\"form-control\" name=\"branchName\" formControlName=\"branchName\">\r\n            <span class=\"text-danger\"\r\n                *ngIf=\"(branchform.branchName.touched || submitted) && branchform.branchName.errors?.required\">\r\n                Branch Name is required\r\n            </span>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"locationId\">Location</label>\r\n            <select id=\"locationId\" class=\"form-select\" name=\"locationId\" formControlName=\"locationId\">\r\n                <option value=\"\" selected>Select Location</option>\r\n                <option *ngFor=\"let location of locationList\" [value]=\"location.Id\">{{location.locationCode}}-{{location.locationName}}</option>\r\n              </select>\r\n            <span class=\"text-danger\"\r\n                *ngIf=\"(branchform.locationId.touched || submitted) && branchform.locationId.errors?.required\">\r\n                Location is required\r\n            </span>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n            <span *ngIf=\"!edit\">\r\n            <button type=\"submit\" class=\"btn btn-success\">Save</button>\r\n            </span>\r\n            <span *ngIf=\"edit\">\r\n            <button type=\"submit\" class=\"btn btn-success\">Update</button>\r\n            <button type=\"button\" (click)=\"deleteBranch()\" class=\"btn btn-danger\">Delete</button>\r\n            </span>\r\n            <button type=\"button\" (click)=\"closeModal()\" class=\"btn btn-warning\">Close</button>\r\n        </div>\r\n    </form>\r\n    </div>\r\n  \r\n    </div>");

/***/ }),

/***/ "qUgR":
/*!*********************************************************************!*\
  !*** ./src/app/pages/masters/branch-master/branch-master.sevice.ts ***!
  \*********************************************************************/
/*! exports provided: BranchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BranchService", function() { return BranchService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! environments/environment */ "AytR");





let BranchService = class BranchService {
    constructor(http) {
        this.http = http;
        this.BaseAdminApiURL = environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiURL;
        this.BaseAdminLocalApiURL = environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiURL;
    }
    saveBranchMaster(branchObj) {
        const body = branchObj;
        return this.http.post(this.BaseAdminApiURL + 'branchapi/insertBranch', body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(response => {
            return response;
        }, (error) => console.error(error, 'api-Handler')));
    }
    getBranchList() {
        return this.http.get(this.BaseAdminApiURL + 'branchapi/getBranchList').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(response => {
            return response;
        }, (error) => console.error(error, 'api-Handler')));
    }
    getBranchData(branchId) {
        const params = { branchId: branchId };
        const encodedUrl = encodeURI(this.BaseAdminApiURL + 'branchapi/getBranchDetails');
        return this.http.get(encodedUrl, { params }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(response => {
            return response;
        }, (error) => console.error(error, 'api-Handler')));
    }
    updateBranchMaster(branchObj) {
        const body = branchObj;
        return this.http.post(this.BaseAdminApiURL + 'branchapi/updateBranch', body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(response => {
            return response;
        }, (error) => console.error(error, 'api-Handler')));
    }
    deleteFacultyMaster(employeeId) {
        const body = { employeeId };
        return this.http.post(this.BaseAdminApiURL + 'facultyapi/deleteFaculty', body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(response => {
            return response;
        }, (error) => console.error(error, 'api-Handler')));
    }
    getBranchCode() {
        return this.http.get(this.BaseAdminApiURL + 'branchapi/getBranchCode').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(response => {
            return response;
        }, (error) => console.error(error, 'api-Handler')));
    }
};
BranchService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
BranchService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
], BranchService);



/***/ }),

/***/ "sjnW":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/masters/branch-master/branch-master.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"loader\"  class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <span>\r\n        <app-loader></app-loader>\r\n        </span>\r\n    </div>\r\n    </div>\r\n    <div *ngIf=\"!loader\" class=\"row\">\r\n      <div  class=\"col-md-12\">\r\n        <div class=\"card\">\r\n          <div class=\"card-header\">\r\n            <div class=\"d-flex\" style=\"justify-content: space-between;\">\r\n              <div class=\"mr-auto p-2\">\r\n                <h5>\r\n                  <span><a href=\"#/app/settings\">Settings</a></span>\r\n                  <span class=\"mx-2\"> <i class=\"fa fa-angle-right\"></i></span>\r\n                  <span>Branch</span>\r\n                </h5>\r\n              </div>\r\n              <div class=\"justify-content-md-end flex-col\">\r\n              <button type=\"button\" class=\"btn btn-success\" (click)=\"addBranch()\">\r\n                Add\r\n                <i class=\"fas fa-plus\"></i>\r\n              </button>\r\n              <button type=\"button\" class=\"btn btn-outline-danger pt-1\"\r\n                (click)=\"navigateToBack()\">\r\n                <span>\r\n                  <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\"\r\n                    class=\"bi bi-arrow-return-left\" viewBox=\"0 0 16 16\">\r\n                    <path fill-rule=\"evenodd\"\r\n                      d=\"M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5z\" />\r\n                  </svg>\r\n                </span>\r\n              </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"card\">\r\n          <div class=\"card-body\">\r\n            <div>\r\n              <div class=\"table-responsive border p-2 mt-4\">\r\n               <table class=\"table table-bordered\" datatable [dtOptions]=\"dtOptions\" datatable class=\"row-border hover\">\r\n                <thead>\r\n                    <tr>\r\n                      <th>Branch Code</th>\r\n                      <th>Branch Name</th>\r\n                      <th>Location</th>\r\n                    </tr>\r\n                  </thead> \r\n                  <tbody>\r\n                    <tr *ngFor=\"let branch of branchList\" (click)=\"editBranch(branch.Id)\">\r\n                      <td>\r\n                        {{branch.branchCode}}\r\n                      </td>\r\n                      <td>\r\n                          {{branch.branchName}}\r\n                      </td>\r\n                      <td>\r\n                        {{branch.locationName}}\r\n                      </td>\r\n                    </tr>\r\n                  </tbody>\r\n                </table>\r\n              </div>\r\n              <div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n    \r\n      </div>\r\n    </div>\r\n  \r\n    <div class=\"row\" *ngIf=\"nodata\">\r\n      <div class=\"col-12\">\r\n        <div class=\"empty-state\">\r\n          <div class=\"empty-state__content\">\r\n            <div class=\"empty-state__icon\">\r\n              <img src=\"data:image/png;base64,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\" alt=\"\">\r\n            </div>\r\n            <div class=\"empty-state__message\">No records has been added yet.</div>\r\n            <div class=\"empty-state__help\">\r\n              <span>Add a new record by simply clicking the </span>\r\n              <span class=\"btn btn-success\" (click)=\"openOffcanvas('add')\">Add Branch<i class=\"fas fa-plus\"></i></span> \r\n              <span>Button.</span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div>\r\n    </div>");

/***/ })

}]);
//# sourceMappingURL=app-pages-masters-branch-master-branch-master-module-es2015.js.map