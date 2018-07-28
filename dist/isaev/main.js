(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  about works!\n</p>\n"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/about/cv/cv.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/cv/cv.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/about/cv/cv.component.html":
/*!********************************************!*\
  !*** ./src/app/about/cv/cv.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\n  <div class=\"container\">\n    <h1>Isaev Ilya, Java Programmer and more</h1>\n    <div class=\"row\">\n      <div class=\"col-md-4\">\n        <img src=\"./my_photo.jpg\" width=\"300px\" height=auto align=\"left\">\n      </div>\n      <div class=\"col-md-8\">\n        <p>\n        <h3>Hi, my name is Isaev Ilya.</h3>\n        <dl>\n          <dt>Education</dt>\n          <dd class=\"mytext\">\n            I am a 3 course student at Computer Technologies Department in ITMO University.\n          </dd>\n          <dt>Skills</dt>\n          <dd class=\"mytext\">\n            Good knowledge of classic algorithms(sorting, search, graphs etc.)\n            J2SE, J2EE (servlets, JSP, JSTL, Spring (MVC mostly)), JUnit (a little bit)\n            Other languages: some C/C++, some JS (including NodeJS)\n            Databases: MySQL, SQLite, H2; ORM: ORMLite;\n            Git\n            JQuery, Bootstrap\n            Android development (a little bit)\n            Fluent Linux user\n            Upper-intermediate English\n          </dd>\n          <dt>Work experience</dt>\n          <dd class=\"mytext\">\n            July, 2013 - March, 2014 - LoyaltyPlant, Junior Developer\n            July, 2014 - September, 2014 - JetBrains, Intern (summer internship)\n          </dd>\n          <dt>Projects</dt>\n          <dd class=\"mytext\">See my <a href=\"https://github.com/isae\">Github page</a>\n          </dd>\n          <dt>Misc</dt>\n          <dd class=\"mytext\">\n            Communicable...etc<br> I like coffee.<br> I like to work on back-end.\n          </dd>\n          <dt>Contacts</dt>\n          <dd class=\"mytext\">\n            <address>\n              I live in beautiful city of Saint-Petersburg<br>\n              Call me: <strong>8-950-009-56-46</strong><br>\n              Or e-mail me: <a href=\"mailto:isaev.ilya.1994@gmail.com\">isaev.ilya.1994@gmail.com</a><br>\n              Or contact me using <a href=\"https://vk.com/ilya_isaev\">VK</a>\n            </address>\n          </dd>\n        </dl>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/about/cv/cv.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/cv/cv.component.ts ***!
  \******************************************/
/*! exports provided: CvComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CvComponent", function() { return CvComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CvComponent = /** @class */ (function () {
    function CvComponent() {
    }
    CvComponent.prototype.ngOnInit = function () {
    };
    CvComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cv',
            template: __webpack_require__(/*! ./cv.component.html */ "./src/app/about/cv/cv.component.html"),
            styles: [__webpack_require__(/*! ./cv.component.css */ "./src/app/about/cv/cv.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CvComponent);
    return CvComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Hi. My name is Ilya and I am programmer.</h1>\n<h3><a href=\"./beej_guide/index.html\">My russian translation of famous \"Beej`s guide to network programming\" -\n  unfinished</a></h3>\n<h3><a href=\"./cv\">My CV</a></h3>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _about_cv_cv_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./about/cv/cv.component */ "./src/app/about/cv/cv.component.ts");
/* harmony import */ var _diy_diy_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./diy/diy.component */ "./src/app/diy/diy.component.ts");
/* harmony import */ var _travel_travel_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./travel/travel.component */ "./src/app/travel/travel.component.ts");
/* harmony import */ var _travel_hibiny2018_hibiny2018_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./travel/hibiny2018/hibiny2018.component */ "./src/app/travel/hibiny2018/hibiny2018.component.ts");
/* harmony import */ var _other_other_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./other/other.component */ "./src/app/other/other.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"],
                _about_cv_cv_component__WEBPACK_IMPORTED_MODULE_5__["CvComponent"],
                _diy_diy_component__WEBPACK_IMPORTED_MODULE_6__["DiyComponent"],
                _travel_travel_component__WEBPACK_IMPORTED_MODULE_7__["TravelComponent"],
                _travel_hibiny2018_hibiny2018_component__WEBPACK_IMPORTED_MODULE_8__["Hibiny2018Component"],
                _other_other_component__WEBPACK_IMPORTED_MODULE_9__["OtherComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/diy/diy.component.css":
/*!***************************************!*\
  !*** ./src/app/diy/diy.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/diy/diy.component.html":
/*!****************************************!*\
  !*** ./src/app/diy/diy.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  diy works!\n</p>\n"

/***/ }),

/***/ "./src/app/diy/diy.component.ts":
/*!**************************************!*\
  !*** ./src/app/diy/diy.component.ts ***!
  \**************************************/
/*! exports provided: DiyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiyComponent", function() { return DiyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DiyComponent = /** @class */ (function () {
    function DiyComponent() {
    }
    DiyComponent.prototype.ngOnInit = function () {
    };
    DiyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-diy',
            template: __webpack_require__(/*! ./diy.component.html */ "./src/app/diy/diy.component.html"),
            styles: [__webpack_require__(/*! ./diy.component.css */ "./src/app/diy/diy.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DiyComponent);
    return DiyComponent;
}());



/***/ }),

/***/ "./src/app/other/other.component.css":
/*!*******************************************!*\
  !*** ./src/app/other/other.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/other/other.component.html":
/*!********************************************!*\
  !*** ./src/app/other/other.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  other works!\n</p>\n"

/***/ }),

/***/ "./src/app/other/other.component.ts":
/*!******************************************!*\
  !*** ./src/app/other/other.component.ts ***!
  \******************************************/
/*! exports provided: OtherComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtherComponent", function() { return OtherComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OtherComponent = /** @class */ (function () {
    function OtherComponent() {
    }
    OtherComponent.prototype.ngOnInit = function () {
    };
    OtherComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-other',
            template: __webpack_require__(/*! ./other.component.html */ "./src/app/other/other.component.html"),
            styles: [__webpack_require__(/*! ./other.component.css */ "./src/app/other/other.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], OtherComponent);
    return OtherComponent;
}());



/***/ }),

/***/ "./src/app/travel/hibiny2018/hibiny2018.component.css":
/*!************************************************************!*\
  !*** ./src/app/travel/hibiny2018/hibiny2018.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/travel/hibiny2018/hibiny2018.component.html":
/*!*************************************************************!*\
  !*** ./src/app/travel/hibiny2018/hibiny2018.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  Дневник похода в Хибины\n\n  День 0.\n\n  Поезд. Сели. В процессе звонил Кирилл, пообещал купить шапку и бухла (3 бутылки карельского бальзама).\n  Серёга ругается на 3кг сахара и не верит, что Ростик что-то взял из еды (а я не могу понять, что конкретно он взял).\n  Жрём дошики, пьём горькое пиво, обсуждаем комплексные числа, матлогику и Умберто Эко. Почему в матлогику и,\n  в целом, в математику такой большой вклад внесли евреи? Каббала - еврейский математический мистицизм, исследования\n  в этой области косвенно двигали математику.\n  Когда говорят о практической ценности науки, возникает вопрос, почему все люди молчаливо согласились, что практика -\n  это обязательно зарабатывание денег. В одной из своих лекций Рома Михайлов говорит, что его практика - это сколько людей сойдёт с ума от его книг.\n  Спросил у Серёги, в чём отличие между психотерапией и мистикой - он сказал, что это одно и то же,\n  просто психотерапия - это на современный, западный манер. Карл Юнг, известный философ, также был и известным мистиком в своё время.\n\n  День 1.\n  Почти не спал ночью, на боковушке возле туалета (нижней) - то дверь хлопает, то поезд громко стучит, то фонарь яркий проедем.\n  Когда ночью въехали в Карелию, стало светло как днём. Всё вокруг было против моего сна. Алёнка утром сказала, что тоже не спала.\n  12:20 - как Серёге удаётся так долго спать? Я так и не смог заснуть, и с 9 утра на ногах (хотя, я выпил кофе),\n  а Серёга всё дрыхнет. Читаю \"Остров\" Хаксли - я был уверен, что это книга про Скарлетт Йохансон(книга, по которой\n  был написан одноимённый фильм), но выяснилось, что нет. Пока мотивом и по стилю напоминает \"Лезвие бритвы\" Ефремова,\n  хотя я читал его 100 лет назад и уже ничего не помню. Забавно пробовать себя в роли \"Хэмингуэя\" (писать путевые записки).\n  ... \"Чума (чёрная смерть) XXго столетия - Серая Жизнь\" (из \"Острова\").\n  ... \"Рождение - отложенная во времени смерть\". (оттуда же)\n  Вечером вылезли из поезда на станции Имандра и встретились с ребятами - оказалось, что Ростислав вёз 6 буханок хлеба,\n  а ещё много сала и сладостей. И несколько взятых с собой банок тушёнки.\n  В самом начале пути от Имандры мы совершили ошибку и пошли не по той стороне реки Гольцовки, пройдя единственную\n  возможность перейти - висячий пешеходный мост. Вернувшись и потратив на крюк не меньше часа, мы наконец начали двигаться\n  в верном направлении. На подходе к финишу я увидел зайца, живого серого зайца. Я так громко воскликнул от удивления,\n  что заяц дал дёру и его пятки успел увидеть только Кирилл, который шёл недалеко от меня.\n  2:50 (хотя, технически, это уже день 3) - мы добрались до стоянки, где нам предстояло переночевать, \"Озеро Изумрудное\" в ущелье \"Аку-Аку\".\n  Озеро было и правда изумрудным - вода была свеже-зелёного цвета. Уже на подходе к стоянке (которая была на противоположной стороне озера)\n  нас ожидал сложный переход по скальной полке над водой - с рюкзаками имелся реальный шанс упасть и сломать шею.\n  Мы разбили палатки и нас ждал заслуженный ужин - кошмар диетолога (макароны с тушёнкой). Одну из банок тушёнки я открыл голыми руками, по обучающему видео Григория Соколова.\n  Пока мы, голодные, ждали ужин и чай, закусили бутербродами с салом, луком и горчицей, запили водой из озера.\n  Таких шуток мой желудок мне не простил и лук с горчицей отозвались изжогой. Как и в Крыму, здесь, в Хибинах,\n  мы с ребятами пили всё, что течёт, полагаясь на интуицию и крепкий желудок. Мы все давно не разжигали очаг и\n  поэтому он плохо поддерживал температуру в котле и макароны готовились очень долго. Легли мы только в 6 утра, солнце стало только ярче.\n\n  День 2.\n  Проснулись мы в 11, а встали только в 12. Кирилл встал первым и попытался разжечь костёр. Потратив 5 спичек, он отчаялся\n  и позвал меня на помощь. Мне было максимально лениво, но Ростислав был готов встать и помочь.\n  NB: (Кирилл просил это не записывать)\n  Ростислав, по всей видимости, был наиболее опытным костровым из нас, а по совместительству, он взял на себя обязанности\n  нашего походного повара. Вместе с Кириллом они разожгли костёр, но горел он плохо, потому что сухих дров на острове не\n  было. Эта проблема преследовала нас на протяжении всего маршрута и, как выяснилось, иметь хотя бы одну газовую горелку\n  чтобы вскипятить чай и ободрить группу - это очень и очень полезно.\n  Тем временем, на противоположный берег озера пришла группа туристов. Она казалась достаточно большой (явно больше нашей).\n  До тех пор, пока мы не стали сворачивать лагерь и собираться, группа сидела на привале на той стороне берега.\n  Потом они начали ухая и визжа перебираться через крутую скалу, окаймляющую озеро, на наш берег. Это оказалась группа\n  молоденьких девушек, ведомая опытным мужиком, Виталием Олеговичем. Девчонки перелезали скалу не по той полке, по которой\n  вчера прошли мы, а взяли выше и выбрали более безопасный, но не менее крутой маршрут. Одна из них после спуска\n  воскликнула \"ну, теперь и рожать не страшно\". Виталий Олегович поздоровался с нами, мы перекинулись с ним парой фраз,\n  он помог Кириллу отрегулировать рюкзак, собрал своих амазонок и двинулся в путь, вниз, по течению ручья, вперёд нас.\n  Собрав остатки вещей, мы двинулись за ними. Наш путь простирался по несколько заболоченной местности вдоль ручья в\n  продолжающемся ущелье Аку-Аку. Несколько раз мы почти догоняли девчонок, но решали остановиться на небольшой привал,\n  чтобы не дышать им в спину. Спустившись в долину, мы, ненадолго остановившись, чтобы Кирилл вырезал(!) мешающую ему часть\n  из подложки ботинка, повернули налево и начали подъём. Нашей целью был перевал \"Юмекор\", ущелье мёртвых. С этим местом\n  связана легенда о гибели шведов, напавших на саамов в конце шестнадцатого столетия. Саамы, по преданию, завалили их\n  камнями с вершины горы. Двигаясь к ущелью, мы увидели вдалеке наших \"спутниц\". Они, по какой-то причине, пошли не прямиком\n  в ущелье, а двигались по крутой стене вдоль ущелья.\n  На подходе к Юмекору мы нашли библиотеку Хибин - тайник с книгами, одной из которых был блокнот с надписями проходящих мимо людей.\n  Мы почитали чужие надписи и Алёна написала нашу: \"Технари в горах. Матмех дольше всех: Рост, Кирилл, Серёга, Алёна. ИТМО ждёт успех: Илюха\".\n  Ниже была нарисована росомаха и подпись \"Росомаха squad\". Росомаха стала нашим локальным мемом - готовясь к походу,\n  Ростислав где-то вычитал, что в Хибинах ходят росомахи. Я слышал только о медведях - и как раз это в дальнейшем оказалось чистой правдой.\n  Закрыв книгу и спрятав все книги в пакет, а пакет - в тайник, мы двинулись дальше. На перевале мы догнали девчонок и мне удалось их\n  немного расспросить, пока мы спускались. Девочки оказались студентками третьего курса географического факультета некоторого\n  ВУЗа (не уточнил), а их поход - студенческой практикой. Ещё до того, как я узнал это, я позволил себе вслух отметить, что\n  у них совершенно неподходящая обувь - все они были в кросовках, в которых было совершенно неудобно спускаться и они постоянно\n  скользили вниз по склону. Судя по всему, это выглядело как издёвка, и, если раньше девочкам не нравились наши жизнерадостные\n  рожи, то теперь это было понятно окончательно и бесповоротно. Они были сердитыми и озлобленными (одна обмолвилась, что они с\n  четырёх утра на ногах, но они не могли идти 8 часов с 4 до 12 от Имандры до Аку-Аку, следовательно, можно предположить,\n  что это студентки МГТУ или его Апатитского филиала. Дальнейшее гугление имени и фамилии преподавателя указывает на Смоленский\n  Государственный Университет, а поезд из Смоленска до Имандры прибывает в 5:35 - что больше соответствует времени прибытия\n  на точку) и вообще, как метко выразился Кирилл, \"двигались на стервозной тяге\".\n\n  ... \"Да я 12 студенток за день до изнеможения довести могу!\" (с) Аниськин Виталий Олегович (в интерпретации Кирилла)\n\n  Обогнав сердитых девчонок, мы, пройдя ещё метров 500, увидели на склоне напротив медведицу с медвежатами. Это выглядело\n  очень мило, хоть и пугающе, потому, что теперь мы знали, что медведи в Хибинах - не страшилка для детей, а самая что ни на\n  есть реальность. Дальше мы шли по лесу, громко распевая песни Короля и Шута, а также песню \"МакДональдс\" группы \"Смех\", которая,\n  кажется, стала неформальным гимном нашего путешестввия. Делали мы это потому, что бурые медведи, вроде как, не любят громких звуков и\n  стараются сторониться больших и шумных групп людей.\n  Наше путешествие на этот день подходило к концу (по крайней мере, так нам казалось). Дойдя до Гольцовки (той самой реки,\n  мост через которую мы пропустили в самом начале), мы столкнулись с большой проблемой - по плану, следующий день мы должны\n  были начинать со стоянки по ту сторону реки - но река была достаточно широкой (порядка 20м) и бурной. Глубина реки варьировалась\n  и мы начали искать место, где бы её можно было перейти. Пройдя немного вниз по реке, мы увидели оранжевую палатку. Сидящий в ней\n  молодой мужик лет тридцати подсказал нам, что альтернатива переправе вброд одна - обойти реку, то есть, подняться вверх по её\n  течению до места, где она разбивается на два ручья поменьше. По карте до этого места было 4.5 километра, а ведь нужно было ещё столько же\n  возвращаться. Ниже по течению в 3 км карта показывала возможность переправы через реку - но раньше мы уже сталкивались с тем, что под\n  такой возможностью подразумевался автомобильный брод (для \"Урала\"), что нам категорически не подходило. Мы решили отложить решение\n  этого вопроса до утра, потому что ни идти 10км, ни форсировать реку в 10 часов вечера никто не хотел.\n  Радостной новостью для нас в тот момент стало то, что кучи дерьма, похожего на козье, но покрупнее, которые мы видели тут и там на\n  протяжении всего маршрута, и опасались, что это медвежье, были оленьими, по словам мужика. Медвежье дерьмо, мы, как выяснилось, тоже\n  видели по дороге, но оно встречалось гораздо реже и представляло собой чёрную лепёху с красными вкраплениями - непереваренными\n  ягодами. Ещё встреченный путешественник - одиночка рассказал нам, что видел медведя прямо на тропе на подъёме на Аку-Аку в том месте\n  где мы проходили, но днём ранее - ему пришлось 40 минут издалека кричать на медведя, чтобы тот ушёл.\n  Сварив на ужин вкуснейшую гречневую кашу с тушёнкой, мы, наконец, легшли спать. Нам повезло, что мы догадались укрыть\n  обувь и рюкзаки от дождя - ночью дождб шёл на протяжении нескольких часов и он однозначно подмочил бы нам всю одежду в рюкзаках, не будь\n  они прикрыты.\n\n  День 3.\n  Проспали мы часов 10, спали как убитые. На улице утром было прохладно и влажно, вылезать из палатки не хотелось от слова\n  совсем. Выбравшись из палатки, стали думать, как развести костёр в условиях окружающей нас сырости. Как назло, только мы\n  накололи дров для костра, как пошёл дождь. Тогда мы (я, Кирилл и Ростислав) устроили кружок токсикоманов: держали свои плащи\n  поверз костра, пока Ростислав поджигал таблетку сухого спирта и ждал, пока возьмутся щепки в очаге. Почти сразу, как мы закончили\n  с розжигом, дождь прекратился. В процессе колки дров для того, чтобы покормить костёр, возникла проблема, которую Серёга\n  охарактеризовал как \"тупа Don't Starve\": верхняя часть черенка топора откололась и топорище отвалилось вместе с оставшейся внутри частью\n  черенка и клином. Это заняло меня не меньше, чем на час: нужно было сострогать верхнюю часть черенка, чтобы его можно было\n  вставить в топорище. Пригодились уроки труда. В процессе починки топора я противно порезал подушечку большого пальца левой руки -\n  из-за большого числа капилляров на этом месте даже от небольшого пореза кровища неприятно лилась.\n  Тем временем, было решено переходить реку вброд - мы нашли место с небольшим течением и, подумав и оценив свои силы,\n  решили форсировать. Нужно было надеть минимум одежды, чтобы не сушить её, при этом, вода с температурой не больше 5 градусов\n  к этому совсем не располагала.\n  ... Форсирование реки было произведено успешно. Ростислав и Кирилл догадались прикрепить свои тапки к ногам изолентой и их\n  тапки успешно пережили брод, а Серёга не стал заморачиваться и потерял тапок в течении. Он шёл первым и тянул верёвку - пожалуй,\n  самая ответственная и сложная роль в переправе. Я шёл замыкающим и собирал верёвку. Незадолго до похода я посмотрел видос\n  Григория Соколова, где он показывал, как форсировать реки при помощи шеста: контринтуитивной деталью в котором являлось то, что\n  шест необходимо не упирать в дно против течения, а прижимать ко дну по течению - так исключается вероятность того, что шест\n  провалится от поехавшего камешка и ты полетишь с рюкзаком в воду вниз по течению.\n  На берегу мы минут 40 переодевали мокрую обувь и одежду и пробавалялись коньячком. Впереди был путь длиной 13 км,\n  время на часах - 19:30. Из-за того, что мы поздно встали и потратили много времени на разведение костра и починку топора,\n  выходили мы тоже поздно. Но в июне-июле на севере полярный день, так что можно идти хоть ночью.\n  Пройля 7 километров, мы добрались до перевала Южный Чоргорр. Перевал представлял собой практически отвесную (как казалось издалека)\n  груду камней высотой метров 100, на первый взгляд, не поддающуюся штурму. Если бы я не знал, что этот перевал не имеет\n  категории и по нему ходят коммерческие маршруты, я бы десять раз подумал, прежде чем вести туда ребят. Многие из камней были\n  шаткими и подвернуть ногу при подъёме было невероятно просто. Но, к счастью, всё прошло успешно - мы поднялись по этим\n  валунам на вершину перевала и увидели там мемориал погибшей в 1973 году студентке и несколько веток с привязанными к ним\n  разноцветными нитками - отметками прошедших экспедиций.\n  На этом наш подъём в гору закончился и начался спуск. Часть расстояния удалось преодолеть бегом коньковым ходом по\n  снежнику, а Серёга даже съехал на туристической сидушке как на ледянке. Снег был плотный и бежать по нему было очень приятно.\n  Наш путь лежал на контрольно-спасательный пункт МЧС \"Куэльпорр\", на котором обещалась баня, связь и некоторые другие блага\n  цивилизации. Пришли мы на место к трём часам ночи. Кирилл ухитрился разбудить МЧСника и, несмотря на его протесты и \"я вообще-то\n  с восьми работаю\", убедить его открыть ему барак и дать дров чтобы посушить свои треккинговые ботинки. Мы же, хоть и смеялись над\n  беготнёй Кирилла и тем, что он что-то мутит вместо того, чтобы разложить палатку и лечь спать, всё же попросили его посушить часть\n  нашей одежды и обувь, которая промокал во время перехода через реку. Потом мы заснули и сон наш был прекрасен.\n\n  День 4.\n  В отличие от нас, Кириллу приходилось всю ночь просыпаться чтобы подкинуть дров в буржуйку. Один раз он крепко заснул и проснулся\n  уже от холода - печка потухла и пришлось её снова разжигать. Из-за этого утром мы увидели его на стоянке невыспавшимся.\n  Сварили завтрак/обед (этот приём пищи мы приняли порядка 13 часов дня). В этот день погода испортилась, часто лил дождь и мы\n  как крысы прятались по своим палаткам. Из-за плохой погоды было решено сделать на этот день днёвку - остаться на базе, отдохнуть и сходить в\n  баню.\n  Кирилл, придя утром, рассказал, что нас нагнал парень, которого мы встретили возле реки днём ранее. Парень назвался\n  Денисом, оказалось, он закончил филфак СпбГУ, работает библиотекарем и у него скоро будет дочка, которую они с женой назовут\n  Мартой в честь немецкого философа Мартина Хайдеггера. Мы пригласили его пойти с нами в баню, чему он, по всей видимости, был рад,\n  потому что у него болело плечо, а баня стоила 3к - дороговато для одного человека. Пока мы парились, я два раза выходил из\n  парилки и окунался в Кунийок - протекающую рядом с базой горную речку.\n  После бани Денис пригласил нас на чай и мы сидели с ним, кушали кашу с завтрака и пили пуэр Дениса и наш бальзам. Парень\n  оказался опытным путешественником и рассказал нам про Саяны и Алтай. На следующий день был запланирован подъём в 9 утра и выход в\n  12, но, когда мы с Ростом ложились спать в три часа ночи, ранний подъём стал казаться маловероятным.\n\n  День 5.\n  Таким он и оказался. Я проспал будильник и, проснувшись в 10, понял, что если я сейчас не встану, не встанет никто.\n  Пришлось вставать. Дров для костра не было и я пошёл в лес за дровами. Утро было очень промозглым, ежеминутно шёл дождь, поэтому\n  сухие дрова в лесу отсутствовали как класс, как и в первый день. Проснулась Алёна и мы разбудили нашего повара-кострового\n  Ростислава, чтобы он начал готовить еду. Разжечь костёр из мокрых дров под идущим дождём было весьма нетривиальной задачей и\n  ребята предложили, чтобы я пошёл на базу МЧС и спёр из дровницы немного сухих дров для растопки (судя по всему, именно из-за\n  дров проживание в бараках было платным). Потоптавшись возле дровницы и посмотрев по сторонам, я начал запихивать поленья под дождевик.\n  Операция прошла успешно. \"На котлах\", как после армии говорил Ростислав, было 12 часов, а мы ещё даже не приступили к трапезе -\n  план нужно было менять.\n  Противная погода, из-за которой нужно было прятаться в палатку или надевать дождевики и прятать костёр, также не способствовала\n  быстрому выходу на маршрут. Как назло, снова сломался топор - часть древка, входящая в топорище, откололась - та же самая поломка,\n  что и двумя днями ранее, но на этот раз в топорище находилась плотная часть древка и ломаться ей не было видимых причин. На этот раз,\n  оставшуюся часть древка уже нельзя было обтесать и поставить топорище - она была слишком короткой и слишком узкой. Кирилл,\n  уже порядком задолбавший бедного МЧСника, пошёл на базу за новым топором. Мужик предложил Кириллу либо выпилить новое древко\n  из дерева, либо поменять наш топор на его - другой топор, не лучше нашего, но, по крайней мере, с целым древком. Мы согласились.\n  Снова пошёл дождь. Растопив, наконец, костёр к трём часам дня, и доедая свою гречку с тушёнкой под дождём, мы обсуждали,\n  не пойти ли нам вместо гор до Кировска по автомобильной дороге, которая шла прямо от базы через перевал Кукисвумчорр к Кировску.\n  Погода не собиралась улучшаться,  а нам предстояло пройти двухдневный маршрут (17км) за один день из-за того, что днём ранее\n  мы устроили днёвку и не двигались по маршруту. Осложняло ситуацию ещё и то, что в горах стоял туман и нам могло потребоваться\n  идти по мокрым камням при низкой видимости. Приняв во внимание все факторы, а также общий депрессняк у группы, вызванный погодой,\n  мы решили пойти в Кировск.\n  Собрались, потратив на это больше времени чем обычно, и вышли порядка 17-18 часов, попрощавшись с Денисом - философом.\n  Начало нашего пути совпадало с запланированным изначально и туда входило посещение водопада Рисйок, который местные и туристы\n  называли просто \"Красивым\". Водопад оказался действительно красивым и самым впечатляющим из водопадов, что мы видел до этого\n  в Хибинах. Ещё через пару километров располагалось место мирных ядерных взрывов Днепр-1 и Днепр-2, которое отличалось пустынностью\n  и скудностью покрывающих его растений. Пофотографировав место, мы двинулись дальше. Дорога, хоть и была втомобильной, предназначалась\n  исключительно для внедорожников - много раз пересекала ручьи, которые нужно было переходить по камешкам, стараясь не намочить\n  ноги. В самом ущелье, после трёх-четырёх часов ходьбы мы устроили привал - жрали \"бутрики\" с салом и \"итальянским соусом\",\n  а ещё заточили три банки холодной тушёнки, чтобы облегчить рюкзаки. Я угощал ребят оставшимися сухофруктами и шоколадкой, но не\n  мог достать ложку - она лежала в котле, в середине рюкзака. Ростислав кормил меня тушнёй с ложечки.\n  В половину первого ночи мы уже спускались по настоящей грунтовой автодороге, по которой поднимались и спускалтсь внушительные\n  красные самосвалы (\"Праздник к нам приходит...\"), перевозившие руду из карьера в горах на перерабатывающий завод в Кировске.\n  В какой-то момент один из спускавшихся самосвалов остановился и добродушный мужик за рулём предложил довезти одного из\n  нас вместе со всеми рюкзаками до Кировска, а остальным дойти налегке или поймать ещё одну подобную \"попутку\". Ехать вызвался\n  Кирилл. К тому времени у меня окончательно сел телефон и мы общались с Кириллом через Ростика. Дошли до остановки и позвонили Кире - водитель\n  довёз его дальше и нам было нужно идти до него не меее 3км. Кроме того, мы узнали, что последний автобус до Апатитов уходит через\n  полчаса и сказали Кириллу садиться на него и ехать с вещами. Сами же мы поймали попутку (легковую) и поехали догонять Кирю.\n  Водитель неслабо впечатлил нас своим музыкальным вкусом и бысто отвёз до автобусной остановки в Кировске, обогнав автобус с Кириллом. Через несколько\n  минут автобус приехал и мы быстро вытащили из салона все наши рюкзаки. Двери закрылись, автобус отъехал и только в этот момент\n  мы поняли, какую глупость сваляли - ведь на этом автобусе мы и сами могли доехать до Апатитов, а теперь нам нужно было вызывать\n  такси.\n  Но, ничего не поделаешь - мы вызвали такси и поехали до ж/д вокзала в Апатитах. Вокзал представлял собой пустой зал с\n  банкоматом, кофейным автоматом и комнатой милиции, из которой кто-то орал. Начали смотреть билеты до Питера и выяснили, что ближайшее\n  свободное место до СПб есть в поезде, идущем вечером следующего дня. Необходимость два дня куковать в Апатитах, этом богом\n  забытом городишке, меня не устраивала и я предложил Серёже и Алёне провести пару дней в Мурманске. Ростислав с Кириллом и\n  так планировали поехать в Мурманск - у низ там ещё жили родственники, а Серёжа отказался - ребята не хотели тратить лишние деньги,\n  а просто хотели отдохнуть, отоспаться, привести себя в порядок и поехать домой.\n  Ростислав купил нам с Кириллом три билета до Мурманска и мы сели в поезд, оставив ребят на вокзале. На часах было 3:27\n  первого июля 2018 года и наше путешествие в Хибины было закончено.\n\n</p>\n"

/***/ }),

/***/ "./src/app/travel/hibiny2018/hibiny2018.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/travel/hibiny2018/hibiny2018.component.ts ***!
  \***********************************************************/
/*! exports provided: Hibiny2018Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hibiny2018Component", function() { return Hibiny2018Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Hibiny2018Component = /** @class */ (function () {
    function Hibiny2018Component() {
    }
    Hibiny2018Component.prototype.ngOnInit = function () {
    };
    Hibiny2018Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-hibiny2018',
            template: __webpack_require__(/*! ./hibiny2018.component.html */ "./src/app/travel/hibiny2018/hibiny2018.component.html"),
            styles: [__webpack_require__(/*! ./hibiny2018.component.css */ "./src/app/travel/hibiny2018/hibiny2018.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Hibiny2018Component);
    return Hibiny2018Component;
}());



/***/ }),

/***/ "./src/app/travel/travel.component.css":
/*!*********************************************!*\
  !*** ./src/app/travel/travel.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/travel/travel.component.html":
/*!**********************************************!*\
  !*** ./src/app/travel/travel.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  travel works!\n</p>\n"

/***/ }),

/***/ "./src/app/travel/travel.component.ts":
/*!********************************************!*\
  !*** ./src/app/travel/travel.component.ts ***!
  \********************************************/
/*! exports provided: TravelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TravelComponent", function() { return TravelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TravelComponent = /** @class */ (function () {
    function TravelComponent() {
    }
    TravelComponent.prototype.ngOnInit = function () {
    };
    TravelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-travel',
            template: __webpack_require__(/*! ./travel.component.html */ "./src/app/travel/travel.component.html"),
            styles: [__webpack_require__(/*! ./travel.component.css */ "./src/app/travel/travel.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TravelComponent);
    return TravelComponent;
}());



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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/iisaev/IdeaProjects/isae.github.io/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map