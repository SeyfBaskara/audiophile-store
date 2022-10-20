import React from 'react'
import SeeProductButton from '../Buttons/SeeProductButton'
import ShowImage from '../ShowImages/ShowImage'

const Zx7SpeakerDisplay = ({ zx7Speaker }) => {
   const { image, name } = zx7Speaker.fields

   const customStyle = {
      button: 'bg-none text-sectionBlack font-bold border-2 border-sectionBlack hover:bg-sectionBlack hover:text-white',
   }

   return (
      <section className="relative mt-5">
         <div className="rounded overflow-hidden">
            <ShowImage images={image} />
         </div>
         <div className="absolute top-24 left-6 sm:top-8 md:top-10 md:left-20 lg:top-20">
            <h1 className="text-sectionBlack text-[1.8rem] leading-tight tracking-wider font-semibold mb-8">
               {name.toUpperCase()}
            </h1>
            <SeeProductButton customStyle={customStyle.button} />
         </div>
      </section>
   )
}

export default Zx7SpeakerDisplay
