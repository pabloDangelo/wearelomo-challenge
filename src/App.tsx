import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/pages/header/Header';
import { BrowserRouter, Route } from "react-router-dom";
import { WebRoutes } from './components/WebRoutes'
import { Container } from 'react-bootstrap';
import ToDoList from './components/pages/toDoList/ToDoList';
import { TasksContext } from './components/DataContext';
import { ITask } from './common/types';


function App() {
  // const [tasks, setTasks] = useState<ITask[]>([]);
  // const urlTasks: string = 'https://gorest.co.in/public/v2/todos';

  // useEffect(()=> {

  //   fetch(urlTasks)
  //   .then<ITask[]>(response => response.json())
  //   .then(tasks => {

  //       let simplifiedTasks = tasks.map(t => {
  //           return {
  //               id: t.id,
  //               title: t.title,
  //               status: t.status
  //           }
  //       }); 

  //       setTasks(simplifiedTasks);
  //   })
  //   .catch(error => console.error(error));   

  // },[]);
    
  return (

    <Container className="App">
        <BrowserRouter>
          <Header/>
          {/* <TasksContext.Provider value={tasks}> */}
            <WebRoutes/>
          {/* </TasksContext.Provider> */}
        </BrowserRouter>
      </Container>  

      
  );
}

export default App;
