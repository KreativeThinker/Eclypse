type ButtonProps = {
  children: React.ReactNode
  onClick?: () => void
  variant?: 'primary' | 'secondary'
}
const Button: React.FC<ButtonProps> = ({ children, onClick, variant = 'primary' }) => {
  const variantStyle =
    variant === 'primary' ? 'bg-foreground text-background' : 'bg-background text-foreground'
  return (
    <button className={`${variantStyle} rounded-md px-6 py-2 transition duration-200`}>
      {children}
    </button>
  )
}

export default Button
