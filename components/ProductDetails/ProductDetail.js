import React from 'react'

const ProductDetail = ({ features, includes }) => {
   return (
      <div className="my-20 flex flex-col gap-16 lg:flex-row lg:gap-0 lg:justify-between lg:max-w-5xl">
         <div className="max-w-3xl lg:max-w-2xl ">
            <h1 className="text-[1.7rem] font-semibold tracking-wide">FEATURES</h1>
            <p className="text-spanishGray my-4 text-[0.95rem]">{features.split('\n')[0]}</p>
            <p className="text-spanishGray text-[0.95rem]">{features.split('\n')[2]}</p>
         </div>
         <div className="md:flex md:justify-between md:max-w-xl lg:flex-col lg:justify-start">
            <h1 className="text-[1.7rem] font-semibold tracking-wide mb-5">IN THE BOX</h1>
            <ul className="flex flex-col gap-3">
               {includes.map((product, index) => (
                  <li key={index} className="flex items-center gap-5 max-w-md">
                     <p className="text-peruOrange font-semibold">{product.quantity}x</p>
                     <p className="text-spanishGray text-[0.95rem]">{product.item}</p>
                  </li>
               ))}
            </ul>
         </div>
      </div>
   )
}

export default ProductDetail
