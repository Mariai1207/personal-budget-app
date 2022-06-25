import React from 'react';
import {NavLink} from 'react-router-dom';
import {FaHome}  from 'react-icons/fa';
import {BiCategory} from 'react-icons/bi';
import {CgDetailsMore} from 'react-icons/cg';
import '../App.scss';


export default function SideBar() {
  return (
    <div className='sidebar bg-dark'>
          <ul >
            <li><NavLink activeClassName='active' className='text-white rounded py-2 w-100 d-inline-block px-3'
            to='/' ><FaHome className='me-2'/> Home </NavLink></li>
            <li><NavLink activeClassName='active' className='text-white rounded py-2 w-100 d-inline-block px-3'
            to='category' > <BiCategory className='me-2'/>Category</NavLink></li>
          </ul>
        </div>
   
  )
}

