import React, { useState } from 'react'
import Todo from '../Todo/Todo';
import TodoForm from '../TodoForm/TodoForm';

let nextId = 0;

function TodoList() {

  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, { id: nextId += 1, task: task }]);
  }

  const removeTask = (id) => {
    setTasks(prevTasks => {
      return prevTasks.filter(task => task.id !== id)
    })
  };

  return (
    <div>
      <TodoForm addTask={addTask} />
      <Todo tasks={tasks} removeTask={removeTask}/>
    </div>
  )
}

export default TodoList