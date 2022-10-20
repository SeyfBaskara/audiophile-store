import React from 'react'
import Image from 'next/image'
import ThumbnailHeader from './ThumbnailHeader'
import Nav from '../Nav'
import { useWindowSize } from '../../Hooks/UseWindowSize'

const Header = ({ header }) => {
   const { navigation, thumbnail } = header
   const size = useWindowSize()

   const customStyle = {
      navBar: 'flex gap-6',
   }

   return (
      <header className="bg-sectionBlack ">
         <section className="flex justify-between items-center px-6 py-8 border-b-[1px] border-spanishGray lg:px-0 lg:mx-24">
            <div className="flex justify-between items-center w-56 lg:w-full lg:flex-row-reverse lg:justify-end lg:gap-36">
               {size.width >= 976 ? (
                  <Nav navigation={navigation} customStyle={customStyle.navBar} />
               ) : (
                  <Image src="/images/icon-hamburger.svg" alt="hamburger menu icon" width={16} height={15} />
               )}
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

export default Header
