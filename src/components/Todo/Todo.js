import React from 'react'
import { CiCircleRemove } from 'react-icons/ci';

function Todo({ tasks }) {

  return tasks?.map(task => (
    <>
    <div key={task.id}>{task.task}</div>
    <div>
      <CiCircleRemove />
    </div>
    </>
  ))
}

export default Todo