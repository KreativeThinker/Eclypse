import Image from 'next/image'

type IconProps = {
  icon: string
  alt: string
  className?: string
}

export default function Icon({ icon, alt, className }: IconProps) {
  return (
    <div className={`relative h-4 w-4 ${className}`}>
      <Image src={`/icons/${icon}.svg`} alt={alt} fill />
    </div>
  )
}
