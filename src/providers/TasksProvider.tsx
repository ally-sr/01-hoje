import React, { createContext, useState } from 'react';

export const TaskContext = createContext<TaskContextValue | undefined>(undefined);

export interface Tasks {
  id: string;
  title: string;
  isCompleted: boolean;
}

export interface TaskContextValue {
  tasks: Tasks[];
  setTasks: (tasks: Tasks[]) => void;
  addTask: (newTask: Tasks) => void;
  deleteTask: (taskId: string) => void;
  changeTaskState: (taskId: string, isCompleted: boolean) => void;
}

export const TaskProvider = ({ children }: {children: React.ReactNode}) => {


  const [tasks, setTasks] = useState<Tasks[]>([]);

  const addTask = (newTask: Tasks) => {
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (taskId: string) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const changeTaskState = (taskId: string, isCompleted: boolean) => {
    setTasks(tasks.map(task => {
      if (task.id === taskId) {
        return {
          ...task,
          isCompleted,
        };
      }
      return task;
    }))
  }

  const value: TaskContextValue = {
    tasks,
    setTasks,
    addTask,
    deleteTask,
    changeTaskState,
  };


  return (
    <TaskContext.Provider value={value}>
      {children}
    </TaskContext.Provider>
  );
};
