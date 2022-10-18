import React from 'react'
import SeeProductButton from '../Buttons/SeeProductButton'
import ShowImage from '../ShowImages/ShowImage'

const Zx9SpeakerDisplay = ({ zx9Speaker }) => {
   const { description, image, name } = zx9Speaker.fields

   const customStyle = {
      bgColor: 'bg-sectionBlack',
   }
   return (
      <section className="relative bg-peruOrange mx-6 px-6 pb-16 rounded text-center">
         <div>
            <ShowImage images={image} />
         </div>
         <div>
            <h1 className="text-white text-[2.1rem] px-10 leading-tight tracking-wider font-semibold">
               {name.toUpperCase()}
            </h1>
            <p className="text-fleshWhite my-6 font-light leading-loose">{description}</p>
            <SeeProductButton customStyle={customStyle} />
         </div>
      </section>
   )
}

export default Zx9SpeakerDisplay
