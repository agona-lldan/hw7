import { createSlice } from "@reduxjs/toolkit";
import { taskStateType } from "@/types/task";
import { v4 as uuidv4 } from "uuid";

const initialState: taskStateType = {};

export const taskSlice = createSlice({
  name: "taskSlice",
  initialState,
  reducers: {
    add: (state, action) => {
      const key = uuidv4();
      state[key] = action.payload;
    },
    status: (state, action) => {
      state[action.payload].done = !state[action.payload].done;
    },
    remove: (state, action) => {
      delete state[action.payload];
    },
  },
});

export const { add, status, remove } = taskSlice.actions;
export default taskSlice.reducer;
