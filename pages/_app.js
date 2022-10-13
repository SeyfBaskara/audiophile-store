import '../styles/globals.css'
import Nav from '../components/Layout/Header/Nav'
import Footer from '../components/Layout/Footer/Footer'

function MyApp({ Component, pageProps }) {
   return (
      <>
         <Nav />
         <Component {...pageProps} />
         <Footer />
      </>
   )
}

export default MyApp
