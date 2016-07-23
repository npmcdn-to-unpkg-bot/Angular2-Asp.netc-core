import {Component,OnInit, ChangeDetectionStrategy} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {DepartmentService} from '../../service/service.department';
import {Department} from '../../models/model.department';
import { Http} from '@angular/http';
import {PaginatePipe, PaginationControlsCmp, PaginationService} from 'ng2-pagination';
import {Observable} from 'rxjs/Rx';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';



@Component({
    selector: 'department-create',
    templateUrl: './partials/department/department.index.html',
    styleUrls:['./css/department/department.index.css'],
    directives: [ROUTER_DIRECTIVES,PaginationControlsCmp,MD_CARD_DIRECTIVES],
    providers: [DepartmentService, PaginationService],
    pipes: [PaginatePipe],
    changeDetection:ChangeDetectionStrategy.OnPush
})
export class DepartmentIndexComponent implements OnInit {

    departmentList: Department[] = [];
    asyncDepartments: Observable<Department[]>;

    page: number = 1;
    loading: boolean = false;
    total: number;
    perPageItems: number = 2;
    pagePerItemsList = [2,5,10,50];

    constructor(
        private departmentService: DepartmentService
    ) {

        
    }

   

    ngOnInit() {
        this.getPage(1);
    }

    getPage(page: number) {
        debugger;
        this.loading = true;
        this.asyncDepartments = this.departmentService.getAllDepartments(page, this.perPageItems)
            .do((res: any) => {

                this.total = res.totalData;
                this.loading = false;
                this.page = page;

            })
            .map((res:any) => res.departments);

    }
}