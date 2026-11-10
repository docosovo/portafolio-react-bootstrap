import { Col, Row } from 'react-bootstrap'
import RecommendationCard from './RecommendationCard'
import { recommendations } from '../data/portfolio'

function RecommendationsSection() {
  return (
    <section id="recommendations" className="py-5">
      <h2 className="section-title">Recommendations</h2>
      <Row className="g-3">
        {recommendations.map((recommendation) => (
          <Col key={recommendation.id} xs={12} md={4}>
            <RecommendationCard text={recommendation.text} />
          </Col>
        ))}
      </Row>
    </section>
  )
}

export default RecommendationsSection
