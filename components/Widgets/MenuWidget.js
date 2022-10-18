import Link from 'next/link'
import React from 'react'
import ShowImage from '../ShowImages/ShowImage'

const MenuWidget = ({ menuWidgetProduct }) => {
   return (
      <section className="py-28">
         <ul className="flex flex-col gap-24">
            {menuWidgetProduct.map((item, index) => (
               <li key={index} className="relative flex flex-col justify-end items-center bg-fleshWhite h-44 rounded ">
                  <div className="absolute -top-28 w-56 h-56">
                     <ShowImage images={item.fields.images} />
                  </div>
                  <h1 className="pb-4 font-semibold tracking-wider text-lg">{item.fields.title.toUpperCase()}</h1>
                  <Link href={`/category/${item.fields.slug}`}>
                     <a className="pb-6 text-spanishGray tracking-widest font-semibold">
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
