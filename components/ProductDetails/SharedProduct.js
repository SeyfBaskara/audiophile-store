import React from 'react'
import SeeProductButton from '../Buttons/SeeProductButton'
import ShowImage from '../ShowImages/ShowImage'

const SharedProduct = ({ sharedProduct }) => {
   const customStyle = {
      button: 'bg-peruOrange text-white font-semibold hover:bg-hoverOrange sm:px-2 md:px-6',
   }
   return (
      <div className="flex flex-col gap-8 mt-20">
         <h1 className="text-center text-[1.5rem] font-semibold tracking-wide">YOU MAY ALSO LIKE</h1>
         <ul className="flex flex-col gap-16 sm:flex-row sm:gap-2 lg:gap-16">
            {sharedProduct?.map((product, index) => {
               const { name, images, slug } = product.fields
               return (
                  <li key={index} className="flex flex-col items-center gap-5">
                     <ShowImage images={images} />
                     <h1 className="text-[1.5rem] font-bold tracking-wide sm:text-[1.1rem]">{name}</h1>
                     <SeeProductButton customStyle={customStyle.button} slug={slug} />
                  </li>
               )
            })}
         </ul>
      </div>
   )
}

export default SharedProduct
