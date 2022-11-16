import React from 'react'
import Image from 'next/image'
import { useShoppingContext } from '../../../context/ShoppingCartContext'
import CartItem from '../../Cart/CartItem'
import { formatCurrency } from '../../../utils/formatCurrency'

const CheckoutModal = () => {
   const { cartItems, grandTotal } = useShoppingContext()

   return (
      <section className="bg-white p-6 mt-10 rounded-md">
         <div>
            <Image src="/icon-order-confirmation.svg" alt="order confirmation icon" width={64} height={64} />
            <h1 className="text-xl3 font-semibold tracking-wider leading-9 my-5">THANK YOU FOR YOUR ORDER</h1>
            <p className="text-spanishGray">You will receive an email confirmation shortly.</p>
         </div>
         <div className="bg-fleshWhite rounded-md">
            <ul className="my-7 mx-6">
               {cartItems.length !== 0 && (
                  <li>
                     <CartItem item={cartItems[0]} isFromCheckout={true} />
                     {cartItems.length > 1 && (
                        <p className="border-t mt-2 text-center text-spanishGray text-sm pt-3">
                           and {cartItems.length - 1} other item(s)
                        </p>
                     )}
                  </li>
               )}
            </ul>
            <p className="flex flex-col gap-4 bg-black text-spanishGray px-6 py-5 rounded-b-md">
               GRAND TOTAL <span className="text-white">{formatCurrency(grandTotal)}</span>
            </p>
         </div>
      </section>
   )
}

export default CheckoutModal

/**
 * should display cart items which purchased ✅
 * should display grand total ✅
 * should display back to home button and redirect to home page
 */
