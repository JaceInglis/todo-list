import React, { useState } from 'react'
import Todo from '../Todo/Todo';
import TodoForm from '../TodoForm/TodoForm';

let nextId = 0;

function TodoList() {

  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, { id: nextId += 1, task: task }]);
  }

  return (
    <div>
      <TodoForm addTask={addTask} />
      <Todo tasks={tasks}/>
    </div>
  )
}

export default TodoList