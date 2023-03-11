import React, { useState } from 'react'
import { HiOutlinePlusCircle } from 'react-icons/hi'
import './TodoForm.css'

function TodoForm({ addTask }) {
  const [item, setItem] = useState('');

  const handleChange = (e) => {
    setItem(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    addTask(item);

    setItem('');
    
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="lable-wrapper">
        <label>What needs to be done?</label>
      </h2>
      <div className='form'>
        <input type="text" name="task" value={item} onChange={handleChange} required/>
        <button type='submit'>
          <HiOutlinePlusCircle className='add-button' />
        </button>
      </div>
    </form>
  )
}

export default TodoForm