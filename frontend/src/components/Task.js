import { Row, Col, Checkbox } from 'antd'
import './Task.css'

function Task({ title, detail, onChange, taskId, taskStatus }) {
  return (
    <div className='Task'>
      <Row>
        <Col span={16} style={{ textAlign: 'left' }}>
          Title: {title}
        </Col>
        <Col span={8}>
          <Checkbox onChange={(e) => onChange(e, taskId)} checked={taskStatus}>
            Done?
          </Checkbox>
        </Col>
      </Row>
      <Row>Detail: {detail}</Row>
    </div>
  )
}

export default Task
