import React from "react";
import { useState } from "react";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import "./App.css";
import { v4 } from "uuid";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "estudar programação",
      description: "Para se tornar um baita programador",
      isCompleted: false,
    },
    {
      id: 2,
      title: "fazer exercícios",
      description: "Manter o corpo saudável e a mente focada",
      isCompleted: false,
    },
    {
      id: 3,
      title: "ler um livro",
      description: "Desenvolver o hábito da leitura e aprender algo novo",
      isCompleted: false,
    },
  ]);

  function onAddTaskSubmit(title, description) {
    const newTask = {
      id: v4(),
      title: title,
      description: description,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
  }

  function onTaskClick(taskId) {
    const newTask = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }

      return task;
    });
    setTasks(newTask);
  }

  function deleteTask(taskId) {
    setTasks(tasks.filter((task) => task.id !== taskId));
  }

  return (
    <div>
      <h1 className="logo">Task Manager</h1>
      <AddTask onAddTaskSubmit={onAddTaskSubmit} />
      <Tasks tasks={tasks} onTaskClick={onTaskClick} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
