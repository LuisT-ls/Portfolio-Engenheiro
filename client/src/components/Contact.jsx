import React, { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMapMarkerAlt, faFileAlt } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs.sendForm(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      form.current,
      'YOUR_PUBLIC_KEY'
    )
    .then(() => {
      toast.success('Mensagem enviada com sucesso!');
      form.current.reset();
    })
    .catch(() => {
      toast.error('Erro ao enviar mensagem. Tente novamente.');
    })
    .finally(() => {
      setIsSending(false);
    });
  };

  return (
    <section id="contact" className="min-vh-100 bg-dark py-5">
      <div className="container">
        <h2 className="text-center text-white mb-5 animate-fade-in">
          <span className="border-bottom border-3 border-primary">Contato Técnico</span>
        </h2>
        
        <div className="row g-4">
          {/* Formulário de Contato Aprimorado */}
          <div className="col-lg-7 mb-4">
            <div className="card shadow-lg border-0 glassmorphism-effect">
              <div className="card-body p-4">
                <h3 className="card-title text-center mb-4 text-primary fw-bold">
                  Solicite uma Proposta Técnica
                </h3>
                <form ref={form} onSubmit={sendEmail}>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <div className="form-group mb-3">
                        <label className="form-label text-secondary">Nome Completo</label>
                        <input 
                          type="text" 
                          name="user_name"
                          className="form-control bg-light" 
                          placeholder="Ex: João Silva"
                          required 
                          pattern="[A-Za-zÀ-ú\s]{5,50}"
                        />
                      </div>
                    </div>
                    
                    <div className="col-md-6">
                      <div className="form-group mb-3">
                        <label className="form-label text-secondary">Email Profissional</label>
                        <input 
                          type="email" 
                          name="user_email"
                          className="form-control bg-light" 
                          placeholder="exemplo@empresa.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-group mb-3">
                        <label className="form-label text-secondary">Tipo de Projeto</label>
                        <select 
                          name="project_type"
                          className="form-select bg-light"
                          required
                        >
                          <option value="">Selecione...</option>
                          <option>Engenharia Civil</option>
                          <option>Engenharia Elétrica</option>
                          <option>Consultoria Técnica</option>
                          <option>Projeto Industrial</option>
                          <option>Outro</option>
                        </select>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-group mb-3">
                        <label className="form-label text-secondary">Prazo Estimado</label>
                        <input 
                          type="date" 
                          name="deadline"
                          className="form-control bg-light"
                          min={new Date().toISOString().split('T')[0]}
                          required
                        />
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="form-group mb-3">
                        <label className="form-label text-secondary">Detalhes do Projeto</label>
                        <textarea 
                          name="message"
                          className="form-control bg-light" 
                          rows="6" 
                          placeholder="Descreva os requisitos técnicos, especificações e objetivos do projeto..."
                          required
                          minLength="50"
                        ></textarea>
                      </div>
                    </div>

                    <div className="col-12">
                      <button 
                        type="submit" 
                        className="btn btn-primary w-100 py-3 fw-bold"
                        disabled={isSending}
                      >
                        {isSending ? 'Enviando...' : 'Solicitar Análise Técnica'}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* Informações Técnicas e Contato */}
          <div className="col-lg-5">
            <div className="card shadow-lg border-0 glassmorphism-effect mb-4">
              <div className="card-body p-4">
                <h3 className="card-title text-center mb-4 text-primary fw-bold">
                  Credenciais Técnicas
                </h3>
                <ul className="list-unstyled">
                  <li className="d-flex align-items-center mb-3">
                    <FontAwesomeIcon icon={faFileAlt} className="text-primary me-3 fs-4" />
                    <div>
                      <h5 className="mb-0">Certificações</h5>
                      <p className="mb-0 text-muted">CREA-SP 123456</p>
                      <p className="mb-0 text-muted">PMP, LEED GA</p>
                    </div>
                  </li>
                  <li className="d-flex align-items-center mb-3">
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="text-primary me-3 fs-4" />
                    <div>
                      <h5 className="mb-0">Escritório Principal</h5>
                      <p className="mb-0 text-muted">Av. Paulista, 1000</p>
                      <p className="mb-0 text-muted">São Paulo - SP</p>
                      <a 
                        href="https://maps.app.goo.gl/..." 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-decoration-none"
                      >
                        Ver no mapa →
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contato Rápido */}
            <div className="card shadow-lg border-0 glassmorphism-effect">
              <div className="card-body p-4">
                <h3 className="card-title text-center mb-4 text-primary fw-bold">
                  Contato Direto
                </h3>
                <div className="d-grid gap-3">
                  <a 
                    href="mailto:contato@engjoaosilva.com.br" 
                    className="btn btn-outline-primary d-flex align-items-center justify-content-start"
                  >
                    <FontAwesomeIcon icon={faEnvelope} className="me-3" />
                    contato@engjoaosilva.com.br
                  </a>
                  
                  <a 
                    href="https://wa.me/5511999999999" 
                    className="btn btn-outline-success d-flex align-items-center justify-content-start"
                  >
                    <FontAwesomeIcon icon={faWhatsapp} className="me-3" />
                    +55 (11) 99999-9999
                  </a>

                  <div className="text-center mt-3">
                    <h5 className="mb-3">Conecte-se Profissionalmente</h5>
                    <div className="d-flex justify-content-center gap-3">
                      <a 
                        href="https://linkedin.com/in/engjoaosilva" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn btn-linkedin btn-lg rounded-circle"
                      >
                        <FontAwesomeIcon icon={faLinkedin} />
                      </a>
                      <a 
                        href="https://instagram.com/engjoaosilva" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn btn-dark btn-lg rounded-circle"
                      >
                        <FontAwesomeIcon icon={faInstagram} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <ToastContainer position="bottom-right" autoClose={5000} />
      </div>
    </section>
  );
};

export default Contact;