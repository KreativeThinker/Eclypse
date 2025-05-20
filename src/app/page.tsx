import Image from 'next/image'
import copyright from '../../public/copyright.svg'
import arrow from '../../public/arrow.svg'
import Card from '@/components/card'

export default function Home() {
  return (
    <div className="px-4 py-2">
      {/* Hero Heading */}
      <section className="mt-10 flex w-full flex-row items-end justify-between">
        <h1 className="text-5xl">
          Eclypse
          <span className="align-super text-xs">®</span>
        </h1>
        <div className="flex flex-row items-center gap-1">
          <Image src={copyright} alt="Copyright" className="h-2 w-2" />
          <p className="text-[0.25rem]">2025</p>
        </div>
      </section>

      {/* Video */}
      <section className="relative mt-4 w-full overflow-hidden">
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
        <p className="font-helvetica text-foreground absolute right-4 bottom-4 text-xs tracking-wide">
          A silhouette worth remembering
        </p>
      </section>

      {/* Description */}
      <section className="mt-24 flex w-full flex-col">
        <h2 className="w-3/4 text-lg">
          Rooted in a philosophy of quiet luxury, our garments are designed to speak softly in cut,
          in movement, in presence.
        </h2>
        <button className="group font-helvetica hover:text-background mt-8 flex w-fit items-center gap-2 border-b border-[#e3e3e3] text-xs transition-colors hover:bg-[#e3e3e3]">
          <span className="transition-transform group-hover:mx-auto group-hover:translate-x-5">
            Learn more about Eclypse
          </span>
          <Image src={arrow} alt="arrow-45deg" />
        </button>
      </section>

      {/* Mosaic */}
      <section className="mt-10 grid w-full grid-cols-3 gap-4">
        <video
          className="col-span-3 aspect-video h-full rounded-sm object-cover md:col-span-2"
          autoPlay
          loop
          muted
        >
          <source src="/assets/video-2.mp4" type="video/mp4" />
        </video>

        <Card
          imageSrc="/assets/cloth-1.jpg"
          alt="cloth"
          overlayText="Premium wool blend in signature vermilion"
        />

        <Card
          imageSrc="/assets/hand-in-pocket.jpg"
          alt="hand in pocket"
          overlayText="Discreet side pockets with clean finish"
        />

        <Card
          imageSrc="/assets/cutting-fabric.jpg"
          alt="cutting fabric"
          overlayText="Hand-cut and assembled in small batches"
        />
      </section>
      {/* silhouette no 1 */}
      <h2 className="my-8 text-3xl">Silhouette No. 1 – Vermilion</h2>
    </div>
  )
}
