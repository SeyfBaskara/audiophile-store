import React, { createContext } from 'react'
import ThemeProvider from './ThemeContext'
import ShoppingCartProvider from './ShoppingCartContext'
import PaymentProvider from './PaymentContext'

const AppContext = createContext()

const AppProvider = ({ children }) => {
   const value = {}
   return (
      <ThemeProvider>
         <ShoppingCartProvider>
            <PaymentProvider>
               <AppContext.Provider value={value}>{children}</AppContext.Provider>
            </PaymentProvider>
         </ShoppingCartProvider>
      </ThemeProvider>
   )
}

export default AppProvider
