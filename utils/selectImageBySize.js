const selectImageBySize = (size, imageArr) => {
   let imageField

   if (size.width < 480) {
      imageField = imageArr[0].fields
   } else if (size.width >= 480 && size.width < 768) {
      imageField = imageArr[1].fields
   } else {
      imageField = imageArr[2].fields
   }

   return imageField
}

export default selectImageBySize
