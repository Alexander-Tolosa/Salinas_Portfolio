import type { ReactNode } from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router'

interface LinkButtonProps {
  to: string
  variant: string
  className?: string
  children: ReactNode
}

/** React-Bootstrap Button that navigates with React Router (client-side, real anchor). */
export default function LinkButton({ to, ...props }: LinkButtonProps) {
  return <Button {...({ as: Link, to } as object)} {...props} />
}
