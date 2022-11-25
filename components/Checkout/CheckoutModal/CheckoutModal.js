import React, { useEffect } from 'react'
import Image from 'next/image'
import { useShoppingContext } from '../../../context/ShoppingCartContext'
import { useThemeContext } from '../../../context/ThemeContext'
import { usePaymentContext } from '../../../context/PaymentContext'
import CartItem from '../../Cart/CartItem'
import { formatCurrency } from '../../../utils/formatCurrency'
import BackToHomeButton from '../../Buttons/BackToHomeButton'
import Spinner from './Spinner'
import { useRouter } from 'next/router'

const CheckoutModal = () => {
   const { cartItems, removeAllFromCart, grandTotal, clearLocalStorage } = useShoppingContext()
   const { setShowLightBox, setIsModalOpen } = useThemeContext()
   const { isPaymentDone, setIsPaymentDone } = usePaymentContext()
   const router = useRouter()

   useEffect(() => {
      if (isPaymentDone) {
         clearLocalStorage()
      }
   }, [isPaymentDone, clearLocalStorage])

   const handleBackToHomeButton = () => {
      router.push('/home')
      setShowLightBox(false)
      setIsModalOpen(false)
      setIsPaymentDone(false)
      removeAllFromCart()
   }

   return (
      <section
         className="bg-white p-6 mt-10 rounded-md w-[21rem] 
                           absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 
                           sm:w-[23rem] md:w-[33rem]"
      >
         {!isPaymentDone ? (
            <div className="flex flex-col items-center justify-center gap-5 h-96">
               <p className="text-spanishGray font-medium text-[1.2rem]">Checking payment status...</p>
               <Spinner />
            </div>
         ) : (
            <>
               <div>
                  <Image src="/icon-order-confirmation.svg" alt="order confirmation icon" width={64} height={64} />
                  <h1 className="text-xl3 font-semibold tracking-wider leading-9 my-5 md:w-80">
                     THANK YOU FOR YOUR ORDER
                  </h1>
                  <p className="text-spanishGray">You will receive an email confirmation shortly.</p>
               </div>
               <div className="bg-fleshWhite rounded-md md:flex md:mt-10 ">
                  <ul className="my-7 mx-6 md:my-3 md:w-full ">
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
                  <p className="flex flex-col gap-4 bg-black text-spanishGray px-6 py-5 rounded-b-md md:w-80 md:justify-center md:rounded-bl-none md:rounded-r-md">
                     GRAND TOTAL{' '}
                     <span className="text-white text-[1.3rem] font-semibold">{formatCurrency(grandTotal)}</span>
                  </p>
               </div>
               <BackToHomeButton handleBackToHomeButton={handleBackToHomeButton} />
            </>
         )}
      </section>
   )
}

export default CheckoutModal

/**
 * FIXME
 * wrap content in div
 */
