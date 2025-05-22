import Icon from '@/components/ui/icon'

type FAQProps = {
  question: string
  answer?: string
}

export default function FAQ({ question }: FAQProps) {
  return (
    <div className="border-neutral-4 flex flex-row items-center justify-between border-b py-4 md:py-8">
      <h3 className="text-lg font-semibold md:text-3xl">{question}</h3>
      <Icon icon="arrow" alt="arrow" className="h-6 w-6 rotate-135 md:h-10 md:w-10" />
    </div>
  )
}
