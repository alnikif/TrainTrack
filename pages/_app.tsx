import { AppProps } from 'next/app'
// import { usePathname, useRouter } from 'next/navigation'
// import { useEffect, useState } from 'react'

import Providers from '../Providers'
import Layout from '../components/Layout/Layout'

import '../globals.css'

const MyApp = ({ Component, pageProps }: AppProps) => {
  // const router = useRouter()
  // const pathname = usePathname()
  //
  // useEffect(() => {
  //   if (pathname === '/') {
  //     router.push('/heart-rate-chart')
  //   }
  // }, [pathname])

  return (
    <Providers>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Providers>
  )
}

export default MyApp
