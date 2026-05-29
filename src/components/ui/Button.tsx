import { ButtonHTMLAttributes, forwardRef } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  href?: string
}

const variants = {
  primary:
    'bg-white text-black hover:bg-white/90 shadow-glow',
  secondary:
    'bg-glass border-glass-border hover:bg-surface-hover hover:border-white/10 text-white',
  ghost:
    'text-white/60 hover:text-white hover:bg-surface-hover',
}

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-2.5 text-sm',
  lg: 'px-8 py-3 text-base',
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', className = '', href, ...props }, ref) => {
    const classes = `inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 disabled:opacity-40 disabled:pointer-events-none ${variants[variant]} ${sizes[size]} ${className}`

    if (href) {
      return (
        <a href={href} className={classes}>
          {props.children as React.ReactNode}
        </a>
      )
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {props.children}
      </button>
    )
  }
)

Button.displayName = 'Button'
export default Button
