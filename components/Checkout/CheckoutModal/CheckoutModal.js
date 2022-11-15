import React from 'react'
import Image from 'next/image'

const CheckoutModal = () => {
   return (
      <section className="bg-white p-6 mt-10 rounded-md">
         <div>
            <Image src="/icon-order-confirmation.svg" alt="order confirmation icon" width={64} height={64} />
            <h1>THANK YOU FOR YOUR ORDER</h1>
            <p>You will receive an email confirmation shortly.</p>
         </div>
      </section>
   )
}

export default CheckoutModal

/**
 * should display cart items which purchased
 * should display grand total
 * should display back to home button and redirect to home page
 */
