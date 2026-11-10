import { useState } from 'react'
import { Alert, Button, Form } from 'react-bootstrap'

function LeaveRecommendationForm() {
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [sent, setSent] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    setSent(true)
    setName('')
    setMessage('')
  }

  return (
    <section id="leave-recommendation" className="py-5">
      <h2 className="section-title mb-4">Leave a Recommendation</h2>
      <Form onSubmit={handleSubmit} className="recommendation-form">
        <Form.Group className="mb-3" controlId="recommendationName">
          <Form.Label>Name (Optional)</Form.Label>
          <Form.Control
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Your name"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="recommendationMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            placeholder="Write your recommendation"
            required
          />
        </Form.Group>
        <div className="text-center">
          <Button type="submit" variant="outline-secondary" className="px-4">
            Submit
          </Button>
        </div>
        {sent && (
          <Alert variant="success" className="mt-3 mb-0 text-center">
            Thanks for your recommendation!
          </Alert>
        )}
      </Form>
    </section>
  )
}

export default LeaveRecommendationForm
