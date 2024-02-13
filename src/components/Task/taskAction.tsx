import React, { ButtonHTMLAttributes } from 'react'

import * as C from './styled'

type TaskActionProps = ButtonHTMLAttributes<HTMLButtonElement>

const TaskAction: React.FC<TaskActionProps> = ({ ...props }) => {
  return <C.TaskAction {...props}>🗑️</C.TaskAction>
}

export default TaskAction
