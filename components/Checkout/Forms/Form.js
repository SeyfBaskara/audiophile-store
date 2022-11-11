import React from 'react'
import { useForm } from 'react-hook-form'
import BillingDetailsInputs from './BillingDetailsInputs'
import PaymentDetailsInputs from './PaymentDetailsInputs'
import ShippingInfoInputs from './ShippingInfoInputs'

const customStyle = {
   title: 'text-sm text-peruOrange font-semibold tracking-wider mb-3',
   label: 'flex flex-col gap-2 text-sm font-semibold',
   input: 'border-2 rounded-lg py-3 px-5 text-spanishGray text-[1.1rem] font-normal',
}

const Form = () => {
   const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
   } = useForm()
   const onSubmit = (data) => {
      console.log(data)
      reset()
   }

   return (
      <form onSubmit={handleSubmit(onSubmit)}>
         <BillingDetailsInputs register={register} style={customStyle} />
         <ShippingInfoInputs register={register} style={customStyle} />
         <PaymentDetailsInputs register={register} style={customStyle} />
         <input type="submit" />
      </form>
   )
}

export default Form

/**
 * should not display submit button
 * should trigger submit when continue&pay button clicked
 * should save data in checkout context forms data
 */
