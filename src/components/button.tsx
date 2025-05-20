type ButtonProps = {
  children: React.ReactNode
  onClick?: () => void
  variant?: 'filled' | 'outline'
  theme?: 'light' | 'dark'
}
const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'filled',
  theme = 'light',
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
      className={`${variantStyle} ${hoverStyle} rounded-md px-6 py-2 transition-all duration-200 ease-in-out`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
