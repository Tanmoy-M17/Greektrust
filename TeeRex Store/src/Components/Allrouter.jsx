import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'

const Allrouter = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}>Home</Route>
        </Routes>
    </div>
  )
}

export default Allrouter