import React from 'react'
import {useGlobalContext} from './Globalcontext'
import {FaBars} from 'react-icons/fa'
// import logo from '../images/logo.svg'

const Navbar = () => {
    //e.target.textContent is used to get the content on what we are hovering on (DevelopersLink-companyLink);
    //With GetBoundingClient we get the position of the bottom in the windows
    //we import these function from useGlobalContext to nested onClick to fire off the buttons
    const {openSideBar} = useGlobalContext();
    // const displaySubmenu = (e) => {
    //     const page = e.target.textContent;
    //     const tempBtn = e.target.getBoundingClientRect();
    //     const center = (tempBtn.left + tempBtn.right) / 2;
    //     const bottom = tempBtn.bottom - 3;
    //     openSubmenu(page, {center, bottom});
    // }

    return (
        <nav className="nav">
            <div className="nav-center">
                <div className="nav-header">
                    {/* <img src={logo} className="nav-logo" alt="stripe"/> */}
                    <button className="btn toggle-btn" onClick={openSideBar}>
                     <FaBars/>
                    </button>
                </div>

                <ul className="nav-links">
                    <li><button className="link-btn" >About</button></li>
                    <li><button className="link-btn" >Catalog</button></li>
                    <li><button className="link-btn" >Contact</button></li>
                </ul>
                

            </div>
        </nav>
    )
}

export default Navbar
