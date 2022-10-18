import React from 'react'
import SeeProductButton from '../Buttons/SeeProductButton'
import ShowImage from '../ShowImages/ShowImage'

const Yx1HeadphoneDisplay = ({ yx1Headphones }) => {
   const { image, name } = yx1Headphones.fields

   const customStyle = {
      button: 'bg-none text-sectionBlack font-bold border-[2px] border-sectionBlack',
   }

   return (
      <section className="flex flex-col gap-5 mt-5">
         <div className="rounded overflow-hidden">
            <ShowImage images={image} />
         </div>
         <div className="bg-fleshWhite py-10 pl-5 rounded">
            <h1 className="text-sectionBlack text-[2rem] leading-tight tracking-wider font-semibold mb-5">
               {name.toUpperCase()}
            </h1>
            <SeeProductButton customStyle={customStyle.button} />
         </div>
      </section>
   )
}

export default Yx1HeadphoneDisplay
