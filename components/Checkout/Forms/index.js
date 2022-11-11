import React from 'react'
import Link from 'next/link'
import Form from './Form'

const index = ({ pathName }) => {
   return (
      <section className="mb-10 mt-5">
         <Link href={`${pathName}`}>
            <a className="text-spanishGray">Go Back</a>
         </Link>
         <section className="p-6 shadow-2xl mt-5">
            <h1 className="text-xl2 font-semibold tracking-wider">CHECKOUT</h1>
            <Form />
         </section>
      </section>
   )
}

export default index

/**
 * FIXME
 * should go back link only redirect pathname where user being redirected to checkout.
 *
 */
