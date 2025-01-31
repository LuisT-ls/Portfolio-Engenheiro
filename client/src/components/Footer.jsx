import { Container, Row, Col, ListGroup, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
  faArrowUp,
  faCertificate
} from '@fortawesome/free-solid-svg-icons';
import { 
  faLinkedin,
  faInstagram,
  faWhatsapp
} from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

export default function Footer() {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark text-white mt-5 pt-5 border-top border-secondary">
      <Container>
        <Row className="g-4">
          {/* Seção Sobre */}
          <Col md={4} className="pe-md-5">
            <h5 className="mb-4">
              <FontAwesomeIcon icon={faCertificate} className="me-2 text-primary" />
              Credenciais
            </h5>
            <p className="text-muted small">
              Engenheiro Civil registrado no CREA/SP sob o n° 123.456-7, 
              com especialização em Gestão de Projetos pela USP e 
              MBA em Construções Sustentáveis.
            </p>
            <div className="mt-4">
              <Button 
                variant="outline-light" 
                size="sm"
                onClick={handleScrollTop}
              >
                <FontAwesomeIcon icon={faArrowUp} className="me-2" />
                Voltar ao Topo
              </Button>
            </div>
          </Col>

          {/* Links Rápidos */}
          <Col md={2}>
            <h5 className="mb-4">Navegação</h5>
            <ListGroup variant="flush" className="bg-dark">
              <ListGroup.Item className="bg-dark text-muted border-0 px-0 py-1">
                <Link to="/" className="text-decoration-none text-white hover-primary">
                  Início
                </Link>
              </ListGroup.Item>
              <ListGroup.Item className="bg-dark text-muted border-0 px-0 py-1">
                <Link to="/projects" className="text-decoration-none text-white hover-primary">
                  Projetos
                </Link>
              </ListGroup.Item>
              <ListGroup.Item className="bg-dark text-muted border-0 px-0 py-1">
                <Link to="/services" className="text-decoration-none text-white hover-primary">
                  Serviços
                </Link>
              </ListGroup.Item>
              <ListGroup.Item className="bg-dark text-muted border-0 px-0 py-1">
                <Link to="/contact" className="text-decoration-none text-white hover-primary">
                  Contato
                </Link>
              </ListGroup.Item>
            </ListGroup>
          </Col>

          {/* Contato */}
          <Col md={3}>
            <h5 className="mb-4">Contato</h5>
            <ListGroup variant="flush" className="bg-dark">
              <ListGroup.Item className="bg-dark text-muted border-0 px-0 py-1">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="me-2 text-primary" />
                Av. Paulista, 1000 - São Paulo/SP
              </ListGroup.Item>
              <ListGroup.Item className="bg-dark text-muted border-0 px-0 py-1">
                <FontAwesomeIcon icon={faPhone} className="me-2 text-primary" />
                <a href="tel:+5511999999999" className="text-white text-decoration-none">
                  (11) 99999-9999
                </a>
              </ListGroup.Item>
              <ListGroup.Item className="bg-dark text-muted border-0 px-0 py-1">
                <FontAwesomeIcon icon={faEnvelope} className="me-2 text-primary" />
                <a href="mailto:contato@engjoaosilva.com.br" className="text-white text-decoration-none">
                  contato@engjoaosilva.com.br
                </a>
              </ListGroup.Item>
            </ListGroup>
          </Col>

          {/* Redes Sociais */}
          <Col md={3}>
            <h5 className="mb-4">Conecte-se</h5>
            <div className="d-flex gap-3">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-decoration-none">
                <FontAwesomeIcon 
                  icon={faLinkedin} 
                  className="text-white fs-4 hover-primary"
                />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-decoration-none">
                <FontAwesomeIcon 
                  icon={faInstagram} 
                  className="text-white fs-4 hover-primary"
                />
              </a>
              <a href="https://wa.me/5511999999999" target="_blank" rel="noreferrer" className="text-decoration-none">
                <FontAwesomeIcon 
                  icon={faWhatsapp} 
                  className="text-white fs-4 hover-primary"
                />
              </a>
            </div>

            {/* Selos */}
            <div className="mt-4 pt-3 border-top border-secondary">
              <img 
                src="https://www.sallusengenhariajuridica.com.br/wp-content/uploads/2020/01/logo-crea-sp-novo.png" 
                alt="Selo CREA-SP" 
                className="img-fluid me-2"
                style={{maxWidth: '60px'}}
              />
              <img 
                src="https://hublogistics.ch/wp-content/uploads/2024/05/ISO-9001-Meaning-and-History-hublogistics-logistics-switzerland-transportation-warehouses.webp" 
                alt="ISO 9001" 
                className="img-fluid"
                style={{maxWidth: '56px'}}
              />
            </div>
          </Col>
        </Row>

        {/* Copyright */}
        <Row className="mt-5 pt-4 border-top border-secondary">
          <Col className="text-center text-muted small">
            <p className="mb-0">
              © {new Date().getFullYear()} Eng. João Silva - Todos os direitos reservados
              <br />
              Desenvolvido com React e Bootstrap | Versão 1.0.0
            </p>
          </Col>
        </Row>
      </Container>

      {/* Estilos inline para hover (adicione ao CSS global para produção) */}
      <style>{`
        .hover-primary:hover {
          color: #0d6efd!important;
          transition: color 0.3s ease;
        }
        .text-muted {
          color: #8b8e94!important;
        }
      `}</style>
    </footer>
  );
}