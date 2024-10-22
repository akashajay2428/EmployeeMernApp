import { useState } from 'react'

import './App.css'
import Home from './Component/Home'
import Login from './Component/Login'
import { Routes, Route } from 'react-router'
import Add from './Component/Add'


function App() {
  const [count, setCount] = useState(0)

  return (

    <>
    

    <Routes>
      
    <Route path='/' element={ <Login/>}></Route>

      <Route path='/Home' element={<Home/>}></Route>
      <Route path='/add' element={<Add/>}></Route>
  
    </Routes>
      
      
     
    </>
  )
}

export default App
