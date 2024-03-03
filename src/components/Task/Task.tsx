import React from "react";
import styles from "./Task.module.scss";
import { taskType } from "@/types/task";
import getFormattedDate from "@/utils/getFormattedDate";
import { colors } from "@/constants/colors";
import { Check, Trash, X } from "lucide-react";

export default function Task({
  item,
  handleStatus,
  handleRemove,
}: {
  item: [string, taskType];
  handleStatus: (key: string) => void;
  handleRemove: (key: string) => void;
}) {
  return (
    <div
      className={styles.wrapper}
      style={{
        backgroundColor: colors[item[1].color] + "46",
      }}
    >
      <div className={styles.top}>
        <button
          className={styles.btn}
          onClick={() => handleStatus(item[0])}
          style={
            item[1].done
              ? {
                  backgroundColor: colors[item[1].color],
                }
              : {}
          }
        >
          {item[1].done ? (
            <Check size={20} color="#fff" />
          ) : (
            <X size={20} color="#575757" />
          )}
        </button>
        <div className={styles.value}>{item[1].value}</div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.date}>{getFormattedDate(item[1].date)}</div>
        <button onClick={() => handleRemove(item[0])}>
          <Trash size={12} />
        </button>
      </div>
    </div>
  );
}
