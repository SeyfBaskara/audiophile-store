import Layout from '../../components/Layout'
import contentfulClient from '../../utils/contentfulClient'

export async function getStaticProps() {
   const headerFetch = contentfulClient.getEntries({
      content_type: 'header',
   })
   const footerFetch = contentfulClient.getEntries({
      content_type: 'footer',
   })

   const [header, footer] = await Promise.all([headerFetch, footerFetch])

   return {
      props: {
         header: header.items[0].fields,
         footer: footer.items[0].fields,
      },
   }
}

const Headphones = ({ header, footer }) => {
   const { navigation } = header

   return (
      <Layout header={header} footer={footer} headerName={navigation[1].name}>
         <p>Headphone page</p>
      </Layout>
   )
}

export default Headphones
