import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';

@Component({
    selector: 'department-create',
    template: `
     <a [routerLink]="['create']">Create</a>
  <a [routerLink]="['update']">Update</a>
`,
directives:[ROUTER_DIRECTIVES]
})
export class DepartmentIndexComponent {
}