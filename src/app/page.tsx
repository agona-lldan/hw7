"use client";
import styles from "./page.module.scss";
import Redux from "@/components/Redux";
import { Mobx } from "@/components/Mobx";
import Zustand from "@/components/Zustand";
import React from "react";

const StateList = ["Redux", "MobX", "Zustand"];
const StateComponentsList = [Redux, Mobx, Zustand];
export default function Home() {
  const [stateIndex, setStateIndex] = React.useState(0);
  return (
    <div className={styles.wrapper}>
      <div className={styles.choice}>
        {StateList.map((e, i) => (
          <button
            className={
              i === stateIndex ? styles.active + " " + styles.btn : styles.btn
            }
            key={e}
            onClick={() => setStateIndex(i)}
          >
            {e}
          </button>
        ))}
      </div>
      {StateComponentsList.map((Component, i) => {
        if (i === stateIndex) {
          return <Component key={i} />;
        }
      })}
    </div>
  );
}
