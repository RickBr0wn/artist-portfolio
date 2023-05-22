'use client'

import Link from 'next/link'
import type { FC } from 'react'
import React from 'react'
import { FiInstagram } from 'react-icons/fi'
import { HiOutlineMail } from 'react-icons/hi'

interface NavbarProps {}

const Navbar: FC<NavbarProps> = (): JSX.Element => {
  const [selected, setSelected] = React.useState('home')

  return (
    <>
      <div className="bg-theme-orange py-4 md:py-12 border-b-8 border-theme-pink flex items-center">
        <div className="w-[750px] flex flex-col justify-start mx-auto p-4 md:p-0">
          <h1 className="text-theme-pink text-6xl uppercase">
            Cheryl Humphries
          </h1>
          <h2 className="text-theme-pink text-2xl italic -mt-2">
            visual artist
          </h2>
          <div className="flex gap-6 uppercase">
            <Link
              href="https://www.instagram.com/cheryl.humphries76/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <div className="flex items-center mt-4 gap-1 text-theme-pink cursor-pointer">
                <FiInstagram />
                <p>instagram</p>
              </div>
            </Link>
            <a
              href="mailto:cheryl.humphries@hotmail.co.uk"
              // rel="noopener noreferrer"
              // target="_blank"
            >
              <div className="flex items-center mt-4 gap-1 text-theme-pink cursor-pointer">
                <HiOutlineMail />
                <p>email</p>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="bg-theme-orange py- flex items-center">
        <div className="w-[750px] flex justify-between mx-auto px-4 md:px-0 py-2">
          <Link href="/">
            <p
              onClick={() => setSelected('home')}
              className={`uppercase  ${
                selected === 'home'
                  ? 'font-bold text-theme-pink'
                  : 'text-gray-500'
              }`}
            >{`Home`}</p>
          </Link>
          <Link href="/bio">
            <p
              onClick={() => setSelected('bio')}
              className={`uppercase  ${
                selected === 'bio'
                  ? 'font-bold text-theme-pink'
                  : 'text-gray-500'
              }`}
            >{`Bio`}</p>
          </Link>
          {/* <Link href="/work">
            <p
              onClick={() => setSelected('work')}
              className={`uppercase  ${
                selected === 'work'
                  ? 'font-bold text-theme-pink'
                  : 'text-gray-500'
              }`}
            >{`Work`}</p>
          </Link> */}
        </div>
      </div>
    </>
  )
}

export default Navbar

// Path: app/components/navbar.tsx
// Created at: 13:21:12 - 16/05/2023
// Language: Typescript
// Framework: React/Next.js
