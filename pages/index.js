import contentfulClient from '../utils/contentfulClient'

export async function getStaticProps() {
   const productsFetch = contentfulClient.getEntries({
      content_type: 'products',
   })

   const [products] = await Promise.all([productsFetch])

   return {
      props: {
         products: products.items,
      },
   }
}

const Index = ({ products }) => {
   return (
      <div>
         <p>Nextjs</p>
      </div>
   )
}

export default Index
