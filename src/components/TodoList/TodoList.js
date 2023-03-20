import React, { useState } from 'react'
import Todo from '../Todo/Todo';
import TodoForm from '../TodoForm/TodoForm';
import './TodoList.css'

let nextId = 0;

function TodoList() {

  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, { id: nextId += 1, task: task, status: false}]);
  }

  const completeTask = (id) => {
    setTasks(prevTasks => prevTasks.map(task => task.id === id ? {...task, status: !task.status} : {...task, status: task.status}))
  }

  const removeTask = (id) => {
    setTasks(prevTasks => {
      return prevTasks.filter(task => task.id !== id)
    })
  };

  const editTask = (id, editedTask) => {
    setTasks(prevTasks => prevTasks.map(task => task.id === id ? {...task, task:editedTask} : {...task, task:task.task}))
  }

  return (
    <div className='list-wrapper'>
      <TodoForm addTask={addTask} />
      <Todo tasks={tasks} removeTask={removeTask} editTask={editTask} completeTask={completeTask} />
    </div>
  )
}

export default TodoList