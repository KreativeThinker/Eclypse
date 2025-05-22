import Icon from '@/components/ui/icon'
export default function CheckoutHeader() {
  return (
    <div className="flex items-center gap-4 py-4">
      <button className="relative h-6 w-6">
        <Icon icon="/chevron" alt="back" className="h-full w-full" />
      </button>
      <h1 className="text-2xl font-semibold">Shipping Address</h1>
    </div>
  )
}
