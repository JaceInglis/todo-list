import React, { useState } from 'react'

function RenderTodos({ tasks }) {
  return (
    <ul>
     {tasks.map(task => {
        <li key={task.id}>{task.task}</li>
    })}
    </ul>
  )
}

export default RenderTodos