import React from 'react'
import { useForm } from 'react-hook-form'
import BillingDetailsInputs from './BillingDetailsInputs'
import PaymentDetailsInputs from './PaymentDetailsInputs'
import ShippingInfoInputs from './ShippingInfoInputs'
import { useShoppingContext } from '../../../context/ShoppingCartContext'
import axios from 'axios'
import { useRouter } from 'next/router'

const customStyle = {
   title: 'text-sm text-peruOrange font-semibold tracking-wider mb-3',
   label: 'flex flex-col gap-2 text-sm font-semibold md:w-full',
   input: 'border-2 rounded-lg py-3 px-5 text-spanishGray text-[1.1rem] font-normal',
}

const Form = () => {
   const { cartItems, addItemToPurchasedCart } = useShoppingContext()
   const router = useRouter()

   const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
   } = useForm()
   const onSubmit = (data) => {
      router.push('/success')

      const payload = cartItems.map((item) => {
         const { id, quantity, productName } = item
         return { id, productName, quantity }
      })
      addItemToPurchasedCart(cartItems)

      // axios
      //    .post('http://localhost:8080/api/create-checkout-session', payload, { maxRedirects: 0 })
      //    .then((res) => {
      //       console.log(res)
      //    })
      //    .catch((err) => {
      //       if (err.response && err.response.status === 303) {
      //          window.location.href = err.response.data.url
      //       } else {
      //          console.log(err)
      //       }
      //    })

      reset()
   }

   return (
      <form id="hook-form" onSubmit={handleSubmit(onSubmit)}>
         <BillingDetailsInputs register={register} style={customStyle} />
         <ShippingInfoInputs register={register} style={customStyle} />
         {/* <PaymentDetailsInputs register={register} style={customStyle} /> */}
      </form>
   )
}

export default Form

/**NOTE
 * prevent user to continue&pay if cart is empty
 * give notification msg "Cart is empty "
 */
