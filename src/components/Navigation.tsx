import { Container, Nav, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router'
import { profile } from '@/data/profile'

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About', end: false },
  { to: '/contact', label: 'Contact', end: false },
]

export default function Navigation() {
  return (
    <Navbar expand="md" sticky="top" collapseOnSelect>
      <Container className="max-w-[1200px]">
        <Navbar.Brand as={NavLink} to="/" className="font-display !text-[1.6rem] !tracking-tight !text-ink">
          {profile.name}
          <span className="text-signal">.</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="primary-nav" aria-label="Toggle navigation" />
        <Navbar.Collapse id="primary-nav" className="justify-content-end">
          <Nav as="ul" className="items-md-center">
            {links.map((l) => (
              <li key={l.to} className="nav-item">
                <Nav.Link as={NavLink} to={l.to} end={l.end} eventKey={l.to}>
                  {l.label}
                </Nav.Link>
              </li>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
