"use client";
import React, { createContext, ReactNode, useContext } from "react";
import { store } from "@/mobx/store";

export const StoreContext = createContext(store);

export const MobxProvider = ({ children }: { children: ReactNode }) => {
  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};
export const useStore = () => useContext(StoreContext);
