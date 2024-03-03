import { useDispatch } from "react-redux";
import { add } from "@/redux/taskSlice";

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

  return { addTasks };
}
