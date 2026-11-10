import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Hero from './components/Hero'
import SkillsSection from './components/SkillsSection'
import ProjectsSection from './components/ProjectsSection'
import RecommendationsSection from './components/RecommendationsSection'
import LeaveRecommendationForm from './components/LeaveRecommendationForm'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <main>
        <Container className="page-container py-4">
          <Hero />
          <SkillsSection />
          <ProjectsSection />
          <RecommendationsSection />
          <LeaveRecommendationForm />
        </Container>
      </main>
      <Footer />
    </>
  )
}

export default App
