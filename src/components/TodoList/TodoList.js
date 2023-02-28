import React, { useState } from 'react'

function TodoList({ tasks }) {

  return (
    <ul>
     {tasks.map(task => {
        return <li key={task.id}>{task.task}</li>
    })}
    </ul>
  )
}

export default TodoList