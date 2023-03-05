import React from 'react'
import { Col, Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/esm/Row';

const TaskInput = () => {
  return (
    <Form className="mb-5 mt-5">
      <Form.Group as={Row} className="justify-content-center">
        <Col sm={8}>
            <Form.Control type="text" placeholder="New Task" />
        </Col>
        <Col sm={2}>
            <Button variant="success">Add</Button>
        </Col>
      </Form.Group>
    </Form>
  )
}

export default TaskInput