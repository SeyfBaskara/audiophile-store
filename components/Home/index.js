import React from 'react'
import Zx9SpeakerDisplay from './Zx9SpeakerDisplay'

const index = ({ displayGridContent }) => {
   const gridContent = displayGridContent.sort((a, b) => a.fields.order - b.fields.order)

   return (
      <>
         <Zx9SpeakerDisplay zx9Speaker={gridContent[0]} />
      </>
   )
}

export default index
