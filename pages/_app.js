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
        <meta property="og:title" content="Gracia Eterna - Iglesia Reformada Presbiteriana" />
        <meta property="og:description" content="Promoviendo el Evangelio de Jesucristo en la fe Reformada Presbiteriana"/>
        <meta property="og:site_name" content="Iglesia Gracia Eterna" />
        <meta property="og:image" content="https://demo-gracia-eterna.netlify.app/_next/static/media/banner-01.183c8b57.jpg" />
        <link rel="icon" href="/ge-logo.ico" />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
      <ScrollToTop />
    </>

  )
}
