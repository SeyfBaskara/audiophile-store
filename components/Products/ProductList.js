import React from 'react'
import Product from './Product'

const ProductList = ({ products }) => {
   return (
      <section className="mt-20 mb-56">
         <ul className="flex flex-col gap-28">
            {products
               .sort((a, b) => a.fields.order - b.fields.order)
               .map((object, i) => {
                  const objectField = object.fields
                  return (
                     <li key={i}>
                        <Product objectField={objectField} />
                     </li>
                  )
               })}
         </ul>
      </section>
   )
}

export default ProductList
