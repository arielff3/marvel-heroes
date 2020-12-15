import React from 'react';
import notFound from '@assets/notFound.png';
import Header from '@components/Header';
import { Link } from 'react-router-dom';
import { Container, Content } from './styles';

const GenericNotFound: React.FC = () => {
  return (
    <Container>
      <Header />
      <Content>
        <img src={notFound} alt="notFound" />
        <div>
          <h2>Não encontramos nada por aqui</h2>
          <Link to="/">Voltar ao inicio</Link>
        </div>
      </Content>
    </Container>
  );
};

export default GenericNotFound;
