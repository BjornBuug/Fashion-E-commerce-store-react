import React from 'react'
import sublinks from '../Data/Data'
import {FaTimes} from 'react-icons/fa'
import {useGlobalContext} from './Globalcontext'

const Sidebar = () => {
    const {isOpenSideBar, closeSideBar} = useGlobalContext();

    return (
        //To fix the background issue i used the side-bar-wrapper
        //I setup the condition to the menu to be display byt putting conditions remove or adding Show
        <div className={`${isOpenSideBar ? "sidebar-wrapper show" : "sidebar-wrapper"}`}>
         <aside className="sidebar">
            <button className="close-btn" onClick={closeSideBar}>
             <FaTimes/>
            </button>
        <div className="sidebar-links">
         {sublinks.map((item, index)=> {
         const {page, links} = item;
        return (
        <article key={index}>
        <h4>{page}</h4>
         <div className="sidebar-sublinks">
            {links.map((link, index)=> {
            const {label, icon, url} = link
            return (
            <a key={index} href={url}>
                {icon}
                {label}
            </a>
            )
            })}
            </div>
            </article>
            )
         })}
        </div>
         </aside>
        </div>
    )
}

export default Sidebar
