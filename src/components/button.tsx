type ButtonProps = {
  children: React.ReactNode
  onClick?: () => void
  variant?: 'primary' | 'secondary'
}
const Button: React.FC<ButtonProps> = ({ children, onClick, variant = 'primary' }) => {
  const variantStyle =
    variant === 'primary'
      ? 'bg-foreground text-background'
      : 'bg-background text-foreground border border-background'
  const hoverStyle =
    variant === 'primary'
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
