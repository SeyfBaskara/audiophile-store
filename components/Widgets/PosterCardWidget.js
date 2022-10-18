import React from 'react'
import ShowImage from '../ShowImages/ShowImage'
import ReactMarkDown from 'react-markdown'

const PosterCardWidget = ({ posterCard }) => {
   const { description, image, title } = posterCard
   return (
      <section className="px-6 mb-20">
         <div className="rounded-md overflow-hidden">
            <ShowImage images={image} />
         </div>
         <div className="text-center">
            <h1 className="text-xl3 py-5 font-semibold tracking-wide">
               <ReactMarkDown>{title.toUpperCase()}</ReactMarkDown>
            </h1>
            <p className="text-spanishGray px-1">{description}</p>
         </div>
      </section>
   )
}

export default PosterCardWidget
