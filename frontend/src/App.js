import { Row, Col, message } from 'antd'
import { Header } from 'antd/lib/layout/layout'
import React, { useEffect, useState } from 'react'
import Task from './components/Task'
import { GetTasks, UpdateTaskByID } from './services'
import './App.css'

function App() {
  const [tasks, setTasks] = useState([])
  const getTasks = async () => {
    try {
      const result = await GetTasks()
      await setTasks(result.data)
    } catch (e) {
      console.error(e)
    }
  }
  const onChange = async (e, taskId) => {
    try {
      const result = await UpdateTaskByID({
        id: taskId,
        status: e.target.checked,
      })
      if (e.target.checked) {
        message.info(`Task id:${taskId} is done.`)
      } else {
        message.info(`Task id:${taskId} is not done.`)
      }

      getTasks()
    } catch (e) {
      console.error(e)
    }
  }

  useEffect(() => {
    getTasks()
  }, [])
  return (
    <div className='App'>
      <Row>
        <Col xs={3} xl={8}></Col>
        <Col xs={18} xl={8}>
          <Header style={{ backgroundColor: 'white' }}>Task list</Header>
          {tasks.map((obj, index) => (
            <Task
              key={index}
              title={obj.taskTitle}
              detail={'Hard Code Detail'}
              taskId={obj.id}
              taskStatus={obj.status}
              onChange={onChange}
            />
          ))}
        </Col>
        <Col xs={3} xl={8}></Col>
      </Row>
    </div>
  )
}

export default App
