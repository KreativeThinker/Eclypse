import Image from 'next/image'
import copyright from '../../public/copyright.svg'
import arrow from '../../public/arrow.svg'

export default function Home() {
  return (
    <div className="px-4">
      {/* Hero Heading */}
      <section className="mt-16 flex w-full flex-row items-end justify-between">
        <h1 className="text-3xl">
          Eclypse
          <span className="align-super text-xs">®</span>
        </h1>
        <div className="flex flex-row items-center gap-1">
          <Image src={copyright} alt="Copyright" className="h-3 w-3" />
          <p>2025</p>
        </div>
      </section>

      {/* Video */}
      <section className="relative mt-4 h-80 w-full overflow-hidden">
        <video className="h-full w-full rounded-sm object-cover" autoPlay loop muted>
          <source src="/assets/video-1.mp4" type="video/mp4" />
        </video>
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(139.06deg, rgba(0, 0, 0, 0) 38.24%, rgba(0, 0, 0, 0.46) 85.61%)',
          }}
        />
        <p className="font-helvetica font-lg text-foreground absolute right-4 bottom-4 tracking-wide">
          A silhouette worth remembering
        </p>
      </section>

      {/* Description */}
      <section className="mt-24 flex w-full flex-col">
        <h2 className="w-3/4 text-lg">
          Rooted in a philosophy of quiet luxury, our garments are designed to speak softly in cut,
          in movement, in presence.
        </h2>

        <button className="font-helvetica mt-8 flex flex-row items-center text-lg">
          Learn more about Eclypse
          <Image src={arrow} alt="arrow-45deg" />
        </button>
      </section>
    </div>
  )
}
