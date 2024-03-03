"use client";
import React from "react";
import styles from "./TaskList.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

export default function TaskList() {
  const tasks = useSelector((state: RootState) => state.tasks);

  console.log(tasks);
  return <div className={styles.wrapper}>TaskList</div>;
}
