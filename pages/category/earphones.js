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
   const earphonesProductFetch = contentfulClient.getEntries({
      content_type: 'earphonesProduct',
   })

   const [header, footer, menuWidgetProduct, posterCard, earphonesProduct] = await Promise.all([
      headerFetch,
      footerFetch,
      menuWidgetFetch,
      sharedWidgetFetch,
      earphonesProductFetch,
   ])

   return {
      props: {
         header: header.items[0].fields,
         footer: footer.items[0].fields,
         menuWidgetProduct: menuWidgetProduct.items,
         posterCard: posterCard.items[0].fields,
         earphonesProduct: earphonesProduct.items,
      },
   }
}

const Earphones = ({ header, footer, menuWidgetProduct, posterCard, earphonesProduct }) => {
   const { navigation } = header

   return (
      <Layout header={header} footer={footer} headerName={navigation[3].name}>
         <ProductDisplay products={earphonesProduct} />
         <MenuWidget menuWidgetProduct={menuWidgetProduct} />
         <PosterCardWidget posterCard={posterCard} />
      </Layout>
   )
}

export default Earphones
