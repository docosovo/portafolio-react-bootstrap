import { Container, Nav, Navbar } from 'react-bootstrap'

function Header() {
  return (
    <Navbar expand="md" data-bs-theme="dark" className="navbar-portfolio py-3">
      <Container className="page-container">
        <Navbar.Brand href="#about">
          <span className="d-block fs-5 fw-bold">Daniel Castañeda Tovar</span>
          <span className="brand-contact d-block">
            <i className="bi bi-envelope me-1"></i>
            doco93229@gmail.com
          </span>
          <span className="brand-contact d-block">
            <i className="bi bi-telephone me-1"></i>
            +57 302 213 7152
          </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-nav" />
        <Navbar.Collapse id="main-nav">
          <Nav className="ms-auto gap-md-4">
            <Nav.Link href="#about">About Me</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#recommendations">Recommendations</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
