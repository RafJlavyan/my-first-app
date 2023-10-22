import { useEffect, useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm/TodoForm";
import TodoList from "./components/TodoList/TodoList";
import TodoFooter from "./components/TodoFooter/TodoFooter";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: Date.now(),
      title:'This is the title',
      task:'This is the task',
      completed: false
    }
  ]);


  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const addTask = (task) => {
    setTasks([task, ...tasks]);
  };

  const editTask = (title,task,id) => {
   setTasks(
    tasks.map(todo => 
      todo.id === id ? {...task,title,task} : todo
      )
   )
  }

  const onChange = (newTask) => {
    setTasks(tasks.map(task => {
      if(task.id === newTask.id) {
        return newTask;
      }
      return task
    }))
  }

  const clearCompleted = () => {
    setTasks(tasks.filter((task) => !task.completed))
  }

  const deleteAll = () => {
    setTasks([])
  }
 
  return (
    <div className="App">
      <div>
        <TodoForm addTask={addTask}/>
        <h1>Todos</h1>
        <TodoList tasks={tasks} deleteTask={deleteTask} editTask={editTask} onChange={onChange}/>
        <TodoFooter tasks={tasks} deleteAll={deleteAll} clearCompleted={clearCompleted}/>
      </div>
    </div>
  );
}

export default App;
