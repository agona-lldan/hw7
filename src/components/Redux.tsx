import React from "react";
import Input from "@/components/Input/Input";
import TaskList from "@/components/TaskList/TaskList";
import { useDispatch, useSelector } from "react-redux";
import { add, remove, status } from "@/redux/taskSlice";
import { RootState } from "@/redux/store";

export default function Redux() {
  const tasks = useSelector((state: RootState) => state.tasks);
  const dispatch = useDispatch();
  const handleAdd = (value: string, color: number) => {
    const date = new Date().getTime();
    dispatch(
      add({
        done: false,
        value,
        color,
        date,
      }),
    );
  };

  const handleStatus = (key: string) => {
    dispatch(status(key));
  };
  const handleRemove = (key: string) => {
    dispatch(remove(key));
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
