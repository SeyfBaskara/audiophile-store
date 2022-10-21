import React from 'react'
import ShowImage from '../ShowImages/ShowImage'
import SeeProductButton from '../Buttons/SeeProductButton'

const HeadphonesProduct = ({ objectField }) => {
   const { title, productName, description, images, order } = objectField

   const customStyle = {
      button: 'bg-peruOrange text-white font-semibold hover:bg-hoverOrange',
   }

   return (
      <div
         className={`flex flex-col gap-5 ${order % 2 !== 0 ? 'md:flex-row' : 'md:flex-row-reverse'} md:gap-8 lg:gap-28`}
      >
         <div className="rounded overflow-hidden">
            <ShowImage images={images} />
         </div>
         <div className="flex flex-col items-center gap-5 text-center md:text-left md:items-start md:justify-center">
            <h2 className="text-peruOrange text-base tracking-[0.5rem] font-light md:-mb-4">{title?.toUpperCase()}</h2>
            <h1 className="text-md font-bold tracking-wider leading-9 w-72 sm:text-large md:text-md">
               {productName.toUpperCase()}
            </h1>
            <p className="text-spanishGray sm:px-10 md:px-0 lg:text-sm lg:pr-10">{description}</p>
            <SeeProductButton customStyle={customStyle.button} />
         </div>
      </div>
   )
}

export default HeadphonesProduct
