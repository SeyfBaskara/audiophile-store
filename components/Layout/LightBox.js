import React, { useState, useEffect } from 'react'
import { useThemeContext } from '../../context/ThemeContext'
import { useShoppingContext } from '../../context/ShoppingCartContext'

const LightBox = () => {
   const [scrollY, setScrollY] = useState(0)
   const { showLightBox, isModalOpen } = useThemeContext()
   const { isCartOpen } = useShoppingContext()

   useEffect(() => {
      const handleScroll = () => {
         setScrollY(window.scrollY)
      }
      handleScroll()

      window.addEventListener('scroll', handleScroll)
      return () => {
         window.removeEventListener('scroll', handleScroll)
      }

      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [])

   return (
      <>
         {showLightBox && (
            <div
               className={`fixed w-full h-full left-0 ${
                  isCartOpen && scrollY >= 13
                     ? 'top-0'
                     : isCartOpen && scrollY >= 100
                     ? 'top-0'
                     : isModalOpen
                     ? 'top-0'
                     : 'top-20'
               }
               bg-black opacity-30 z-40`}
            ></div>
         )}
      </>
   )
}

export default LightBox

/**
 * should fix lightbox overlap icons on scrolling
 */
