import React from "react";
import styles from "./ColorInput.module.scss";
import { colors } from "@/constants/colors";

export default function ColorInput({
  current,
  change,
}: {
  current: number;
  change: (index: number) => void;
}) {
  return (
    <div className={styles.wrapper}>
      {colors.map((e, i) => {
        return (
          <button
            key={i}
            style={{
              backgroundColor: e,
            }}
            onClick={() => change(i)}
            className={
              i === current
                ? styles.active + " " + styles.button
                : styles.button
            }
          />
        );
      })}
    </div>
  );
}
