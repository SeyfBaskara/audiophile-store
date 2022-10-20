import Link from 'next/link'
import React from 'react'
import ShowImage from '../ShowImages/ShowImage'

const MenuWidget = ({ menuWidgetProduct }) => {
   return (
      <section className="my-28 md:mt-40">
         <ul className="flex flex-col gap-24 sm:flex-row sm:gap-2 md:justify-between">
            {menuWidgetProduct.map((item, index) => (
               <li
                  key={index}
                  className="relative flex flex-col justify-end items-center bg-fleshWhite h-44 rounded sm:w-80 sm:max-w-full"
               >
                  <div className="absolute -top-28 w-56 h-56 max-w-full max-h-full sm:w-36 sm:h-36 md:w-48 md:h-48 md:-top-24 ">
                     <ShowImage images={item.fields.images} />
                  </div>
                  <h1 className="pb-4 font-semibold tracking-wider text-lg">{item.fields.title.toUpperCase()}</h1>
                  <Link href={`/category/${item.fields.slug}`}>
                     <a className="pb-6 text-spanishGray tracking-widest font-semibold hover:text-peruOrange">
                        SHOP <span className="text-peruOrange text-xl">&#62;</span>
                     </a>
                  </Link>
               </li>
            ))}
         </ul>
      </section>
   )
}

export default MenuWidget
