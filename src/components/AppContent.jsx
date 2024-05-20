import React, { useState } from "react";
import ToDoForm from "./ToDoForm";
import ToDoItem from "./ToDoItem";

const AppContent = () => {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("todo")) || []
  );

  const [newTask, setNewTask] = useState("");

  const setAndSaveTasks = (newTasks) => {
    setTasks(newTasks);
    localStorage.setItem("todo", JSON.stringify(newTasks));
  };

  const addTask = (task) => {
    const id = tasks.length ? tasks[tasks.length - 1].id + 1 : 1;
    const newItem = { id, completed: false, task };
    const toDos = [...tasks, newItem];
    setAndSaveTasks(toDos);
    console.log(toDos);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newTask) return;
    addTask(newTask);
    setNewTask("");
  };

  const handleCheck = (id) => {
    const toDos = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setAndSaveTasks(toDos);
  };

  const deleteTask = (id) => {
    const toDos = tasks.filter((task) => task.id !== id);
    setAndSaveTasks(toDos);
  };

  const editTask = (id, newTodo) => {
    const editedTask = tasks.map((task) => {
      if (id === task.id) {
        return { ...task, task: newTodo };
      }
      return task;
    });
    setAndSaveTasks(editedTask);
  };

  return (
    <div className="appContent">
      <header>
        <h1 className="title">Todo List</h1>
      </header>
      <ToDoForm
        newTask={newTask}
        setNewTask={setNewTask}
        handleSubmit={handleSubmit}
      />

      {tasks.length ? (
        <ToDoItem
          tasks={tasks}
          handleCheck={handleCheck}
          deleteTask={deleteTask}
          editTask={editTask}
        />
      ) : (
        <p className="message">Add tasks to see your to do's</p>
      )}
    </div>
  );
};

export default AppContent;
