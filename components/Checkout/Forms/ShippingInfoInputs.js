import React from 'react'

const ShippingInfoInputs = ({ register, style }) => {
   return (
      <div className="my-6">
         <h1 className={`${style.title}`}>SHIPPING INFO</h1>

         <div className="flex flex-col gap-4">
            <label className={`${style.label}`} htmlFor="your address">
               Your Address
               <input className={`${style.input}`} type="text" {...register('yourAddress', { required: true })} />
            </label>

            <label className={`${style.label}`} htmlFor="zip code">
               ZIP Code
               <input
                  className={`${style.input}`}
                  type="number"
                  {...register('zipCode', {
                     required: true,
                  })}
               />
            </label>

            <label className={`${style.label}`} htmlFor="city">
               City
               <input className={`${style.input}`} type="text" {...register('city', { required: true })} />
            </label>

            <label className={`${style.label}`} htmlFor="country">
               Country
               <input className={`${style.input}`} type="text" {...register('country', { required: true })} />
            </label>
         </div>
      </div>
   )
}

export default ShippingInfoInputs
