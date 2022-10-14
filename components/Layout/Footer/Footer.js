import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Footer = ({ footer }) => {
   const { navigation, description, copyright } = footer

   return (
      <footer className="bg-sectionBlack py-16">
         <section className="text-center m-auto space-y-11 px-7">
            <div className="space-y-10">
               <Image src="/images/logo.svg" alt="website logo" width={143} height={25} />
               <div className="flex flex-col gap-5">
                  {navigation.map((nav, index) => (
                     <Link href={nav.slug === 'home' ? '/home' : `/category/${nav.slug}`} key={index}>
                        <a className="text-white tracking-widest font-light text-sm">{nav.name.toUpperCase()}</a>
                     </Link>
                  ))}
               </div>
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
