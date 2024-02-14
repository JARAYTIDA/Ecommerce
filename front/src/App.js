import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { Navbar } from './components'
import { Home } from './pages'

const App = () => {
  return (
    <div className='dark:bg-gray-900'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
    </div>
  )
}

export default App