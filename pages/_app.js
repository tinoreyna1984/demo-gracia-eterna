import '@/styles/globals.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Gracia Eterna - Iglesia Reformada Presbiteriana</title>
        <meta name="description" content="Promover el Evangelio en la fe Reformada Presbiteriana" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/ge-logo.ico" />
      </Head>
      <Component {...pageProps} />
    </>

  )
}
