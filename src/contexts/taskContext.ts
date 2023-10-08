import { useContext } from "react";
import { TaskContext } from "../providers/TasksProvider";

export const useTaskContext = () => {
    return useContext(TaskContext);
  };