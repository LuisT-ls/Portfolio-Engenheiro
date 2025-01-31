import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeContent from './components/HomeContent'
import Projects from './components/Projects'
import Services from './components/Services'
import Contact from './components/Contact'
import NotFound from './components/NotFound'
import { Container } from 'react-bootstrap'

function App() {
  return (
    <Router>
      <Header />
      <Container className="main-content py-4">
        <Routes>
          <Route path="/" element={<HomeContent />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  )
}

export default App
