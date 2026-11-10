import { Col, Row } from 'react-bootstrap'
import SkillCard from './SkillCard'
import { skills } from '../data/portfolio'

function SkillsSection() {
  return (
    <section id="skills" className="py-5">
      <h2 className="section-title">Skills</h2>
      <Row className="g-4">
        {skills.map((skill) => (
          <Col key={skill.id} xs={6} md={4} lg={3}>
            <SkillCard
              name={skill.name}
              years={skill.years}
              icon={skill.icon}
              color={skill.color}
            />
          </Col>
        ))}
      </Row>
    </section>
  )
}

export default SkillsSection
