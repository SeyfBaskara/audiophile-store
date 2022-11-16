import React from 'react'

const BackToHomeButton = ({ handleBackToHomeButton }) => {
   return (
      <>
         <button
            className={`text-[0.85rem] tracking-widest py-4 px-6 mt-6 w-full bg-peruOrange text-white font-semibold hover:bg-hoverOrange cursor-pointer`}
            onClick={handleBackToHomeButton}
         >
            BACK TO HOME
         </button>
      </>
   )
}

export default BackToHomeButton
