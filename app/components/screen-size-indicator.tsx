'use client'

import type { FC } from 'react'

interface ScreenSizeIndicatorProps {}

const ScreenSizeIndicator: FC<ScreenSizeIndicatorProps> = (): JSX.Element => {
  return (
    <div className="fixed z-50 top-0 left-0 p-4 text-xl font-bold uppercase">
      <h1 className="md:hidden">sm</h1>
      <h1 className="hidden md:block lg:hidden">md</h1>
      <h1 className="hidden lg:block xl:hidden">lg</h1>
      <h1 className="hidden xl:block">xl</h1>
    </div>
  )
}

export default ScreenSizeIndicator

// Path: app/components/screen-size-indicator.tsx
// Created at: 14:06:07 - 17/05/2023
// Language: Typescript
// Framework: React/Next.js
