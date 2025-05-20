'use client'

import Image from 'next/image'

const testimonials = [
  {
    name: 'Random Woman',
    location: 'NY, USA',
    text: 'Understated, but unforgettable. It feels like it was made for me',
    avatar: '/avatars/woman1.jpg',
  },
  {
    name: 'Guy with Glasses',
    location: 'CA, USA',
    text: 'It changed how I feel about clothing.',
    avatar: '/avatars/man1.jpg',
  },
  {
    name: 'Cool Woman',
    location: 'TX, USA',
    text: 'Minimal, stylish, perfect.',
    avatar: '/avatars/woman2.jpg',
  },
]

export default function TestimonialSlider() {
  const active = 0

  return (
    <section className="bg-background text-foreground">
      <p className="mb-8 text-xs tracking-widest uppercase">Our Customers</p>

      <div className="flex flex-row items-center gap-8">
        <div className="flex-1">
          <div className="mb-6 flex flex-row">
            <span className="mr-2 align-sub text-4xl">“</span>
            <div className="font-montreal text-sm">
              <h4 className="text-2xl">{testimonials[active].text}</h4>
              <p className="text-foreground font-montreal mt-4">{testimonials[active].name}</p>
              <p className="text-neutral-1 font-montreal">{testimonials[active].location}</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4">
          <div className="relative h-16 w-16">
            <Image
              src={testimonials[active].avatar}
              alt="avatar"
              className="rounded-full object-cover"
              fill
            />
          </div>
          {testimonials.slice(1).map((t, i) => (
            <div key={i} className="relative h-12 w-12 overflow-hidden rounded-full opacity-30">
              <Image src={t.avatar} alt="avatar" className="rounded-full object-cover" fill />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
