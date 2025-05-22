import Image from 'next/image'
export default function CheckoutHeader() {
  return (
    <div className="flex items-center gap-4 py-4">
      <button className="relative h-6 w-6">
        <Image src="/chevron.svg" alt="back" fill />
      </button>
      <h1 className="text-2xl font-semibold">Shipping Address</h1>
    </div>
  )
}
