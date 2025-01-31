import React, { useState } from 'react';
import { Card, Row, Col, Modal, Button, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faDraftingCompass, 
  faHardHat, 
  faClipboardCheck, 
  faLeaf, 
  faTools, 
  faHouseDamage,
  faListUl
} from '@fortawesome/free-solid-svg-icons';

const services = [
  {
    title: 'Projetos Arquitetônicos',
    shortDescription: 'Desenvolvimento de projetos arquitetônicos inovadores e funcionais.',
    fullDescription: `Nossa equipe especializada desenvolve projetos arquitetônicos personalizados que 
    combinam estética, funcionalidade e inovação. Atendemos diversos tipos de construções:
    • Residências unifamiliares e multifamiliares
    • Edifícios comerciais e corporativos
    • Projetos de interiores integrados
    • Paisagismo e áreas externas`,
    icon: faDraftingCompass,
    image: 'https://plus.unsplash.com/premium_photo-1681691161587-bf4f4a77fa48?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    benefits: [
      'Projetos personalizados e exclusivos',
      'Estudos de viabilidade completos',
      'Renderizações 3D realistas',
      'Acompanhamento técnico especializado'
    ]
  },
  {
    title: 'Gerenciamento de Obras',
    shortDescription: 'Coordenação completa garantindo qualidade e prazo.',
    fullDescription: `Oferecemos serviço completo de gerenciamento de obras, desde o planejamento 
    inicial até a entrega final. Nossa gestão inclui:
    • Cronograma detalhado de execução
    • Controle rigoroso de custos
    • Supervisão de equipes e fornecedores
    • Relatórios periódicos de progresso`,
    icon: faHardHat,
    image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be',
    benefits: [
      'Otimização de recursos e prazos',
      'Controle de qualidade rigoroso',
      'Gestão transparente',
      'Documentação completa'
    ]
  },
  {
    title: 'Consultoria Técnica',
    shortDescription: 'Consultoria especializada em regularização e laudos.',
    fullDescription: `Prestamos serviços de consultoria técnica abrangente para todas as fases do seu projeto:
    • Análise de viabilidade técnica
    • Regularização de imóveis
    • Laudos técnicos especializados
    • Vistorias detalhadas`,
    icon: faClipboardCheck,
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    benefits: [
      'Análise técnica aprofundada',
      'Soluções personalizadas',
      'Documentação completa',
      'Suporte contínuo'
    ]
  },
  {
    title: 'Sustentabilidade',
    shortDescription: 'Soluções sustentáveis e eficiência energética.',
    fullDescription: `Desenvolvemos projetos com foco em sustentabilidade e eficiência energética:
    • Certificações ambientais
    • Sistemas de energia renovável
    • Gestão de recursos hídricos
    • Materiais ecológicos`,
    icon: faLeaf,
    image: 'https://images.unsplash.com/photo-1598115746104-1a00ed9ca937?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    benefits: [
      'Redução de impacto ambiental',
      'Economia de recursos',
      'Certificações verdes',
      'Valorização do imóvel'
    ]
  },
  {
    title: 'Reformas e Restauros',
    shortDescription: 'Reformas e restaurações preservando a essência.',
    fullDescription: `Especialistas em reformas e restaurações que preservam a história e 
    modernizam os espaços:
    • Restauração de fachadas
    • Reformas estruturais
    • Modernização de ambientes
    • Adaptações de acessibilidade`,
    icon: faTools,
    image: 'https://images.unsplash.com/photo-1648893352445-3c056555d7ef?q=80&w=1497&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    benefits: [
      'Preservação histórica',
      'Modernização consciente',
      'Valorização do imóvel',
      'Adaptação funcional'
    ]
  },
  {
    title: 'Avaliações e Perícias',
    shortDescription: 'Avaliações imobiliárias e perícias técnicas especializadas.',
    fullDescription: `Realizamos avaliações e perícias técnicas detalhadas para diversos fins:
    • Avaliação de imóveis
    • Perícias judiciais
    • Inspeções prediais
    • Laudos técnicos`,
    icon: faHouseDamage,
    image: 'https://plus.unsplash.com/premium_photo-1681823598526-3f1c1576a30c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    benefits: [
      'Laudos detalhados',
      'Análise técnica precisa',
      'Documentação completa',
      'Suporte especializado'
    ]
  }
];

const ServiceCard = ({ service, onSelect }) => {
  return (
    <Card 
      className="h-100 shadow border-0 service-card"
      onClick={() => onSelect(service)}
      style={{ cursor: 'pointer' }}
    >
      <div className="position-relative service-image-container">
        <Card.Img 
          variant="top" 
          src={service.image} 
          alt={service.title}
          className="service-image"
        />
      </div>
      <Card.Body className="p-4">
        <Card.Title className="d-flex align-items-center mb-3">
          <FontAwesomeIcon icon={service.icon} className="me-2 text-primary" size="lg" />
          <h3 className="h5 mb-0">{service.title}</h3>
        </Card.Title>
        <Card.Text className="text-muted">{service.shortDescription}</Card.Text>
        <Button variant="outline-primary" className="w-100 mt-3">
          Saiba mais
        </Button>
      </Card.Body>
    </Card>
  );
};

const ServiceModal = ({ service, show, onHide }) => {
  if (!service) return null;
  
  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton className="border-0">
        <Modal.Title className="d-flex align-items-center">
          <FontAwesomeIcon icon={service.icon} className="me-3 text-primary" size="lg" />
          {service.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="pt-0">
        <Row>
          <Col md={6}>
            <img
              src={service.image}
              alt={service.title}
              className="img-fluid rounded mb-3"
              style={{ width: '100%', height: '300px', objectFit: 'cover' }}
            />
          </Col>
          <Col md={6}>
            <p className="text-muted mb-4">{service.fullDescription}</p>
            <h5 className="d-flex align-items-center mb-3">
              <FontAwesomeIcon icon={faListUl} className="me-2 text-primary" />
              Benefícios
            </h5>
            <ul className="list-unstyled">
              {service.benefits.map((benefit, index) => (
                <li key={index} className="mb-2 d-flex align-items-start">
                  <span className="text-primary me-2">•</span>
                  {benefit}
                </li>
              ))}
            </ul>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
};

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleServiceSelect = (service) => {
    setSelectedService(service);
    setShowModal(true);
  };

  return (
    <section className="py-5 bg-light">
      <Container>
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold mb-3">Nossos Serviços</h2>
          <p className="text-muted lead mb-0 mx-auto" style={{ maxWidth: '700px' }}>
            Oferecemos soluções completas em arquitetura e engenharia, 
            com foco em qualidade, inovação e sustentabilidade.
          </p>
        </div>
        
        <Row className="g-4">
          {services.map((service, index) => (
            <Col md={6} lg={4} key={index}>
              <ServiceCard 
                service={service} 
                onSelect={handleServiceSelect}
              />
            </Col>
          ))}
        </Row>

        <ServiceModal
          service={selectedService}
          show={showModal}
          onHide={() => setShowModal(false)}
        />
      </Container>

      <style>{`
        .service-card {
          transition: transform 0.2s ease-in-out;
        }
        
        .service-card:hover {
          transform: translateY(-5px);
        }
        
        .service-image-container {
          height: 200px;
          overflow: hidden;
        }
        
        .service-image {
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease-in-out;
        }
        
        .service-card:hover .service-image {
          transform: scale(1.05);
        }
      `}</style>
    </section>
  );
}