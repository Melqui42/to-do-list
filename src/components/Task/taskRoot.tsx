import React, { HTMLAttributes } from 'react'

import * as C from './styled'

interface TaskRootProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

const TaskRoot: React.FC<TaskRootProps> = ({ children, ...props }) => {
  return <C.TaskRoot {...props}>{children}</C.TaskRoot>
}

export default TaskRoot
