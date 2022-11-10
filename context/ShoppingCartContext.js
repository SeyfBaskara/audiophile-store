import React, { useState, createContext, useContext, useEffect } from 'react'
import { useLocalStorage } from '../Hooks/UseLocalStorage'

const ShoppingCartContext = createContext([])

const ShoppingCartProvider = ({ children }) => {
   const [cartItems, setCartItems] = useLocalStorage('shopping-cart', [])
   const [isCartOpen, setIsCartOpen] = useState(false)
   const [cartQuantity, setCartQuantity] = useState()

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

   const grandTotal = cartItems?.map((item) => item.quantity * item.price).reduce((acc, curr) => acc + curr, 0)

   useEffect(() => {
      setCartQuantity(cartItems?.reduce((quantity, item) => item.quantity + quantity, 0))
   }, [cartItems, setCartItems])

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
