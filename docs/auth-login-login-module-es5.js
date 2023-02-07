(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-login-login-module"], {
    /***/
    "bsvf":
    /*!***********************************************!*\
      !*** ./src/app/auth/login/login.component.ts ***!
      \***********************************************/

    /*! exports provided: LoginComponent */

    /***/
    function bsvf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
        return LoginComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./login.component.html */
      "zu2e");
      /* harmony import */


      var _login_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./login.component.css */
      "wmvV");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var LoginComponent = /*#__PURE__*/function () {
        function LoginComponent(router, formBuilder) {
          _classCallCheck(this, LoginComponent);

          this.router = router;
          this.formBuilder = formBuilder;
          this.loginValidate = false;
          this.loginForm = this.formBuilder.group({
            User_Name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])],
            Password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])],
            RememberMe: [false]
          });
        }

        _createClass(LoginComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onLogin",
          value: function onLogin() {
            if (this.loginForm.invalid) {
              this.loginValidate = true;
              return false;
            } else {
              this.loginValidate = false;
              localStorage.setItem('remember-me-log', JSON.stringify(this.loginForm.value));
              var newloginData = this.loginForm.value;

              if (newloginData.User_Name == 'admin') {
                localStorage.setItem('User-Role', 'Admin');
                this.router.navigateByUrl("app/dashboard");
              } else if (newloginData.User_Name == 'faculty') {
                localStorage.setItem('User-Role', 'Faculty');
              } else if (newloginData.User_Name == 'employee') {
                localStorage.setItem('User-Role', 'Employee');
              }
            }
          }
        }]);

        return LoginComponent;
      }();

      LoginComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }];
      };

      LoginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-login',
        template: _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_login_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])], LoginComponent);
      /***/
    },

    /***/
    "lu3c":
    /*!********************************************!*\
      !*** ./src/app/auth/login/login.module.ts ***!
      \********************************************/

    /*! exports provided: routes, LoginModule */

    /***/
    function lu3c(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "routes", function () {
        return routes;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginModule", function () {
        return LoginModule;
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./login.component */
      "bsvf"); // import { HttpModule } from '@angular/http';


      var routes = [{
        path: '',
        component: _login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
        pathMatch: 'full'
      }];

      var LoginModule = /*#__PURE__*/_createClass(function LoginModule() {
        _classCallCheck(this, LoginModule);
      });

      LoginModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]]
      })], LoginModule);
      /***/
    },

    /***/
    "wmvV":
    /*!************************************************!*\
      !*** ./src/app/auth/login/login.component.css ***!
      \************************************************/

    /*! exports provided: default */

    /***/
    function wmvV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n    transition: 0.3s;\r\n  }\r\n  \r\n  body {\r\n    background-color: #fff;\r\n    font-family: Montserrat;\r\n    overflow-x: hidden;\r\n  }\r\n  \r\n  article,\r\n  aside,\r\n  details,\r\n  figure,\r\n  footer,\r\n  header,\r\n  main,\r\n  menu,\r\n  nav,\r\n  section,\r\n  summary {\r\n    display: block;\r\n  }\r\n  \r\n  h1,\r\n  h2,\r\n  h3,\r\n  h4,\r\n  h5,\r\n  h6,\r\n  p,\r\n  a {\r\n    -ms-word-wrap: break-word;\r\n    word-wrap: break-word;\r\n    text-decoration: none;\r\n  }\r\n  \r\n  img {\r\n    border: none;\r\n  }\r\n  \r\n  *:focus {\r\n    outline: none;\r\n  }\r\n  \r\n  .clearfix::after {\r\n    content: \"\";\r\n    display: table;\r\n    clear: both;\r\n  }\r\n  \r\n  .bg-illustration {\r\n    position: relative;\r\n    height: 100vh;\r\n    width: 1194px;\r\n    background: url('login-landing.jpg') no-repeat center center scroll;\r\n    background-size: cover;\r\n    float: left;\r\n    -webkit-animation: bgslide 2.3s forwards;\r\n            animation: bgslide 2.3s forwards;\r\n  }\r\n  \r\n  .bg-illustration img {\r\n    width: 248px;\r\n    -webkit-user-select: none;\r\n       -moz-user-select: none;\r\n            user-select: none;\r\n    height: auto;\r\n    margin: 19px 0 0 25px;\r\n  }\r\n  \r\n  @-webkit-keyframes bgslide {\r\n    from {\r\n      left: -100%;\r\n      width: 0;\r\n      opacity: 0;\r\n    }\r\n    to {\r\n      left: 0;\r\n      width: 1194px;\r\n      opacity: 1;\r\n    }\r\n  }\r\n  \r\n  @keyframes bgslide {\r\n    from {\r\n      left: -100%;\r\n      width: 0;\r\n      opacity: 0;\r\n    }\r\n    to {\r\n      left: 0;\r\n      width: 1194px;\r\n      opacity: 1;\r\n    }\r\n  }\r\n  \r\n  .login {\r\n    max-height: 100vh;\r\n    overflow-Y: auto;\r\n    float: left;\r\n    margin: 0 auto;\r\n    width: calc(100% - 1194px);\r\n  }\r\n  \r\n  .login .container {\r\n    width: 350px;\r\n    margin: 0 auto;\r\n    position: relative;\r\n  }\r\n  \r\n  .login .container h1 {\r\n    margin-top: 100px;\r\n    font-size: 35px;\r\n    font-weight: bolder;\r\n  }\r\n  \r\n  .login .container .login-form {\r\n    margin-top: 90px;\r\n  }\r\n  \r\n  .login .container .login-form form {\r\n    display: grid;\r\n  }\r\n  \r\n  .login .container .login-form form input {\r\n    font-size: 16px;\r\n    font-weight: normal;\r\n    background: rgba(57, 57, 57, 0.07);\r\n    margin: 12.5px 0;\r\n    height: 40px;\r\n    border: none;\r\n    padding: 0 30px;\r\n    border-radius: 10px;\r\n  }\r\n  \r\n  .login .container .login-form form button[type=submit] {\r\n    background: linear-gradient(-20deg, #6144e0 0%, #6144e0 100%);\r\n    border: none;\r\n    margin-top: 14px;\r\n    margin-bottom: 20px;\r\n    width: 200px;\r\n    height: 50px;\r\n    text-transform: uppercase;\r\n    color: white;\r\n    border-radius: 10px;\r\n    position: relative;\r\n    z-index: 2;\r\n    font-weight: bold;\r\n    font-size: 18px;\r\n  }\r\n  \r\n  .login .container .login-form form button[type=submit]:hover::after {\r\n    opacity: 1;\r\n  }\r\n  \r\n  .login .container .login-form form button[type=submit]::after {\r\n    content: \"\";\r\n    position: absolute;\r\n    z-index: -1;\r\n    border-radius: 10px;\r\n    opacity: 0;\r\n    top: 0;\r\n    left: 0;\r\n    transition: 0.3s ease-in-out;\r\n    right: 0;\r\n    bottom: 0;\r\n    background: linear-gradient(to top, #09203f 0%, #537895 100%);\r\n  }\r\n  \r\n  .login .container .remember-form {\r\n    position: relative;\r\n    margin-top: 20px;\r\n  }\r\n  \r\n  .login .container .remember-form input[type=checkbox] {\r\n    margin-top: 10px;\r\n    height: 13px;\r\n\r\n  }\r\n  \r\n  .login .container .remember-form span {\r\n    font-size: 13px;\r\n    font-weight: normal;\r\n    position: absolute;\r\n    top: 32px;\r\n    color: #3B3B3B;\r\n    margin-left: 15px;\r\n  }\r\n  \r\n  .login .container .forget-pass {\r\n    position: absolute;\r\n    right: 0;\r\n    margin-top: 195px;\r\n  }\r\n  \r\n  .login .container .forget-pass a {\r\n    font-size: 13px;\r\n    position: relative;\r\n    font-weight: normal;\r\n    color: #918F8F;\r\n  }\r\n  \r\n  .login .container .forget-pass a::after {\r\n    content: \"\";\r\n    position: absolute;\r\n    height: 2px;\r\n    width: 100%;\r\n    border-radius: 100px;\r\n    background: linear-gradient(-20deg, #6144e0 0%, #6144e0 100%);\r\n    bottom: -2px;\r\n    left: 0;\r\n    transition: 0.3s;\r\n    opacity: 0;\r\n    right: 0;\r\n  }\r\n  \r\n  .login .container .forget-pass a:hover::after {\r\n    opacity: 1;\r\n  }\r\n  \r\n  @media only screen and (min-width: 1024px) and (max-width: 1680px) {\r\n    .bg-illustration {\r\n      width: 50%;\r\n      -webkit-animation: none;\r\n              animation: none;\r\n    }\r\n  \r\n    .login {\r\n      width: 50%;\r\n    }\r\n  }\r\n  \r\n  /* Display 12\", iPad PRO Portrait, iPad landscape */\r\n  \r\n  @media only screen and (max-width: 1024px) {\r\n    body {\r\n      overflow-x: hidden;\r\n    }\r\n  \r\n    @-webkit-keyframes slideIn {\r\n      from {\r\n        left: -100%;\r\n        opacity: 0;\r\n      }\r\n      to {\r\n        left: 0;\r\n        opacity: 1;\r\n      }\r\n    }\r\n  \r\n    @keyframes slideIn {\r\n      from {\r\n        left: -100%;\r\n        opacity: 0;\r\n      }\r\n      to {\r\n        left: 0;\r\n        opacity: 1;\r\n      }\r\n    }\r\n    .bg-illustration {\r\n      float: none;\r\n      background: url('login-landing.jpg') center center;\r\n      background-size: cover;\r\n      -webkit-animation: slideIn 0.8s ease-in-out forwards;\r\n              animation: slideIn 0.8s ease-in-out forwards;\r\n      width: 100%;\r\n      height: 190px;\r\n      text-align: center;\r\n    }\r\n    .bg-illustration img {\r\n      width: 100px;\r\n      height: auto;\r\n      margin: 20px auto !important;\r\n      text-align: center;\r\n    }\r\n  \r\n    .login {\r\n      float: none;\r\n      margin: 0 auto;\r\n      width: 100%;\r\n    }\r\n    .login .container {\r\n      -webkit-animation: slideIn 0.8s ease-in-out forwards;\r\n              animation: slideIn 0.8s ease-in-out forwards;\r\n      width: 85%;\r\n      float: none;\r\n    }\r\n    .login .container h1 {\r\n      font-size: 25px;\r\n      margin-top: 40px;\r\n    }\r\n    .login .container .login-form {\r\n      margin-top: 90px;\r\n    }\r\n    .login .container .login-form form input {\r\n      height: 45px;\r\n    }\r\n    .login .container .login-form form button[type=submit] {\r\n      height: 45px;\r\n      margin-top: 100px;\r\n    }\r\n    .login .container .login-form .remember-form {\r\n      position: relative;\r\n      margin-top: -14px;\r\n    }\r\n    .login .container .login-form .remember-form span {\r\n      font-size: 16px;\r\n      margin-top: 22px;\r\n      top: inherit;\r\n    }\r\n  \r\n    .forget-pass {\r\n      position: absolute;\r\n      right: inherit;\r\n      left: 0;\r\n      bottom: -40px;\r\n      margin: 0 !important;\r\n    }\r\n    .forget-pass a {\r\n      font-size: 16px;\r\n      position: relative;\r\n      font-weight: normal;\r\n      color: #918F8F;\r\n    }\r\n    .forget-pass a::after {\r\n      content: \"\";\r\n      position: absolute;\r\n      height: 2px;\r\n      width: 100%;\r\n      border-radius: 100px;\r\n      background: linear-gradient(-20deg, #f794a4 0%, #6144e0 100%);\r\n      bottom: -4px;\r\n      left: 0;\r\n      transition: 0.3s;\r\n      opacity: 0;\r\n      right: 0;\r\n    }\r\n    .forget-pass a:hover::after {\r\n      opacity: 1;\r\n    }\r\n  }\r\n  \r\n  .center-align {\r\n    margin: auto;\r\n    width: 50%;\r\n  }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUVWLHNCQUFzQjtJQUd0QixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtFQUNwQjs7RUFFQTs7Ozs7Ozs7Ozs7SUFXRSxjQUFjO0VBQ2hCOztFQUVBOzs7Ozs7OztJQVFFLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIscUJBQXFCO0VBQ3ZCOztFQUVBO0lBQ0UsWUFBWTtFQUNkOztFQUVBO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsV0FBVztJQUNYLGNBQWM7SUFDZCxXQUFXO0VBQ2I7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGFBQWE7SUFDYixtRUFBNEY7SUFDNUYsc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCx3Q0FBd0M7WUFDaEMsZ0NBQWdDO0VBQzFDOztFQUNBO0lBQ0UsWUFBWTtJQUNaLHlCQUF5QjtPQUN0QixzQkFBc0I7WUFFakIsaUJBQWlCO0lBQ3pCLFlBQVk7SUFDWixxQkFBcUI7RUFDdkI7O0VBRUE7SUFDRTtNQUNFLFdBQVc7TUFDWCxRQUFRO01BQ1IsVUFBVTtJQUNaO0lBQ0E7TUFDRSxPQUFPO01BQ1AsYUFBYTtNQUNiLFVBQVU7SUFDWjtFQUNGOztFQUVBO0lBQ0U7TUFDRSxXQUFXO01BQ1gsUUFBUTtNQUNSLFVBQVU7SUFDWjtJQUNBO01BQ0UsT0FBTztNQUNQLGFBQWE7TUFDYixVQUFVO0lBQ1o7RUFDRjs7RUFHQTtJQUNFLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGNBQWM7SUFDZCwwQkFBMEI7RUFDNUI7O0VBQ0E7SUFDRSxZQUFZO0lBQ1osY0FBYztJQUNkLGtCQUFrQjtFQUNwQjs7RUFDQTtJQUNFLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsbUJBQW1CO0VBQ3JCOztFQUNBO0lBQ0UsZ0JBQWdCO0VB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QVU7TUFDVixRQUFRO0lBQ1Y7SUFDQTtNQUNFLFVBQVU7SUFDWjtFQUNGOztFQUNBO0lBQ0UsWUFBWTtJQUNaLFVBQVU7RUFDWiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogMC4zcztcclxuICAgIC1vLXRyYW5zaXRpb246IDAuM3M7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xyXG4gIH1cclxuICBcclxuICBib2R5IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBmb250LWZhbWlseTogTW9udHNlcnJhdDtcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICB9XHJcbiAgXHJcbiAgYXJ0aWNsZSxcclxuICBhc2lkZSxcclxuICBkZXRhaWxzLFxyXG4gIGZpZ3VyZSxcclxuICBmb290ZXIsXHJcbiAgaGVhZGVyLFxyXG4gIG1haW4sXHJcbiAgbWVudSxcclxuICBuYXYsXHJcbiAgc2VjdGlvbixcclxuICBzdW1tYXJ5IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuICBcclxuICBoMSxcclxuICBoMixcclxuICBoMyxcclxuICBoNCxcclxuICBoNSxcclxuICBoNixcclxuICBwLFxyXG4gIGEge1xyXG4gICAgLW1zLXdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgaW1nIHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgKjpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gIH1cclxuICBcclxuICAuY2xlYXJmaXg6OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgIGNsZWFyOiBib3RoO1xyXG4gIH1cclxuICBcclxuICAuYmctaWxsdXN0cmF0aW9uIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICB3aWR0aDogMTE5NHB4O1xyXG4gICAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltZy9lZmZlL2xvZ2luLWxhbmRpbmcuanBnXCIpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIHNjcm9sbDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBiZ3NsaWRlIDIuM3MgZm9yd2FyZHM7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbjogYmdzbGlkZSAyLjNzIGZvcndhcmRzO1xyXG4gIH1cclxuICAuYmctaWxsdXN0cmF0aW9uIGltZyB7XHJcbiAgICB3aWR0aDogMjQ4cHg7XHJcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgbWFyZ2luOiAxOXB4IDAgMCAyNXB4O1xyXG4gIH1cclxuICBcclxuICBALXdlYmtpdC1rZXlmcmFtZXMgYmdzbGlkZSB7XHJcbiAgICBmcm9tIHtcclxuICAgICAgbGVmdDogLTEwMCU7XHJcbiAgICAgIHdpZHRoOiAwO1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gICAgfVxyXG4gICAgdG8ge1xyXG4gICAgICBsZWZ0OiAwO1xyXG4gICAgICB3aWR0aDogMTE5NHB4O1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBAa2V5ZnJhbWVzIGJnc2xpZGUge1xyXG4gICAgZnJvbSB7XHJcbiAgICAgIGxlZnQ6IC0xMDAlO1xyXG4gICAgICB3aWR0aDogMDtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgIH1cclxuICAgIHRvIHtcclxuICAgICAgbGVmdDogMDtcclxuICAgICAgd2lkdGg6IDExOTRweDtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLmxvZ2luIHtcclxuICAgIG1heC1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgb3ZlcmZsb3ctWTogYXV0bztcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMTE5NHB4KTtcclxuICB9XHJcbiAgLmxvZ2luIC5jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDM1MHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG4gIC5sb2dpbiAuY29udGFpbmVyIGgxIHtcclxuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xyXG4gICAgZm9udC1zaXplOiAzNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICB9XHJcbiAgLmxvZ2luIC5jb250YWluZXIgLmxvZ2luLWZvcm0ge1xyXG4gICAgbWFyZ2luLXRvcDogOTBweDtcclxuICB9XHJcbiAgLmxvZ2luIC5jb250YWluZXIgLmxvZ2luLWZvcm0gZm9ybSB7XHJcbiAgICBkaXNwbGF5OiAtbXMtZ3JpZDtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgfVxyXG4gIC5sb2dpbiAuY29udGFpbmVyIC5sb2dpbi1mb3JtIGZvcm0gaW5wdXQge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoNTcsIDU3LCA1NywgMC4wNyk7XHJcbiAgICBtYXJnaW46IDEyLjVweCAwO1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgcGFkZGluZzogMCAzMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICB9XHJcbiAgLmxvZ2luIC5jb250YWluZXIgLmxvZ2luLWZvcm0gZm9ybSBidXR0b25bdHlwZT1zdWJtaXRdIHtcclxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDExMGRlZywgIzYxNDRlMCAwJSwgIzYxNDRlMCAxMDAlKTtcclxuICAgIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCgxMTBkZWcsICM2MTQ0ZTAgMCUsICM2MTQ0ZTAgMTAwJSk7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoLTIwZGVnLCAjNjE0NGUwIDAlLCAjNjE0NGUwIDEwMCUpO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgbWFyZ2luLXRvcDogMTRweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICB9XHJcbiAgLmxvZ2luIC5jb250YWluZXIgLmxvZ2luLWZvcm0gZm9ybSBidXR0b25bdHlwZT1zdWJtaXRdOmhvdmVyOjphZnRlciB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuICAubG9naW4gLmNvbnRhaW5lciAubG9naW4tZm9ybSBmb3JtIGJ1dHRvblt0eXBlPXN1Ym1pdF06OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiAtMTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogMC4zcyBlYXNlLWluLW91dDtcclxuICAgIC1vLXRyYW5zaXRpb246IDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCBib3R0b20sIGxlZnQgdG9wLCBmcm9tKCMwOTIwM2YpLCB0bygjNTM3ODk1KSk7XHJcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChib3R0b20sICMwOTIwM2YgMCUsICM1Mzc4OTUgMTAwJSk7XHJcbiAgICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQoYm90dG9tLCAjMDkyMDNmIDAlLCAjNTM3ODk1IDEwMCUpO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgIzA5MjAzZiAwJSwgIzUzNzg5NSAxMDAlKTtcclxuICB9XHJcbiAgLmxvZ2luIC5jb250YWluZXIgLnJlbWVtYmVyLWZvcm0ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICB9XHJcbiAgLmxvZ2luIC5jb250YWluZXIgLnJlbWVtYmVyLWZvcm0gaW5wdXRbdHlwZT1jaGVja2JveF0ge1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIGhlaWdodDogMTNweDtcclxuXHJcbiAgfVxyXG4gIC5sb2dpbiAuY29udGFpbmVyIC5yZW1lbWJlci1mb3JtIHNwYW4ge1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMzJweDtcclxuICAgIGNvbG9yOiAjM0IzQjNCO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgfVxyXG4gIC5sb2dpbiAuY29udGFpbmVyIC5mb3JnZXQtcGFzcyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMDtcclxuICAgIG1hcmdpbi10b3A6IDE5NXB4O1xyXG4gIH1cclxuICAubG9naW4gLmNvbnRhaW5lciAuZm9yZ2V0LXBhc3MgYSB7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgY29sb3I6ICM5MThGOEY7XHJcbiAgfVxyXG4gIC5sb2dpbiAuY29udGFpbmVyIC5mb3JnZXQtcGFzcyBhOjphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgaGVpZ2h0OiAycHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xyXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoMTEwZGVnLCAjNjE0NGUwIDAlLCAjNjE0NGUwIDEwMCUpO1xyXG4gICAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KDExMGRlZywgIzYxNDRlMCAwJSwgIzYxNDRlMCAxMDAlKTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgtMjBkZWcsICM2MTQ0ZTAgMCUsICM2MTQ0ZTAgMTAwJSk7XHJcbiAgICBib3R0b206IC0ycHg7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjNzO1xyXG4gICAgLW8tdHJhbnNpdGlvbjogMC4zcztcclxuICAgIHRyYW5zaXRpb246IDAuM3M7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgfVxyXG4gIC5sb2dpbiAuY29udGFpbmVyIC5mb3JnZXQtcGFzcyBhOmhvdmVyOjphZnRlciB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuICBcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkgYW5kIChtYXgtd2lkdGg6IDE2ODBweCkge1xyXG4gICAgLmJnLWlsbHVzdHJhdGlvbiB7XHJcbiAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAgIGFuaW1hdGlvbjogbm9uZTtcclxuICAgIH1cclxuICBcclxuICAgIC5sb2dpbiB7XHJcbiAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC8qIERpc3BsYXkgMTJcIiwgaVBhZCBQUk8gUG9ydHJhaXQsIGlQYWQgbGFuZHNjYXBlICovXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcclxuICAgIGJvZHkge1xyXG4gICAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgICB9XHJcbiAgXHJcbiAgICBALXdlYmtpdC1rZXlmcmFtZXMgc2xpZGVJbiB7XHJcbiAgICAgIGZyb20ge1xyXG4gICAgICAgIGxlZnQ6IC0xMDAlO1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgIH1cclxuICAgICAgdG8ge1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIFxyXG4gICAgQGtleWZyYW1lcyBzbGlkZUluIHtcclxuICAgICAgZnJvbSB7XHJcbiAgICAgICAgbGVmdDogLTEwMCU7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgfVxyXG4gICAgICB0byB7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAuYmctaWxsdXN0cmF0aW9uIHtcclxuICAgICAgZmxvYXQ6IG5vbmU7XHJcbiAgICAgIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWcvZWZmZS9sb2dpbi1sYW5kaW5nLmpwZ1wiKSBjZW50ZXIgY2VudGVyO1xyXG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAtd2Via2l0LWFuaW1hdGlvbjogc2xpZGVJbiAwLjhzIGVhc2UtaW4tb3V0IGZvcndhcmRzO1xyXG4gICAgICAgICAgICAgIGFuaW1hdGlvbjogc2xpZGVJbiAwLjhzIGVhc2UtaW4tb3V0IGZvcndhcmRzO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiAxOTBweDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLmJnLWlsbHVzdHJhdGlvbiBpbWcge1xyXG4gICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgbWFyZ2luOiAyMHB4IGF1dG8gIWltcG9ydGFudDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLmxvZ2luIHtcclxuICAgICAgZmxvYXQ6IG5vbmU7XHJcbiAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIC5sb2dpbiAuY29udGFpbmVyIHtcclxuICAgICAgLXdlYmtpdC1hbmltYXRpb246IHNsaWRlSW4gMC44cyBlYXNlLWluLW91dCBmb3J3YXJkcztcclxuICAgICAgICAgICAgICBhbmltYXRpb246IHNsaWRlSW4gMC44cyBlYXNlLWluLW91dCBmb3J3YXJkcztcclxuICAgICAgd2lkdGg6IDg1JTtcclxuICAgICAgZmxvYXQ6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAubG9naW4gLmNvbnRhaW5lciBoMSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgICAgbWFyZ2luLXRvcDogNDBweDtcclxuICAgIH1cclxuICAgIC5sb2dpbiAuY29udGFpbmVyIC5sb2dpbi1mb3JtIHtcclxuICAgICAgbWFyZ2luLXRvcDogOTBweDtcclxuICAgIH1cclxuICAgIC5sb2dpbiAuY29udGFpbmVyIC5sb2dpbi1mb3JtIGZvcm0gaW5wdXQge1xyXG4gICAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICB9XHJcbiAgICAubG9naW4gLmNvbnRhaW5lciAubG9naW4tZm9ybSBmb3JtIGJ1dHRvblt0eXBlPXN1Ym1pdF0ge1xyXG4gICAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICAgIG1hcmdpbi10b3A6IDEwMHB4O1xyXG4gICAgfVxyXG4gICAgLmxvZ2luIC5jb250YWluZXIgLmxvZ2luLWZvcm0gLnJlbWVtYmVyLWZvcm0ge1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIG1hcmdpbi10b3A6IC0xNHB4O1xyXG4gICAgfVxyXG4gICAgLmxvZ2luIC5jb250YWluZXIgLmxvZ2luLWZvcm0gLnJlbWVtYmVyLWZvcm0gc3BhbiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgbWFyZ2luLXRvcDogMjJweDtcclxuICAgICAgdG9wOiBpbmhlcml0O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLmZvcmdldC1wYXNzIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICByaWdodDogaW5oZXJpdDtcclxuICAgICAgbGVmdDogMDtcclxuICAgICAgYm90dG9tOiAtNDBweDtcclxuICAgICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuZm9yZ2V0LXBhc3MgYSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICBjb2xvcjogIzkxOEY4RjtcclxuICAgIH1cclxuICAgIC5mb3JnZXQtcGFzcyBhOjphZnRlciB7XHJcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgaGVpZ2h0OiAycHg7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcclxuICAgICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoMTEwZGVnLCAjZjc5NGE0IDAlLCAjNjE0NGUwIDEwMCUpO1xyXG4gICAgICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQoMTEwZGVnLCAjZjc5NGE0IDAlLCAjNjE0NGUwIDEwMCUpO1xyXG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoLTIwZGVnLCAjZjc5NGE0IDAlLCAjNjE0NGUwIDEwMCUpO1xyXG4gICAgICBib3R0b206IC00cHg7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogMC4zcztcclxuICAgICAgLW8tdHJhbnNpdGlvbjogMC4zcztcclxuICAgICAgdHJhbnNpdGlvbjogMC4zcztcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgcmlnaHQ6IDA7XHJcbiAgICB9XHJcbiAgICAuZm9yZ2V0LXBhc3MgYTpob3Zlcjo6YWZ0ZXIge1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG4gIH1cclxuICAuY2VudGVyLWFsaWduIHtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgfVxyXG4iXX0= */";
      /***/
    },

    /***/
    "zu2e":
    /*!***************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.component.html ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function zu2e(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"parent clearfix\">\r\n    <div class=\"bg-illustration\">\r\n        <!-- <img src=\"../../../assets/img/effe/EFFE.png\" alt=\"logo\"> -->\r\n\r\n        <div class=\"burger-btn\">\r\n        </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"login\">\r\n        <div class=\"container\">\r\n            <h1>Login to access to<br />your account</h1>\r\n            <div>\r\n                <div class=\"login-form\">\r\n                    <form [formGroup]=\"loginForm\" (ngSubmit)=\"onLogin()\">\r\n                        <label>Username</label>\r\n                        <div class=\"form-input-field\" data-validation-info=\"Enter the username\"\r\n                            [ngClass]=\"{'form-invalid-input' : (loginValidate && !loginForm.controls['User_Name'].valid)}\">\r\n                            <input id=\"login-user-name\" type=\"text\" class=\"form-control\" formControlName=\"User_Name\"\r\n                                maxlength=\"100\" />\r\n                        </div>\r\n                        <label>Password</label>\r\n                        <div class=\"form-input-field\" data-validation-info=\"Enter the Password\"\r\n                            [ngClass]=\"{'form-invalid-input' : (loginValidate && !loginForm.controls['Password'].valid)}\">\r\n                            <input id=\"login-user-password\" type=\"password\" class=\"form-control\"\r\n                                formControlName=\"Password\" maxlength=\"100\" />\r\n                        </div>\r\n\r\n                        <div class=\"remember-form\">\r\n                            <input type=\"checkbox\" value=\"\" id=\"remberme\" class=\"cursor-pointer\" style=\"height:13px\">\r\n                            <label for=\"remberme\" class=\"px-2 cursor-pointer\">\r\n                              Remeber Me\r\n                            </label>\r\n                        </div>\r\n                        <div class=\"forget-pass\">\r\n                            <a href=\"#\">Forgot Password ?</a>\r\n                        </div>\r\n                        <div class=\"center-align\">\r\n                            <button type=\"submit\">LOG IN</button>\r\n                        </div>\r\n\r\n                    </form>\r\n                </div>\r\n\r\n\r\n            </div>\r\n        </div>\r\n    </div>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=auth-login-login-module-es5.js.map