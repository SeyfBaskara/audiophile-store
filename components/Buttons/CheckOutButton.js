import { useRouter } from 'next/router'
import React from 'react'
import { useThemeContext } from '../../context/ThemeContext'

const CheckOutButton = ({ isCartEmpty }) => {
   const { setPathName } = useThemeContext()
   const router = useRouter()

   const handleCheckoutOnClick = () => {
      if (!isCartEmpty) {
         router.push('/checkout')
         if (router.asPath !== '/checkout') {
            setPathName(router.asPath)
         }
      }
   }

   return (
      <>
         <button
            className={`text-[0.85rem] tracking-widest py-4 px-6 w-full bg-peruOrange text-white font-semibold hover:bg-hoverOrange cursor-pointer`}
            onClick={handleCheckoutOnClick}
         >
            CHECKOUT
         </button>
      </>
   )
}

export default CheckOutButton
