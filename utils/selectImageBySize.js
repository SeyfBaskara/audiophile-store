const selectImageBySize = (size, imageArr) => {
   let imageField
   const isArray = Array.isArray(imageArr)

   if (!isArray) {
      imageField = imageArr.fields
   } else if (size.width < 480 && isArray) {
      imageField = imageArr[0].fields
   } else if (size.width >= 480 && size.width < 768 && isArray) {
      imageField = imageArr[1].fields
   } else {
      if (isArray) {
         imageField = imageArr[2].fields
      }
   }

   return imageField
}

export default selectImageBySize
