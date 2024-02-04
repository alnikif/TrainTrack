import React from 'react'

import Layout from '../components/Layout/Layout'
import { DateProvider } from '../providers/DateProvider'

import '../globals.css'

const HomePage: React.FC = () => {
  return (
    <DateProvider>
      <Layout />
    </DateProvider>
  )
}

export default HomePage
