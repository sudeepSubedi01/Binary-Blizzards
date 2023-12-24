import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Navbar from '../../components/admincomponents/Navbar'
import Footer from '../../components/Footer'
import axios from 'axios'
import Taskform from '../../components/admincomponents/Taskform';

const Task = () => {
  return (
    <>
        <Navbar/>
        <Taskform/>
        <Footer/>
    </>
  )
}

export default Task