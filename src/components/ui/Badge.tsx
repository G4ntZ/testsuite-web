interface BadgeProps {
  children: React.ReactNode
  variant?: 'default' | 'brand' | 'success' | 'warning'
}

const variants = {
  default: 'bg-app-text/[0.04] text-app-text/50 border-app-text/[0.06]',
  brand: 'bg-brand-500/10 text-brand-400 border-brand-500/20',
  success: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  warning: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
}

export default function Badge({ children, variant = 'default' }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium ${variants[variant]}`}
    >
      {children}
    </span>
  )
}
