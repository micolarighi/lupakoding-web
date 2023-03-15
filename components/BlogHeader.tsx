import { PortableText } from '@portabletext/react'
import Link from 'next/link'

import localFont from 'next/font/local'

// Font files can be colocated inside of `pages`
const brandFont = localFont({ src: '../fonts/brand-font.ttf' })

import styles from './BlogHeader.module.css'

export default function BlogHeader({
  title,
  description,
  level,
}: {
  title: string
  description?: any[]
  level: 1 | 2
}) {
  switch (level) {
    case 1:
      return (
        <header className="mt-16 mb-10 flex flex-col items-center md:mb-12 md:flex-row md:justify-between">
          <h1 className={brandFont.className}><span className='text-3xl'>LU?AK()DING</span></h1>
        </header>
      )

    case 2:
      return (
        <header>
          <h2 className="mt-8 mb-20 text-2xl font-bold leading-tight tracking-tight md:text-4xl md:tracking-tighter">
            <Link href="/" className="hover:underline">
              {title}
            </Link>
          </h2>
        </header>
      )

    default:
      throw new Error(
        `Invalid level: ${
          JSON.stringify(level) || typeof level
        }, only 1 or 2 are allowed`
      )
  }
}
