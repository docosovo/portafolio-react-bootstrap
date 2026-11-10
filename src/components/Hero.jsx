import { Col, Row } from 'react-bootstrap'
import avatar from '../assets/avatar.svg'

function Hero() {
  return (
    <section id="about" className="py-5">
      <Row className="align-items-center g-4">
        <Col md={4} className="text-center">
          <img src={avatar} alt="Avatar de Jane Doe" className="img-fluid hero-avatar" />
        </Col>
        <Col md={8}>
          <h1 className="hero-name mb-3">Hi, I&apos;m Jane Doe! 👋</h1>
          <p className="hero-text mb-0">
            I am a full stack developer with 2 years of experience in both application and
            presentation layers. I have worked on applications and microservices deployed on IBM
            Cloud. I am an avid user of IBM Watson Services and have worked on Watson Assistant,
            NLU, Sentiment analyzer to name a few.
          </p>
        </Col>
      </Row>
    </section>
  )
}

export default Hero
