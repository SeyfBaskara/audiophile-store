import React from 'react'
import CartItem from '../../Cart/CartItem'
import { useShoppingContext } from '../../../context/ShoppingCartContext'
import { formatCurrency } from '../../../utils/formatCurrency'
import ContinueAndPayButton from '../../Buttons/ContinueAndPayButton'

const style = {
   text: 'flex items-center justify-between text-spanishGray',
   span: 'font-semibold text-[1.1rem]',
}

const Summary = () => {
   const { cartItems, totalPrice, shippingCost, vat, grandTotal } = useShoppingContext()

   const handleContinueAndPay = () => {}

   return (
      <section className="p-6 bg-white rounded-lg lg:w-6/12 lg:h-[50%] lg:mt-16">
         <h1 className="text-xl2 font-semibold tracking-wider">SUMMARY</h1>
         <ul className="flex flex-col gap-5 my-7">
            {cartItems.length !== 0 &&
               cartItems?.map((item, index) => (
                  <li key={index}>
                     <CartItem item={item} isFromCheckout={true} />
                  </li>
               ))}
         </ul>
         <div className="flex flex-col gap-2">
            <p className={`${style.text}`}>
               TOTAL <span className={`${style.span} text-black`}>{formatCurrency(totalPrice)}</span>
            </p>
            <p className={`${style.text}`}>
               SHIPPING <span className={`${style.span} text-black`}>{formatCurrency(shippingCost)}</span>
            </p>
            <p className={`${style.text}`}>
               VAT(INCLUDED) <span className={`${style.span} text-black`}>{formatCurrency(vat)}</span>
            </p>
            <p className={`${style.text} mt-5 mb-7`}>
               GRAND TOTAL <span className={`${style.span} text-peruOrange`}>{formatCurrency(grandTotal)}</span>
            </p>
         </div>
         <ContinueAndPayButton handleContinueAndPay={handleContinueAndPay} />
      </section>
   )
}

export default Summary
