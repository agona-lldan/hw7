import React from "react";
import { observer } from "mobx-react-lite";
import Input from "@/components/Input/Input";
import TaskList from "@/components/TaskList/TaskList";
import { useStore } from "@/providers/MobxProvider";

export const Mobx = observer(() => {
  const store = useStore();
  const handleAdd = (value: string, color: number) => {
    const date = new Date().getTime();
    store.add({
      done: false,
      value,
      color,
      date,
    });
  };

  const handleStatus = (key: string) => {
    store.status(key);
  };
  const handleRemove = (key: string) => {
    store.remove(key);
  };
  return (
    <>
      <Input handleAdd={handleAdd} />
      <TaskList
        tasks={store.tasks}
        handleStatus={handleStatus}
        handleRemove={handleRemove}
      />
    </>
  );
});
