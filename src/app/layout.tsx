import './styles/globals.css'

import { CssBaseline } from '@mui/material'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter'
import React from 'react'

import StyledComponentsRegistry from './registry'

export const metadata = {
  title: '0xbase',
  description: 'One place to view all your assets',
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <head></head>
      <body>
        <AppRouterCacheProvider>
          <CssBaseline />
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}

export default RootLayout
