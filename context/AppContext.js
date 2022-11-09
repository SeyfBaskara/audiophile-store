import React, { createContext } from 'react'
import ThemeProvider from './ThemeContext'
import ShoppingCartProvider from './ShoppingCartContext'

const AppContext = createContext()

const AppProvider = ({ children }) => {
   const value = {}
   return (
      <ThemeProvider>
         <ShoppingCartProvider>
            <AppContext.Provider value={value}>{children}</AppContext.Provider>
         </ShoppingCartProvider>
      </ThemeProvider>
   )
}

export default AppProvider
