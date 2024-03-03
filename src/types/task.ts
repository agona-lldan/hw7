export type taskStateType = {
  [key: string]: taskType;
};

export type taskType = {
  done: boolean;
  value: string;
  color: number;
  date: number;
};
