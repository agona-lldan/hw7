import React from "react";
import Input from "@/components/Input/Input";
import TaskList from "@/components/TaskList/TaskList";
import { store } from "@/zustand/store";

export default function Zustand() {
  const [tasks, add, remove, status] = store((state) => [
    state.tasks,
    state.add,
    state.remove,
    state.status,
  ]);
  const handleAdd = (value: string, color: number) => {
    const date = new Date().getTime();
    add({
      done: false,
      value,
      color,
      date,
    });
  };

  const handleStatus = (key: string) => {
    status(key);
  };
  const handleRemove = (key: string) => {
    remove(key);
  };

  return (
    <>
      <Input handleAdd={handleAdd} />
      <TaskList
        tasks={tasks}
        handleStatus={handleStatus}
        handleRemove={handleRemove}
      />
    </>
  );
}
