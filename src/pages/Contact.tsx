import { useState, type ChangeEvent, type FormEvent } from 'react'
import { Alert, Button, Col, Container, Form, ListGroup, Row } from 'react-bootstrap'
import { ArrowUpRight, BriefcaseBusiness, Camera, GitBranch, Mail, Users, type LucideIcon } from 'lucide-react'
import Reveal from '@/components/Reveal'
import { contacts, profile } from '@/data/profile'

const icons: Record<string, LucideIcon> = {
  mail: Mail,
  linkedin: BriefcaseBusiness,
  github: GitBranch,
  instagram: Camera,
  facebook: Users,
}

interface FormState {
  name: string
  email: string
  message: string
}
const empty: FormState = { name: '', email: '', message: '' }

export default function Contact() {
  const [values, setValues] = useState<FormState>(empty)
  const [validated, setValidated] = useState(false)
  const [sent, setSent] = useState(false)

  const set = (k: keyof FormState) => (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setValues((v) => ({ ...v, [k]: e.target.value }))

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    setSent(false)
    if (!form.checkValidity()) {
      setValidated(true)
      form.querySelector<HTMLElement>(':invalid')?.focus()
      return
    }
    const subject = encodeURIComponent(`Portfolio message from ${values.name}`)
    const body = encodeURIComponent(`${values.message}\n\n${values.name} <${values.email}>`)
    window.location.href = `mailto:${contacts[0].value}?subject=${subject}&body=${body}`
    setSent(true)
    setValidated(false)
    setValues(empty)
  }

  return (
    <Container className="max-w-[1200px] pt-12 md:pt-20">
      <Reveal className="mb-12">
        <h1 data-item className="mb-6 text-[clamp(3.5rem,11vw,6rem)]">
          Say hello<span className="text-signal">.</span>
        </h1>
        <p data-item className="m-0 max-w-[56ch] text-[1.2rem]">
          {profile.availability} Email is fastest. I’m based in {profile.location.split(',')[0]} ({profile.timezone}).
        </p>
      </Reveal>

      <Row className="gy-5 gx-lg-5">
        <Col lg={5}>
          <Reveal>
            <ListGroup variant="flush" data-item>
              {contacts.map((c) => {
                const Icon = icons[c.icon]
                return (
                  <ListGroup.Item
                    key={c.label}
                    action
                    href={c.href}
                    target={c.href.startsWith('http') ? '_blank' : undefined}
                    rel="noreferrer"
                    className="d-flex align-items-center gap-3 bg-transparent px-0 py-3"
                  >
                    <Icon size={20} strokeWidth={1.5} aria-hidden="true" />
                    <span className="flex-grow-1">
                      <span className="mono-label d-block">{c.label}</span>
                      <span className="break-all">{c.value}</span>
                    </span>
                    <ArrowUpRight size={18} aria-hidden="true" />
                  </ListGroup.Item>
                )
              })}
            </ListGroup>
          </Reveal>
        </Col>
        <Col lg={{ span: 6, offset: 1 }}>
          <Reveal>
            <Form noValidate validated={validated} onSubmit={onSubmit} aria-label="Send a message" data-item>
              <Form.Group className="mb-4" controlId="c-name">
                <Form.Label>Name</Form.Label>
                <Form.Control required autoComplete="name" value={values.name} onChange={set('name')} />
                <Form.Control.Feedback type="invalid">Tell me your name so I know who to reply to.</Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-4" controlId="c-email">
                <Form.Label>Email</Form.Label>
                <Form.Control required type="email" autoComplete="email" value={values.email} onChange={set('email')} />
                <Form.Control.Feedback type="invalid">Enter an email address like name@example.com.</Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-4" controlId="c-message">
                <Form.Label>Message</Form.Label>
                <Form.Control required as="textarea" rows={6} minLength={10} value={values.message} onChange={set('message')} />
                <Form.Control.Feedback type="invalid">Write at least a sentence (10 characters) about what you need.</Form.Control.Feedback>
              </Form.Group>
              <Button type="submit" variant="ink" className="btn-ink">
                Send message
              </Button>
              <div aria-live="polite" className="mt-4">
                {sent && (
                  <Alert variant="success" className="m-0">
                    Your email app should now open with the message ready to send. If it didn’t, write to {contacts[0].value}.
                  </Alert>
                )}
              </div>
            </Form>
          </Reveal>
        </Col>
      </Row>
    </Container>
  )
}
