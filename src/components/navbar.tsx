'use client'

import Button from './button'

export default function Navbar() {
  return (
    <nav className="bg-background/60 sticky top-0 z-50 flex flex-row items-center px-8 py-2 backdrop-blur-xl">
      <div>
        <a href="/">
          <img src="/assets/logo.jpg" className="h-6" />
        </a>
      </div>
      <div className="mt-auto mb-auto flex w-full flex-row items-center justify-end gap-8 text-xs">
        <a href="/about">About Us</a>
        <a href="/services">Waitlist</a>
        <a href="/contact">Cart</a>
        <Button>Buy</Button>
      </div>
    </nav>
  )
}
