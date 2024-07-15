import StreamVideoProvider from '@/providers/StreamClientProviders'
import React from 'react'
import { Children } from 'react'

const RootLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <main>
      <StreamVideoProvider>
        {children}
      </StreamVideoProvider>
    </main>
  )
}

export default RootLayout