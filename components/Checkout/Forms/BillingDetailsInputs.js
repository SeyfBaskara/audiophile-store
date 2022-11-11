import React from 'react'

const BillingDetailsInputs = ({ register }) => {
   return (
      <div className="my-6">
         <h1 className="text-sm text-peruOrange font-semibold tracking-wider mb-3">BILLING DETAILS</h1>
         <div className="flex flex-col gap-4">
            <label className="flex flex-col gap-1 text-sm font-semibold" htmlFor="name">
               Name
               <input
                  className="border-2 rounded-lg py-3 px-5 text-spanishGray text-[1.1rem] font-normal"
                  type="text"
                  {...register('name', { required: true })}
               />
            </label>

            <label className="flex flex-col gap-1 text-sm font-semibold" htmlFor="email">
               Email Address
               <input
                  className="border-2 rounded-lg py-3 px-5 text-spanishGray text-[1.1rem] font-normal"
                  type="email"
                  {...register('email', {
                     required: true,
                     pattern: {
                        value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i,
                     },
                  })}
               />
            </label>

            <label className="flex flex-col gap-1 text-sm font-semibold" htmlFor="phone">
               Phone Number
               <input
                  className="border-2 rounded-lg py-3 px-5 text-spanishGray text-[1.1rem] font-normal"
                  type="tel"
                  {...register('phone', { required: true })}
               />
            </label>
         </div>
      </div>
   )
}

export default BillingDetailsInputs
