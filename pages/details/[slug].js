import React from 'react'
import contentfulClient from '../../utils/contentfulClient'
import Layout from '../../components/Layout/index'
import MenuWidget from '../../components/Widgets/MenuWidget'
import PosterCardWidget from '../../components/Widgets/PosterCardWidget'

export async function getStaticPaths() {
   const paths = [
      {
         params: { slug: 'xz9-Mark-II-headphones' },
      },
   ]

   return {
      paths,
      fallback: false,
   }
}

export async function getStaticProps() {
   const headerFetch = contentfulClient.getEntries({
      content_type: 'header',
   })
   const footerFetch = contentfulClient.getEntries({
      content_type: 'footer',
   })
   const menuWidgetFetch = contentfulClient.getEntries({
      content_type: 'menuWidget',
   })
   const sharedWidgetFetch = contentfulClient.getEntries({
      content_type: 'sharedWidget',
   })

   const [header, footer, menuWidgetProduct, posterCard] = await Promise.all([
      headerFetch,
      footerFetch,
      menuWidgetFetch,
      sharedWidgetFetch,
   ])

   return {
      props: {
         header: header.items[0].fields,
         footer: footer.items[0].fields,
         menuWidgetProduct: menuWidgetProduct.items,
         posterCard: posterCard.items[0].fields,
      },
   }
}

const ProductDetails = ({ header, footer, menuWidgetProduct, posterCard }) => {
   return (
      <Layout header={header} footer={footer} detailsPage={true}>
         <MenuWidget menuWidgetProduct={menuWidgetProduct} />
         <PosterCardWidget posterCard={posterCard} />
      </Layout>
   )
}

export default ProductDetails
