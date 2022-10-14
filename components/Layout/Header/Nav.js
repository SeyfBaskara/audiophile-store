import React from 'react'
import Image from 'next/image'
import ThumbnailHeader from './ThumbnailHeader'

const Nav = ({ header }) => {
   const { navigation, thumbnail } = header

   return (
      <header className="bg-sectionBlack">
         <section className="flex justify-between items-center px-6 py-8 border-b-[1px] border-spanishGray">
            <div className="flex justify-between items-center w-56">
               <Image src="/images/icon-hamburger.svg" alt="hamburger menu icon" width={16} height={15} />
               <Image src="/images/logo.svg" alt="website logo" width={143} height={25} />
            </div>
            <div>
               <Image src="/images/icon-cart.svg" alt="cart icon" width={23} height={20} />
            </div>
         </section>
         <ThumbnailHeader thumbnail={thumbnail} />
      </header>
   )
}

export default Nav
