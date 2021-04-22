import React from 'react';
import {useGlobalContext} from '../Globalcontext';
import {FaBars} from 'react-icons/fa';

import './NavBar.css';


const Navbar = () => {
    //e.target.textContent is used to get the content on what we are hovering on (DevelopersLink-companyLink);
    //With GetBoundingClient we get the position of the bottom in the windows
    //we import these function from useGlobalContext to nested onClick to fire off the buttons
    const {openSideBar} = useGlobalContext();
    

    return (
        <nav className="nav">
            <div className="nav-center">
             {/* <a href="#" className="logo">Diamond</a> */}
                <div className="nav-header">
                    {/* <img src={logo} className="nav-logo" alt="stripe"/> */}
                    <button className="btn toggle-btn" onClick={openSideBar}>
                     <FaBars/>
                    </button>
                </div>

                <ul className="nav-links">
                    <li><a className="link" >About</a></li>
                    <li><a className="link" >Catalog</a></li>
                    <li><a className="link" >Contact</a></li>
                    <li><a className="link" >Cart</a></li>
                </ul>
                

            </div>
        </nav>
    )
}

export default Navbar
