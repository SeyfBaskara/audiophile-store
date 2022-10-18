import React from 'react'
import SeeProductButton from '../Buttons/SeeProductButton'
import ShowImage from '../ShowImages/ShowImage'
import Image from 'next/image'

const Zx9SpeakerDisplay = ({ zx9Speaker }) => {
   const { description, image, name } = zx9Speaker.fields

   const customStyle = {
      button: 'bg-sectionBlack text-white font-semibold',
   }
   return (
      <section className="relative bg-peruOrange px-6 pb-16 rounded text-center overflow-hidden">
         <div className="absolute -left-28 -top-28 w-[550px] h-[550px]">
            <Image src="/pattern-circles.svg" alt="circle image" layout="fill" />
         </div>
         <div className="pt-10">
            <ShowImage images={image} />
         </div>
         <div>
            <h1 className="text-white text-[2.1rem] px-10 -mt-10 leading-tight tracking-wider font-semibold">
               {name.toUpperCase()}
            </h1>
            <p className="text-fleshWhite my-6 font-light leading-loose">{description}</p>
            <SeeProductButton customStyle={customStyle.button} />
         </div>
      </section>
   )
}

export default Zx9SpeakerDisplay
