import { useLayoutEffect, useRef } from 'react'
import { Badge, Card, Col, Container, Row } from 'react-bootstrap'
import LinkButton from '@/components/LinkButton'
import { Link } from 'react-router'
import { ArrowUpRight, MapPin } from 'lucide-react'
import Portrait from '@/components/Portrait'
import Reveal from '@/components/Reveal'
import Rule from '@/components/Rule'
import { gsap, NO_REDUCED_MOTION } from '@/lib/motion'
import { profile, projects, stats } from '@/data/profile'

const featured = projects.filter((p) => p.image).slice(0, 4)

export default function Home() {
  const hero = useRef<HTMLElement>(null)

  // The page's one authored moment: copy rises line by line while the portrait is unmasked.
  useLayoutEffect(() => {
    const el = hero.current
    if (!el) return
    const mm = gsap.matchMedia()
    mm.add(NO_REDUCED_MOTION, () => {
      const tl = gsap.timeline({ defaults: { ease: 'expo.out' } })
      tl.from(el.querySelectorAll('[data-hero]'), { yPercent: 40, autoAlpha: 0, duration: 1.1, stagger: 0.1 })
      tl.from(el.querySelector('[data-portrait]'), { clipPath: 'inset(100% 0% 0% 0%)', duration: 1.3 }, 0.1)
    })
    return () => mm.revert()
  }, [])

  return (
    <>
      <section ref={hero} className="pt-10 pb-16 md:pt-16 md:pb-24">
        <Container className="max-w-[1200px]">
          <Row className="gy-5 items-end">
            <Col lg={7} className="order-2 order-lg-1">
              <h1 data-hero className="text-[clamp(3.5rem,11vw,6rem)] mb-6">
                {profile.name}
                <span className="text-signal">.</span>
              </h1>
              <p data-hero className="font-display text-[clamp(1.6rem,3.4vw,2.4rem)] italic leading-[1.1] text-ink max-w-[22ch] mb-6">
                {profile.tagline}
              </p>
              <p data-hero className="max-w-[56ch] text-ink-soft mb-8">
                {profile.bio}
              </p>
              <div data-hero className="d-flex flex-wrap gap-3 mb-8">
                <LinkButton to="/about" variant="ink" className="btn-ink">
                  Read my resume
                </LinkButton>
                <LinkButton to="/contact" variant="line" className="btn-line">
                  Get in touch
                </LinkButton>
              </div>
              <p data-hero className="mono-label m-0 d-flex flex-wrap align-items-center gap-x-4 gap-y-2">
                <span className="d-inline-flex align-items-center gap-2">
                  <span aria-hidden="true" className="inline-block size-2 rounded-full bg-signal" />
                  {profile.availability}
                </span>
                <span className="d-inline-flex align-items-center gap-1">
                  <MapPin size={14} aria-hidden="true" />
                  {profile.location}
                </span>
              </p>
            </Col>
            <Col lg={5} className="order-1 order-lg-2">
              <figure data-portrait className="m-0 mx-auto ms-lg-auto me-lg-0 max-w-[380px]">
                <Portrait src={profile.photo} alt={`Portrait of ${profile.name} holding a laptop`} initials="AS" />
                <figcaption className="mono-label mt-3 d-flex justify-content-between">
                  <span>Fig. 1</span>
                  <span>{profile.name}, {profile.role}</span>
                </figcaption>
              </figure>
            </Col>
          </Row>
        </Container>
      </section>

      <Reveal as="section" className="py-10">
        <Container className="max-w-[1200px]">
          <Rule />
          <ul className="m-0 grid list-none grid-cols-1 gap-6 px-0 py-8 sm:grid-cols-3">
            {stats.map((s) => (
              <li key={s.label} data-item className="d-flex align-items-baseline gap-4">
                <span className="tabular font-display text-5xl leading-none">{s.value}</span>
                <span className="mono-label">{s.label}</span>
              </li>
            ))}
          </ul>
          <Rule />
        </Container>
      </Reveal>

      <section className="py-16">
        <Container className="max-w-[1200px]">
          <Reveal className="mb-10 d-flex flex-wrap align-items-end justify-content-between gap-4">
            <h2 data-item className="text-[clamp(2.4rem,6vw,4rem)] m-0">
              Selected work
            </h2>
            <Link data-item to="/about#projects" className="mono-label !text-signal-text">
              All projects →
            </Link>
          </Reveal>
          <Row className="g-4">
            {featured.map((p) => (
              <Col key={p.name} md={6}>
                <Reveal className="h-100">
                  <Card data-item className="h-100 overflow-hidden">
                    <Card.Img
                      variant="top"
                      src={p.image}
                      alt={`${p.name} screenshot`}
                      loading="lazy"
                      className="aspect-[16/10] object-cover"
                    />
                    <Card.Body className="p-4">
                      <div className="mb-3">
                        <Badge bg="" className="badge-chip">{p.kind}</Badge>
                      </div>
                      <Card.Title as="h3" className="text-[2rem] mb-2">
                        {p.url ? (
                          <a href={p.url} target="_blank" rel="noreferrer" className="text-ink no-underline hover:text-signal-text">
                            {p.name}
                            <ArrowUpRight size={22} className="ms-1 inline" aria-label="opens in a new tab" />
                          </a>
                        ) : (
                          p.name
                        )}
                      </Card.Title>
                      <Card.Text className="text-ink-soft m-0">{p.context}</Card.Text>
                    </Card.Body>
                  </Card>
                </Reveal>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <Reveal as="section" className="py-16">
        <Container className="max-w-[1200px]">
          <Rule />
          <div className="d-flex flex-column flex-md-row align-items-md-end justify-content-between gap-6 pt-10">
            <h2 data-item className="text-[clamp(2.4rem,6vw,4rem)] max-w-[14ch] m-0">
              Have something worth building?
            </h2>
            <div data-item>
              <LinkButton to="/contact" variant="ink" className="btn-ink">
                Contact me
              </LinkButton>
            </div>
          </div>
        </Container>
      </Reveal>
    </>
  )
}
