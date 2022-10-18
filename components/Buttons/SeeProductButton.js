import React from 'react'

const SeeProductButton = ({ customStyle }) => {
   const handleOnClick = () => {
      console.log('see product click')
   }
   return (
      <>
         <button className={`${customStyle} text-[0.85rem] tracking-widest py-4 px-8 m-auto`} onClick={handleOnClick}>
            SEE PRODUCT
         </button>
      </>
   )
}

export default SeeProductButton

/**
 * should adapt the button style to diffirent component's required style, like a bg color, border and size
 * should route products or product details page according slug
 *
 */
