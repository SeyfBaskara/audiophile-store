import React, { useState, createContext, useContext } from 'react'

const initicalContext = {
   showLightBox: false,
}

const ThemeContext = createContext(initicalContext)

const ThemeProvider = ({ children }) => {
   const [showLightBox, setShowLightBox] = useState(initicalContext.showLightBox)

   const value = {
      showLightBox,
      setShowLightBox,
   }
   return (
      <>
         <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
      </>
   )
}

export const useThemeContext = () => useContext(ThemeContext)
export default ThemeProvider
