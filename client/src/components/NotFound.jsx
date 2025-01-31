import { Alert } from 'react-bootstrap';

export default function Componente() {
  return (
    <Alert variant="danger" className="mt-4">
      <Alert.Heading>Página Não Encontrada!</Alert.Heading>
      <p>A URL solicitada não existe neste portfólio.</p>
    </Alert>
  );
}