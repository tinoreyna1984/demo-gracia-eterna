import Head from 'next/head'
import ScrollToTop from '@/components/scroll-to-top'
import Footer from '@/layout/footer'
import Header from '@/layout/header'
import '@/styles/globals.css'
import "@fortawesome/fontawesome-svg-core/styles.css"; /** Font Awesome */
import { config } from "@fortawesome/fontawesome-svg-core"; /** Font Awesome */
config.autoAddCss = false; /** Font Awesome */

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Gracia Eterna - Iglesia Reformada Presbiteriana</title>
        <meta name="description" content="Promoviendo el Evangelio en la fe Reformada Presbiteriana" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/ge-logo.ico" />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
      <ScrollToTop />
    </>

  )
}
