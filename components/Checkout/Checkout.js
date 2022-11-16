import React, { useState } from 'react'
import Form from './Forms/index'
import Summary from './Summary/Summary'
import CheckoutModal from './CheckoutModal/CheckoutModal'
import { useThemeContext } from '../../context/ThemeContext'

const Checkout = () => {
   const { pathName } = useThemeContext()
   const [isModalOpen, setIsModalOpen] = useState(false)

   return (
      <div className="lg:flex lg:gap-5">
         <Form pathName={pathName} />
         <Summary setIsModalOpen={setIsModalOpen} />
         {isModalOpen && <CheckoutModal setIsModalOpen={setIsModalOpen} />}
      </div>
   )
}

export default Checkout
