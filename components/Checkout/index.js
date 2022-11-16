import React from 'react'
import Form from './Forms/index'
import Summary from './Summary/Summary'

const index = ({ pathName, setIsModalOpen }) => {
   return (
      <div className="lg:flex lg:gap-5">
         <Form pathName={pathName} />
         <Summary setIsModalOpen={setIsModalOpen} />
      </div>
   )
}

export default index
