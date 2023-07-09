import React from 'react'

const ContinueAndPayButton = ({ handleContinueAndPay }) => {
   return (
      <>
         <button
            className={`text-[0.85rem] tracking-widest py-4 px-6 w-full bg-peruOrange text-white font-semibold hover:bg-hoverOrange cursor-pointer`}
            onClick={handleContinueAndPay}
            type="submit"
            form="hook-form"
         >
            CONTINUE & PAY
         </button>
      </>
   )
}

export default ContinueAndPayButton

/**FIXME
 * disaable button if cart is empty if user redirect checkout by typing from url
 */
