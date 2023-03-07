import React from 'react'
import './Todo.css';

import { CiCircleRemove } from 'react-icons/ci';

function Todo({ tasks, removeTask }) {

  return tasks?.map((task) => (
    <div className='todo-wrapper'>
      <div key={task.id}>{task.task}</div>
      <div>
        <CiCircleRemove onClick={() => removeTask(task.id)}/>
      </div>
    </div>
  ))
}

export default Todo