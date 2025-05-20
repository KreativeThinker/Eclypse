'use client'

import Button from './button'

export default function Navbar() {
  return (
    <nav className="bg-background/60 sticky top-0 z-50 flex flex-row items-center px-4 py-2 backdrop-blur-xl sm:px-8">
      <div>
        <a href="/">
          <img src="/assets/logo.jpg" className="h-6 md:h-8" />
        </a>
      </div>
      <div className="mt-auto mb-auto flex w-full flex-row items-center justify-end gap-4 text-xs sm:gap-8 md:text-lg">
        <a href="/about">About Us</a>
        <a href="/services">Waitlist</a>
        <a href="/contact">Cart</a>
        <Button>Buy</Button>
      </div>
    </nav>
  )
}
