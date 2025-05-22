import Button from '@/components/ui/button'

export default function OrderSummary() {
  return (
    <div className="bg-background-2 mt-4 flex flex-1 flex-col space-y-4 rounded-md p-4 md:mt-0 md:h-full md:justify-between">
      <p className="text-neutral-1 text-sm">
        By placing your order, you agree to our company{' '}
        <span className="font-medium text-black underline">Privacy policy</span> and{' '}
        <span className="font-medium text-black underline">Conditions of use</span>.
      </p>

      <hr style={{ border: '0.73px solid #B0B0B0' }} />

      <div>
        <h2 className="text-lg font-semibold">Order Summary</h2>
        <div className="text-neutral-1 mt-6 space-y-4 text-sm">
          <div className="flex justify-between">
            <p>Items – Silhouette No. 1 – Vermilion</p>
            <p>7,999</p>
          </div>
          <div className="flex justify-between">
            <p>Shipping and handling:</p>
            <p>200</p>
          </div>
          <div className="flex justify-between">
            <p>Before tax:</p>
            <p>6,599</p>
          </div>
          <div className="flex justify-between">
            <p>Tax Collected:</p>
            <p>1,400</p>
          </div>
        </div>
      </div>

      <hr style={{ border: '0.73px solid #B0B0B0' }} />

      <div className="flex justify-between text-lg">
        <p>Order Total:</p>
        <p>8,199</p>
      </div>
      <Button variant="filled" theme="dark" className="w-full py-4">
        Place Order
      </Button>
    </div>
  )
}
