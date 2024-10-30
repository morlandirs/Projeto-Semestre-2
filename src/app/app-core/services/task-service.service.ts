import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private taskList: string[] = [];

  constructor() { }

  addTask(task: string) {
    this.taskList.push(task);
    console.log("TAREFAS ADICIONADAS", this.taskList);
  }
}
