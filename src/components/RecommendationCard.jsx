import { Card } from 'react-bootstrap'

function RecommendationCard({ text }) {
  return (
    <Card className="recommendation-card">
      <Card.Body>
        <Card.Text className="recommendation-text mb-0">&quot; {text} &quot;</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default RecommendationCard
