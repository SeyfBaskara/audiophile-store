import React from 'react'
import SeeProductButton from '../Buttons/SeeProductButton'
import ShowImage from '../ShowImages/ShowImage'
import Image from 'next/image'

const Zx9SpeakerDisplay = ({ zx9Speaker }) => {
   const { description, image, name, slug } = zx9Speaker.fields

   const customStyle = {
      button: 'bg-sectionBlack text-white font-semibold hover:bg-hoverBlack',
   }

   return (
      <section className="relative bg-peruOrange pb-20 sm:pb-0 rounded overflow-hidden lg:h-[39rem] ">
         <div
            className="relative w-[600px] h-[600px] top-40 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                        sm:w-[800px] sm:h-[800px] sm:top-44 md:w-[944px] md:h-[944px] lg:top-96 lg:left-80"
         >
            <Image src="/pattern-circles.svg" alt="circle" layout="fill" />
         </div>
         <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 sm:top-72 md:top-80 
                        lg:transform-none lg:-top-32 lg:-left-36 "
         >
            <div className="flex flex-col items-center lg:flex-row  ">
               <div>
                  <ShowImage images={image} />
               </div>
               <div className="w-64 max-w-full text-center sm:w-80 sm:-mt-20 md:m-auto lg:text-left">
                  <h1 className="text-white text-[2.1rem] px-5 leading-tight tracking-wider font-semibold sm:text-[2.7rem] lg:pl-0">
                     {name.toUpperCase()}
                  </h1>
                  <p className="text-fleshWhite my-6 font-light leading-loose">{description}</p>
                  <SeeProductButton customStyle={customStyle.button} slug={slug} />
               </div>
            </div>
         </div>
      </section>
   )
}

export default Zx9SpeakerDisplay

/**
 * should resize reponsively on medium size screen small fix require for image positon
 */
