import React from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHardHat, 
  faHome, 
  faArrowLeft,
  faExclamationTriangle 
} from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <Container className="min-vh-100 d-flex align-items-center justify-content-center py-5">
      <Row className="w-100 justify-content-center">
        <Col md={8} lg={6}>
          <div className="text-center mb-4">
            <FontAwesomeIcon 
              icon={faHardHat} 
              className="text-primary mb-3"
              style={{ fontSize: '4rem' }}
            />
            <div className="position-relative d-inline-block">
              <h1 className="display-1 fw-bold text-primary mb-0">404</h1>
              <FontAwesomeIcon 
                icon={faExclamationTriangle}
                className="text-warning position-absolute"
                style={{ 
                  top: '-10px', 
                  right: '-30px',
                  fontSize: '2rem'
                }}
              />
            </div>
          </div>

          <div className="text-center mb-5">
            <h2 className="mb-4">Área em Construção!</h2>
            <p className="lead text-muted mb-4">
              Parece que você tentou acessar uma área que ainda está em desenvolvimento 
              ou foi movida para outro local. Não se preocupe, nosso time de engenharia 
              está trabalhando nisso!
            </p>
            <div className="border-top border-bottom py-4 mb-4">
              <div className="d-flex justify-content-center align-items-center gap-2">
                <FontAwesomeIcon icon={faExclamationTriangle} className="text-warning" />
                <span className="text-muted">
                  URL não encontrada em nosso projeto
                </span>
              </div>
            </div>
          </div>

          <div className="d-flex flex-column flex-md-row gap-3 justify-content-center">
            <Button 
              variant="primary" 
              size="lg"
              className="d-flex align-items-center justify-content-center gap-2"
              onClick={() => navigate('/')}
            >
              <FontAwesomeIcon icon={faHome} />
              Voltar ao Início
            </Button>
            <Button 
              variant="outline-secondary" 
              size="lg"
              className="d-flex align-items-center justify-content-center gap-2"
              onClick={() => navigate(-1)}
            >
              <FontAwesomeIcon icon={faArrowLeft} />
              Página Anterior
            </Button>
          </div>

          <div className="text-center mt-5">
            <small className="text-muted">
              Se você acredita que isso é um erro, por favor entre em 
              <Button 
                variant="link" 
                className="p-0 ms-1"
                onClick={() => navigate('/contato')}
              >
                contato conosco
              </Button>.
            </small>
          </div>
        </Col>
      </Row>
    </Container>
  );
}