import clsx from "clsx"

type Props = {
  largeTitle: string
  subtitle?: string
  description?: string
  className?: string
}

export function SectionHeader({ largeTitle, subtitle, description, className }: Props) {
  return (
    <div className={clsx("grid grid-cols-1 md:grid-cols-12 gap-10 items-start", className)}>
      <div className="md:col-span-5">
        <div className="text-[40px] md:text-[72px] leading-none font-extrabold tracking-tight text-foreground/90">
          {largeTitle}
        </div>
        {subtitle && <div className="mt-3 text-lg md:text-xl text-muted-foreground">{subtitle}</div>}
      </div>
      <div className="md:col-span-7">
        {description && <p className="text-lg text-muted-foreground leading-relaxed">{description}</p>}
      </div>
    </div>
  )
}


