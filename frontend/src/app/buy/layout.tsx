import Link from 'next/link'
import Image from 'next/image'

export default function CheckoutLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <nav className="text-neutral-1/80 sticky top-0 z-50 flex flex-row items-center bg-white px-4 py-2 backdrop-blur-xl sm:px-8">
        <Link href="/" className="relative h-6 w-7 md:h-8 md:w-9">
          <Image src="/logo.jpg" alt="logo" fill />
        </Link>
        <div className="mt-auto mb-auto flex w-full flex-row items-center justify-end gap-4 text-xs sm:gap-8 md:text-lg">
          <Link href="/">About Us</Link>
          <Link href="/waitlist">Waitlist</Link>
          <Link href="/cart" className="text-black underline underline-offset-4">
            Cart
          </Link>
        </div>
      </nav>
      <div className="min-h-screen bg-white text-black">{children}</div>{' '}
    </>
  )
}
