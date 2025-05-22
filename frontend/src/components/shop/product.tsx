'use client'
import Image from 'next/image'
import SizeSelector from '@/components/shop/sizeSelector'
import Button from '@/components/ui/button'
import { Product } from '@shared/types'
import { useEffect, useState } from 'react'
import BASE_URL from '@/utils/api' // Adjust based on your export

export default function ProductCard() {
  const [product, setProduct] = useState<Product | null>(null)
  const [selectedSize, setSelectedSize] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setIsLoading(true)
        const response = await fetch(`${BASE_URL}/product`)
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        const data = await response.json()
        setProduct(data)
      } catch (error) {
        console.error('Error fetching product:', error)
        setError('Failed to load product')
      } finally {
        setIsLoading(false)
      }
    }

    fetchProduct()
  }, [])

  if (isLoading) {
    return <div className="p-8">Loading...</div>
  }

  if (error || !product) {
    return <div className="p-8">Error loading product</div>
  }

  return (
    <section className="bg-foreground text-background flex flex-col gap-4 lg:flex-row lg:gap-8">
      <div className="aspect-video w-full lg:aspect-[3/4] lg:w-1/2">
        <video className="h-full w-full object-cover" autoPlay loop muted>
          <source src={product.media.video} type="video/mp4" />
        </video>
      </div>
      <div className="flex flex-col gap-8 px-4 py-4 md:px-8 md:py-8 lg:w-1/2 lg:justify-between">
        <p className="hidden md:flex">
          A tailored composition in motion. Cut from structured wool with a sculpted shoulder and
          softened hem, this piece captures presence without force. Worn here in the stillness of a
          city in motion.
        </p>
        <div className="flex w-full flex-row items-center justify-between gap-4">
          {product.media.images.map((img, i) => (
            <div key={i} className="relative aspect-square w-full">
              <Image src={img} alt={`Product image ${i + 1}`} fill className="object-cover" />
            </div>
          ))}
        </div>
        <hr className="text-neutral-3" />
        <div className="flex flex-row items-baseline gap-4">
          <h2 className="text-3xl font-semibold">₹ {product.price}</h2>
          <p className="text-sm text-neutral-500">MRP incl. of all taxes</p>
        </div>
        <SizeSelector
          sizes={product.sizes}
          selectedSize={selectedSize}
          setSelectedSize={setSelectedSize}
        />
        <div className="flex flex-col gap-4">
          <Button variant="filled" theme="dark" className="md:p-4">
            Buy
          </Button>
          <Button variant="outline" theme="dark" className="md:p-4">
            Add to Cart
          </Button>
        </div>
      </div>
    </section>
  )
}
