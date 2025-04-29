import React from 'react'
import './App.css'
import Home from './home'
import { Routes, Route } from 'react-router-dom'
import About from './about'

function App() {
  return (
    <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/about' element ={<About/>}></Route>
          <Route path='/products' element={<h1>Products</h1>} />
        </Routes>
      
    </main>
  )
}

export default App
