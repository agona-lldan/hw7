import Input from "@/components/Input/Input";
import TaskList from "@/components/TaskList/TaskList";
import styles from "./page.module.scss";
export default function Home() {
  return (
    <div className={styles.wrapper}>
      <Input />
      <TaskList />
    </div>
  );
}
