import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faCheckCircle, faTools } from '@fortawesome/free-solid-svg-icons';

const projects = [
  {
    title: 'Edifício Residencial Alpha',
    description: 'Um projeto de edifício residencial com 20 andares e soluções sustentáveis em São Paulo.',
    icon: faBuilding,
    image: 'https://images.unsplash.com/photo-1565363887715-8884629e09ee?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    title: 'Centro Corporativo Beta',
    description: 'Complexo corporativo de alto padrão com certificação LEED, localizado no Rio de Janeiro.',
    icon: faBuilding,
    image: 'https://images.unsplash.com/photo-1716302567933-4debb3605805?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    title: 'Reforma do Estádio Gamma',
    description: 'Projeto de reforma e modernização do Estádio Municipal Gamma, melhorando infraestrutura e acessibilidade.',
    icon: faTools,
    image: 'https://plus.unsplash.com/premium_photo-1684713510655-e6e31536168d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  }
];

export default function Projects() {
  return (
    <div className="projects-content">
      <Card className="shadow-lg border-0 my-5">
        <Card.Body className="p-5">
          <h2 className="text-center mb-5">Projetos Recentes</h2>
          <Row className="g-4">
            {projects.map((project, index) => (
              <Col md={4} key={index}>
                <Card className="h-100 shadow-sm border-0">
                  <Card.Img variant="top" src={project.image} alt={project.title} />
                  <Card.Body>
                    <Card.Title className="d-flex align-items-center">
                      <FontAwesomeIcon icon={project.icon} className="me-2 text-primary" />
                      {project.title}
                    </Card.Title>
                    <Card.Text>{project.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
}
