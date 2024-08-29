webpackJsonp([0],{

/***/ 108:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 108;

/***/ }),

/***/ 149:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 149;

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.pacientes = [];
        this.loadPacientes(); // Carrega pacientes ao inicializar o componente
    }
    HomePage.prototype.showPrompt = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Adicionar Paciente',
            message: "Insira os dados:",
            inputs: [
                { name: 'nome', placeholder: 'Nome' },
                { name: 'data_nasc', placeholder: 'Data de Nascimento' },
                { name: 'cpf', placeholder: 'CPF' },
                { name: 'telefone', placeholder: 'Telefone' },
                { name: 'endereco', placeholder: 'Endereço' },
                { name: 'foto', placeholder: 'URL da foto' },
            ],
            buttons: [
                { text: 'Cancel', handler: function (data) { return console.log('Cancel clicked'); } },
                {
                    text: 'Save',
                    handler: function (data) {
                        console.log('Saved clicked');
                        var paciente = {
                            nome: data.nome,
                            data_nasc: data.data_nasc,
                            telefone: data.telefone,
                            endereco: data.endereco,
                            cpf: data.cpf,
                            foto: data.foto
                        };
                        _this.pacientes.push(paciente); // Adiciona o novo paciente
                        _this.savePacientes(); // Salva a lista atualizada no Local Storage
                    }
                }
            ]
        });
        prompt.present();
    };
    HomePage.prototype.excluir = function (item) {
        console.log('Excluir', item);
        for (var i = 0; i < this.pacientes.length; i++) {
            var element = this.pacientes[i];
            if (element.nome === item.nome) {
                this.pacientes.splice(i, 1); // Remove o paciente do array
                this.savePacientes(); // Salva a lista atualizada no Local Storage
                break; // Sai do loop após encontrar e remover o paciente
            }
        }
    };
    HomePage.prototype.showConfirm = function (item) {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Excluir',
            message: 'Tem certeza que deseja excluir?',
            buttons: [
                { text: 'Não', handler: function () { return console.log('Disagree clicked'); } },
                { text: 'Sim', handler: function () {
                        console.log('Agree clicked');
                        _this.excluir(item); // Chama o método de exclusão
                    }
                }
            ]
        });
        confirm.present();
    };
    HomePage.prototype.savePacientes = function () {
        localStorage.setItem('pacientes', JSON.stringify(this.pacientes));
    };
    HomePage.prototype.loadPacientes = function () {
        var pacientes = localStorage.getItem('pacientes');
        if (pacientes) {
            this.pacientes = JSON.parse(pacientes);
        }
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/fernanda/myApp/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>ProntuárioPRO</ion-title>\n  </ion-navbar>\n</ion-header>\n  \n  <ion-content padding>\n  \n    <button ion-button icon-start block (click)="showPrompt()">\n    <ion-icon name="add"></ion-icon>\n    Adicionar Paciente\n    </button>\n    \n    <ion-list *ngIf="pacientes.length > 0">\n      <ion-item *ngFor="let item of pacientes">\n        <ion-avatar item-start>\n          <img src="data:image/jpeg;base64,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">\n        </ion-avatar>\n        <h2>Paciente: {{item.nome}}</h2>\n        <h5>Data de nascimento: {{item.data_nasc}}</h5>\n        <p>CPF: {{item.cpf}} | Telefone: {{item.telefone}}</p>\n        <p>Endereço: {{item.endereco}}</p>\n        <button ion-button clear item-end color="danger" (click)="showConfirm(item)">Excluir</button>\n      </ion-item>\n    </ion-list>\n\n  \n  <p *ngIf="pacientes.length === 0">Nenhum paciente cadastrado.</p>\n\n</ion-content>\n'/*ion-inline-end:"/home/fernanda/myApp/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = /** @class */ (function () {
    function ListPage(navCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.agenda = [];
        this.loadAgenda(); // Carrega a agenda ao inicializar o componente
    }
    ListPage.prototype.showPrompt = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Agendar',
            message: "Insira os dados para o agendamento:",
            inputs: [
                { name: 'nome', placeholder: 'Nome' },
                { name: 'idade', placeholder: 'Idade' },
                { name: 'triagem', placeholder: 'Triagem' },
                { name: 'telefone', placeholder: 'Telefone' },
                { name: 'dataHora', placeholder: 'Data e Horário', type: 'datetime-local' }
            ],
            buttons: [
                { text: 'Cancel', handler: function (data) { return console.log('Cancel clicked'); } },
                {
                    text: 'Save',
                    handler: function (data) {
                        console.log('Saved clicked');
                        var paciente = {
                            nome: data.nome,
                            idade: data.idade,
                            telefone: data.telefone,
                            triagem: data.triagem,
                            dataHora: data.dataHora // Adiciona data e horário ao objeto paciente
                        };
                        _this.agenda.push(paciente); // Adiciona o novo paciente
                        _this.saveAgenda(); // Salva a lista atualizada no Local Storage
                    }
                }
            ]
        });
        prompt.present();
    };
    ListPage.prototype.excluir = function (item) {
        console.log('Excluir', item);
        for (var i = 0; i < this.agenda.length; i++) {
            var element = this.agenda[i];
            if (element.nome === item.nome) {
                this.agenda.splice(i, 1); // Remove o paciente do array
                this.saveAgenda(); // Salva a lista atualizada no Local Storage
                break; // Sai do loop após encontrar e remover o paciente
            }
        }
    };
    ListPage.prototype.showConfirm = function (item) {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Excluir',
            message: 'Tem certeza que deseja excluir?',
            buttons: [
                { text: 'Não', handler: function () { return console.log('Disagree clicked'); } },
                { text: 'Sim', handler: function () {
                        console.log('Agree clicked');
                        _this.excluir(item); // Chama o método de exclusão
                    }
                }
            ]
        });
        confirm.present();
    };
    ListPage.prototype.saveAgenda = function () {
        localStorage.setItem('agenda', JSON.stringify(this.agenda));
    };
    ListPage.prototype.loadAgenda = function () {
        var agenda = localStorage.getItem('agenda');
        if (agenda) {
            this.agenda = JSON.parse(agenda);
        }
    };
    ListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"/home/fernanda/myApp/src/pages/list/list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Agenda</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <button ion-button icon-start block (click)="showPrompt()">\n    <ion-icon name="add"></ion-icon>\n    Adicionar Agendamento\n  </button>\n\n  <ion-list *ngIf="agenda.length > 0">\n    <ion-item *ngFor="let item of agenda">\n      <ion-avatar item-start>\n        <!-- Adicione um ícone ou imagem se necessário -->\n      </ion-avatar>\n      <h2>Nome: {{item.nome}}</h2>\n      <h5>Idade: {{item.idade}} anos</h5>\n      <p>Triagem: {{item.triagem}}</p>\n      <p>Telefone: {{item.telefone}}</p>\n      <p>Data e Horário: {{item.dataHora}}</p>\n      <button ion-button clear item-end (click)="showConfirm(item)">Excluir</button>\n    </ion-item>\n  </ion-list>\n\n  <p *ngIf="agenda.length === 0">Nenhum agendamento cadastrado.</p>\n</ion-content>\n'/*ion-inline-end:"/home/fernanda/myApp/src/pages/list/list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], ListPage);
    return ListPage;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(218);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__ = __webpack_require__(192);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 261:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'Agenda', component: __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/fernanda/myApp/src/app/app.html"*/'<ion-menu [content]="content" type="overlay">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/home/fernanda/myApp/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[195]);
//# sourceMappingURL=main.js.map