'use client'

import Image from 'next/image'
import React from 'react'

type CardProps = {
  imageSrc: string
  alt: string
  overlayText: string
}

export default function Card({ imageSrc, alt, overlayText }: CardProps) {
  return (
    <div className="group relative aspect-square h-full w-full overflow-hidden rounded-sm lg:rounded-md">
      <Image src={imageSrc} alt={alt} fill className="object-cover" />
      <div className="absolute inset-0 bg-[#36363699] opacity-0 transition-opacity group-hover:opacity-100" />
      <div className="text-foreground absolute bottom-2 left-0 w-full px-2 opacity-0 transition-opacity group-hover:opacity-100 md:bottom-4 md:px-4">
        <p className="text-sm md:text-xl lg:text-4xl">{overlayText}</p>
      </div>
    </div>
  )
}
