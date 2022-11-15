import React from 'react'
import Form from './Forms/index'
import Summary from './Summary/Summary'

const index = ({ pathName }) => {
   return (
      <div className="lg:flex lg:gap-5">
         <Form pathName={pathName} />
         <Summary />
      </div>
   )
}

export default index
