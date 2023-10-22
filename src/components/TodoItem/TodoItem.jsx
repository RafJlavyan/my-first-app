import React, { useState } from "react";
import styles from "./TodoItem.module.css";

const TodoItem = ({ deleteTask, editTask,onChange, ...task }) => {
  const [editInput, setEditInput] = useState(false);
  const [check, setCheck] = useState(false);
  // const [checked, setChecked] = useState(false);
  const [title, setTitle] = useState(task.title);
  const [text, setText] = useState(task.task);

  const handleEdit = (e) => {
    e.preventDefault();
    editTask(title, text, task.id);
    setEditInput(false);
  };

  const doubleClick = (event) => {
    if (event.detail == 2) {
      setCheck(!check);
    }
  };

  return (
    <div className={styles.displayFlex}>
      {check && (
        <input
          className={styles.checkbox}
          type="checkbox"
          checked={task.completed}
          onChange={(e) => onChange({
            ...task,
            completed: e.target.checked
          })}
        />
      )}
      <div className={styles.todoItem} onClick={doubleClick}>
        <div className={styles.itemFlex}>
          <div>
            <h2 className={styles.h2}>
              <b className={styles.b}>title:</b> {task.title}
            </h2>
            <p className={styles.p}>
              <b className={styles.b}>text:</b> {task.task}
            </p>
            <button
              className={styles.button}
              onClick={() => setEditInput(true)}
            >
              Edit
            </button>
            <button
              className={styles.button}
              onClick={() => deleteTask(task.id)}
            >
              Delete
            </button>
          </div>
          {editInput && (
            <form onSubmit={handleEdit}>
              <div>
                <input
                  type="text"
                  className={styles.input}
                  placeholder="Edit title..."
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="text"
                  className={styles.input}
                  placeholder="Edit Text..."
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                />
              </div>
              <button className={styles.button}>Save</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
