import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import {Department} from '../models/model.department';

@Injectable()
export class DepartmentService {

    private baseUrl: string = "http://localhost:12606/api/Departments";
    constructor(private http: Http) { }

    getAllDepartments(page:number, perPageItems:number) {
        const headers = new Headers();
        headers.append('Access-Control-Allow-Headers', 'Content-Type');
        headers.append('Access-Control-Allow-Methods', 'GET');
        headers.append('Access-Control-Allow-Origin', 'http://localhost:12606/api/departments');
        var options = new RequestOptions({headers: headers});
       
      
        return (this.http.get(this.baseUrl+"?page="+page+"&perPageItems="+perPageItems,options)
            .map((response: Response) => <Department[]>(response.json()))
            .catch(this.handleError));
    }

    getSingleDepartment(id : string) {
        return (this.http.get(this.baseUrl + "/" + id)
            .map((response: Response) => <Department>response.json())
            .catch(this.handleError));

    }

    addDepartment(model:any) {

        return (this.http
            .post(this.baseUrl, model)
            .map((response: Response) => <Department>response.json()));
    }

    updateDepartment(model:Department) {

        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return (this.http
            .put(this.baseUrl, model, options)
            .map((response: Response) => <Department>response.json()));
    }

    deleteDepartment(id:string) {
        return (this.http.delete(this.baseUrl+"/"+id)) ;
    }

    handleError(error: Response) {

        return Observable.throw(error || "Server Error");
    }

}