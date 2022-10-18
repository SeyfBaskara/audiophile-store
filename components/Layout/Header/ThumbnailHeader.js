import React from 'react'
import SeeProductButton from '../../Buttons/SeeProductButton'
import ShowImage from '../../ShowImages/ShowImage'

const ThumbnailHeader = ({ thumbnail }) => {
   const { description, image, title } = thumbnail.fields

   const customStyle = {
      button: 'bg-peruOrange text-white font-semibold',
   }

   return (
      <section className="relative">
         <div className=" absolute top-52 left-14 flex flex-col gap-y-5 h-64 text-center w-3/4 m-auto z-10 sm:top-32">
            <p className="text-spanishGray tracking-[.55em]">NEW PRODUCT</p>
            <h1 className="text-white text-xl4 font-semibold leading-none">{title.toUpperCase()}</h1>
            <p className="text-spanishGray">{description}</p>
            <SeeProductButton customStyle={customStyle.button} />
         </div>
         <div>
            <ShowImage images={image} priority />
         </div>
      </section>
   )
}

export default ThumbnailHeader
