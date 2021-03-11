import React from 'react'
import {useGlobalContext} from './Globalcontext'


const Submenu = () => {
    const {isSubmenuOpen} = useGlobalContext();

    return (
        <aside className ={`${isSubmenuOpen ? 'submenu show' : 'show'}`}>
         submenu
        </aside>

    )
}


export default Submenu
