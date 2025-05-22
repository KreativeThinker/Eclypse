'use client'

import Link from 'next/link'

type SizeSelectorProps = {
  sizes: string[]
  selectedSize: string | null
  onSizeSelect: (size: string | null) => void
}

export default function SizeSelector({
  sizes = ['XS', 'S', 'M', 'L', 'XL'],
  selectedSize,
  onSizeSelect,
}: SizeSelectorProps) {
  return (
    <div className="flex flex-col gap-4 rounded-md">
      <div className="flex items-center justify-between text-sm font-medium text-neutral-500">
        <span>Please select a size</span>
        <Link href="#" className="underline hover:text-black">
          Size chart
        </Link>
      </div>

      <div className="grid grid-cols-5 gap-2">
        {sizes.map((size) => (
          <button
            key={size}
            onClick={() => onSizeSelect(size)}
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
