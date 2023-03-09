import React from 'react'
import './Todo.css';

import { CiCircleRemove } from 'react-icons/ci';

function Todo({ tasks, removeTask }) {

  return tasks?.map((task) => (
    <div className='todo-wrapper'>
      <div key={task.id}>{task.task}</div>
        <CiCircleRemove className='remove-button' onClick={() => removeTask(task.id)}/>
    </div>
  ))
}

export default Todo