import React, {useState, useContext} from 'react'
import sublinks from '../Data/Data'

const AppContext = React.createContext();

export const AppProvider = ({children}) => {
    const [isOpenSideBar, setIsOpenSideBar] = useState(false);
    

//openSideBar is also isOpenSideBar when it false
const openSideBar = () => {
    setIsOpenSideBar(true);
}

const closeSideBar = () => {
    setIsOpenSideBar(false);
}


    return (
    <AppContext.Provider value={{
         isOpenSideBar,
         openSideBar,
         closeSideBar,
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

