import React from 'react'
import SeeProductButton from '../../Buttons/SeeProductButton'
import Image from 'next/image'

const ThumbnailHeader = ({ thumbnail }) => {
   const { description, image, title } = thumbnail.fields

   const customStyle = {
      bgColor: 'bg-peruOrange',
   }

   return (
      <section className="relative">
         <div className=" absolute top-52 left-14 flex flex-col gap-y-5 h-64 text-center w-3/4 m-auto z-10">
            <p className="text-spanishGray tracking-[.55em]">NEW PRODUCT</p>
            <h1 className="text-white text-xl4 font-semibold leading-none">{title.toUpperCase()}</h1>
            <p className="text-spanishGray">{description}</p>
            <SeeProductButton customStyle={customStyle} />
         </div>
         <div>
            <Image
               src={`https:${image[0].fields.file.url}`}
               alt="xx99 mark two headphones"
               width={720}
               height={1200}
               priority
            />
         </div>
      </section>
   )
}

export default ThumbnailHeader
