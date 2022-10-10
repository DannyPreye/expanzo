import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

import { Nav, Footer } from "../components"

function MyApp({ Component, pageProps }: AppProps) {
  return <div>
    <Nav />
    <Component {...pageProps} />
    <Footer />
  </div>
}

export default MyApp
