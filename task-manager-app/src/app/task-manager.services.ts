import { Injectable, Component } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


//Seperate communication with BE from Angular component
@Injectable()
export class TaskManagerServices {

    constructor(private http: Http) { }

    public getList(): Observable<any> {
        let url = 'api/TaskController/1';
        return this.http.get(url)
            .map(res => res.text() ? res.json() : {});
    }

    public deleteTask(): Observable<any> {
        let url =  'api/TaskController/delete';
        return this.http.get(url)
            .map(res => res.text() ? res.json() : {});
    }
}

export const MOCKDATA: any = {
    Items: [
        { newTask: 'Test 1', completed: false },
        { newTask: 'Test 2', completed: false },
        { newTask: 'Test 2', completed: false }

    ]
}