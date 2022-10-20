import React from 'react'
import SeeProductButton from '../Buttons/SeeProductButton'
import ShowImage from '../ShowImages/ShowImage'

const Yx1HeadphoneDisplay = ({ yx1Headphones }) => {
   const { image, name } = yx1Headphones.fields

   const customStyle = {
      button:
         'bg-none text-sectionBlack font-bold border-[2px] border-sectionBlack ml-5 md:ml-16 hover:bg-sectionBlack hover:text-white',
   }

   return (
      <section className="flex flex-col gap-5 mt-5 sm:flex-row md:mb-40">
         <div className="rounded overflow-hidden bg-imgBlack sm:flex-1 ">
            <ShowImage images={image} />
         </div>
         <div className="flex flex-col justify-center bg-fleshWhite h-52 rounded sm:flex-1 sm:h-auto">
            <h1 className="text-sectionBlack text-[2rem] pl-5 leading-tight tracking-wider font-semibold mb-5 sm:text-[1.5rem] md:pl-16">
               {name.toUpperCase()}
            </h1>
            <SeeProductButton customStyle={customStyle.button} />
         </div>
      </section>
   )
}

export default Yx1HeadphoneDisplay
