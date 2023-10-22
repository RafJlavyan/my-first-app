import React from 'react'
import TodoItem from '../TodoItem/TodoItem'

const TodoList = ({tasks,deleteTask,editTask,onChange}) => {
  return (
    <div>
        {
            tasks.map((task,index) => (
                <TodoItem key={task.id} {...task} deleteTask={deleteTask} editTask={editTask} onChange={onChange}/>
            )
            )
        }
    </div>
  )
}

export default TodoList