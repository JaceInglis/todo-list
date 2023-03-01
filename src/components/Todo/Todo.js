import React from 'react'

function Todo({ tasks }) {

  return tasks?.map(task => (
    <div key={task.id}>{task.task}</div>
  ))
}

export default Todo