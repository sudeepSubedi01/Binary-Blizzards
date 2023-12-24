import React from 'react'
import { Link } from 'react-router-dom'
import { UserState } from '../contexts/userProvider'

const Navbar = () => {
  const {user, setUser} = UserState()
  return (
    <div className="navbar bg-blue-500 text-white">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-black">
      <li><Link to={'/activities'}>Activities</Link></li>
      <li>
       <Link to={'/guidelines'}>Guidelines</Link>
      </li>
      <li><Link to={'/contact'}>Contact</Link></li>
      <li><Link to={'/volunteer-form'}>Work as Volunteer</Link></li>
      </ul>
    </div>
    <a href='/' className="font-bold text-xl md:text-2xl">Aidwave Connect</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-lg">
      <li><Link to={'/activities'}>Activities</Link></li>
       <li><Link to={'/guidelines'}>Guidelines</Link></li>
      <li><Link to={'/contact'}>Contact</Link></li>
    </ul>
  </div>
  <div className="navbar-end">
  {user ? <Link to={'/dashboard'} className="btn btn-neutral ml-1">Dashboard</Link>: <>
    <Link to={'/volunteer-form'} className="btn">Work as Volunteer</Link>
    <Link to={'/login'} className="btn btn-neutral ml-1">Login</Link>
  </>}
  </div>
</div>
  )
}

export default Navbar