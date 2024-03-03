import React from "react";
import styles from "./TaskList.module.scss";
import Task from "@/components/Task/Task";
import { taskStateType } from "@/types/task";

export default function TaskList({
  tasks,
  handleStatus,
  handleRemove,
}: {
  tasks: taskStateType;
  handleStatus: (key: string) => void;
  handleRemove: (key: string) => void;
}) {
  return (
    <div className={styles.wrapper}>
      {Object.entries(tasks)
        .sort((a, b) => a[1].date - b[1].date)
        .map((e, i) => (
          <Task
            key={i}
            item={e}
            handleRemove={handleRemove}
            handleStatus={handleStatus}
          />
        ))}
    </div>
  );
}
