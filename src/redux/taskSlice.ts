import { createSlice } from "@reduxjs/toolkit";
import getRandomString from "@/utils/getRandomString";
import { taskStateType } from "@/types/task";

const initialState: taskStateType = {};

export const taskSlice = createSlice({
  name: "taskSlice",
  initialState,
  reducers: {
    add: (state, action) => {
      const key = getRandomString(Object.keys(state));
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
