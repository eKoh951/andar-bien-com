// app/providers.tsx
'use client'

import { NextUIProvider } from '@nextui-org/react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import TrcpProvider from './_trpc/Provider'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <TrcpProvider>
      <NextUIProvider>
        <NextThemesProvider attribute="class" defaultTheme="light">
          {children}
        </NextThemesProvider>
      </NextUIProvider>
    </TrcpProvider>
  )
}
