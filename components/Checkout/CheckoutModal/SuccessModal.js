import React, { useEffect } from 'react'
import Image from 'next/image'
import { useShoppingContext } from '../../../context/ShoppingCartContext'
import CartItem from '../../Cart/CartItem'
import { formatCurrency } from '../../../utils/formatCurrency'
import BackToHomeButton from '../../Buttons/BackToHomeButton'
import { useRouter } from 'next/router'

const SuccessModal = () => {
   const { purchasedCartItems, removeAllFromCart, grandTotal, clearLocalStorage, clearPurchasedCartStorage } =
      useShoppingContext()
   const router = useRouter()

   useEffect(() => {
      if (typeof window !== 'undefined') {
         clearLocalStorage()
         clearPurchasedCartStorage()
         removeAllFromCart()
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [])

   const handleBackToHomeButton = () => {
      router.push('/home')
   }

   return (
      <section className="flex items-center justify-center py-10">
         <div className=" bg-white p-6 rounded-md max-w-lg">
            <div>
               <Image src="/icon-order-confirmation.svg" alt="order confirmation icon" width={64} height={64} />
               <h1 className="text-xl3 font-semibold tracking-wider leading-9 my-5 md:w-80">
                  THANK YOU FOR YOUR ORDER
               </h1>
               <p className="text-spanishGray">You will receive an email confirmation shortly.</p>
            </div>
            <div className="bg-fleshWhite rounded-md md:flex md:mt-10 ">
               <ul className="my-7 mx-6 md:my-3 md:w-full ">
                  {purchasedCartItems.length !== 0 && (
                     <li>
                        <CartItem item={purchasedCartItems[0]} isFromCheckout={false} />
                        <>
                           {purchasedCartItems.length > 1 && (
                              <p className="border-t mt-2 text-center text-spanishGray text-sm pt-3">
                                 and {purchasedCartItems.length - 1} other item(s)
                              </p>
                           )}
                        </>
                     </li>
                  )}
               </ul>
               <p className="flex flex-col gap-4 bg-black text-spanishGray px-6 py-5 rounded-b-md md:w-80 md:justify-center md:rounded-bl-none md:rounded-r-md">
                  GRAND TOTAL{' '}
                  <span className="text-white text-[1.3rem] font-semibold">{formatCurrency(grandTotal)}</span>
               </p>
            </div>
            <BackToHomeButton handleBackToHomeButton={handleBackToHomeButton} />
         </div>
      </section>
   )
}

export default SuccessModal

/**
 * TODO
 * fetch grandtotal frm purschased items instead of cart items (this should be fixed on shopping context)
 *
 */
