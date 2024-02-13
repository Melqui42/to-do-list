import React, { ButtonHTMLAttributes, useState } from 'react'

import Icon from 'utils/iconImport'

import * as C from './styled'

type TaskCheckBoxProps = ButtonHTMLAttributes<HTMLButtonElement>

const TaskCheckBox: React.FC<TaskCheckBoxProps> = ({ ...props }) => {
  const [checkBox, setCheckBox] = useState(false)

  const handleCheckBox = () => {
    setCheckBox(!checkBox)
  }

  return (
    <C.TaskCheckBox
      {...props}
      className={checkBox ? 'isChecked' : ''}
      onClick={handleCheckBox}
    >
      {checkBox && <Icon.Fa.FaCheck className="icon" />}
    </C.TaskCheckBox>
  )
}

export default TaskCheckBox
