'use client'

import { TooltipProvider } from '@radix-ui/react-tooltip'
import { ReactNode } from 'react'

type ProvidersProps = { children: ReactNode }

export default function Providers({ children }: ProvidersProps) {
  return <TooltipProvider>{children}</TooltipProvider>
}

// Path: components/toolkit-components/providers.tsx
// Created at: 22:35:13 - 29/04/2024
// Language: Typescript
