import React, { useState } from 'react'

const AddToCartButton = ({ customStyle }) => {
   const [quantity, setQuantity] = useState(1)

   const handleAddToCart = () => {
      //add product to cart
   }

   return (
      <div className="flex items-center gap-5">
         <div className="flex items-center gap-2 bg-fleshWhite py-2 px-2">
            <button className="py-2 px-3 text-spanishGray" onClick={() => setQuantity(quantity--)}>
               -
            </button>
            <p className="w-12 text-center">{quantity}</p>
            <button className="py-2 px-3 text-spanishGray" onClick={() => setQuantity(quantity++)}>
               +
            </button>
         </div>
         <button className={`${customStyle} text-[0.85rem] tracking-widest py-4 px-6 w-40`} onClick={handleAddToCart}>
            ADD TO CART
         </button>
      </div>
   )
}

export default AddToCartButton
