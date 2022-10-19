import React from 'react'
import Image from 'next/image'
import Nav from '../Nav'

const Footer = ({ footer }) => {
   const { navigation, description, copyright } = footer

   const customStyle = {
      navBar: 'flex flex-col gap-5',
   }

   return (
      <footer className="relative bg-sectionBlack pt-4 pb-16">
         <section className="text-center m-auto space-y-11 px-7">
            <div className="bg-peruOrange h-1 w-28 absolute top-0 left-32"></div>
            <div className="space-y-10">
               <Image src="/images/logo.svg" alt="website logo" width={143} height={25} />
               <Nav navigation={navigation} customStyle={customStyle.navBar} />
            </div>
            <p className="text-spanishGray text-sm">{description}</p>

            <div className="space-y-10">
               <p className="text-spanishGray">{copyright}</p>
               <div className="flex justify-center gap-3">
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
