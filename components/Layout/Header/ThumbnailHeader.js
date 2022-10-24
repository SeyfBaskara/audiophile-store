import React from 'react'
import SeeProductButton from '../../Buttons/SeeProductButton'
import ShowImage from '../../ShowImages/ShowImage'

const ThumbnailHeader = ({ thumbnail }) => {
   const { description, image, title, slug } = thumbnail.fields

   const customStyle = {
      button: 'bg-peruOrange text-white font-semibold hover:bg-hoverOrange',
   }

   return (
      <section className="relative">
         <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                        flex flex-col items-center text-center gap-y-5 h-64 w-80 z-10 sm:w-96 
                        md:w-80 md:left-56 md:items-start md:text-left lg:w-96 lg:left-72"
         >
            <p className="text-spanishGray tracking-[.55em]">NEW PRODUCT</p>
            <h1 className="text-white text-xl4 font-semibold leading-none sm:text-xl5 md:text-xl4 lg:text-xl5">
               {title.toUpperCase()}
            </h1>
            <p className="text-spanishGray">{description}</p>
            <SeeProductButton customStyle={customStyle.button} slug={slug} />
         </div>
         <div>
            <ShowImage images={image} priority />
         </div>
      </section>
   )
}

export default ThumbnailHeader
