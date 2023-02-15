import React, { useState } from 'react'

function AddTodo({ addTask }) {
    const [item, setItem] = useState('');

  const handleChange = (e) => {
    setItem(e.target.value);
  }

  const handleSubmit = () => {
    
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="lable-wrapper">
        <label>What needs to be done?</label>
      </h2>
      
      <input type="text" name="task" onChange={handleChange} />
      <input type="submit" value="Add" />
    </form>
  )
}

export default AddTodo