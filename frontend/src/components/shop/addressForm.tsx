import Button from '@/components/ui/button'
import Input from '@/components/ui/input'

export default function AddressForm() {
  return (
    <div className="border-neutral-5 flex flex-col space-y-4 rounded-md border p-4">
      <div className="flex items-center space-x-2">
        <div className="border-accent rounded-full border-2 p-2">
          <div className="bg-accent h-3 w-3 rounded-full" />
        </div>
        <p className="font-medium">Add New Address</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Input placeholder="First Name" />
        <Input placeholder="Last Name" />
      </div>

      <Input placeholder="Street Address" />

      <div className="grid grid-cols-3 gap-4">
        <Input placeholder="Apt Number" />
        <Input placeholder="State" />
        <Input placeholder="Zip" />
      </div>

      <Button variant="filled" theme="dark" className="py-4">
        Save This Address
      </Button>

      <Button variant="outline" className="border-neutral-5 py-4">
        Cancel
      </Button>
    </div>
  )
}
