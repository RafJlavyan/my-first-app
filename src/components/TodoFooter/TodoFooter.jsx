import React from 'react'
import styles from './TodoFooter.module.css'

const TodoFooter = ({deleteAll, tasks, clearCompleted}) => {
    const completedLength = tasks.filter(c => c.completed).length
  return (
    <footer className={styles.footer}>
        <h3 className={styles.h3}>
            {completedLength}/{tasks.length}
        </h3>
        <button className={styles.button} onClick={() => clearCompleted()}>Clear completed</button>
        <button className={styles.button} onClick={() => deleteAll()}>Delete All</button>
    </footer>
  )
}

export default TodoFooter