import {provideRouter, RouterConfig} from '@angular/router';
import {DepartmentDashboardComponent} from '../components/departments/department.dashboard';
import {DepartmentCreateComponent} from '../components/departments/department.create';
import {DepartmentUpdateComponent} from '../components/departments/department.update';
import {DepartmentIndexComponent} from '../components/departments/department.index';



const depatmentRoutes: RouterConfig = [
    {
        path: '',
        component:DepartmentDashboardComponent
    },
    {
        path: 'department',
        component: DepartmentDashboardComponent,
        children: [
            {
                path: '',
                component:DepartmentIndexComponent
            },
            {
                path: 'create',
                component: DepartmentCreateComponent
            },
            {
                path: 'update',
                component:DepartmentUpdateComponent
            }
        ]

    }
];

export const routes: RouterConfig = [
    ...depatmentRoutes
   
];

export const Route_Providers = [
   provideRouter(routes)
];


