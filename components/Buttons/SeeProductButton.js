import { useRouter } from 'next/router'
import React from 'react'

const SeeProductButton = ({ customStyle, slug }) => {
   const router = useRouter()

   return (
      <>
         <button
            className={` text-[0.85rem] tracking-widest py-4 px-6 max-w-2xl ${customStyle}`}
            onClick={() => router.push(`/details/${slug}`)}
         >
            SEE PRODUCT
         </button>
      </>
   )
}

export default SeeProductButton
