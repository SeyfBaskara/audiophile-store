import Layout from '../../components/Layout'
import MenuWidget from '../../components/Widgets/MenuWidget'
import PosterCardWidget from '../../components/Widgets/PosterCardWidget'
import contentfulClient from '../../utils/contentfulClient'

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

const Headphones = ({ header, footer, menuWidgetProduct, posterCard }) => {
   const { navigation } = header

   return (
      <Layout header={header} footer={footer} headerName={navigation[1].name}>
         <MenuWidget menuWidgetProduct={menuWidgetProduct} />
         <PosterCardWidget posterCard={posterCard} />
      </Layout>
   )
}

export default Headphones
