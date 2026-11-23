import { Container, Nav, Navbar } from 'react-bootstrap'

// Header: nombre, información de contacto y enlaces de navegación.
// Usa el Navbar de Bootstrap (colapsable en pantallas pequeñas).
function Header({ name, email, phone, links }) {
  return (
    <Navbar expand="md" data-bs-theme="dark" sticky="top" className="navbar-portfolio py-2">
      <Container className="page-container">
        <Navbar.Brand href="#about">
          <span className="d-block fs-5 fw-bold">{name}</span>
          <span className="brand-contact d-block">
            <i className="bi bi-envelope me-1"></i>
            {email}
            <span className="mx-2">·</span>
            <i className="bi bi-telephone me-1"></i>
            {phone}
          </span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-nav" />
        <Navbar.Collapse id="main-nav">
          <Nav className="ms-auto gap-md-4">
            {links.map((link) => (
              <Nav.Link key={link.href} href={link.href}>
                {link.label}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
