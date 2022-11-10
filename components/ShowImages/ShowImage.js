import React from 'react'
import Image from 'next/image'
import { useWindowSize } from '../../Hooks/UseWindowSize'
import selectImageBySize from '../../utils/selectImageBySize'

const ShowImage = ({ images, priority }) => {
   const size = useWindowSize()
   const { description, file } = selectImageBySize(size, images)

   return (
      <Image
         src={`https:${file.url}`}
         alt={description}
         width={file.details.image.width}
         height={file.details.image.height}
         priority={priority}
      />
   )
}

export default ShowImage
