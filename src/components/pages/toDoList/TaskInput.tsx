import React, { useState } from 'react'
import { Col, Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/esm/Row';

const TaskInput = ({onAdd}: any) => {
  const [input, setInput] = useState(""); 

  return (
    <Form className="mb-5 mt-5">
      <Form.Group as={Row} className="justify-content-center">
        <Col sm={8}>
            <Form.Control type="text" placeholder="New Task" onChange={(event)=> {setInput(event.target.value)}}/>
        </Col>
        <Col sm={2}>
            <Button variant="success" onClick={() => onAdd(input)}>Add</Button>
        </Col>
      </Form.Group>
    </Form>
  )
}

export default TaskInput