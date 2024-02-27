import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { Footer, Navbar } from './components'
import { Cart, Details, Details2, EmailVerificationAsk, ForgotPass, Home, Login, Payment, Products_List, Profile, ResetPassConfirmation, ResetPassEmailPage, ResetPassword, SignUp, Success, VerifyEmail } from './pages'

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
        <Route path='/products/:product' element={<Products_List/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/forgot-password' element={<ForgotPass/>} />
        <Route path='/reset-password/:data' element={<ResetPassword/>} />
        <Route path='/reset-password-page' element={<ResetPassEmailPage/>} />
        <Route path='/verify-email' element={<EmailVerificationAsk/>} />
        <Route path='/verification' element={<VerifyEmail/>} />
        <Route path='/reset-password-confirmation' element={<ResetPassConfirmation/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/sucess' element={<Success/>} />
      </Routes>
      < Footer />
    </div>
  )
}

export default App