import React from 'react'

import { CiCircleRemove } from 'react-icons/ci';

function Todo({ tasks, removeTask }) {

  return tasks?.map((task) => (
    <>
    <div key={task.id}>{task.task}</div>
    <div>
      <CiCircleRemove onClick={() => removeTask(task.id)}/>
    </div>
    </>
  ))
}

export default Todo