import { Card } from 'react-bootstrap'

// Tarjeta de recomendación. El autor es opcional.
function RecommendationCard({ message, author }) {
  return (
    <Card className="recommendation-card">
      <Card.Body>
        <Card.Text className="recommendation-text mb-0">&quot; {message} &quot;</Card.Text>
        {author && <footer className="recommendation-author text-end">— {author}</footer>}
      </Card.Body>
    </Card>
  )
}

export default RecommendationCard
