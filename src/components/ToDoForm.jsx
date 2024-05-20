import React from "react";
import { AiOutlinePlus } from "react-icons/ai";

const ToDoForm = (props) => {
  const { newTask, setNewTask, handleSubmit } = props;

  return (
    <form onSubmit={handleSubmit} className="todoForm">
      <div className="container">
        <input
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          type="text"
          required
          autoFocus
          maxLength={60}
          placeholder="Add a new task"
          className="formInput"
        />
        <label htmlFor="formInput" className="label">
          Add a new task
        </label>
      </div>

      <button type="submit" aria-label="Add Task" className="btn">
        <AiOutlinePlus />
      </button>
    </form>
  );
};

export default ToDoForm;
