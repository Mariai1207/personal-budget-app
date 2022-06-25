import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.scss'
import Category from './components/Category';
import Home from './components/Home'
import NavBar from './components/NavBar'
import SideBar from './components/SideBar';


export default function App() {
  return (
    <BrowserRouter>
      
      <div className='flex'>
        <SideBar/>
        <div className='content w-100'>
          <NavBar />
          <Routes>
              <Route path='/' exact={true} element={<Home/>}/>
              <Route path='/category' exact={true} element={<Category/>}/>
          </Routes>
        </div>
      </div>
      
          
    </BrowserRouter>
  )
}
