import React from 'react'
import { formatCurrency } from '../../utils/formatCurrency'
import ShowImage from '../ShowImages/ShowImage'
import { useShoppingContext } from '../../context/ShoppingCartContext'

const CartItem = ({ item, isFromCheckout }) => {
   const { productName, image, price, quantity } = item
   const { increaseCartQuantity, decreaseCartQuantity } = useShoppingContext()

   return (
      <section className="flex items-center justify-between">
         <div className="flex items-center gap-4">
            <div className="w-20">
               <ShowImage images={image} />
            </div>
            <div>
               <p className="font-semibold text-[1.2rem]">{productName.replace(/\w+[.!?]?$/, '')}</p>
               <p className="text-[1.1rem] text-spanishGray font-semibold">{formatCurrency(price)}</p>
            </div>
         </div>
         {isFromCheckout ? (
            <div className="flex items-center gap-2 bg-fleshWhite ">
               <button className="py-2 px-3 text-spanishGray" onClick={() => decreaseCartQuantity(productName)}>
                  -
               </button>
               <p className="w-2 text-center">{quantity}</p>
               <button className="py-2 px-3 text-spanishGray" onClick={() => increaseCartQuantity(productName)}>
                  +
               </button>
            </div>
         ) : (
            <p className="w-2 text-spanishGray text-[1.1rem] font-semibold">x{quantity}</p>
         )}
      </section>
   )
}

export default CartItem
