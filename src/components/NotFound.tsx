import { Container } from 'react-bootstrap'
import LinkButton from '@/components/LinkButton'

export default function NotFound() {
  return (
    <Container className="max-w-[1200px] pt-20 pb-10">
      <h1 className="mb-6 text-[clamp(3.5rem,11vw,6rem)]">
        Not found<span className="text-signal">.</span>
      </h1>
      <p className="mb-8 max-w-[48ch] text-[1.2rem]">That page doesn’t exist. The portfolio has three: Home, About and Contact.</p>
      <LinkButton to="/" variant="ink" className="btn-ink">
        Back to home
      </LinkButton>
    </Container>
  )
}
