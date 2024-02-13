import styled from 'styled-components'

export const TaskRoot = styled.div`
  gap: 1rem;
  width: 100%;
  display: flex;
  padding: 1rem;
  align-items: center;
  border-radius: 0.2rem;
  background-color: #333233;
  justify-content: space-between;
`
export const TaskContent = styled.div`
  gap: 1rem;
  display: flex;
  align-items: center;
`
export const TaskCheckBox = styled.button`
  width: 18px;
  height: 18px;
  display: flex;
  transition: 0.3s;
  align-items: center;
  justify-content: center;
  border: 1px solid #ffffff;

  &.isChecked {
    background-color: #2c88f4;
    border-color: transparent;

    .icon {
      color: #ffffff;
      font-size: 1.5rem;
    }
  }
`
export const TaskTitle = styled.span`
  color: #ffffff;
  transition: 0.3s;
  font-size: 1.2rem;
  font-weight: bold;

  &.checked {
    color: #949294;
    text-decoration: line-through;
  }
`
export const TaskAction = styled.button`
  font-size: 1.2rem;
  background-color: transparent;
`
