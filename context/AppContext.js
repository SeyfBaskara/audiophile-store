import React, { useState, createContext, useContext, Dispatch, SetStateAction } from 'react'

const initicalContext = {
   showLightBox: false,
}

const AppContext = createContext(initicalContext)

const AppProvider = ({ children }) => {
   const [showLightBox, setShowLightBox] = useState(initicalContext.showLightBox)

   const value = {
      showLightBox,
      setShowLightBox,
   }
   return (
      <>
         <AppContext.Provider value={value}>{children}</AppContext.Provider>
      </>
   )
}

export const useContextData = () => useContext(AppContext)
export default AppProvider
