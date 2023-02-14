import React, { useState } from 'react'

function AddTodo() {
    const [item, setItem] = useState('');

  const handleSubmit = (e) => {
    setItem(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="lable-wrapper">
        <label>What needs to be done?</label>
      </h2>
      
      <input type="text" name="task" />
      <input type="submit" value="Add" />
    </form>
  )
}

export default AddTodo