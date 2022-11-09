import React, { useState } from 'react'
import { useShoppingContext } from '../../context/ShoppingCartContext'

const AddToCartButton = ({ customStyle, productName }) => {
   const [quantity, setQuantity] = useState(1)
   const { addItemToCart } = useShoppingContext()

   return (
      <div className="flex items-center gap-5">
         <div className="flex items-center gap-2 bg-fleshWhite py-2 px-2">
            <button className="py-2 px-3 text-spanishGray" onClick={() => quantity > 1 && setQuantity(quantity - 1)}>
               -
            </button>
            <p className="w-12 text-center">{quantity}</p>
            <button className="py-2 px-3 text-spanishGray" onClick={() => setQuantity(quantity + 1)}>
               +
            </button>
         </div>
         <button
            className={`${customStyle} text-[0.85rem] tracking-widest py-4 px-6 w-40`}
            onClick={() => addItemToCart(productName, quantity)}
         >
            ADD TO CART
         </button>
      </div>
   )
}

export default AddToCartButton
