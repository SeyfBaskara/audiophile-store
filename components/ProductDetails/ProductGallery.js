import React from 'react'
import ShowImage from '../ShowImages/ShowImage'

const ProductGallery = ({ gallery }) => {
   const { fields: images } = gallery
   return (
      <div className="flex flex-col gap-5 md:flex-row">
         <div className="flex flex-col gap-5">
            <ShowImage images={images.first} />
            <ShowImage images={images.second} />
         </div>
         <div>
            <ShowImage images={images.third} />
         </div>
      </div>
   )
}

export default ProductGallery
