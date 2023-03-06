import React, { useEffect, useState } from 'react'
import { Button, Form, Table } from 'react-bootstrap';
import { ITask } from '../../../common/types'

interface Props {
  tasks: Array<ITask>;
  onChangeTasks: any,
  onDelete: any
}

const CompletedTaks = ({ tasks, onChangeTasks, onDelete }: Props) => {

  const [items, setItems] = useState<any[]>([]);

  useEffect(()=> { 

    setItems(tasks.map(t =>

      <tr key={t.id} className='completed-task'>
        <td style={{width: '5%', height: '10px'}}>
          <Form>
            <Form.Check 
              type="checkbox"
              id={`checkbox-${t.id}`}
              checked={true}
              onChange={event => { 
                t.status = event.target.checked ? 'completed' : 'pending';
                onChangeTasks(); 
              }}
            />
          </Form>
        </td>
        <td style={{width: '90%', textAlign: 'justify'}}>
          <div>{t.title}</div>
        </td>
        <td style={{width: '5%'}}>
          <Button variant="danger" onClick={() => onDelete(t.id)}>Delete</Button>
        </td>
      </tr>
      
    ));

  }, [tasks])
  
  return (
    <section className='CompletedTasks'>
      <Table bordered hover responsive >
        <thead>
        </thead>
        <tbody >
          {items}
        </tbody>
      </Table>
    </section>
  )
}

export default CompletedTaks

