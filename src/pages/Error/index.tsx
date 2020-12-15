import React from 'react';
import error from '@assets/error.png';
import Header from '@components/Header';
import { Link } from 'react-router-dom';
import { Container, Content } from './styles';

const Error: React.FC = () => {
  return (
    <Container>
      <Header />
      <Content>
        <img src={error} alt="error" />
        <div>
          <h2>Omg!! Ocorreu algo inesperado, por favor tente mais tarde.</h2>
          <Link to="/">Voltar ao inicio</Link>
        </div>
      </Content>
    </Container>
  );
};

export default Error;
