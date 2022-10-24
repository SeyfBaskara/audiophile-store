import React from 'react'
import Product from '../Products/Product'

const index = ({ productDetails }) => {
   const { product, price } = productDetails
   console.log(product)
   return (
      <section>
         <Product objectField={product.fields} price={price} />
      </section>
   )
}

export default index
