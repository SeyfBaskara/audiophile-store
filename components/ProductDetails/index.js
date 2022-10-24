import React from 'react'
import Product from '../Products/Product'

const index = ({ productDetails }) => {
   const { product, price } = productDetails

   return (
      <section className="mt-20">
         <Product objectField={product.fields} price={price} details={true} />
      </section>
   )
}

export default index
