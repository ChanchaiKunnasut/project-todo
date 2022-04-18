import { Row, Col } from 'antd'
import { Header } from 'antd/lib/layout/layout'
import React, { useEffect, useState } from 'react'
import Task from './components/Task'
import { GetTasks } from './services'
import './App.css'

function App() {
  const [tasks, setTasks] = useState([])
  useEffect(() => {
    const getTaskByID = async () => {
      try {
        const result = await GetTasks(1)
        console.log(result?.data)
        await setTasks(result.data)
      } catch (e) {
        console.error(e)
      }
    }
    getTaskByID()
  }, [])
  return (
    <div className='App'>
      <Row>
        <Col xs={3} xl={8}></Col>
        <Col xs={18} xl={8}>
          <Header style={{ backgroundColor: 'white' }}>Task list</Header>
          {tasks.map((obj) => (
            <Task title={obj.taskTitle} detail={'Test Detail'}></Task>
          ))}
        </Col>
        <Col xs={3} xl={8}></Col>
      </Row>
    </div>
  )
}

export default App
