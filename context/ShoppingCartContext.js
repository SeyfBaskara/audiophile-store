import React, { useState, createContext, useContext } from 'react'

const initicalContext = []

const ShoppingCartContext = createContext(initicalContext)

const ShoppingCartProvider = ({ children }) => {
   const [cartItems, setCartItems] = useState(initicalContext)

   const getItemQuantity = (productName) => {
      return cartItems.find((item) => item.productName === productName)?.quantity || 0
   }
   const addItemToCart = (productName, quantity) => {
      setCartItems((currItems) => {
         if (currItems.find((item) => item.productName === productName) == null) {
            return [...currItems, { productName, quantity }]
         } else {
            return currItems.map((item) => {
               if (item.productName === productName) {
                  return { ...item, quantity }
               } else {
                  return item
               }
            })
         }
      })
   }
   const increaseCartQuantity = (productName) => {
      setCartItems((currItems) => {
         if (currItems.find((item) => item.productName === productName) == null) {
            return [...currItems, { productName, quantity: 1 }]
         } else {
            return currItems.map((item) => {
               if (item.productName === productName) {
                  return { ...item, quantity: item.quantity + 1 }
               } else {
                  return item
               }
            })
         }
      })
   }
   const decreaseCartQuantity = (productName) => {
      setCartItems((currItems) => {
         if (currItems.find((item) => item.productName === productName)?.quantity === 1) {
            return cartItems.filter((item) => item.productName !== productName)
         } else {
            return currItems.map((item) => {
               if (item.productName === productName) {
                  return { ...item, quantity: item.quantity - 1 }
               } else {
                  return item
               }
            })
         }
      })
   }
   const removeFromCart = (productName) => {
      setCartItems((currItems) => {
         return currItems.filter((item) => item.productName !== productName)
      })
   }
   const removeAllFromCart = () => {
      setCartItems([])
   }

   const value = {
      cartItems,
      getItemQuantity,
      addItemToCart,
      increaseCartQuantity,
      decreaseCartQuantity,
      removeFromCart,
      removeAllFromCart,
   }
   return (
      <>
         <ShoppingCartContext.Provider value={value}>{children}</ShoppingCartContext.Provider>
      </>
   )
}

export const useShoppingContext = () => useContext(ShoppingCartContext)
export default ShoppingCartProvider
