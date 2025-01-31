import { Navbar, Nav, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faProjectDiagram, faTools, faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top" className="shadow-lg">
      <Container>
        <Navbar.Brand href="/" className="fw-bold">
          Eng. João Silva
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/" className="d-flex align-items-center">
              <FontAwesomeIcon icon={faHome} className="me-2" />
              Início
            </Nav.Link>
            <Nav.Link href="/projects" className="d-flex align-items-center">
              <FontAwesomeIcon icon={faProjectDiagram} className="me-2" />
              Projetos
            </Nav.Link>
            <Nav.Link href="/services" className="d-flex align-items-center">
              <FontAwesomeIcon icon={faTools} className="me-2" />
              Serviços
            </Nav.Link>
            <Nav.Link href="/contact" className="d-flex align-items-center">
              <FontAwesomeIcon icon={faEnvelope} className="me-2" />
              Contato
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
