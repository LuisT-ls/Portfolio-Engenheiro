import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button, Row, Col, Container, Badge } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faUserTie, 
  faCheckCircle, 
  faBuilding, 
  faCertificate, 
  faArrowRight,
  faMedal,
  faPhone
} from '@fortawesome/free-solid-svg-icons';

const Achievement = ({ icon, value, label }) => (
  <Col md={4}>
    <Card className="h-100 border-0 shadow-sm hover-shadow transition-all">
      <Card.Body className="text-center p-4">
        <FontAwesomeIcon icon={icon} className="text-primary mb-3" size="2x" />
        <h3 className="text-primary">{value}</h3>
        <p className="text-muted mb-0">{label}</p>
      </Card.Body>
    </Card>
  </Col>
);

const Specialty = ({ children }) => (
  <div className="d-flex align-items-center bg-light p-3 rounded mb-3">
    <FontAwesomeIcon icon={faCheckCircle} className="text-success me-3" />
    <span>{children}</span>
  </div>
);

export default function HomeContent() {
  return (
    <Container className="py-5">
      {/* Hero Section */}
      <Card className="border-0 shadow-lg mb-5">
        <Card.Body className="p-0">
          <Row className="g-0">
            {/* Profile Section */}
            <Col lg={4} className="bg-light p-5 text-center">
              <div className="position-relative mb-4">
                <div className="profile-image-container">
                  <img
                    src="https://images.unsplash.com/photo-1621905252472-943afaa20e20?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Eng. João Silva"
                    className="rounded-circle img-fluid border border-4 border-white shadow"
                    style={{ width: '200px', height: '200px', objectFit: 'cover' }}
                  />
                </div>
                <Badge 
                  bg="primary" 
                  className="position-absolute bottom-0 end-0 px-3 py-2"
                >
                  CREA/SP 123456
                </Badge>
              </div>
              
              <h2 className="mb-2">Eng. João Silva</h2>
              <div className="d-flex align-items-center justify-content-center mb-4">
                <FontAwesomeIcon icon={faMedal} className="text-primary me-2" />
                <span className="fs-5">Engenheiro Civil Senior</span>
              </div>
              
              <Button 
                as={Link}
                to="./contact"
                variant="primary" 
                size="lg" 
                className="w-100 d-flex align-items-center justify-content-center"
              >
                <FontAwesomeIcon icon={faPhone} className="me-2" />
                Agendar Consultoria
                <FontAwesomeIcon icon={faArrowRight} className="ms-2" />
              </Button>
            </Col>

            {/* Content Section */}
            <Col lg={8} className="p-5">
              <div className="mb-5">
                <div className="d-flex align-items-center mb-4">
                  <FontAwesomeIcon icon={faCertificate} className="text-primary me-3" size="lg" />
                  <h3 className="mb-0">Perfil Profissional</h3>
                </div>
                <p className="lead text-muted">
                  Com mais de uma década de experiência em engenharia de alto padrão,
                  especializado em projetos residenciais e corporativos sustentáveis,
                  oferecendo soluções completas desde a concepção até a entrega final.
                  Nossa abordagem combina inovação técnica com responsabilidade ambiental.
                </p>
              </div>

              <Row className="g-4 mb-5">
                <Col md={6}>
                  <Card className="border-0 bg-light h-100">
                    <Card.Body className="d-flex align-items-center">
                      <FontAwesomeIcon 
                        icon={faBuilding} 
                        className="text-primary me-3"
                        size="2x"
                      />
                      <div>
                        <h5 className="mb-1">+150 Projetos</h5>
                        <small className="text-muted">Entregues com excelência</small>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={6}>
                  <Card className="border-0 bg-light h-100">
                    <Card.Body className="d-flex align-items-center">
                      <FontAwesomeIcon 
                        icon={faCheckCircle} 
                        className="text-success me-3"
                        size="2x"
                      />
                      <div>
                        <h5 className="mb-1">100% Legalizado</h5>
                        <small className="text-muted">Documentação regularizada</small>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>

              <div>
                <h4 className="mb-4">Especializações</h4>
                <Row>
                  <Col md={6}>
                    <Specialty>Projetos Arquitetônicos e Estruturais</Specialty>
                    <Specialty>Gerenciamento de Obras e Fiscalização</Specialty>
                  </Col>
                  <Col md={6}>
                    <Specialty>Regularização de Imóveis e Laudos Técnicos</Specialty>
                    <Specialty>Sustentabilidade e Eficiência Energética</Specialty>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      {/* Achievements Section */}
      <div className="text-center mb-5">
        <h3 className="mb-3">Números que Demonstram Nossa Excelência</h3>
        <p className="text-muted mb-5">
          Resultados comprovados através de anos de dedicação e compromisso com a qualidade
        </p>
        
        <Row className="g-4">
          <Achievement 
            icon={faMedal} 
            value="15+" 
            label="Anos de Experiência no Mercado" 
          />
          <Achievement 
            icon={faUserTie} 
            value="50+" 
            label="Clientes Satisfeitos" 
          />
          <Achievement 
            icon={faBuilding} 
            value="R$ 500M+" 
            label="Em Obras Gerenciadas" 
          />
        </Row>
      </div>
    </Container>
  );
}