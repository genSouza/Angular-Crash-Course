import { Task } from './../../Task';
import { TaskService } from './../../services/task.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private service: TaskService) {}

  ngOnInit(): void {
    this.service.getTasks().subscribe((tasks) => {
      this.tasks = tasks;
    });
  }

  deleteTask(task: Task) {
    this.service.deleteTask(task).subscribe(() => this.ngOnInit());
  }

  toggleReminder(task: Task) {
    task.reminder = !task.reminder;
    this.service.updateTaskReminder(task).subscribe();
  }

  addTask(task: Task) {
    this.service.addTask(task).subscribe(() => this.ngOnInit());
  }
}
