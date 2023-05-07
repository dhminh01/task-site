import { createContext } from "react";

export const TasksiteContext = createContext();

const TasksiteContextProvider = ({ children }) => {

  const tasksiteContextData = {
    
  };
  return (
    <TasksiteContext.Provider value={tasksiteContextData}>
      {children}
    </TasksiteContext.Provider>
  );
};

export default TasksiteContextProvider;
