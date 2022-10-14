import React from 'react'

const SeeProductButton = () => {
   const handleOnClick = () => {
      console.log('see product click')
   }
   return (
      <>
         <button
            className="bg-peruOrange text-white font-semibold tracking-widest py-4 px-8 m-auto"
            onClick={handleOnClick}
         >
            SEE PRODUCT
         </button>
      </>
   )
}

export default SeeProductButton
