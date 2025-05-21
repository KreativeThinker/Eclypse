import arrow from '../../public/arrow.svg'
import Image from 'next/image'

type FAQProps = {
  question: string
  answer?: string
}

export default function FAQ({ question, answer }: FAQProps) {
  return (
    <div className="border-neutral-4 flex flex-row items-center justify-between border-b py-4">
      <h3 className="text-lg font-semibold md:text-3xl">{question}</h3>
      <Image src={arrow} alt="arrow" className="rotate-135" />
    </div>
  )
}
