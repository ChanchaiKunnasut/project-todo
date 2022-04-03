import { Row, Col } from 'antd'
import { Header } from 'antd/lib/layout/layout'
import Task from './components/Task'
import './App.css'

function App() {
  return (
    <div className='App'>
      <Row>
        <Col xs={3} xl={8}></Col>
        <Col xs={18} xl={8}>
          <Header style={{ backgroundColor: 'white' }}>Task list</Header>
          <Task title={'Test'} detail={'Test Detail'}></Task>
        </Col>
        <Col xs={3} xl={8}></Col>
      </Row>
    </div>
  )
}

export default App
