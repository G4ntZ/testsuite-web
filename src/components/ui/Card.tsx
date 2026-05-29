import { HTMLAttributes } from 'react'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean
  glow?: boolean
}

export default function Card({
  children,
  hover = false,
  glow = false,
  className = '',
  ...props
}: CardProps) {
  return (
    <div
      className={`glass rounded-xl p-6 transition-all duration-300 ${
        hover
          ? 'hover:shadow-card-hover hover:border-white/10 hover:-translate-y-0.5 cursor-pointer'
          : ''
      } ${glow ? 'relative overflow-hidden' : ''} ${className}`}
      {...props}
    >
      {glow && (
        <div className="absolute inset-0 bg-card-glow opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      )}
      <div className="relative z-10">{children}</div>
    </div>
  )
}
