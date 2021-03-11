import React, {useState, useContext} from 'react'
import sublinks from '../Data/Data'

const AppContext = React.createContext();

export const AppProvider = ({children}) => {
    const [isOpenSideBar, setIsOpenSideBar] = useState(false);
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

//openSideBar is also isOpenSideBar when it false
const openSideBar = () => {
    setIsOpenSideBar(true);
}

const closeSideBar = () => {
    setIsOpenSideBar(false);
}

const openSubmenu = () => {
    setIsSubmenuOpen(true);
}

const closeSubmenu = () => {
    setIsSubmenuOpen(false);
}


    return (
    <AppContext.Provider value={{
         isOpenSideBar,
         isSubmenuOpen,
         openSideBar,
         closeSideBar,
         openSubmenu,
         closeSubmenu,
    }}>
        {children}
    </AppContext.Provider>
    )

}

//custom hook
export const useGlobalContext = () => {
    return  (
        useContext(AppContext)
    )
}

