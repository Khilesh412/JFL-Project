import React, { useState } from 'react'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import {Link} from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './../assets/css/Navbar.css';
import { IconContext } from 'react-icons';
import image1 from './../assets/images/jubilant-foodworks-logo@2x.png';

export default function Navbar() {
    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)

  return (
    <>
    <IconContext.Provider value={{color:"#fff"}}>
 
     <div class="row">
        <div className='navbar bg-light text-light ' id = 'sidenavDiv'>
         <div class="col-md-2">
         <Link to="#" className='menu-bars'>    
         <FaIcons.FaAlignJustify onClick={showSidebar} className="svg-color"/>
         </Link>
        </div>
        <div class="col-md-8">
        <h2 className='nav-heading'>
            <img src={image1} alt="Title" className='img-fluid logo-img'/></h2>
        </div>
        <div className="nav-heading col-md-1 p-2">
            <Link to='/myorder'>
            <FaIcons.FaCartPlus className="svg-color"/>
            </Link>
        </div>
        <div class="col-md-1 ml-1">
            <Link to='/plp'>
            <AiIcons.AiOutlineSearch className="svg-color"/>
            </Link>
        </div>
    </div>
     </div>
     <nav className={sidebar ? 'nav-menu active' : "nav-menu"}>
        <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
                <Link to='#' className='menu-bars'>
                    <AiIcons.AiOutlineClose className="svg-color"/>
                </Link>
            </li>   
            {SidebarData.map((item, index)=> {
                return(
                    <li key={index} className={item.cName}>
                        <Link to={item.path}>
                        {item.icon}
                        <span className='span'>{item.title}</span>       
                        </Link>
                    </li>
                );
            })}
    
        </ul>
     </nav>
     </IconContext.Provider>
    </>
  )
}
