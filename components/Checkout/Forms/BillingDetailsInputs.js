import React from 'react'

const BillingDetailsInputs = ({ register, style }) => {
   return (
      <div className="my-6">
         <h1 className={`${style.title}`}>BILLING DETAILS</h1>

         <div className="flex flex-col gap-4">
            <label className={`${style.label}`} htmlFor="name">
               Name
               <input className={`${style.input}`} type="text" {...register('name', { required: true })} />
            </label>

            <label className={`${style.label}`} htmlFor="email">
               Email Address
               <input
                  className={`${style.input}`}
                  type="email"
                  {...register('email', {
                     required: true,
                     pattern: {
                        value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i,
                     },
                  })}
               />
            </label>

            <label className={`${style.label}`} htmlFor="phone">
               Phone Number
               <input className={`${style.input}`} type="tel" {...register('phone', { required: true })} />
            </label>
         </div>
      </div>
   )
}

export default BillingDetailsInputs
