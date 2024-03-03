import { createSlice } from "@reduxjs/toolkit";
import getRandomString from "@/utils/getRandomString";

type taskStateType = {
  [key: string]: taskType;
};

type taskType = {
  done: boolean;
  value: string;
  color: number;
  date: number;
};

const initialState: taskStateType = {};

export const taskSlice = createSlice({
  name: "taskSlice",
  initialState,
  reducers: {
    add: (state, action) => {
      const key = getRandomString(Object.keys(state));
      state[key] = action.payload;
    },
  },
});

export const { add } = taskSlice.actions;
export default taskSlice.reducer;
