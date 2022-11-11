import React from 'react'
import CartItem from '../../Cart/CartItem'

const Summary = ({ cartItems }) => {
   return (
      <section className="p-6 shadow-2xl my-5">
         <h1 className="text-xl2 font-semibold tracking-wider">SUMMARY</h1>
         <ul className="flex flex-col gap-5 my-7">
            {cartItems.length !== 0 &&
               cartItems?.map((item, index) => (
                  <li key={index}>
                     <CartItem item={item} isSummary={true} />
                  </li>
               ))}
         </ul>
      </section>
   )
}

export default Summary
