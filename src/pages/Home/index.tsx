import React from 'react';
import Header from '@components/Header';
import SearchIcon from '@assets/search.svg';

import List from '@components/List';
import Pagination from '@components/Pagination';
import Search from '@components/Search';
import { useList } from '@hooks/list';
import { Container, Content, InputContainer, Wrapper } from './styles';

const Home: React.FC = () => {
  const { isSearch } = useList();
  return (
    <Container>
      <Header />
      <Wrapper>
        <Content>
          <h1>Busca de personagens</h1>
          <h3>Nome do personagem</h3>
          <InputContainer>
            <Search />
            <SearchIcon />
          </InputContainer>
        </Content>
        <List />
      </Wrapper>
      {!isSearch && <Pagination />}
    </Container>
  );
};

export default Home;
