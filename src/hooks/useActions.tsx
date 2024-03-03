import { useDispatch } from "react-redux";
import { add, remove, status } from "@/redux/taskSlice";

export default function useActions() {
  const dispatch = useDispatch();

  const addTasks = (value: string, color: number) => {
    const date = new Date().getTime();
    dispatch(
      add({
        done: false,
        value,
        color,
        date,
      }),
    );
  };

  const statusTasks = (key: string) => {
    dispatch(status(key));
  };

  const removeTasks = (key: string) => {
    dispatch(remove(key));
  };

  return { addTasks, statusTasks, removeTasks };
}
