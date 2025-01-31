import { Card, Button, Row, Col, ListGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faUserTie, 
  faCheckCircle, 
  faBuilding, 
  faCertificate, 
  faArrowRight 
} from '@fortawesome/free-solid-svg-icons';

export default function HomeContent() {
  return (
    <div className="home-content">
      <Card className="shadow-lg border-0 my-5">
        <Card.Body className="p-5">
          <Row className="align-items-center">
            {/* Coluna da Foto e Informações Básicas */}
            <Col md={4} className="text-center mb-4 mb-md-0">
              <div className="position-relative">
                <img 
                  src="https://images.unsplash.com/photo-1621905252472-943afaa20e20?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                  alt="Eng. João Silva" 
                  className="img-fluid rounded-circle mb-3"
                  style={{
                    width: '200px',
                    height: '200px',
                    objectFit: 'cover',
                    border: '3px solid #2c3e50'
                  }}
                />
                <FontAwesomeIcon 
                  icon={faUserTie} 
                  className="position-absolute"
                  style={{
                    bottom: '20px',
                    right: '30px',
                    fontSize: '2rem',
                    color: '#2c3e50',
                    backgroundColor: 'white',
                    borderRadius: '50%',
                    padding: '5px'
                  }}
                />
              </div>
              <h2 className="mt-4">Eng. João Silva</h2>
              <p className="text-muted mb-0">CREA/SP 123456</p>
              <div className="mt-3">
                <Button 
                  variant="dark" 
                  href="/contact" 
                  className="px-4 py-2"
                >
                  Agendar Consultoria 
                  <FontAwesomeIcon icon={faArrowRight} className="ms-2" />
                </Button>
              </div>
            </Col>

            {/* Coluna da Descrição Detalhada */}
            <Col md={8}>
              <div className="ps-md-4">
                <h3 className="mb-4">
                  <FontAwesomeIcon icon={faCertificate} className="me-2" />
                  Engenheiro Civil Senior
                </h3>
                
                <p className="lead mb-4">
                  Com mais de uma década de experiência em engenharia de alto padrão, 
                  especializado em projetos residenciais e corporativos sustentáveis, 
                  oferecendo soluções completas desde a concepção até a entrega final.
                </p>

                <Row className="g-4 mb-4">
                  <Col md={6}>
                    <div className="d-flex align-items-center">
                      <FontAwesomeIcon 
                        icon={faBuilding} 
                        className="text-primary me-3"
                        size="lg"
                      />
                      <div>
                        <h5 className="mb-0">+150 Projetos</h5>
                        <small className="text-muted">Entregues com excelência</small>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="d-flex align-items-center">
                      <FontAwesomeIcon 
                        icon={faCheckCircle} 
                        className="text-success me-3"
                        size="lg"
                      />
                      <div>
                        <h5 className="mb-0">100% Legalizado</h5>
                        <small className="text-muted">Documentação regularizada</small>
                      </div>
                    </div>
                  </Col>
                </Row>

                <h5 className="mt-4 mb-3">Especializações:</h5>
                <ListGroup variant="flush" className="mb-4">
                  <ListGroup.Item className="d-flex align-items-center">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-success me-2" />
                    Projetos Arquitetônicos e Estruturais
                  </ListGroup.Item>
                  <ListGroup.Item className="d-flex align-items-center">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-success me-2" />
                    Gerenciamento de Obras e Fiscalização
                  </ListGroup.Item>
                  <ListGroup.Item className="d-flex align-items-center">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-success me-2" />
                    Regularização de Imóveis e Laudos Técnicos
                  </ListGroup.Item>
                  <ListGroup.Item className="d-flex align-items-center">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-success me-2" />
                    Sustentabilidade e Eficiência Energética
                  </ListGroup.Item>
                </ListGroup>
              </div>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      {/* Seção de Destaques */}
      <Row className="text-center mt-5 g-4">
        <Col md={4}>
          <div className="p-4 border rounded-3 shadow-sm">
            <h3 className="text-primary">15+</h3>
            <p className="mb-0">Anos de Experiência</p>
          </div>
        </Col>
        <Col md={4}>
          <div className="p-4 border rounded-3 shadow-sm">
            <h3 className="text-primary">50+</h3>
            <p className="mb-0">Clientes Satisfeitos</p>
          </div>
        </Col>
        <Col md={4}>
          <div className="p-4 border rounded-3 shadow-sm">
            <h3 className="text-primary">R$ 500M+</h3>
            <p className="mb-0">Em Obras Gerenciadas</p>
          </div>
        </Col>
      </Row>
    </div>
  );
}