import React from 'react'
import Form from './Forms/index'
import Summary from './Summary/Summary'
import CheckoutModal from './CheckoutModal/CheckoutModal'

const index = ({ pathName }) => {
   return (
      <div className="lg:flex lg:gap-5">
         <Form pathName={pathName} />
         <Summary />
         <CheckoutModal />
      </div>
   )
}

export default index
