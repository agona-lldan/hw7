import { taskStateType, taskType } from "@/types/task";
import { makeAutoObservable } from "mobx";
import { v4 as uuidv4 } from "uuid";
export class Store {
  tasks: taskStateType = {};
  constructor() {
    makeAutoObservable(this);
  }
  add(task: taskType) {
    const key = uuidv4();
    this.tasks[key] = task;
  }

  status(key: string) {
    this.tasks[key].done = !this.tasks[key].done;
  }

  remove(key: string) {
    delete this.tasks[key];
  }
}

export const store = new Store();
