import React from 'react'
import ShowImage from '../ShowImages/ShowImage'
import SeeProductButton from '../Buttons/SeeProductButton'

const HeadphonesProduct = ({ objectField }) => {
   const { title, productName, description, images } = objectField

   const customStyle = {
      button: 'bg-peruOrange text-white font-semibold hover:bg-hoverOrange',
   }

   return (
      <div className="flex flex-col gap-5">
         <div className="rounded overflow-hidden">
            <ShowImage images={images} />
         </div>
         <div className="flex flex-col items-center gap-5 text-center">
            <h2 className="text-peruOrange text-h2Size tracking-[0.5rem] font-light ">{title?.toUpperCase()}</h2>
            <h1 className="text-h1Size font-bold tracking-wider leading-9 px-1">{productName.toUpperCase()}</h1>
            <p className="text-spanishGray">{description}</p>
            <SeeProductButton customStyle={customStyle.button} />
         </div>
      </div>
   )
}

export default HeadphonesProduct
