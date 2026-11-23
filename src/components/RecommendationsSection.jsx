import { Col, Row } from 'react-bootstrap'
import RecommendationCard from './RecommendationCard'

// Sección de recomendaciones: 1 columna en móvil, 3 en pantallas medianas.
function RecommendationsSection({ recommendations }) {
  return (
    <section id="recommendations" className="py-5">
      <h2 className="section-title">Recommendations</h2>
      <Row className="g-3">
        {recommendations.map((recommendation) => (
          <Col key={recommendation.id} xs={12} md={4}>
            <RecommendationCard
              message={recommendation.message}
              author={recommendation.author}
            />
          </Col>
        ))}
      </Row>
    </section>
  )
}

export default RecommendationsSection
