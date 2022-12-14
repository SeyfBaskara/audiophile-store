import React from 'react'
import Yx1HeadphoneDisplay from './Yx1HeadphoneDisplay'
import Zx7SpeakerDisplay from './Zx7SpeakerDisplay'
import Zx9SpeakerDisplay from './Zx9SpeakerDisplay'

const index = ({ displayGridContent }) => {
   const gridContent = displayGridContent.sort((a, b) => a.fields.order - b.fields.order)

   return (
      <>
         <Zx9SpeakerDisplay zx9Speaker={gridContent[0]} />
         <Zx7SpeakerDisplay zx7Speaker={gridContent[1]} />
         <Yx1HeadphoneDisplay yx1Headphones={gridContent[2]} />
      </>
   )
}

export default index
