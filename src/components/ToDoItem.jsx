import React, { useState } from "react";
import { FaTrash, FaEdit } from "react-icons/fa";

const ToDoItem = (props) => {
  const { tasks, handleCheck } = props;

  return (
    <div className="todoLists">
      {tasks.map((task) => (
        <div key={task.id} className="item">
          <div className="todoDetails">
            <input
              id={task.id}
              type="checkbox"
              className="checkbox"
              onChange={() => handleCheck(task.id)}
              checked={task.completed}
            />
            <label htmlFor={task.id} onDoubleClick={() => handleCheck(task.id)}>
              <p className="task"> {task.task}</p>
            </label>

            <div className="todoActions">
              <button aria-label="Delete Task">
                <FaTrash className="delete" width={24} height={24} />
              </button>

              <button aria-label="Update Task">
                <FaEdit className="edit" width={24} height={24} />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ToDoItem;
