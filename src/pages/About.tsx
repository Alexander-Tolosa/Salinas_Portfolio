import type { ReactNode } from 'react'
import { Accordion, Badge, Col, Container, ListGroup, Row } from 'react-bootstrap'
import { ArrowUpRight } from 'lucide-react'
import Reveal from '@/components/Reveal'
import Rule from '@/components/Rule'
import { certificationCount, experience, profile, projects, skills, stats } from '@/data/profile'

const groups = [
  { key: 'Hackathon', title: 'Hackathons' },
  { key: 'Internship', title: 'Internship capstone' },
  { key: 'Building', title: 'Currently building' },
] as const

/** One resume section: label column on the left, content on the right. */
function Section({ id, label, children }: { id?: string; label: string; children: ReactNode }) {
  return (
    <Reveal as="section" className="py-10">
      <Rule />
      <Row id={id} className="gy-4 pt-8" style={{ scrollMarginTop: '6rem' }}>
        <Col md={3}>
          <h2 data-item className="mono-label m-0 !font-normal md:sticky md:top-28">
            {label}
          </h2>
        </Col>
        <Col md={9} data-item>
          {children}
        </Col>
      </Row>
    </Reveal>
  )
}

export default function About() {
  return (
    <Container className="max-w-[1200px] pt-12 md:pt-20">
      <Reveal className="mb-12">
        <h1 data-item className="mb-6 text-[clamp(3.5rem,11vw,6rem)]">
          Resume<span className="text-signal">.</span>
        </h1>
        <p data-item className="m-0 max-w-[60ch] text-[1.2rem] text-ink">
          {profile.name} is an {profile.role} in {profile.location.split(',')[0]}. {profile.bio} With{' '}
          {stats[0].value} projects and {stats[1].value} national hackathon wins behind me, I care most about
          shipping things that work.
        </p>
      </Reveal>

      <Section label="Experience">
        <div className="d-flex flex-column gap-5">
          {experience.map((r) => (
            <article key={r.title}>
              <div className="d-flex flex-column flex-sm-row justify-content-between gap-1 mb-3">
                <h3 className="m-0 text-[clamp(1.8rem,3.2vw,2.4rem)]">
                  {r.title}, <em className="text-ink-soft">{r.org}</em>
                </h3>
                <span className="mono-label tabular whitespace-nowrap pt-2">{r.period}</span>
              </div>
              <ul className="m-0 max-w-[62ch] ps-4 text-ink-soft">
                {r.points.map((pt) => (
                  <li key={pt} className="mb-2">
                    {pt}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      <Section id="projects" label="Projects">
        <Accordion defaultActiveKey="Hackathon" flush>
          {groups.map((g) => (
            <Accordion.Item eventKey={g.key} key={g.key}>
              <Accordion.Header>{g.title}</Accordion.Header>
              <Accordion.Body>
                <ListGroup variant="flush">
                  {projects
                    .filter((p) => p.kind === g.key)
                    .map((p) => (
                      <ListGroup.Item
                        key={p.name}
                        className="d-flex flex-column flex-sm-row justify-content-between gap-1 bg-transparent px-0 py-3"
                      >
                        <span className="font-semibold">
                          {p.url ? (
                            <a href={p.url} target="_blank" rel="noreferrer">
                              {p.name}
                              <ArrowUpRight size={16} className="ms-1 inline" aria-label="opens in a new tab" />
                            </a>
                          ) : (
                            p.name
                          )}
                        </span>
                        <span className="text-ink-soft">{p.context}</span>
                      </ListGroup.Item>
                    ))}
                </ListGroup>
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </Section>

      <Section label="Stack">
        <div className="d-flex flex-column gap-4">
          {Object.entries(skills).map(([group, items]) => (
            <div key={group} className="d-flex flex-column flex-sm-row gap-2 gap-sm-4">
              <h3 className="mono-label m-0 pt-1 !font-normal sm:min-w-36">{group}</h3>
              <ul className="d-flex flex-wrap gap-2 m-0 list-none p-0">
                {items.map((s) => (
                  <li key={s}>
                    <Badge bg="" className="badge-chip">{s}</Badge>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section label="Recognition">
        <p className="m-0 max-w-[60ch]">
          Two national hackathon wins, a written recommendation from FlyRank’s Founder &amp; CEO, and{' '}
          <span className="tabular">{certificationCount}</span> certifications earned.
        </p>
      </Section>
    </Container>
  )
}
