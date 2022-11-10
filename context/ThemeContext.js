import React, { useState, createContext, useContext } from 'react'

const initialContext = {
   showLightBox: false,
   pathName: '',
}

const ThemeContext = createContext(initialContext)

const ThemeProvider = ({ children }) => {
   const [showLightBox, setShowLightBox] = useState(initialContext.showLightBox)
   const [pathName, setPathName] = useState(initialContext.pathName)

   const value = {
      showLightBox,
      setShowLightBox,
      pathName,
      setPathName,
   }
   return (
      <>
         <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
      </>
   )
}

export const useThemeContext = () => useContext(ThemeContext)
export default ThemeProvider
