import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { AbmUsuarios } from './pages/abmUsuarios/AbmUsuarios'
import ToDoList from './pages/toDoList/ToDoList'

export const WebRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<ToDoList/>} />
        <Route path="/abmusuarios" element={<AbmUsuarios/>} />
    </Routes>
  )
}
