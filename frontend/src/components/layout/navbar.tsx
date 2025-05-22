'use client'

import Button from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  return (
    <nav className="bg-background/60 sticky top-0 z-50 flex flex-row items-center px-4 py-2 backdrop-blur-xl sm:px-8">
      <Link href="/" className="relative h-6 w-7 md:h-8 md:w-9">
        <Image src="/logo.jpg" alt="logo" fill />
      </Link>
      <div className="mt-auto mb-auto flex w-full flex-row items-center justify-end gap-4 text-xs sm:gap-8 md:text-lg">
        <Link href="/about">About Us</Link>
        <Link href="/services">Waitlist</Link>
        <Link href="/contact">Cart</Link>
        <Button
          onClick={() => document.getElementById('buy')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Buy
        </Button>
      </div>
    </nav>
  )
}
