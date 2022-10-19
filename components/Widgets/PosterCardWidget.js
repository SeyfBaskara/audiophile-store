import React from 'react'
import ShowImage from '../ShowImages/ShowImage'
import ReactMarkDown from 'react-markdown'

const PosterCardWidget = ({ posterCard }) => {
   const { description, image, title } = posterCard
   return (
      <section className="my-20 md:flex md:flex-row-reverse md:items-center lg:justify-between md:gap-10 lg:mb-32">
         <div className="rounded-md overflow-hidden md:flex-1 lg:flex-none">
            <ShowImage images={image} />
         </div>
         <div className="text-center md:text-left md:flex-1 lg:flex-none lg:w-1/3 lg:max-w-full">
            <h1 className="text-xl3 py-5 font-semibold tracking-wide md:leading-none ">
               <ReactMarkDown>{title.toUpperCase()}</ReactMarkDown>
            </h1>
            <p className="text-spanishGray px-1">{description}</p>
         </div>
      </section>
   )
}

export default PosterCardWidget
