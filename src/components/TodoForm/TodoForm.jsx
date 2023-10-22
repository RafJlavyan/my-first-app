import React, { useState } from "react";
import styles from "./TodoForm.module.css";

const TodoForm = ({ addTask }) => {
  const [title, setTitle] = useState("");
  const [task, setTask] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if(task.trim() && title.trim()){
        addTask({ id: Date.now(), title: title, task: task, completed: false });
        setTitle('')
        setTask('')
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className="input">
        <div>
          <input
            type="text"
            className={styles.addInput}
            placeholder="Choose title..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            className={styles.addInput}
            placeholder="Write your task ..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
        </div>
      </div>
      <button className={styles.addButton}>Add</button>
    </form>
  );
};

export default TodoForm;
