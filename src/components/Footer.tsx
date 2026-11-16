import { Container } from 'react-bootstrap'
import { profile } from '@/data/profile'

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-rule">
      <Container className="max-w-[1200px] d-flex flex-column flex-sm-row justify-content-between gap-2 py-4">
        <p className="mono-label m-0">
          {profile.name} · {profile.role}
        </p>
        <p className="mono-label m-0">
          {profile.location} · {profile.timezone}
        </p>
      </Container>
    </footer>
  )
}
