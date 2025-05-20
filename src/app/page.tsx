import Image from 'next/image'
import copyright from '../../public/copyright.svg'
import arrow from '../../public/arrow.svg'
import Card from '@/components/card'
import SizeSelector from '@/components/sizeSelector'
import Button from '@/components/button'
import FAQ from '@/components/faq'
import TestimonialSlider from '@/components/testimonials'

export default function Home() {
  return (
    <div className="px-4 md:px-8">
      {/* Hero Screen */}
      <section className="mt-20 flex w-full flex-row items-end justify-between">
        <h1 className="text-5xl md:text-8xl">
          Eclypse
          <span className="align-super text-xs md:text-4xl">®</span>
        </h1>
        <div className="flex flex-row items-center gap-1">
          <Image src={copyright} alt="Copyright" className="h-2 w-2" />
          <p className="text-xs md:text-base">2025</p>
        </div>
      </section>

      <section className="relative mt-8 w-full overflow-hidden">
        <video
          className="w-full rounded-sm object-cover md:max-h-[70vh] lg:rounded-md"
          autoPlay
          loop
          muted
        >
          <source src="/assets/video-1.mp4" type="video/mp4" />
        </video>
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(139.06deg, rgba(0, 0, 0, 0) 38.24%, rgba(0, 0, 0, 0.46) 85.61%)',
          }}
        />
        <p className="font-helvetica text-foreground absolute right-4 bottom-4 text-xs tracking-wide sm:text-lg md:text-2xl lg:text-4xl">
          A silhouette worth remembering
        </p>
      </section>

      {/* Sub header, brand info */}
      <section className="mt-24 flex w-full flex-col">
        <h2 className="w-[60%] text-lg md:text-2xl lg:text-5xl">
          Rooted in a philosophy of quiet luxury, our garments are designed to speak softly in cut,
          in movement, in presence.
        </h2>
        <button className="group font-helvetica hover:text-background lg:5xl mt-8 flex w-fit items-center gap-2 border-b border-[#e3e3e3] text-xs transition-colors hover:bg-[#e3e3e3] sm:text-base md:mt-12 md:p-2 md:text-2xl">
          <span className="transition-transform group-hover:mx-auto group-hover:translate-x-5">
            Learn more about Eclypse
          </span>
          <Image src={arrow} alt="arrow-45deg" />
        </button>
      </section>

      {/* Brand Overview */}
      <section className="mt-10 grid w-full grid-cols-3 gap-4">
        <video
          className="col-span-3 aspect-video h-full rounded-sm object-cover md:col-span-2 lg:rounded-md"
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

        <div className="group relative hidden md:flex">
          <Image
            src="/assets/logo.jpg"
            alt="logo"
            className="object-cover transition-opacity duration-300 ease-in-out group-hover:opacity-0"
            fill
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
            <h1 className="text-center text-5xl md:text-8xl">
              Eclypse
              <span className="align-super text-xs md:text-4xl">®</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Product Shop */}
      <h2 className="my-8 text-3xl">Silhouette No. 1 – Vermilion</h2>
      <section className="bg-foreground text-background flex flex-col gap-4 pb-12">
        <div className="aspect-video w-full">
          <video className="h-full w-full object-cover" autoPlay loop muted>
            <source src="/assets/video-3.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="flex flex-col gap-8 px-4">
          <p className="hidden">
            A tailored composition in motion. Cut from structured wool with a sculpted shoulder and
            softened hem, this piece captures presence without force. Worn here in the stillness of
            a city in motion.
          </p>
          <div className="flex w-full flex-row items-center justify-between gap-4">
            {['product-back', 'product-side', 'product-back-long'].map((img, i) => (
              <div key={i} className="relative aspect-square w-full">
                <Image src={`/assets/${img}.png`} alt={img} fill className="object-cover" />
              </div>
            ))}
          </div>
          <hr className="text-neutral-3" />
          <div className="flex flex-row items-baseline gap-4">
            <h2 className="text-3xl font-semibold">₹ 7,999</h2>
            <p className="text-sm text-neutral-500">MRP incl. of all taxes</p>
          </div>

          <SizeSelector />
          <div className="flex flex-col gap-4">
            <Button variant="filled" theme="dark">
              Buy
            </Button>
            <Button variant="outline" theme="dark">
              Add to Cart
            </Button>
          </div>
        </div>
      </section>

      {/* Product Info */}
      <section className="mt-10 flex w-full flex-col gap-4">
        <div className="flex flex-col gap-4">
          <FAQ question="Size & Fit" />
          <FAQ question="Delivery & Returns" />
          <FAQ question="How This Was Made" />
        </div>
      </section>

      {/* Reviews */}
      <section className="my-10 flex w-full flex-col gap-4">
        <TestimonialSlider />
      </section>

      <hr className="text-neutral-4" />
    </div>
  )
}
