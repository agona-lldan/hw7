import React from "react";
import styles from "./TaskList.module.scss";
import { taskStateType } from "@/types/task";
import { observer } from "mobx-react-lite";
import { TaskMobx } from "@/components/Task/TaskMobx";
// mobx напрягает со своим observer
export const TaskListMobx = observer(
  ({
    tasks,
    handleStatus,
    handleRemove,
  }: {
    tasks: taskStateType;
    handleStatus: (key: string) => void;
    handleRemove: (key: string) => void;
  }) => {
    return (
      <div className={styles.wrapper}>
        {Object.entries(tasks)
          .sort((a, b) => a[1].date - b[1].date)
          .map((e, i) => (
            <TaskMobx
              key={i}
              item={e}
              handleRemove={handleRemove}
              handleStatus={handleStatus}
            />
          ))}
      </div>
    );
  },
);
