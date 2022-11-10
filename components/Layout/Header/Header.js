import React, { useState, useEffect, useCallback } from 'react'
import Router, { useRouter } from 'next/router'
import Image from 'next/image'
import ThumbnailHeader from './ThumbnailHeader'
import Nav from '../Nav'
import { useWindowSize } from '../../../Hooks/UseWindowSize'
import { useThemeContext } from '../../../context/ThemeContext'
import { useShoppingContext } from '../../../context/ShoppingCartContext'
import MenuWidget from '../../Widgets/MenuWidget'
import Cart from '../../Cart/Cart'

const Header = ({ header, headerName, detailsPage, hamburgerMenu }) => {
   const [isHamburgerMenu, setIsHamburgerMenu] = useState(false)
   const { showLightBox, setShowLightBox } = useThemeContext()
   const { isCartOpen, setIsCartOpen, cartQuantity } = useShoppingContext()
   const { navigation, thumbnail } = header
   const size = useWindowSize()
   const router = useRouter()

   const customStyle = {
      navBar: 'flex gap-6',
      hamburgerMenu: 'mt-24 md:mt-24 sm:my-16',
   }

   const hide = useCallback(() => {
      setIsHamburgerMenu(false)
      setShowLightBox(false)
      setIsCartOpen(false)
   }, [setIsHamburgerMenu, setShowLightBox, setIsCartOpen])

   useEffect(() => {
      router.events.on('routeChangeStart', hide)

      return () => router.events.off('routeChangeStart', hide)
   }, [hide, router.events, size])

   useEffect(() => {
      if (size.width >= 976) {
         setIsHamburgerMenu(false)
         if (!isCartOpen) {
            setShowLightBox(false)
         }
      }
   }, [isHamburgerMenu, setShowLightBox, size.width, isCartOpen])

   const handleHamburgerMenu = () => {
      setIsHamburgerMenu(!isHamburgerMenu)
      setShowLightBox(!showLightBox)
      if (isCartOpen) {
         setIsCartOpen(false)
         setShowLightBox(true)
      }
   }

   const handleCartItems = () => {
      setIsCartOpen(!isCartOpen)
      setShowLightBox(!showLightBox)
      setIsHamburgerMenu(false)
      if (isHamburgerMenu) {
         setShowLightBox(true)
      }
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
                     className="cursor-pointer"
                     onClick={handleHamburgerMenu}
                  />
               )}
               <Image
                  src="/images/logo.svg"
                  alt="website logo"
                  width={143}
                  height={25}
                  className="cursor-pointer"
                  onClick={() => router.push('/home')}
               />
            </div>
            <div className="relative cursor-pointer" onClick={handleCartItems}>
               <Image src="/images/icon-cart.svg" alt="cart icon" width={25} height={22} />
               <p className="text-peruOrange font-bold text-xl2 absolute -top-5 left-2">
                  {cartQuantity !== 0 && cartQuantity}
               </p>
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
            <div className="bg-white absolute top-20 w-full z-50 px-6 rounded-b-lg">
               <MenuWidget menuWidgetProduct={hamburgerMenu} customStyle={customStyle.hamburgerMenu} />
            </div>
         )}
         {isCartOpen && <Cart />}
      </header>
   )
}

export default Header
