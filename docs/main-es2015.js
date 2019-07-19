(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card shadow-sm mb-2 bg-white\">\n  <div class=\"card-body\">\n    <div class=\"alert alert-secondary alert-dismissible fade show\" role=\"alert\">\n      <strong>Application Segments</strong>\n      <img class=\"close\" src=\"assets/baseline-contact_support-24px.svg\">\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-4\">\n        <div class=\"float-left\">\n          <button type=\"button\" class=\"btn alert-secondary alert-none\">\n            <i class=\"fa fa-exclamation\" aria-hidden=\"true\"></i>\n            Please enter\n          </button>\n        </div>\n      </div>\n      <div class=\"col-4\">\n        <div class=\"float-none\">\n          <button type=\"button\" class=\"btn alert-none\"\n            [ngClass]=\"{'btn-warning': fullAssigned === false, 'btn-success': fullAssigned === true}\">\n            <i class=\"fa fa-exclamation icon-large\" aria-hidden=\"true\"></i>\n            <b>Warning</b> Pleaase assign 100%\n          </button>\n        </div>\n      </div>\n      <div class=\"col-4\">\n        <div class=\"float-right\">\n          <button (click)=\"filter()\" type=\"button\" class=\"btn btn-outline-primary btn-sm\">\n            <i class=\"fa fa-filter icon-large\" aria-hidden=\"true\"></i>\n            Filter\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!--The content below is only a placeholder and can be replaced.-->\n<div *ngIf=\"categories\" class=\"card pl-lg-5 border-0\">\n  <div class=\"card-body\">\n    <div class=\"row\">\n      <div *ngFor=\"let category of categories\" class=\"col-6\">\n        <div class=\"row\">\n\n          <div class=\"card border-0 pr-lg-4\" data-toggle=\"tooltip\" data-placement=\"top\" [title]=\"category.categoryName\">\n            <div class=\"card-body block-1 shadow-sm p-3 mb-5 rounded\"\n              [ngClass]=\"{'bg-full': category.total > 0 && category.total <= 100, 'bg-not-full': category.total < 0 || category.total > 100}\">\n              <b>{{category.categorySymbol}}</b>\n              <p *ngIf=\"category.total > 0 || filterEnabled\" class=\"text-primary\"><b>{{category.total}} %</b></p>\n            </div>\n          </div>\n\n          <div *ngFor=\"let item of category.elements\" class=\"card pr-1 border-0\">\n            <div class=\"card-body block-2 shadow-sm p-3 mb-5 bg-white rounded\">\n              <p class=\"text-name\">\n                {{item.elementName}}\n              </p>\n              <div class=\"col\">\n                <div class=\"d-flex justify-content-center\">\n                  <input (change)=\"inputChange(category, item)\" [(ngModel)]=\"item.elementValue\" maxlength=\"3\"\n                    type=\"number\" min=\"0\" max=\"100\" class=\"text-input form-control\"\n                    [ngClass]=\"{'border border-danger': (item.error && item.error === true) || (filterEnabled === true && item.elementValue === null)}\"><span\n                    class=\"p-1\">%</span>\n                </div>\n              </div>\n            </div>\n          </div>\n\n        </div>\n        <hr>\n      </div>\n\n      <hr>\n\n    </div>\n  </div>\n</div>\n\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/helper/helper.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/helper/helper.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  helper works!\n</p>\n"

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".icon-large {\r\n    font-size: 24px;\r\n    margin: auto;\r\n}\r\n\r\n.alert-none {\r\n    height: 36px;\r\n}\r\n\r\n.block-1 {\r\n    width: 8rem;\r\n    height: 8rem;\r\n    text-align: justify;\r\n    background-color: #e8e9e8;\r\n    border-right: 5px solid rgb(54, 54, 185);\r\n}\r\n\r\n.block-2 {\r\n    width: 10rem;\r\n    height: 8rem;\r\n    text-align: justify;\r\n    border: 2px solid gray;\r\n    border-radius: 6px;\r\n}\r\n\r\n.text-name {\r\n    height: 3rem;\r\n}\r\n\r\n.text-input {\r\n    max-height: 2rem;\r\n    width: 5rem;\r\n}\r\n\r\n.bg-full {\r\n    background-color: #80b3ff;\r\n}\r\n\r\n.bg-not-full {\r\n    background-color: #f57e7e;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsd0NBQXdDO0FBQzVDOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsV0FBVztBQUNmOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaWNvbi1sYXJnZSB7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbi5hbGVydC1ub25lIHtcclxuICAgIGhlaWdodDogMzZweDtcclxufVxyXG5cclxuLmJsb2NrLTEge1xyXG4gICAgd2lkdGg6IDhyZW07XHJcbiAgICBoZWlnaHQ6IDhyZW07XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U4ZTllODtcclxuICAgIGJvcmRlci1yaWdodDogNXB4IHNvbGlkIHJnYig1NCwgNTQsIDE4NSk7XHJcbn1cclxuXHJcbi5ibG9jay0yIHtcclxuICAgIHdpZHRoOiAxMHJlbTtcclxuICAgIGhlaWdodDogOHJlbTtcclxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCBncmF5O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG59XHJcblxyXG4udGV4dC1uYW1lIHtcclxuICAgIGhlaWdodDogM3JlbTtcclxufVxyXG5cclxuLnRleHQtaW5wdXQge1xyXG4gICAgbWF4LWhlaWdodDogMnJlbTtcclxuICAgIHdpZHRoOiA1cmVtO1xyXG59XHJcblxyXG4uYmctZnVsbCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODBiM2ZmO1xyXG59XHJcblxyXG4uYmctbm90LWZ1bGwge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1N2U3ZTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _assets_segments_data_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/segments_data.json */ "./src/assets/segments_data.json");
var _assets_segments_data_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../assets/segments_data.json */ "./src/assets/segments_data.json", 1);



let AppComponent = class AppComponent {
    constructor() {
        this.title = 'segment';
        this.filterEnabled = false;
        this.fullAssigned = false;
        this.categories = _assets_segments_data_json__WEBPACK_IMPORTED_MODULE_2__;
    }
    inputChange(catetogy, item) {
        catetogy.total = 0;
        catetogy.elements.forEach(element => {
            catetogy.total = catetogy.total + element.elementValue;
        });
        //
        if (item.elementValue < 0 || item.elementValue > 100 || item.elementValue === null) {
            item.error = true;
        }
        else {
            item.error = false;
        }
    }
    filter() {
        this.filterEnabled = true;
        this.fullAssigned = true;
        this.categories.forEach(x => {
            x.total = 0;
            x.elements.forEach(element => {
                if (element.elementValue !== null) {
                    x.total = x.total + element.elementValue;
                }
            });
            if (x.total !== 100 && x.elements.length > 0) {
                this.fullAssigned = false;
            }
        });
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _helper_helper_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./helper/helper.component */ "./src/app/helper/helper.component.ts");









let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
            _helper_helper_component__WEBPACK_IMPORTED_MODULE_8__["HelperComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"]
        ],
        providers: [{ provide: _angular_common__WEBPACK_IMPORTED_MODULE_4__["APP_BASE_HREF"], useValue: '/' }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/helper/helper.component.css":
/*!*********************************************!*\
  !*** ./src/app/helper/helper.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlbHBlci9oZWxwZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/helper/helper.component.ts":
/*!********************************************!*\
  !*** ./src/app/helper/helper.component.ts ***!
  \********************************************/
/*! exports provided: HelperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelperComponent", function() { return HelperComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HelperComponent = class HelperComponent {
    constructor() { }
    ngOnInit() {
    }
};
HelperComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-helper',
        template: __webpack_require__(/*! raw-loader!./helper.component.html */ "./node_modules/raw-loader/index.js!./src/app/helper/helper.component.html"),
        styles: [__webpack_require__(/*! ./helper.component.css */ "./src/app/helper/helper.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], HelperComponent);



/***/ }),

/***/ "./src/assets/segments_data.json":
/*!***************************************!*\
  !*** ./src/assets/segments_data.json ***!
  \***************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, default */
/***/ (function(module) {

module.exports = [{"categoryName":"Application 1","categorySymbol":"App1","total":0,"elements":[{"elementName":"Segment 1","elementValue":null},{"elementName":"Segment 2","elementValue":null}]},{"categoryName":"Application 2","categorySymbol":"App2","total":0,"elements":[{"elementName":"Segment 1","elementValue":null},{"elementName":"Segment 2","elementValue":null},{"elementName":"Segment 3","elementValue":null}]},{"categoryName":"Application 3","categorySymbol":"App3","total":0,"elements":[{"elementName":"Segment 1","elementValue":null},{"elementName":"Segment 2","elementValue":null},{"elementName":"Segment 3","elementValue":null}]},{"categoryName":"Application 4","categorySymbol":"App4","total":0,"elements":[{"elementName":"Segment 1","elementValue":null},{"elementName":"Segment 2","elementValue":null},{"elementName":"Segment 3","elementValue":null},{"elementName":"Segment 4","elementValue":null}]},{"categoryName":"Application 5","categorySymbol":"App5","total":0,"elements":[{"elementName":"Segment 1","elementValue":null}]},{"categoryName":"Application 6","categorySymbol":"App6","total":0,"elements":[]}];

/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Upwork_Test\segment\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map