"use strict";
var router_1 = require('@angular/router');
var department_dashboard_1 = require('../components/departments/department.dashboard');
var department_create_1 = require('../components/departments/department.create');
var department_update_1 = require('../components/departments/department.update');
var depatmentRoutes = [
    {
        path: '',
        component: department_dashboard_1.DepartmentDashboardComponent
    },
    {
        path: 'department',
        component: department_dashboard_1.DepartmentDashboardComponent,
        children: [
            {
                path: '',
                component: department_create_1.DepartmentCreateComponent
            },
            {
                path: 'update',
                component: department_update_1.DepartmentUpdateComponent
            }
        ]
    }
];
exports.routes = depatmentRoutes.slice();
exports.Route_Providers = [
    router_1.provideRouter(exports.routes)
];
//# sourceMappingURL=route.config.js.map