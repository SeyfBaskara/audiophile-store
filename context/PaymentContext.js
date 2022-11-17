import React, { useState, createContext, useContext } from 'react'

const ThemeContext = createContext()

const PaymentProvider = ({ children }) => {
   const value = {}
   return (
      <>
         <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
      </>
   )
}

export const useThemeContext = () => useContext(ThemeContext)
export default PaymentProvider
