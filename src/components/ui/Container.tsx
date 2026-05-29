import { HTMLAttributes } from 'react'

export default function Container({
  children,
  className = '',
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}
