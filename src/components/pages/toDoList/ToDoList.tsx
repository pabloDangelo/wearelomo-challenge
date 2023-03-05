import React, { FunctionComponent, useContext, useEffect, useState } from 'react'
import { Col } from 'react-bootstrap';
import Row from 'react-bootstrap/esm/Row';
import { ITask, Task } from '../../../common/types';
import { TasksContext } from '../../DataContext';
import CompletedTasks from './CompletedTasks';
import PendingTaks from './PendingTaks';
import TaskInput from './TaskInput';


const ToDoList: FunctionComponent = () => {

    const urlTasks: string = 'https://gorest.co.in/public/v2/todos';
    
    const [tasks, setTasks] = useState<ITask[]>([]);
    const [pendingTasks, setPendingTasks] = useState<ITask[]>([]);
    const [completedTasks, setCompletedTasks] = useState<ITask[]>([]);

    const [newTask, setnewTask] = useState<ITask>(new Task(0, '', '')); 

    const handlerTasksChanged = () => {
        setPendingTasks(tasks.filter(st => st.status === 'pending')); 
        setCompletedTasks(tasks.filter(st => st.status === 'completed'));
    }
    
    useEffect(()=> {

        fetch(urlTasks)
        .then<ITask[]>(response => response.json())
        .then(tasks => {

            console.log(tasks)
            let simplifiedTasks = tasks.map(t => {
                return {
                    id: t.id,
                    title: t.title,
                    status: t.status
                }
            }); 

            setTasks(simplifiedTasks);
            handlerTasksChanged();
        })
        .catch(error => console.error(error));   

    },[]);

    useEffect(()=> {

        handlerTasksChanged();

    },[tasks]);
    

    return (
        <>
            <Row className='mt-5'>
                <Col>
                    <h1 style={{textAlign: 'justify'}}>ToDo List</h1>
                    <TaskInput/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <CompletedTasks tasks={completedTasks} onChangeTasks={handlerTasksChanged}/>
                    <PendingTaks tasks={pendingTasks} onChangeTasks={handlerTasksChanged}/>

                    {/* <CompletedTasks/>
                    <PendingTaks/> */}
                </Col>
            </Row>
        </>
    
    )
}

export default ToDoList