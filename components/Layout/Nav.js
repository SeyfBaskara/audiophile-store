import React from 'react'
import Link from 'next/link'

const Nav = ({ navigation, customStyle }) => {
   return (
      <section>
         <ul className={`${customStyle}`}>
            {navigation.map((nav, index) => (
               <li key={index}>
                  <Link href={nav.slug === 'home' ? '/home' : `/category/${nav.slug}`}>
                     <a className="text-white tracking-widest text-sm hover:text-peruOrange">
                        {nav.name.toUpperCase()}
                     </a>
                  </Link>
               </li>
            ))}
         </ul>
      </section>
   )
}

export default Nav
