import React from 'react'
import { useForm } from 'react-hook-form'
import BillingDetailsInputs from './BillingDetailsInputs'

const Form = () => {
   const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
   } = useForm()
   const onSubmit = (data) => console.log(data)

   return (
      <form onSubmit={handleSubmit(onSubmit)}>
         <BillingDetailsInputs register={register} />
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
