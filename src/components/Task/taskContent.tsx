import React, { HTMLAttributes } from 'react'

import * as C from './styled'

interface TaskContentProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

const TaskContent: React.FC<TaskContentProps> = ({ children, ...props }) => {
  return <C.TaskContent {...props}>{children}</C.TaskContent>
}

export default TaskContent
