import { Row, Col, message } from 'antd'
import { Header } from 'antd/lib/layout/layout'
import React, { useEffect, useState } from 'react'
import Task from './components/Task'
import { GetTasks } from './services'
import './App.css'

function App() {
  const [tasks, setTasks] = useState([])
  const onChange = (e) => {
    message.info('This is a normal message =>', e.target.checked)
  }
  useEffect(() => {
    const getTasks = async () => {
      try {
        const result = await GetTasks()
        console.log(result?.data)
        await setTasks(result.data)
      } catch (e) {
        console.error(e)
      }
    }
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
              detail={'Test Detail'}
              onChange={onChange}
            ></Task>
          ))}
        </Col>
        <Col xs={3} xl={8}></Col>
      </Row>
    </div>
  )
}

export default App
