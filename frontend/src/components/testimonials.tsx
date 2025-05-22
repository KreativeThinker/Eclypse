'use client'

import BASE_URL from '@/utils/api'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import type { Testimonial } from '@shared/types/index'

const testimonialsData: Testimonial[] = [
  {
    id: 1,
    productid: 'S1',
    name: 'Random Woman',
    location: 'NY, USA',
    text: 'Understated, but unforgettable. It feels like it was made for me',
    avatar: '/media/avatars/woman1.jpg',
  },
  {
    id: 2,
    productid: 'S1',
    name: 'Guy with Glasses',
    location: 'CA, USA',
    text: 'It changed how I feel about clothing.',
    avatar: '/media/avatars/man1.jpg',
  },
  {
    id: 3,
    productid: 'S1',
    name: 'Cool Woman',
    location: 'TX, USA',
    text: 'Minimal, stylish, perfect.',
    avatar: '/media/avatars/woman2.jpg',
  },
]

export default function TestimonialSlider() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([])
  useEffect(() => {
    fetch(`${BASE_URL}/testimonials`)
      .then((res) => res.json())
      .then(setTestimonials)
      .catch(() => {})
  }, [])
  const active = 0

  if (testimonials.length === 0) {
    setTestimonials(testimonialsData)
  }

  return (
    <section className="bg-background text-foreground">
      <p className="text-neutral-2 mb-8 text-xs tracking-widest uppercase md:text-lg">
        Our Customers
      </p>

      <div className="flex flex-row items-center gap-8">
        <div className="flex-1">
          <div className="mb-6 flex flex-row">
            <span className="mr-2 align-sub text-4xl md:text-9xl">“</span>
            <div className="font-montreal text-neutral-3 max-w-3/4 text-sm md:max-w-[60%]">
              <h4 className="text-2xl md:text-5xl">{testimonials[active]?.text}</h4>
              <p className="text-neutral-3 font-montreal mt-4 md:mt-24 md:text-xl">
                {testimonials[active]?.name}
              </p>
              <p className="text-neutral-1 font-montreal">{testimonials[active]?.location}</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4">
          <div className="relative h-16 w-16 md:h-30 md:w-30">
            <Image
              src={testimonials[active]?.avatar}
              alt="avatar"
              className="rounded-full object-cover"
              fill
            />
          </div>
          {testimonials.slice(1).map((t, i) => (
            <div
              key={i}
              className="relative h-12 w-12 overflow-hidden rounded-full opacity-30 md:h-16 md:w-16"
            >
              <Image src={t.avatar} alt="avatar" className="rounded-full object-cover" fill />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
