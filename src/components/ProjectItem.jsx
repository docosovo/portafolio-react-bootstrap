function ProjectItem({ title, description }) {
  return (
    <div>
      <h3 className="project-title">{title}</h3>
      <ul className="project-list mb-0">
        <li>{description}</li>
      </ul>
    </div>
  )
}

export default ProjectItem
