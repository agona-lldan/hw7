"use client";
import React from "react";
import styles from "./TaskList.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import Task from "@/components/Task/Task";

export default function TaskList() {
  const tasks = useSelector((state: RootState) => state.tasks);

  return (
    <div className={styles.wrapper}>
      {Object.entries(tasks)
        .sort((a, b) => a[1].date - b[1].date)
        .map((e, i) => (
          <Task key={i} item={e} />
        ))}
    </div>
  );
}
