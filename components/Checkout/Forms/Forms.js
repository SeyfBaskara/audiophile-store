import React from 'react'
import Link from 'next/link'
import { useThemeContext } from '../../../context/ThemeContext'

const Forms = () => {
   const { pathName } = useThemeContext()

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

export default Forms

/**
 * should go back button redirect correct page ✅
 * should display all forms components
 *
 */
