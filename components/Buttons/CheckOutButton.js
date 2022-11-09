import { useRouter } from 'next/router'
import React from 'react'

const CheckOutButton = () => {
   const router = useRouter()

   return (
      <>
         <button
            className={` text-[0.85rem] tracking-widest py-4 px-6 w-full bg-peruOrange text-white font-semibold hover:bg-hoverOrange`}
            onClick={() => console.log('hey')}
         >
            CHECKOUT
         </button>
      </>
   )
}

export default CheckOutButton
