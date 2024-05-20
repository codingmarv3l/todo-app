import React, { useState, useRef, useEffect } from "react";
import { FaTrash, FaEdit } from "react-icons/fa";

const ToDoItem = (props) => {
  const { tasks, handleCheck, deleteTask, editTask } = props;

  const [editingTaskId, setEditingTaskId] = useState(null);
  const [editedTodo, setEditedTodo] = useState("");

  const editFieldRef = useRef(null);
  const editBtnRef = useRef(null);

  const wasEditing = usePrevious(editingTaskId);

  const handleTaskUpdate = (e) => {
    e.preventDefault();
    editTask(editingTaskId, editedTodo);
    setEditedTodo("");
    setEditingTaskId(null);
    console.log(editedTodo);
  };

  useEffect(() => {
    if (wasEditing === null && editingTaskId !== null) {
      editFieldRef.current.focus();
    } else if (wasEditing !== null && editingTaskId === null) {
      editBtnRef.current.focus();
    }
  }, [wasEditing, editingTaskId]);

  return (
    <div className="todoLists">
      {tasks.map((task) => (
        <div key={task.id} className="item">
          {editingTaskId === task.id ? (
            <form onSubmit={handleTaskUpdate} className="editForm">
              <input
                id={task.id}
                value={editedTodo}
                onChange={(e) => setEditedTodo(e.target.value)}
                type="text"
                placeholder="Update task"
                className="formInput"
                ref={editFieldRef}
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

                <button
                  aria-label="Update Task"
                  onClick={() => {
                    setEditedTodo(task.task);
                    setEditingTaskId(task.id);
                  }}
                  ref={editBtnRef}
                >
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

function usePrevious(value) {
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current = value;
  });
  return inputRef.current;
}

export default ToDoItem;
