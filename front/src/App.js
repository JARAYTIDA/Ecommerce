import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { Footer, Navbar } from './components'
import { Cart, Details, Details2, Home, Payment } from './pages'

const App = () => {
  return (
    <div className='dark:bg-gray-900'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/payment' element={<Payment/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/details' element={<Details/>} />
        <Route path='/details2' element={<Details2/>} />
      </Routes>
      < Footer />
    </div>
  )
}

export default App