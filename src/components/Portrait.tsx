import { useState } from 'react'

interface PortraitProps {
  src: string
  alt: string
  initials: string
}

/** Portrait with a styled fallback so a missing photo never shows a broken-image icon. */
export default function Portrait({ src, alt, initials }: PortraitProps) {
  const [failed, setFailed] = useState(false)
  return (
    <div className="aspect-[2/3] w-full overflow-hidden bg-paper-2">
      {failed ? (
        <div role="img" aria-label={alt} className="flex h-full items-center justify-center font-display text-8xl text-ink-soft">
          {initials}
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          width={1100}
          height={1649}
          fetchPriority="high"
          onError={() => setFailed(true)}
          className="h-full w-full object-cover object-top"
        />
      )}
    </div>
  )
}
