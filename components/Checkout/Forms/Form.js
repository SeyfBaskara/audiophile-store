import React from 'react'
import { useForm } from 'react-hook-form'
import BillingDetailsInputs from './BillingDetailsInputs'
import PaymentDetailsInputs from './PaymentDetailsInputs'
import ShippingInfoInputs from './ShippingInfoInputs'
import { useThemeContext } from '../../../context/ThemeContext'

const customStyle = {
   title: 'text-sm text-peruOrange font-semibold tracking-wider mb-3',
   label: 'flex flex-col gap-2 text-sm font-semibold md:w-full',
   input: 'border-2 rounded-lg py-3 px-5 text-spanishGray text-[1.1rem] font-normal',
}

const Form = () => {
   const { setShowLightBox, setIsModalOpen } = useThemeContext()

   const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
   } = useForm()
   const onSubmit = (data) => {
      setIsModalOpen(true)
      setShowLightBox(true)
      reset()
   }

   return (
      <form id="hook-form" onSubmit={handleSubmit(onSubmit)}>
         <BillingDetailsInputs register={register} style={customStyle} />
         <ShippingInfoInputs register={register} style={customStyle} />
         <PaymentDetailsInputs register={register} style={customStyle} />
      </form>
   )
}

export default Form

/**
 * should not display submit button ✅
 * should trigger submit when continue&pay button clicked ✅
 * should save data in checkout context forms data
 */
