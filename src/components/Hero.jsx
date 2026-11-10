import { Col, Row } from 'react-bootstrap'
import avatar from '../assets/avatar.svg'

function Hero() {
  return (
    <section id="about" className="py-5">
      <Row className="align-items-center g-4">
        <Col md={4} className="text-center">
          <img src={avatar} alt="Avatar de Daniel Castañeda Tovar" className="img-fluid hero-avatar" />
        </Col>
        <Col md={8}>
          <h1 className="hero-name mb-3">Hi, I&apos;m Daniel Castañeda Tovar!</h1>
          <p className="hero-text mb-0">
            I am a software development technologist from SENA with experience building full stack
            web applications. I work with HTML5, CSS3, JavaScript and Bootstrap on the front end,
            and Node.js and PHP on the back end, along with MySQL, PostgreSQL and MariaDB
            databases.
          </p>
        </Col>
      </Row>
    </section>
  )
}

export default Hero
