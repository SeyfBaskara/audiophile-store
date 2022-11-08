import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import ThumbnailHeader from './ThumbnailHeader'
import Nav from '../Nav'
import { useWindowSize } from '../../Hooks/UseWindowSize'
import { useContextData } from '../../../context/AppContext'
import MenuWidget from '../../Widgets/MenuWidget'

const Header = ({ header, headerName, detailsPage, hamburgerMenu }) => {
   const [isHamburgerMenu, setIsHamburgerMenu] = useState(false)
   const { showLightBox, setShowLightBox } = useContextData()
   const { navigation, thumbnail } = header
   const size = useWindowSize()

   const customStyle = {
      navBar: 'flex gap-6',
      hamburgerMenu: 'mt-24 md:mt-24 sm:my-16',
   }

   useEffect(() => {
      if (size.width >= 976) {
         setIsHamburgerMenu(false)
      }
   }, [isHamburgerMenu, size.width])

   const handleHamburgerMenu = () => {
      setIsHamburgerMenu(!isHamburgerMenu)
      setShowLightBox(!showLightBox)
   }

   return (
      <header className="bg-sectionBlack">
         <section
            className={`flex justify-between items-center px-6 py-8 ${
               !headerName && 'border-b-[1px] border-spanishGray'
            }  lg:px-0 lg:mx-24`}
         >
            <div className="flex justify-between items-center w-56 lg:w-full lg:flex-row-reverse lg:justify-end lg:gap-36">
               {size.width >= 976 ? (
                  <Nav navigation={navigation} customStyle={customStyle.navBar} />
               ) : (
                  <Image
                     src="/images/icon-hamburger.svg"
                     alt="hamburger menu icon"
                     width={16}
                     height={15}
                     onClick={handleHamburgerMenu}
                  />
               )}
               <Image src="/images/logo.svg" alt="website logo" width={143} height={25} />
            </div>
            <div>
               <Image src="/images/icon-cart.svg" alt="cart icon" width={23} height={20} />
            </div>
         </section>
         {headerName ? (
            <div>
               <h1 className="text-white text-xl2 text-center py-7 pr-4 sm:pr-0">{headerName.toUpperCase()}</h1>
            </div>
         ) : detailsPage ? (
            ''
         ) : (
            <ThumbnailHeader thumbnail={thumbnail} />
         )}
         {isHamburgerMenu && (
            <div className="bg-white absolute top-20 w-full z-10 px-6">
               <MenuWidget menuWidgetProduct={hamburgerMenu} customStyle={customStyle.hamburgerMenu} />
            </div>
         )}
      </header>
   )
}

export default Header
