import { createContext, useContext, useState } from "react";

const Taskcontext = createContext();


export const TaskProveder = ({ children }) => {
  const [task, setTask] = useState("");
  const [time, setTime] = useState(0);
  const [cheek, setCheek] = useState(false);
  const [selectedtask, setSelectedtask] = useState([]);
  const [onchange, setOnchange] = useState([]);
  const value = {
    task,
    setTask,
    time,
    setTime,
    cheek,
    setCheek,
    selectedtask,
    setSelectedtask,
    onchange,
    setOnchange,
  };
  
  return(
    <Taskcontext.Provider value={value}>
      {children}
    </Taskcontext.Provider>
  ) 
};
export const usetask = () => {
  const context = useContext(Taskcontext);
  return context;
};
