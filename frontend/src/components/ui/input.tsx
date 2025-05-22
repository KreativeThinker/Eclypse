type InputProps = {
  placeholder?: string
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  type?: string
  name?: string
  className?: string
}

export default function Input({
  placeholder,
  value,
  onChange,
  type = 'text',
  name,
  className = '',
}: InputProps) {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`border-neutral-5 rounded border p-2 py-4 ${className}`}
    />
  )
}
