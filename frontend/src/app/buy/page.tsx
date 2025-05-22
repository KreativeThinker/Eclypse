import CheckoutHeader from '@/components/layout/checkoutHeader'
import AddressForm from '@/components/shop/addressForm'
import OrderSummary from '@/components/shop/orderSummary'

export default function CheckoutPage() {
  return (
    <main className="mx-auto flex flex-col px-4 py-6">
      <CheckoutHeader />
      <div className="grid w-full grid-cols-1 justify-center gap-4 md:grid-cols-2 md:gap-8">
        <AddressForm />
        <OrderSummary />
      </div>
    </main>
  )
}
