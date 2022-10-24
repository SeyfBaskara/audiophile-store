import React from 'react'
import Product from '../Products/Product'
import ProductDetail from './ProductDetail'

const index = ({ productDetails }) => {
   const { product, price, features, includes } = productDetails

   return (
      <section>
         <Product objectField={product.fields} price={price} details={true} />
         <ProductDetail features={features} includes={includes} />
      </section>
   )
}

export default index
