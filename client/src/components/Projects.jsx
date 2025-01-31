import React, { useState } from 'react';
import { Card, Row, Col, Modal, Button, Container, Badge } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faBuilding, 
  faTools, 
  faLocationDot, 
  faCalendarAlt,
  faChartLine,
  faAward,
  faLeaf,
  faUsers
} from '@fortawesome/free-solid-svg-icons';

const projects = [
  {
    title: 'Edifício Residencial Alpha',
    shortDescription: 'Um projeto de edifício residencial com 20 andares e soluções sustentáveis em São Paulo.',
    fullDescription: `O Edifício Residencial Alpha é um marco na arquitetura sustentável, 
    combinando design moderno com eficiência energética. O projeto inclui:
    • 20 andares com apartamentos de alto padrão
    • Área de lazer completa
    • Sistema de reuso de água
    • Painéis solares integrados`,
    icon: faBuilding,
    image: 'https://images.unsplash.com/photo-1565363887715-8884629e09ee?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    details: {
      location: 'São Paulo, SP',
      year: '2023',
      area: '15.000 m²',
      status: 'Concluído'
    },
    highlights: [
      'Certificação LEED Gold',
      'Sistema de automação predial',
      'Aproveitamento de luz natural',
      'Gestão inteligente de resíduos'
    ],
    tags: ['Residencial', 'Sustentável', 'Alto Padrão']
  },
  {
    title: 'Centro Corporativo Beta',
    shortDescription: 'Complexo corporativo de alto padrão com certificação LEED, localizado no Rio de Janeiro.',
    fullDescription: `O Centro Corporativo Beta representa o futuro dos espaços de trabalho,
    integrando tecnologia e sustentabilidade. Características principais:
    • 5 torres interligadas
    • Praça central com área verde
    • Auditório para 500 pessoas
    • Centro de convenções integrado`,
    icon: faBuilding,
    image: 'https://images.unsplash.com/photo-1716302567933-4debb3605805?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    details: {
      location: 'Rio de Janeiro, RJ',
      year: '2024',
      area: '45.000 m²',
      status: 'Em andamento'
    },
    highlights: [
      'Certificação LEED Platinum',
      'Fachada com vidros inteligentes',
      'Sistema BMS integrado',
      'Estações de carregamento elétrico'
    ],
    tags: ['Comercial', 'Corporativo', 'Tecnológico']
  },
  {
    title: 'Reforma do Estádio Gamma',
    shortDescription: 'Projeto de reforma e modernização do Estádio Municipal Gamma, melhorando infraestrutura e acessibilidade.',
    fullDescription: `A reforma do Estádio Gamma focou na modernização e acessibilidade,
    transformando-o em um espaço multiuso moderno. O projeto incluiu:
    • Reforma completa das arquibancadas
    • Novo sistema de iluminação LED
    • Centro de treinamento integrado
    • Áreas VIP reformuladas`,
    icon: faTools,
    image: 'https://plus.unsplash.com/premium_photo-1684713510655-e6e31536168d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    details: {
      location: 'Belo Horizonte, MG',
      year: '2023',
      area: '85.000 m²',
      status: 'Concluído'
    },
    highlights: [
      'Capacidade para 45.000 pessoas',
      'Sistema de drenagem avançado',
      'Cobertura retrátil',
      'Acessibilidade universal'
    ],
    tags: ['Esportivo', 'Reforma', 'Acessibilidade']
  }
];

const ProjectCard = ({ project, onSelect }) => {
  return (
    <Card 
      className="h-100 shadow border-0 project-card"
      onClick={() => onSelect(project)}
      style={{ cursor: 'pointer' }}
    >
      <div className="position-relative project-image-container">
        <Card.Img 
          variant="top" 
          src={project.image} 
          alt={project.title}
          className="project-image"
        />
        <div className="project-status-badge">
          <Badge 
            bg={project.details.status === 'Concluído' ? 'success' : 'warning'}
            className="position-absolute top-0 end-0 m-3"
          >
            {project.details.status}
          </Badge>
        </div>
      </div>
      <Card.Body className="p-4">
        <Card.Title className="d-flex align-items-center mb-3">
          <FontAwesomeIcon icon={project.icon} className="me-2 text-primary" size="lg" />
          <h3 className="h5 mb-0">{project.title}</h3>
        </Card.Title>
        <Card.Text className="text-muted mb-3">{project.shortDescription}</Card.Text>
        <div className="d-flex flex-wrap gap-2 mb-3">
          {project.tags.map((tag, index) => (
            <Badge key={index} bg="primary" className="bg-primary-subtle text-primary">
              {tag}
            </Badge>
          ))}
        </div>
        <div className="project-details text-muted small">
          <div className="d-flex align-items-center mb-2">
            <FontAwesomeIcon icon={faLocationDot} className="me-2" />
            {project.details.location}
          </div>
          <div className="d-flex align-items-center">
            <FontAwesomeIcon icon={faCalendarAlt} className="me-2" />
            {project.details.year}
          </div>
        </div>
        <Button variant="outline-primary" className="w-100 mt-3">
          Ver detalhes
        </Button>
      </Card.Body>
    </Card>
  );
};

const ProjectModal = ({ project, show, onHide }) => {
  if (!project) return null;

  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton className="border-0">
        <Modal.Title className="d-flex align-items-center">
          <FontAwesomeIcon icon={project.icon} className="me-3 text-primary" size="lg" />
          {project.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="pt-0">
        <Row>
          <Col md={6}>
            <img
              src={project.image}
              alt={project.title}
              className="img-fluid rounded mb-3"
              style={{ width: '100%', height: '300px', objectFit: 'cover' }}
            />
            <div className="d-flex flex-wrap gap-2 mb-3">
              {project.tags.map((tag, index) => (
                <Badge key={index} bg="primary" className="bg-primary-subtle text-primary">
                  {tag}
                </Badge>
              ))}
            </div>
          </Col>
          <Col md={6}>
            <p className="text-muted mb-4">{project.fullDescription}</p>
            
            <div className="project-details mb-4">
              <h5 className="d-flex align-items-center mb-3">
                <FontAwesomeIcon icon={faChartLine} className="me-2 text-primary" />
                Detalhes do Projeto
              </h5>
              <Row className="g-3">
                <Col xs={6}>
                  <div className="d-flex align-items-center">
                    <FontAwesomeIcon icon={faLocationDot} className="me-2 text-primary" />
                    <div>
                      <small className="text-muted d-block">Localização</small>
                      <span>{project.details.location}</span>
                    </div>
                  </div>
                </Col>
                <Col xs={6}>
                  <div className="d-flex align-items-center">
                    <FontAwesomeIcon icon={faCalendarAlt} className="me-2 text-primary" />
                    <div>
                      <small className="text-muted d-block">Ano</small>
                      <span>{project.details.year}</span>
                    </div>
                  </div>
                </Col>
                <Col xs={6}>
                  <div className="d-flex align-items-center">
                    <FontAwesomeIcon icon={faUsers} className="me-2 text-primary" />
                    <div>
                      <small className="text-muted d-block">Status</small>
                      <span>{project.details.status}</span>
                    </div>
                  </div>
                </Col>
                <Col xs={6}>
                  <div className="d-flex align-items-center">
                    <FontAwesomeIcon icon={faLeaf} className="me-2 text-primary" />
                    <div>
                      <small className="text-muted d-block">Área</small>
                      <span>{project.details.area}</span>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>

            <div className="project-highlights">
              <h5 className="d-flex align-items-center mb-3">
                <FontAwesomeIcon icon={faAward} className="me-2 text-primary" />
                Destaques
              </h5>
              <ul className="list-unstyled">
                {project.highlights.map((highlight, index) => (
                  <li key={index} className="mb-2 d-flex align-items-start">
                    <span className="text-primary me-2">•</span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
};

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleProjectSelect = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  return (
    <section className="py-5 bg-light">
      <Container>
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold mb-3">Projetos Recentes</h2>
          <p className="text-muted lead mb-0 mx-auto" style={{ maxWidth: '700px' }}>
            Conheça alguns dos nossos projetos mais recentes e descubra como 
            transformamos ideias em realidade.
          </p>
        </div>
        
        <Row className="g-4">
          {projects.map((project, index) => (
            <Col md={6} lg={4} key={index}>
              <ProjectCard 
                project={project} 
                onSelect={handleProjectSelect}
              />
            </Col>
          ))}
        </Row>

        <ProjectModal
          project={selectedProject}
          show={showModal}
          onHide={() => setShowModal(false)}
        />
      </Container>

      <style>{`
        .project-card {
          transition: transform 0.2s ease-in-out;
        }
        
        .project-card:hover {
          transform: translateY(-5px);
        }
        
        .project-image-container {
          height: 200px;
          overflow: hidden;
          position: relative;
        }
        
        .project-image {
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease-in-out;
        }
        
        .project-card:hover .project-image {
          transform: scale(1.05);
        }

        .project-status-badge {
          position: absolute;
          top: 1rem;
          right: 1rem;
          z-index: 1;
        }
      `}</style>
    </section>
  );
}