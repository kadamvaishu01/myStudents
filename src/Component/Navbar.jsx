import React from 'react'
import { useState } from 'react'
import { Outlet, Link } from "react-router-dom";


function Navbar() {

    const [open, setOpen] = useState(false);

    const showmenus = () => {
        open == true ? setOpen(false) : setOpen(true)
    }

  return (
    <div className='flex w-full justify-center items-center bg-pink-300 text-black h-20'>
        <div className='w-[20%]'><b className='text-2xl'>Radhe Radhe</b></div>
        <div className='w-[90%] sm:self-center md:self-center lg:self-center  self-start sm:mt-0 md:mt-0 lg:mt-0 mt-20'>
            <ul className={'md:grid-cols-10 sm:grid-cols-10 lg:grid-cols-10 text-base font-bold sm:grid md:grid lg:grid '+ (open == true? 'grid grid-cols-1' : 'hidden')}>
                <li>
                    <Link to="/ChangeCase">Change Case</Link>
                </li>
                <li>
                    <Link to="/FetchData">Fetch Data</Link>
                </li>
                <li>
                    <Link to="/Event">Event</Link>
                </li>
                <li>
                    <Link to="/Resizer">Resizer</Link> 
                </li>
                <li>
                    <Link to="/Animate">Animation</Link> 
                </li>
                <li>
                    <Link to="/Counter">Counter</Link>
                </li>
                <li>
                    <Link to="/Theme">Theme</Link> 
                </li>
                <li>
                    <Link to="/Calculator">Calculator</Link> 
                </li>
                <li>
                    <Link to="/Userform">User</Link> 
                </li>
                <li className='bg-black text-white rounded-lg text-center w-28 h-7'>Login</li>
                <li>
                    <Link to="/"></Link> 
                </li>
                
            </ul>
        </div>
        <div className='sm:hidden md:hidden lg:hidden block text-4xl ' onClick={showmenus}>
            <ion-icon name={(open === true ? "close":"menu" )}></ion-icon>
        </div>
      
    </div>
  )
}

export default Navbar
