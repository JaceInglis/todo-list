import React, { useState } from 'react'
import './Todo.css';
import { CiEdit } from 'react-icons/ci'

import { CiCircleRemove } from 'react-icons/ci';

function Todo({ tasks, removeTask, editTask }) {

  return tasks?.map((task) => (
    <div className='todo-wrapper'>
      <div className='todo' key={task.id}>{task.task}</div>
        <CiEdit className='edit-button' />
        <CiCircleRemove className='remove-button' onClick={() => removeTask(task.id)}/>
    </div>
  ))
}

export default Todo