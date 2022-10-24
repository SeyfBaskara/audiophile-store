import React from 'react'
import Product from '../Products/Product'
import ProductDetail from './ProductDetail'
import ProductGallery from './ProductGallery'

const index = ({ productDetails }) => {
   const { product, price, features, includes, gallery } = productDetails

   return (
      <section>
         <Product objectField={product.fields} price={price} details={true} />
         <ProductDetail features={features} includes={includes} />
         <ProductGallery gallery={gallery} />
      </section>
   )
}

export default index
