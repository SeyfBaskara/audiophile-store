import React from 'react'
import Link from 'next/link'

const index = ({ pathName }) => {
   return (
      <section>
         <Link href={`${pathName}`}>
            <a className="text-spanishGray">Go Back</a>
         </Link>
         <div>
            <h1>CHECKOUT</h1>
         </div>
      </section>
   )
}

export default index

/**
 * should go back button redirect correct page ✅
 * should display all forms components
 *
 */
