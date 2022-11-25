import Layout from '../../components/Layout'
import MenuWidget from '../../components/Widgets/MenuWidget'
import PosterCardWidget from '../../components/Widgets/PosterCardWidget'
import contentfulClient from '../../utils/contentfulClient'
import ProductDisplay from '../../components/Products/index'

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
   const speakersProductFetch = contentfulClient.getEntries({
      content_type: 'speakersProduct',
   })
   const metaDataFetch = contentfulClient.getEntries({
      content_type: 'metaData',
   })

   const [header, footer, menuWidgetProduct, posterCard, speakersProduct, metaData] = await Promise.all([
      headerFetch,
      footerFetch,
      menuWidgetFetch,
      sharedWidgetFetch,
      speakersProductFetch,
      metaDataFetch,
   ])

   return {
      props: {
         header: header.items[0].fields,
         footer: footer.items[0].fields,
         menuWidgetProduct: menuWidgetProduct.items,
         posterCard: posterCard.items[0].fields,
         speakersProduct: speakersProduct.items,
         metaData: metaData.items,
      },
   }
}

const Speakers = ({ header, footer, menuWidgetProduct, posterCard, speakersProduct, metaData }) => {
   const { navigation } = header
   const { fields } = metaData.find((data) => data.fields.slug === 'speakers')

   return (
      <Layout
         header={header}
         footer={footer}
         headerName={navigation[2].name}
         hamburgerMenu={menuWidgetProduct}
         metaData={fields}
      >
         <ProductDisplay products={speakersProduct} />
         <MenuWidget menuWidgetProduct={menuWidgetProduct} />
         <PosterCardWidget posterCard={posterCard} />
      </Layout>
   )
}

export default Speakers
