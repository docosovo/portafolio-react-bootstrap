import { Button } from 'react-bootstrap'

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer>
      <Button className="scroll-top" onClick={scrollToTop} aria-label="Scroll to top">
        <i className="bi bi-arrow-up-circle-fill"></i>
      </Button>
    </footer>
  )
}

export default Footer
