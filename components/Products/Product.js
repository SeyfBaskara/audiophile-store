import React from 'react'
import ShowImage from '../ShowImages/ShowImage'
import SeeProductButton from '../Buttons/SeeProductButton'
import AddToCartButton from '../Buttons/AddToCartButton'
import { formatCurrency } from '../../utils/formatCurrency'

const Product = ({ objectField, price, details }) => {
   const { title, productName, description, images, order, slug } = objectField

   const customStyle = {
      button: 'bg-peruOrange text-white font-semibold hover:bg-hoverOrange',
   }

   return (
      <div
         className={`flex flex-col gap-5 ${
            details ? 'md:flex-row' : order % 2 !== 0 ? 'md:flex-row' : 'md:flex-row-reverse'
         } md:gap-8 lg:gap-28`}
      >
         <div className="rounded overflow-hidden">
            <ShowImage images={images} />
         </div>
         <div
            className={`flex flex-col  gap-5 ${
               details ? 'text-left items-start md:gap-2 lg:gap-5' : 'text-center items-center'
            } md:text-left md:items-start md:justify-center`}
         >
            <h2 className="text-peruOrange text-[0.8rem] -mb-4 tracking-[0.3rem] font-light md:-mb-3 lg:-mb-4 ">
               {title?.toUpperCase()}
            </h2>
            <h1 className={`text-md font-bold tracking-wider leading-9 w-72  sm:text-large md:text-md `}>
               {productName.toUpperCase()}
            </h1>
            <p className={`text-spanishGray ${!details && 'sm:px-10'} md:px-0 lg:text-sm lg:pr-10`}>{description}</p>
            {price && <p className="text-[1.3rem] font-semibold">{formatCurrency(price)}</p>}
            {details ? (
               <AddToCartButton customStyle={customStyle.button} />
            ) : (
               <SeeProductButton customStyle={customStyle.button} slug={slug} />
            )}
         </div>
      </div>
   )
}

export default Product

/**
 * should display add cart button instead of seeproduct button on details page
 *
 */
