import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Loginform from '../../components/Loginform'
import { UserState } from '../../contexts/userProvider'
import {Navigate}  from 'react-router-dom'
const Login = () => {
  const {user, setUser} = UserState()
  const userInfo = JSON.parse(localStorage.getItem('userInfo'))
  if (userInfo) {
    return <Navigate to="/dashboard" />;
  }
  setUser(userInfo)
  return (
   <>
    <Navbar/>
    <Loginform/>
    <Footer/>
   </>
  )
}

export default Login