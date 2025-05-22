'use client'

type SizeSelectorProps = {
  sizes: string[] | null
  selectedSize: string | null
  setSelectedSize: (size: string | null) => void
}

export default function SizeSelector({ sizes, selectedSize, setSelectedSize }: SizeSelectorProps) {
  return (
    <div className="flex flex-col gap-4 rounded-md">
      <div className="flex items-center justify-between text-sm font-medium text-neutral-500">
        <span>Please select a size</span>
        <a href="#" className="underline hover:text-black">
          Size chart
        </a>
      </div>

      <div className="grid grid-cols-5 gap-2">
        {sizes.map((size) => (
          <button
            key={size}
            onClick={() => setSelectedSize(size)}
            className={`rounded-sm py-2 font-medium ${
              selectedSize === size ? 'bg-black text-white' : 'text-neutral-1 bg-neutral-3'
            }`}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  )
}
