import contentfulClient from '../utils/contentfulClient'
import Layout from '../components/Layout'

export async function getStaticProps() {
   const headerFetch = contentfulClient.getEntries({
      content_type: 'header',
   })

   const [header] = await Promise.all([headerFetch])

   return {
      props: {
         header: header.items[0].fields,
      },
   }
}

const Index = ({ header, headerThumbnail }) => {
   return (
      <Layout header={header}>
         <div>
            <p>Nextjs</p>
         </div>
      </Layout>
   )
}

export default Index
