"use client";
import React from "react";
import styles from "./Input.module.scss";
import { SendHorizontal } from "lucide-react";
import ColorInput from "@/components/ColorInput/ColorInput";

export default function Input({
  handleAdd,
}: {
  handleAdd: (value: string, color: number) => void;
}) {
  const [colorsIndex, setColorsIndex] = React.useState(0);
  const [value, setValue] = React.useState("");

  const add = () => {
    if (value.trim().length > 0) {
      handleAdd(value, colorsIndex);
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
            add();
          }
        }}
        onChange={(e) => setValue(e.target.value)}
      />
      <ColorInput current={colorsIndex} change={setColorsIndex} />
      <button className={styles.btn} onClick={() => add()}>
        <SendHorizontal color="#000" />
      </button>
    </div>
  );
}
