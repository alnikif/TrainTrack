import React from 'react'

import Header from '../Header/Header'

const Layout = () => {
  return (
    <div className="flex pt-2 border-b border-gray-300">
      <div className="flex-1 px-2">
        <div className="mb-2">
          <Header />
        </div>
      </div>
    </div>
  )
}

export default Layout
