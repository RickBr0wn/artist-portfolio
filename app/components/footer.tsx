'use client'

import type { FC } from 'react'

interface FooterProps {}

const Footer: FC<FooterProps> = (): JSX.Element => {
  return (
    <div className="bg-theme-orange h-[80px] border-t-8 border-theme-pink flex items-center fixed inset-x-0 bottom-0"></div>
  )
}

export default Footer

// Path: app/components/footer.tsx
// Created at: 13:43:57 - 16/05/2023
// Language: Typescript
// Framework: React/Next.js
