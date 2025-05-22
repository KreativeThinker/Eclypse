export default function CheckoutLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <nav className="text-neutral-1/80 sticky top-0 z-50 flex flex-row items-center bg-white px-4 py-2 backdrop-blur-xl sm:px-8">
        <div>
          <a href="/">
            <img src="/logo.jpg" className="h-6 md:h-8" />
          </a>
        </div>
        <div className="mt-auto mb-auto flex w-full flex-row items-center justify-end gap-4 text-xs sm:gap-8 md:text-lg">
          <a href="/">About Us</a>
          <a href="/waitlist">Waitlist</a>
          <a href="/cart" className="text-black underline underline-offset-4">
            Cart
          </a>
        </div>
      </nav>
      <div className="min-h-screen bg-white text-black">{children}</div>{' '}
    </>
  )
}
