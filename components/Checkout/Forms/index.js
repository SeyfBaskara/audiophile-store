import React from 'react'
import Link from 'next/link'
import Form from './Form'

const index = ({ pathName }) => {
   return (
      <section className="mb-10 pt-5">
         <Link href={`${pathName}`}>
            <a className="text-spanishGray">Go Back</a>
         </Link>
         <section className="p-6 mt-5 bg-white rounded-lg">
            <h1 className="text-xl2 font-semibold tracking-wider">CHECKOUT</h1>
            <Form />
         </section>
      </section>
   )
}

export default index
