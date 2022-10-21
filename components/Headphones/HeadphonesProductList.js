import React from 'react'
import HeadphonesProduct from './HeadphonesProduct'

const HeadphonesProductList = ({ headphonesProduct }) => {
   return (
      <section className="mt-20 mb-56">
         <ul className="flex flex-col gap-28">
            {headphonesProduct
               .sort((a, b) => a.fields.order - b.fields.order)
               .map((object, i) => {
                  const objectField = object.fields
                  return (
                     <li key={i}>
                        <HeadphonesProduct objectField={objectField} />
                     </li>
                  )
               })}
         </ul>
      </section>
   )
}

export default HeadphonesProductList
