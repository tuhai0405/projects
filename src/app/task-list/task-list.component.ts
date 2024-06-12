import { Component, OnInit } from '@angular/core';
import { ITask } from '../itask';
import { CommonModule } from '@angular/common';

import { RouterLink } from '@angular/router';
import { DulieuService } from '../dulieu.service';
@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [ CommonModule,RouterLink],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent implements OnInit{
  constructor(private http:DulieuService){}
  list_task:ITask[]=[]
ngOnInit(): void {
  fetch(`http://localhost:3000/task`).then(res=>res.json()).then ((data)=> {
    console.log('hello');
    this.list_task= data as ITask[];
  })
}

xoatask(id:any){
this.http.xoaTask(id).subscribe((response)=>{
  console.log('tuhai');
})
}
  
  }
