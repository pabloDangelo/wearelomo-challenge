import React, { createContext, useState } from 'react';
import { Container } from 'react-dom';
import { ITask } from '../common/types';

// export type ITasksContext = [ITask[], React.Dispatch<React.SetStateAction<ITask[]>>];

// export const TasksContext = createContext<ITasksContext>([[], () => []]);



export const TasksContext = createContext<ITask[]>([]);

// export const TasksContext = React.createContext<ITask[]>([]);
  
  
// export const TasksProvider = ({ children }) => {
//     const [tasks, setTasks] = useState<ITask[]>([]);
//     const urlTasks: string = 'https://gorest.co.in/public/v2/todos';

//     fetch(urlTasks)
//         .then<ITask[]>(response => response.json())
//         .then(tasks => {

//             let simplifiedTasks = tasks.map(t => {
//                 return {
//                     id: t.id,
//                     title: t.title,
//                     status: t.status
//                 }
//             }); 

//             setTasks(simplifiedTasks);

            

//             // if(simplifiedTasks.length > 0) {

//             //     handlerTasksChanged();
//             // }
            
//         })
//         .catch(error => console.error(error));   

//     return (
//         <TasksContext.Provider value={{ tasks, setTasks }}>
//             {children}
//         </TasksContext.Provider>
//     );
// };
