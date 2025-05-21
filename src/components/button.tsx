type ButtonProps = {
  children: React.ReactNode
  onClick?: () => void
  variant?: 'filled' | 'outline'
  theme?: 'light' | 'dark'
  className?: string
}
const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'filled',
  theme = 'light',
  className,
}) => {
  const themeStyle =
    theme === 'light' ? 'bg-foreground text-background' : 'bg-background text-foreground'

  const variantStyle = variant === 'filled' ? themeStyle : 'border-2 border-neutral-3'
  const hoverStyle =
    variant === 'filled'
      ? 'hover:bg-accent hover:text-foreground'
      : 'hover:bg-foreground hover:text-background'
  return (
    <button
      className={`${variantStyle} ${hoverStyle} rounded-md px-4 py-2 transition-all duration-200 ease-in-out md:px-8 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
