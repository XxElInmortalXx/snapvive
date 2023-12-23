import HeaderHome from '@/components/HeaderHome'
import React from 'react'

function RootLayout({ children }) {
  return (
      <>
        <HeaderHome />
          {children}
      </>
  )
}

export default RootLayout