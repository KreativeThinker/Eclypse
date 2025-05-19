'use client'

import Button from './button'

export default function Navbar() {
  return (
    <nav className="bg-background/60 sticky top-0 flex flex-row items-center px-4 py-8 backdrop-blur-lg">
      <div className="h-full">
        <a href="/">
          <img src="/assets/logo.jpg" className="h-10" />
        </a>
      </div>
      <div className="mt-auto mb-auto flex w-full flex-row items-center justify-end gap-8">
        <a href="/about" className="font-thin">
          About Us
        </a>
        <a href="/services" className="font-normal">
          Waitlist
        </a>
        <a href="/contact" className="font-bold">
          Cart
        </a>
        <Button>Buy</Button>
      </div>
    </nav>
  )
}
