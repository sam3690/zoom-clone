import StreamVideoProvider from '@/providers/StreamClientProviders'
import { Metadata } from 'next';
import React from 'react'
import { Children } from 'react'


export const metadata: Metadata = {
  title: "Yoom",
  description: "Video calling app",
  icons: {
    icon: '/icons/logo.svg',
  }
};

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