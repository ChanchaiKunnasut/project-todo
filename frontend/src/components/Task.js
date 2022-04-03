import { Row, Col, Checkbox } from 'antd'
import './Task.css'

function Task({ title, detail }) {
  return (
    <div className='Task'>
      <Row>
        <Col span={16} style={{ textAlign: "left"}}>Title: {title}</Col>
        <Col span={8}>
          <Checkbox>Done?</Checkbox>
        </Col>
      </Row>
      <Row>Detail: {detail}</Row>
    </div>
  )
}

export default Task
