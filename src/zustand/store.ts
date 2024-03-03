import { create } from "zustand";
import { taskStateType, taskType } from "@/types/task";
import { v4 as uuidv4 } from "uuid";

type StoreType = {
  tasks: taskStateType;
  add: (task: taskType) => void;
  remove: (key: string) => void;
  status: (key: string) => void;
};

export const store = create<StoreType>((set, get) => ({
  tasks: {},
  add: (task) => {
    const key = uuidv4();
    const { tasks } = get();
    tasks[key] = task;
    set(tasks);
  },
  status: (key) => {
    const { tasks } = get();
    tasks[key].done = !tasks[key].done;
    set(tasks);
  },
  remove: (key) => {
    const { tasks } = get();
    delete tasks[key];
    set(tasks);
  },
}));
