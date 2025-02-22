import { useState } from 'react'
import reactLogo from './assets/react.svg'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Component/Navbar'
import Calculator from './Component/Calculator'
import ChangeCase from './Component/ChangeCase'
import Counter from './Component/Counter'
import FetchData from './Component/FetchData'
import Resizer from './Component/Resizer'
import Theme from './Component/Theme'
import Animate from './Component/Animate'
import Event from './Component/Event'
import NoPage from './Component/NoPage';
import UserForm from './Component/UserForm';
import UserList from './Component/userList';



export default function App() {

  const[theme, setTheme] = useState ('bg-white text-black');

  return (
    <BrowserRouter>
      <Routes>
        
          <Route index element={<Navbar />} />
          <Route path="ChangeCase" element={<div><Navbar/><ChangeCase /></div>} />
          <Route path="Counter" element={<div><Navbar/><Counter/></div>} />
          <Route path="FetchData" element={<div><Navbar/><FetchData/></div>} />
          <Route path="Resizer" element={<div><Navbar/><Resizer/></div>} />
          <Route path="Theme" element={<div className={theme}><Navbar/><Theme ctheme={theme} updateTheme={setTheme}/></div>} />
          <Route path="Animate" element={<div><Navbar/><Animate/></div>} />
          <Route path="Event" element={<div><Navbar/><Event/></div>} />
          <Route path="Calculator" element={<div><Navbar/><Calculator/></div>} />
          <Route path="Userform" element={<div><Navbar/> <UserList/></div>}/>
          <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}
