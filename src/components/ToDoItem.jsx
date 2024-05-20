import React, { useState } from "react";
import { FaTrash, FaEdit } from "react-icons/fa";

const ToDoItem = (props) => {
  const { tasks, handleCheck, deleteTask, editTask } = props;

  const [editingTaskId, setEditingTaskId] = useState(null);
  const [editedTodo, setEditedTodo] = useState("");

  const handleTaskUpdate = (e) => {
    e.preventDefault();
    editTask(editingTaskId, editedTodo);
    setEditedTodo("");
    setEditingTaskId(null);
    console.log(editedTodo);
  };

  return (
    <div className="todoLists">
      {tasks.map((task) => (
        <div key={task.id} className="item">
          {editingTaskId === task.id ? (
            <form onSubmit={handleTaskUpdate} className="todoForm">
              <input
                id={task.id}
                value={editedTodo}
                onChange={(e) => setEditedTodo(e.target.value)}
                type="text"
                placeholder="Update task"
                className="formInput"
              />
              <button
                type="button"
                onClick={() => setEditingTaskId(null)}
                className="button"
              >
                Cancel
              </button>
              <button type="submit" className="button">
                Update Task
              </button>
            </form>
          ) : (
            <div className="todoDetails">
              <input
                id={task.id}
                type="checkbox"
                className="checkbox"
                onChange={() => handleCheck(task.id)}
                checked={task.completed}
              />
              <label
                htmlFor={task.id}
                onDoubleClick={() => handleCheck(task.id)}
              >
                <p className={`task ${task.completed ? "completed" : ""}`}>
                  {task.task}
                </p>
              </label>

              <div className="todoActions">
                <button
                  aria-label="Delete Task"
                  onClick={() => deleteTask(task.id)}
                >
                  <FaTrash className="delete" width={24} height={24} />
                </button>

                <button aria-label="Update Task">
                  <FaEdit className="edit" width={24} height={24} />
                </button>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ToDoItem;
