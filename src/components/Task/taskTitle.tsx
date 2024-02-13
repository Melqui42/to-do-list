import React, { HTMLAttributes } from 'react'

import * as C from './styled'

interface TaskTitleProps extends HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode
  state: boolean
}

const TaskTitle: React.FC<TaskTitleProps> = ({ children, state, ...props }) => {
  return (
    <C.TaskTitle {...props} className={state ? 'checked' : ''}>
      {children}
    </C.TaskTitle>
  )
}

export default TaskTitle
