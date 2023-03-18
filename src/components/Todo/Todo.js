import React, { useState } from 'react'
import './Todo.css';
import { TbEditCircle, TbEditCircleOff } from 'react-icons/tb'

import { CiCircleRemove } from 'react-icons/ci';

function Todo({ tasks, removeTask, editTask }) {
  const [editing, setEditing] = useState(null);
  const [editText, setEditText] = useState('');

  const handleChange = (e) => {
    setEditText(e.target.value);
  }

  const handleSubmit = (e, id) => {
    e.preventDefault()
    editTask(id, editText)

    setEditText('')
    setEditing(0)
  }

  return (
    tasks.map((task) => (
      <div className='todo-wrapper' key={task.id}>
        <div className='todo'>
          {editing === task.id
          ? 
          <form className='edit-form' onSubmit={ (e) => handleSubmit(e, task.id, editText)}>
            <input className='edit-input' autoFocus placeholder={task.task} required onChange={handleChange} />
          </form> 
          : task.task}
        </div>
          {editing === task.id
          ? <TbEditCircleOff className='cancle' onClick={() => setEditing(null)}/> 
          : <TbEditCircle className='edit-button' onClick={() => setEditing(task.id)}/>}
          <CiCircleRemove className='remove-button' onClick={() => removeTask(task.id)}/>
      </div>
  )))
}

export default Todo