import React, { useEffect, useState } from 'react'
import Navbar from '../../components/admincomponents/Navbar'
import Profile from '../../components/admincomponents/Profile'
import { UserState } from '../../contexts/userProvider';
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { user, setUser } = UserState();

  let isMounted = true; // Variable to track component's mounted status

  const getLoggedInUser = async () => {
    try {
      setLoading(true);
      const userInfo = JSON.parse(localStorage.getItem("userInfo"));
      if (!userInfo) {
        setLoading(false);
        navigate("/login");
        return;
      }
      const { data } = await axios.get(
        `http://localhost:5000/api/volunteers/login?token=${userInfo?.token}`
      );
      if (isMounted) {
        setLoading(false);
        if (data) {
          setUser(data);
        } else {
          localStorage.removeItem("userInfo");
          navigate("/login");
        }
      }
    } catch (error) {
      if (isMounted) {
        setLoading(false);
        console.log(error.message);
        navigate("/login");
      }
    }
  };

  useEffect(() => {
    if (typeof window === "undefined") return;
    getLoggedInUser();

    // Cleanup function to set isMounted to false when component unmounts
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <>
    <Navbar details={user}/>
    <Profile details={user}/>
    </>
  )
}

export default Dashboard