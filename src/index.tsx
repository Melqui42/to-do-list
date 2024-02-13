import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'

import Task from 'components/Task'
import { motion, AnimatePresence, useIsPresent } from 'framer-motion'

import reportWebVitals from './reportWebVitals'
import GlobalStyle, { Page } from './styles/globalStyle'

interface Task {
  id: number
  title: string
  status: boolean
}

const App: React.FC = () => {
  const [input, setInput] = useState<string>('')

  const data = localStorage.getItem('toDoList')

  const [list, setList] = useState<Task[]>(
    data
      ? JSON.parse(data)
      : [
          { id: 0, title: '🐕 Walk the dog', status: false },
          { id: 1, title: '🍔 Eat lunch', status: false },
          { id: 2, title: '📚 Study react', status: false },
          { id: 3, title: '🏀 Play basketball', status: false },
          { id: 4, title: '🔎 Study biology', status: false },
          { id: 5, title: '👟 Buy shoes', status: false },
        ],
  )

  const [statusList, setStatusList] = useState<boolean[]>([])

  useEffect(() => {
    const storedList = localStorage.getItem('list')
    if (storedList) {
      const parsedList: Task[] = JSON.parse(storedList)
      setList(parsedList)
      setStatusList(parsedList.map((item) => item.status))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list))
  }, [list])

  const handleAddTask = () => {
    if (input === '') {
      window.alert('Insira um nome!!!')
    } else {
      const newTask = {
        id: list.length,
        title: input,
        status: false,
      }

      setList([...list, newTask])
      setStatusList([...statusList, newTask.status])

      localStorage.setItem('toDoList', JSON.stringify([...list, newTask]))
      setInput('')
    }
  }

  const handleDeleteTask = (id: number) => {
    const updateList = list.filter((item) => item.id !== id)

    setList([...updateList])

    setStatusList(updateList.map((item) => item.status))
    localStorage.setItem('toDoList', JSON.stringify(updateList))
  }

  const shuffleArray = (array: Task[]) => {
    const shuffledArray = [...array]

    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ]
    }

    return shuffledArray
  }

  const handleShuffle = () => {
    const shuffledToDoList = shuffleArray(list)

    setList(shuffledToDoList)
    setStatusList(shuffledToDoList.map((item) => item.status))
    localStorage.setItem('list', JSON.stringify(shuffledToDoList))
  }

  const handleTaskStatusChange = (id: number) => {
    const updatedTaskStatus: boolean[] = statusList.map((status, index) =>
      index === id ? !status : status,
    ) as boolean[]

    setStatusList(updatedTaskStatus)

    const updatedToDoList: Task[] = list.map((item, index) =>
      index === id ? { ...item, status: !item.status } : item,
    )

    setList(updatedToDoList)
    localStorage.setItem('list', JSON.stringify(updatedToDoList))
  }

  const isPresent = useIsPresent()

  return (
    <React.StrictMode>
      <GlobalStyle />
      <Page>
        <div className="container" onClick={() => setList}>
          <h1 className="title">To Do List</h1>
          <div className="content">
            <AnimatePresence>
              <motion.ul className="taskList">
                <ul className="content-list">
                  {list.map((item) => {
                    return (
                      <motion.li
                        className="content-item"
                        key={item.id}
                        style={{
                          position: isPresent ? 'static' : 'absolute',
                        }}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        transition={{
                          type: 'spring',
                          stiffness: 500,
                          damping: 40,
                        }}
                        layout
                      >
                        <Task.Root>
                          <Task.Content>
                            <Task.CheckBox
                              onClick={() => handleTaskStatusChange(item.id)}
                            />
                            <Task.Title state={item.status}>
                              {item.title}
                            </Task.Title>
                          </Task.Content>
                          <Task.Action
                            onClick={() => handleDeleteTask(item.id)}
                          />
                        </Task.Root>
                      </motion.li>
                    )
                  })}
                </ul>
              </motion.ul>
            </AnimatePresence>
          </div>
          <div className="controllers">
            <input
              type="text"
              placeholder="Write a new todo 📝"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button className="addtaks" onClick={handleAddTask}>
              Add Taks
            </button>
            <button className="shuffle" onClick={handleShuffle}>
              🔀
            </button>
          </div>
        </div>
      </Page>
    </React.StrictMode>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(<App />)
reportWebVitals()
