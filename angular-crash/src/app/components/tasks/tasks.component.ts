import { TaskService } from './../../services/task.service';
import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks: Task[] = [];

  constructor(private service: TaskService) { }

  ngOnInit(): void {
    this.tasks = this.service.getTasks();
  }

}
