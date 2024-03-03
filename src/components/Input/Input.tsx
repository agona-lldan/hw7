"use client";
import React from "react";
import styles from "./Input.module.scss";
import { SendHorizontal } from "lucide-react";
import ColorInput from "@/components/ColorInput/ColorInput";
import useActions from "@/hooks/useActions";

export default function Input() {
  const [colorsIndex, setColorsIndex] = React.useState(0);
  const [value, setValue] = React.useState("");

  const { addTasks } = useActions();

  const handleAdd = () => {
    if (value.trim().length > 0) {
      addTasks(value, colorsIndex);
      setValue("");
    }
  };

  return (
    <div className={styles.wrapper}>
      <input
        type="text"
        className={styles.input}
        placeholder="Задача..."
        value={value}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            handleAdd();
          }
        }}
        onChange={(e) => setValue(e.target.value)}
      />
      <ColorInput current={colorsIndex} change={setColorsIndex} />
      <button className={styles.btn} onClick={() => handleAdd()}>
        <SendHorizontal color="#000" />
      </button>
    </div>
  );
}
