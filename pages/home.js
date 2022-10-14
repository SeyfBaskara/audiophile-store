import contentfulClient from '../utils/contentfulClient'
import Layout from '../components/Layout'

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

const Home = ({ header, footer }) => {
   return (
      <Layout header={header} footer={footer}>
         <div>
            <p>Nextjs</p>
         </div>
      </Layout>
   )
}

export default Home
