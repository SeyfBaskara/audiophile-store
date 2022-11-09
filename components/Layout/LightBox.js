import React, { useState, useEffect } from 'react'
import { useThemeContext } from '../../context/ThemeContext'

const LightBox = () => {
   const [scrollY, setScrollY] = useState(0)
   const { showLightBox } = useThemeContext()

   useEffect(() => {
      const handleScroll = () => {
         setScrollY(window.scrollY)
      }
      handleScroll()

      window.addEventListener('scroll', handleScroll)
      return () => {
         window.removeEventListener('scroll', handleScroll)
      }

      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [])

   return (
      <>
         {showLightBox && (
            <div
               className={`fixed w-full h-full left-0 ${scrollY >= 100 ? 'top-0' : 'top-24'} bg-black opacity-30 z-40`}
            ></div>
         )}
      </>
   )
}

export default LightBox
