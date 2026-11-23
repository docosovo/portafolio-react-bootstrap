import { Col, Row } from 'react-bootstrap'
import avatar from '../assets/avatar.svg'

// Sección de presentación: avatar + saludo y descripción.
function Hero({ greeting, about }) {
  return (
    <section id="about" className="py-5">
      <Row className="align-items-center g-4">
        <Col md={4} className="text-center">
          <img
            src={avatar}
            alt="Avatar de Daniel Castañeda Tovar"
            className="img-fluid hero-avatar"
          />
        </Col>
        <Col md={8}>
          <h1 className="hero-name mb-3">
            {greeting} <span aria-hidden="true">👋</span>
          </h1>
          <p className="hero-text mb-0">{about}</p>
        </Col>
      </Row>
    </section>
  )
}

export default Hero
