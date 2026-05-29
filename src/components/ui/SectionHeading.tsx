interface SectionHeadingProps {
  label?: string
  title: string
  description?: string
  align?: 'left' | 'center'
}

export default function SectionHeading({
  label,
  title,
  description,
  align = 'center',
}: SectionHeadingProps) {
  return (
    <div
      className={`max-w-2xl ${
        align === 'center' ? 'mx-auto text-center' : ''
      } mb-16`}
    >
      {label && (
        <div className="inline-flex items-center rounded-full border border-brand-500/20 bg-brand-500/5 px-4 py-1.5 text-sm font-medium text-brand-400 mb-6">
          {label}
        </div>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-app-text sm:text-4xl lg:text-5xl text-balance">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg leading-relaxed text-app-text/40 text-balance">
          {description}
        </p>
      )}
    </div>
  )
}
