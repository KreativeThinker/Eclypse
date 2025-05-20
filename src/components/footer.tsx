'use client'
import Image from 'next/image'
import Link from 'next/link'

import arrow from '../../public/arrow.svg'

export default function Footer() {
  const links = {
    Home: '/',
    About: '/about',
    Buy: '/buy',
    'Our Customers': '/customers',
    Contacts: '/contacts',
  }

  return (
    <footer className="bg-background text-foreground font-montreal grid grid-cols-5 gap-6 px-8 py-16 text-xs">
      <Link href="/" className="col-span-4">
        <h3 className="text-3xl">
          Eclypse
          <span className="text-neutral-1 ml-1 align-super text-xs">↗</span>
        </h3>
      </Link>
      <button className="bg-foreground relative mr-0 ml-auto aspect-square h-8 rounded-full">
        <Image src={arrow} alt="go-to-top" className="-rotate-45 rounded-full invert" fill />
      </button>

      {/* Left side */}
      <div className="col-span-2 row-span-2 mt-10 flex flex-col lg:col-span-1">
        <nav className="text-foreground font-montreal flex flex-wrap gap-3">
          {Object.entries(links).map(([name, href], i, arr) => (
            <Link
              key={name}
              href={href}
              className={`text-foreground after:text-neutral-1 relative after:ml-3 ${
                i !== arr.length - 1 ? "after:content-['/']" : ''
              }`}
            >
              {name}
            </Link>
          ))}
        </nav>
      </div>

      {/* Right side */}
      <div className="col-span-3 lg:col-span-4">
        <p className="text-neutral-2 mb-1 text-xs tracking-widest uppercase">Contact</p>
        <p className="text-lg font-semibold">+91 123-456-7890</p>
      </div>

      <div>
        <p className="text-neutral-2 mb-1 text-xs tracking-widest uppercase">Email</p>
        <p className="text-sm">eclypse@gmail.com</p>
      </div>

      {/* Bottom row */}
      <div className="text-neutral-1 col-span-2 mt-auto ml-auto text-xs lg:col-span-3">
        <p>© Eclypse 2025</p>
      </div>
    </footer>
  )
}
