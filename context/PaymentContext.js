import React, { useState, createContext, useContext } from 'react'

const PaymentContext = createContext()

const PaymentProvider = ({ children }) => {
   const [isPaymentDone, setIsPaymentDone] = useState(false)

   // mock check payment status
   const checkPaymentStatus = (data) => {
      if (data) {
         setTimeout(() => {
            setIsPaymentDone(true)
         }, 3000)
      }
   }

   const value = {
      isPaymentDone,
      setIsPaymentDone,
      checkPaymentStatus,
   }
   return (
      <>
         <PaymentContext.Provider value={value}>{children}</PaymentContext.Provider>
      </>
   )
}

export const usePaymentContext = () => useContext(PaymentContext)
export default PaymentProvider
