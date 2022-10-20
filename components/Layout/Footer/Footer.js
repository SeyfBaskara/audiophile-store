import React from 'react'
import Image from 'next/image'
import Nav from '../Nav'

const Footer = ({ footer }) => {
   const { navigation, description, copyright } = footer

   const customStyle = {
      navBar: 'flex flex-col gap-5 sm:flex-row',
   }

   return (
      <footer className="bg-sectionBlack pt-4 pb-16">
         <section className="text-center m-auto space-y-11 px-7 sm:text-left lg:px-20">
            <div className="bg-peruOrange m-auto -mt-4 h-1 w-28 sm:ml-0"></div>
            <div className="space-y-10 lg:flex lg:justify-between lg:items-center lg:space-y-0">
               <Image src="/images/logo.svg" alt="website logo" width={143} height={25} />
               <Nav navigation={navigation} customStyle={customStyle.navBar} />
            </div>
            <p className="text-spanishGray text-sm lg:w-96">{description}</p>

            <div className="flex flex-col gap-10 sm:flex-row sm:justify-between sm:items-center sm:gap-0">
               <p className="text-spanishGray">{copyright}</p>
               <div className="flex justify-center gap-3 cursor-pointer ">
                  {['facebook', 'twitter', 'instagram'].map((path, index) => (
                     <Image
                        src={`/images/icon-${path}.svg`}
                        alt={`${path} icon`}
                        key={index}
                        width={24}
                        height={path === 'twitter' ? 20 : 24}
                     />
                  ))}
               </div>
            </div>
         </section>
      </footer>
   )
}

export default Footer
