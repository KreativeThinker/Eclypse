'use client'
import CheckoutHeader from '@/components/layout/checkoutHeader'
import AddressForm from '@/components/shop/addressForm'
import OrderSummary from '@/components/shop/orderSummary'
import { SelectedProduct } from '@shared/types'
import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'

function CheckoutContent() {
  const productParams = useSearchParams()
  const data = productParams.get('data')

  let product: SelectedProduct | null = null
  if (data) {
    try {
      product = JSON.parse(data)
    } catch {
      console.error('Invalid product JSON in query param')
    }
  }

  return (
    <div className="grid w-full grid-cols-1 justify-center gap-8 md:grid-cols-2 md:gap-16">
      <AddressForm />
      <OrderSummary product={product} />
    </div>
  )
}

export default function CheckoutPage() {
  return (
    <main className="mx-auto flex flex-col px-4 py-6 md:px-8 md:pt-24">
      <CheckoutHeader />
      <Suspense fallback={<p>Loading order details...</p>}>
        <CheckoutContent />
      </Suspense>
    </main>
  )
}
