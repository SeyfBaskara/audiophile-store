import { useRouter } from 'next/router'
import React from 'react'

const SeeProductButton = ({ customStyle, slug }) => {
   const router = useRouter()

   return (
      <>
         <button
            className={`${customStyle} text-[0.85rem] tracking-widest py-4 px-6 w-40`}
            onClick={() => router.push(`/details/${slug}`)}
         >
            SEE PRODUCT
         </button>
      </>
   )
}

export default SeeProductButton
