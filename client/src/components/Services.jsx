import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDraftingCompass, faHardHat, faClipboardCheck, faLeaf, faTools, faHouseDamage } from '@fortawesome/free-solid-svg-icons';

const services = [
  {
    title: 'Projetos Arquitetônicos',
    description: 'Desenvolvimento de projetos arquitetônicos inovadores e funcionais para residências e edifícios.',
    icon: faDraftingCompass,
    image: 'https://plus.unsplash.com/premium_photo-1681691161587-bf4f4a77fa48?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    title: 'Gerenciamento de Obras',
    description: 'Coordenação completa de obras, garantindo qualidade, prazo e controle de custos.',
    icon: faHardHat,
    image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be'
  },
  {
    title: 'Consultoria Técnica',
    description: 'Consultoria especializada para regularização de imóveis, laudos técnicos e vistorias.',
    icon: faClipboardCheck,
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    title: 'Sustentabilidade',
    description: 'Soluções sustentáveis e projetos de eficiência energética para construções ecologicamente corretas.',
    icon: faLeaf,
    image: 'https://images.unsplash.com/photo-1598115746104-1a00ed9ca937?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    title: 'Reformas e Restauros',
    description: 'Reformas e restaurações de edificações, garantindo a preservação e modernização dos espaços.',
    icon: faTools,
    image: 'https://images.unsplash.com/photo-1648893352445-3c056555d7ef?q=80&w=1497&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    title: 'Avaliações e Perícias',
    description: 'Avaliações imobiliárias e perícias técnicas para diversos tipos de edificações.',
    icon: faHouseDamage,
    image: 'https://plus.unsplash.com/premium_photo-1681823598526-3f1c1576a30c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  }
];

export default function Services() {
  return (
    <div className="services-content">
      <Card className="shadow-lg border-0 my-5">
        <Card.Body className="p-5">
          <h2 className="text-center mb-5">Nossos Serviços</h2>
          <Row className="g-4">
            {services.map((service, index) => (
              <Col md={4} key={index}>
                <Card className="h-100 shadow-sm border-0">
                  <Card.Img variant="top" src={service.image} alt={service.title} />
                  <Card.Body>
                    <Card.Title className="d-flex align-items-center">
                      <FontAwesomeIcon icon={service.icon} className="me-2 text-primary" />
                      {service.title}
                    </Card.Title>
                    <Card.Text>{service.description}</Card.Text>
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
