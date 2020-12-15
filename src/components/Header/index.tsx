import React from 'react';

import logo from '@assets/logo.png';

import { Container, Info } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <img src={logo} alt="logo" />
      <Info>
        <div>
          <h4>Ariel F. Ferreira</h4>
          <p>Teste de Front-end</p>
        </div>
        <h2>AF</h2>
      </Info>
    </Container>
  );
};

export default Header;
