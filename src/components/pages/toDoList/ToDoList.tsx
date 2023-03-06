import React, { FunctionComponent, useEffect, useState } from 'react'
import { Col } from 'react-bootstrap';
import Row from 'react-bootstrap/esm/Row';
import { ITask, Task } from '../../../common/types';
import { getLocalData, saveLocalData } from '../../Utilities';
import CompletedTasks from './CompletedTasks';
import PendingTaks from './PendingTaks';
import TaskInput from './TaskInput';


const ToDoList: FunctionComponent = () => {

    const urlTasks: string = 'https://gorest.co.in/public/v2/todos';
    
    const [tasks, setTasks] = useState<ITask[]>([]);
    const [pendingTasks, setPendingTasks] = useState<ITask[]>([]);
    const [completedTasks, setCompletedTasks] = useState<ITask[]>([]);

    const [show, setShow] = useState<boolean>(false);

    const addTask = (taskTitle: string) => {
        let newId = tasks[0].id + 1;
        setTasks([new Task(newId, taskTitle, 'pending'), ...tasks]);
    }

    const deleteTask = (id: number) => {

        // eslint-disable-next-line no-restricted-globals
        if(confirm('Confirma que desea eliminar la tarea?') === true){
            let index = tasks.findIndex(t => t.id === id);
            let newTasks = [...tasks];
            newTasks.splice(index, 1);
            setTasks(newTasks);
            saveLocalData('savedTasks', newTasks);

        }
    }

    const handlerTasksChanged = () => {
        saveLocalData('savedTasks', tasks);
        updateProps();
    }

    const updateProps = () => {
        setPendingTasks(tasks.filter(st => st.status === 'pending')); 
        setCompletedTasks(tasks.filter(st => st.status === 'completed'));
    }
    
    useEffect(()=> {

        let savedTasks = getLocalData('savedTasks');

        // Si no hay datos se llama a la API para buscarlos
        if((savedTasks && savedTasks.length === 0) || !savedTasks) {

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
                saveLocalData('savedTasks', simplifiedTasks);
            })
            .catch(error => console.error(error));   

        } else {

            setTasks(savedTasks);

        }

    },[]);

    useEffect(()=> {

        updateProps();

    },[tasks]);

    return (
        <>
            <Row className='mt-5'>
                <Col>
                    <h1 style={{textAlign: 'justify'}}>ToDo List</h1>
                    <TaskInput onAdd={addTask}/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <CompletedTasks tasks={completedTasks} onChangeTasks={handlerTasksChanged} onDelete={deleteTask}/>
                    <PendingTaks tasks={pendingTasks} onChangeTasks={handlerTasksChanged} onDelete={deleteTask}/>
                </Col>
            </Row>
        </>
    
    )
}

export default ToDoList