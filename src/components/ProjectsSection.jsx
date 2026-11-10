import { Fragment } from 'react'
import ProjectItem from './ProjectItem'
import { projects } from '../data/portfolio'

function ProjectsSection() {
  return (
    <section id="projects" className="py-5">
      <h2 className="section-title">Projects</h2>
      {projects.map((project, index) => (
        <Fragment key={project.id}>
          <ProjectItem title={project.title} description={project.description} />
          {index < projects.length - 1 && <hr className="project-divider" />}
        </Fragment>
      ))}
    </section>
  )
}

export default ProjectsSection
