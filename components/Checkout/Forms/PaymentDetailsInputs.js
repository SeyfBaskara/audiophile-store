import React from 'react'

const PaymentDetailsInputs = ({ register, style }) => {
   return (
      <div className="my-6">
         <h1 className={`${style.title}`}>PAYMENT DETAILS</h1>

         <div className="flex flex-col gap-4">
            <label className={`${style.label}`} htmlFor="payment method">
               Payment Method
               <div className="md:flex md:flex-col md:items-end">
                  <div className={`${style.input} md:w-6/12`}>
                     <label className="flex items-center gap-5 font-semibold text-black text-[1rem] " htmlFor="e-Money">
                        <input
                           type="radio"
                           value="e-money"
                           {...register('paymentMethod', {
                              required: true,
                           })}
                        />
                        e-Money
                     </label>
                  </div>
                  <div className={`${style.input} mt-2 md:w-6/12`}>
                     <label
                        className="flex items-center gap-5 font-semibold text-black text-[1rem]"
                        htmlFor="cash-on-delivery"
                     >
                        <input
                           type="radio"
                           value="cash-on-delivery"
                           {...register('paymentMethod', {
                              required: true,
                           })}
                        />
                        Cash on Delivery
                     </label>
                  </div>
               </div>
            </label>

            <div className="md:flex md:gap-3">
               <label className={`${style.label}`} htmlFor="e-Money-number">
                  e-Money Number
                  <input
                     className={`${style.input}`}
                     type="number"
                     {...register('eMoneyNumber', {
                        required: true,
                     })}
                  />
               </label>

               <label className={`${style.label}`} htmlFor="e-Money-pin">
                  e-Money PIN
                  <input
                     className={`${style.input}`}
                     type="number"
                     {...register('eMoneyPin', {
                        required: true,
                     })}
                  />
               </label>
            </div>
         </div>
      </div>
   )
}

export default PaymentDetailsInputs

/**
 * FIXME
 *
 * should focus on payment method while form validation trigger
 *
 */
