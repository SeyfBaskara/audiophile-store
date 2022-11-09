import React, { useState } from 'react'
import { useShoppingContext } from '../../context/ShoppingCartContext'

const AddToCartButton = ({ customStyle, objectField, price }) => {
   const { productName, cartImage } = objectField
   const [quantity, setQuantity] = useState(1)
   const [hasClicked, setHasClicked] = useState(false)
   const { addItemToCart } = useShoppingContext()

   const handleAddToCart = () => {
      addItemToCart(productName, price, quantity, cartImage)
      setHasClicked(true)

      setTimeout(() => {
         setHasClicked(false)
         window.scrollTo({ top: 0, behavior: 'smooth' })
      }, 400)
   }

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
         <button className={`${customStyle} text-[0.85rem] tracking-widest py-4 px-6 w-40`} onClick={handleAddToCart}>
            {hasClicked ? <span>&#10004;</span> : 'ADD TO CART'}
         </button>
      </div>
   )
}

export default AddToCartButton
