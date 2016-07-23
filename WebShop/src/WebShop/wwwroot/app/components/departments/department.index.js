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
var router_1 = require('@angular/router');
var service_department_1 = require('../../service/service.department');
var ng2_pagination_1 = require('ng2-pagination');
var card_1 = require('@angular2-material/card');
var DepartmentIndexComponent = (function () {
    function DepartmentIndexComponent(departmentService) {
        this.departmentService = departmentService;
        this.departmentList = [];
        this.page = 1;
        this.loading = false;
        this.perPageItems = 2;
        this.pagePerItemsList = [2, 5, 10, 50];
    }
    DepartmentIndexComponent.prototype.ngOnInit = function () {
        this.getPage(1);
    };
    DepartmentIndexComponent.prototype.getPage = function (page) {
        var _this = this;
        debugger;
        this.loading = true;
        this.asyncDepartments = this.departmentService.getAllDepartments(page, this.perPageItems)
            .do(function (res) {
            _this.total = res.totalData;
            _this.loading = false;
            _this.page = page;
        })
            .map(function (res) { return res.departments; });
    };
    DepartmentIndexComponent = __decorate([
        core_1.Component({
            selector: 'department-create',
            templateUrl: './partials/department/department.index.html',
            styleUrls: ['./css/department/department.index.css'],
            directives: [router_1.ROUTER_DIRECTIVES, ng2_pagination_1.PaginationControlsCmp, card_1.MD_CARD_DIRECTIVES],
            providers: [service_department_1.DepartmentService, ng2_pagination_1.PaginationService],
            pipes: [ng2_pagination_1.PaginatePipe],
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }), 
        __metadata('design:paramtypes', [service_department_1.DepartmentService])
    ], DepartmentIndexComponent);
    return DepartmentIndexComponent;
}());
exports.DepartmentIndexComponent = DepartmentIndexComponent;
//# sourceMappingURL=department.index.js.map