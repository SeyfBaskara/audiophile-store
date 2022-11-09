import React from 'react'
import CheckOutButton from '../Buttons/CheckOutButton'
import { formatCurrency } from '../../utils/formatCurrency'
import { useShoppingContext } from '../../context/ShoppingCartContext'
import CartItem from './CartItem'

const Cart = () => {
   const { cartItems, cartQuantity, removeAllFromCart, grandTotal } = useShoppingContext()

   return (
      <section className="bg-white absolute top-28 right-3 w-[22rem] z-50 px-5 py-8 rounded-lg">
         <div className="flex justify-between items-center">
            <h1 className="font-semibold text-[1.3rem] tracking-widest">{`CART (${cartQuantity})`}</h1>
            <button
               className="text-spanishGray text-[1.1rem] border-b leading-none tracking-wide"
               onClick={() => removeAllFromCart()}
            >
               Remove all
            </button>
         </div>
         <ul className="flex flex-col gap-5 my-8">
            {cartItems.length !== 0 ? (
               cartItems?.map((item, index) => (
                  <li key={index}>
                     <CartItem item={item} />
                  </li>
               ))
            ) : (
               <p className="text-spanishGray text-[1.2rem] text-center tracking-wider">Cart is empty</p>
            )}
         </ul>
         <div className="flex justify-between items-center my-6">
            <p className="text-spanishGray text-[1.2rem]">TOTAL</p>
            <p className="text-[1.3rem] font-semibold">{formatCurrency(grandTotal)}</p>
         </div>
         <CheckOutButton />
      </section>
   )
}

export default Cart

/**
 * NOTE
 *
 * should remove single item in a cart by clicking top right corner closing icon optinal
 */
