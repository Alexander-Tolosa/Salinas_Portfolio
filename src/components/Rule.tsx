/** Hairline that Reveal draws in on scroll. */
export default function Rule({ className = '' }: { className?: string }) {
  return <span data-rule aria-hidden="true" className={`block h-px w-full origin-left bg-rule ${className}`} />
}
