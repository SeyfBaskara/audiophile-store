import contentfulClient from '../utils/contentfulClient'
import Layout from '../components/Layout'
import MenuWidget from '../components/Widgets/MenuWidget'
import PosterCardWidget from '../components/Widgets/PosterCardWidget'
import HomeDisplayGrid from '../components/Home/index'

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
   const displayGridContentFetch = contentfulClient.getEntries({
      content_type: 'homePage',
   })
   const metaDataFetch = contentfulClient.getEntries({
      content_type: 'metaData',
   })

   const [header, footer, menuWidgetProduct, posterCard, displayGridContent, metaData] = await Promise.all([
      headerFetch,
      footerFetch,
      menuWidgetFetch,
      sharedWidgetFetch,
      displayGridContentFetch,
      metaDataFetch,
   ])

   return {
      props: {
         header: header.items[0].fields,
         footer: footer.items[0].fields,
         menuWidgetProduct: menuWidgetProduct.items,
         posterCard: posterCard.items[0].fields,
         displayGridContent: displayGridContent.items,
         metaData: metaData.items,
      },
   }
}

const Home = ({ header, footer, menuWidgetProduct, posterCard, displayGridContent, metaData }) => {
   const { fields } = metaData.find((data) => data.fields.slug === 'home')

   return (
      <Layout header={header} footer={footer} hamburgerMenu={menuWidgetProduct} metaData={fields}>
         <>
            <MenuWidget menuWidgetProduct={menuWidgetProduct} />
            <HomeDisplayGrid displayGridContent={displayGridContent} />
            <PosterCardWidget posterCard={posterCard} />
         </>
      </Layout>
   )
}

export default Home
