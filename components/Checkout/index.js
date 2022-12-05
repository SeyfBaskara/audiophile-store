import Form from './Forms/index'
import Summary from './Summary/Summary'

const index = ({ pathName }) => {
   return (
      <section className="lg:flex lg:gap-5">
         <Form pathName={pathName} />
         <Summary />
      </section>
   )
}

export default index
