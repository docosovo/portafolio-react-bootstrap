import { Card } from 'react-bootstrap'

function SkillCard({ name, years, icon, color }) {
  return (
    <Card className="skill-card h-100">
      <Card.Body className="d-flex flex-column align-items-center justify-content-center py-4">
        <div className="skill-icon">
          <i className={`bi ${icon}`} style={{ color }}></i>
        </div>
        <Card.Title as="h3" className="skill-name text-center">
          {name}
        </Card.Title>
        <Card.Text className="skill-years text-center mb-0">{years}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default SkillCard
