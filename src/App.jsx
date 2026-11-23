import { useState } from 'react'
import { Container } from 'react-bootstrap'

import Header from './components/Header'
import Hero from './components/Hero'
import SkillsSection from './components/SkillsSection'
import ProjectsSection from './components/ProjectsSection'
import RecommendationsSection from './components/RecommendationsSection'
import LeaveRecommendationForm from './components/LeaveRecommendationForm'
import Footer from './components/Footer'

import {
  profile,
  navLinks,
  skills,
  projects,
  initialRecommendations,
} from './data/portfolioData'
import './App.css'

// Componente principal: orquesta todas las secciones y comparte los datos por props.
function App() {
  const [recommendations, setRecommendations] = useState(initialRecommendations)

  // Agrega una nueva recomendación enviada desde el formulario.
  const addRecommendation = ({ author, message }) => {
    setRecommendations((prev) => [...prev, { id: Date.now(), author, message }])
  }

  return (
    <>
      <Header name={profile.name} email={profile.email} phone={profile.phone} links={navLinks} />

      <main>
        <Container className="page-container py-4">
          <Hero greeting={profile.greeting} about={profile.about} />
          <SkillsSection skills={skills} />
          <ProjectsSection projects={projects} />
          <RecommendationsSection recommendations={recommendations} />
          <LeaveRecommendationForm onSubmit={addRecommendation} />
        </Container>
      </main>

      <Footer />
    </>
  )
}

export default App
