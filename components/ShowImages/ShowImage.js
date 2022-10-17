import React from 'react'
import Image from 'next/image'

const ShowImage = ({ images }) => {
   const { description, file } = images[0].fields
   return (
      <Image
         src={`https:${file.url}`}
         alt={description}
         width={file.details.image.width}
         height={file.details.image.height}
      />
   )
}

export default ShowImage
