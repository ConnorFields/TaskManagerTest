import { Component, Input, OnInit } from '@angular/core';

//Application Imports
import { TaskManagerServices } from './task-manager.services';

@Component({
    selector: 'task-app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css'],
    providers: [TaskManagerServices]
})

export class AppComponent implements OnInit {

    //Global Variables
    newTask: string;
    tasks;
    taskModel: any;

    constructor(private _service: TaskManagerServices) {
        this.newTask = '';
        this.tasks = [];
    }

    ngOnInit() {
        this._service.getList().subscribe(
            data => {
                console.log(data);
            }
        )
    }

    addTask() {
        //defining data structure
        this.taskModel = {
            newTask: this.newTask,
            completed: false
        }
        //add task to list
        this.tasks.push(this.taskModel);
        this.newTask = '';
        event.preventDefault();
    }

    //cutting item from array by index
    deleteTask(index) {
        this.tasks.splice(index, 1);
        //would pass id as payload, having parameter inside service method to delete correct item
        //this._service.deleteTask(payload);
    }

    deleteSelectedTask() {
        //need ES5 to reverse loop in order to splice by index
        for (let i = (this.tasks.length - 1); i > -1; i--) {
            if (this.tasks[i].completed) {
                this.tasks.splice(i, 1);
            }
        }
        //If API was connected, could delete tasks via asynchronous arrow function
        //this._service.deleteTask(payload).subscribe(
        //    data => { });
    }

}
