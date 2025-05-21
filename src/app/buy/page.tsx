import CheckoutHeader from '@/components/checkoutHeader'
import AddressForm from '@/components/addressForm'
import OrderSummary from '@/components/orderSummary'

export default function CheckoutPage() {
  return (
    <main className="mx-auto max-w-xl px-4 py-6">
      <CheckoutHeader />
      <AddressForm />
      <OrderSummary />
    </main>
  )
}
