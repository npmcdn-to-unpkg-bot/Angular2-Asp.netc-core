"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var core_2 = require('@angular2-material/core');
var sidenav_1 = require('@angular2-material/sidenav');
var toolbar_1 = require('@angular2-material/toolbar');
var button_1 = require('@angular2-material/button');
var progress_bar_1 = require('@angular2-material/progress-bar');
var card_1 = require('@angular2-material/card');
var list_1 = require('@angular2-material/list');
var icon_1 = require('@angular2-material/icon');
var tabs_1 = require('@angular2-material/tabs');
var router_1 = require('@angular/router');
var SidenavComponent = (function () {
    function SidenavComponent() {
    }
    SidenavComponent = __decorate([
        core_1.Component({
            selector: 'side-nav',
            templateUrl: './partials/sidenav.html',
            directives: [
                sidenav_1.MD_SIDENAV_DIRECTIVES,
                card_1.MD_CARD_DIRECTIVES,
                toolbar_1.MD_TOOLBAR_DIRECTIVES,
                button_1.MD_BUTTON_DIRECTIVES,
                list_1.MD_LIST_DIRECTIVES,
                progress_bar_1.MD_PROGRESS_BAR_DIRECTIVES,
                icon_1.MD_ICON_DIRECTIVES,
                tabs_1.MD_TABS_DIRECTIVES,
                router_1.ROUTER_DIRECTIVES
            ],
            providers: [[core_2.MdUniqueSelectionDispatcher]],
            styleUrls: ['./css/sidenav.css']
        }), 
        __metadata('design:paramtypes', [])
    ], SidenavComponent);
    return SidenavComponent;
}());
exports.SidenavComponent = SidenavComponent;
//# sourceMappingURL=sidenav.component.js.map