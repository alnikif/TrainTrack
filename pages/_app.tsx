import { AppProps } from 'next/app'
import React from 'react'

import Providers from '../Providers'
import Layout from '../components/Layout/Layout'

import '../globals.css'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Providers>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Providers>
  )
}

export default MyApp
