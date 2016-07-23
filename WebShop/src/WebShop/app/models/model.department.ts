export interface IDepartment {

    id: string;
    departmentName:string;
}

export class Department implements IDepartment {

    constructor(
        public id: string,
    public departmentName:string

    ) { }
}