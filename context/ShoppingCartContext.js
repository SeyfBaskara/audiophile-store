import React, { useState, createContext, useContext } from 'react'

const initicalContext = []

const ShoppingCartContext = createContext(initicalContext)

const ShoppingCartProvider = ({ children }) => {
   const [cartItems, setCartItems] = useState(initicalContext)
   const [isCartOpen, setIsCartOpen] = useState(false)

   const getItemQuantity = (productName) => {
      return cartItems.find((item) => item.productName === productName)?.quantity || 0
   }
   const addItemToCart = (productName, price, quantity, image) => {
      setCartItems((currItems) => {
         if (currItems.find((item) => item.productName === productName) == null) {
            return [...currItems, { productName, price, quantity, image }]
         } else {
            return currItems.map((item) => {
               if (item.productName === productName) {
                  return { ...item, quantity: item.quantity + quantity }
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
   const cartQuantity = cartItems.reduce((quantity, item) => item.quantity + quantity, 0)
   const grandTotal = cartItems.map((item) => item.quantity * item.price).reduce((acc, curr) => acc + curr, 0)

   const value = {
      isCartOpen,
      setIsCartOpen,
      cartItems,
      getItemQuantity,
      addItemToCart,
      increaseCartQuantity,
      decreaseCartQuantity,
      removeFromCart,
      removeAllFromCart,
      cartQuantity,
      grandTotal,
   }
   return (
      <>
         <ShoppingCartContext.Provider value={value}>{children}</ShoppingCartContext.Provider>
      </>
   )
}

export const useShoppingContext = () => useContext(ShoppingCartContext)
export default ShoppingCartProvider
