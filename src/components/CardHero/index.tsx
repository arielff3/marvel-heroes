import React from 'react';

import { Container, List } from './styles';

interface DataImp {
  data: {
    title: string;
    description: string;
    thumbnail: {
      path: string;
      extension: string;
    };
  }[];
}

const CardHeroList: React.FC<DataImp> = ({ data }) => {
  return (
    <Container>
      {data.length ? (
        data.map((item) => (
          <List key={item.title} data-testid="card">
            <figure>
              <img
                src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                alt={item.title}
              />
            </figure>
            <div>
              <header>
                <h2>{item.title}</h2>
              </header>
              <footer>
                {item.description ? (
                  <p>{item.description.substring(0, 128)}</p>
                ) : (
                  <h3>Sem descrição</h3>
                )}
              </footer>
            </div>
          </List>
        ))
      ) : (
        <h2>Nada encontrado</h2>
      )}
    </Container>
  );
};

export default CardHeroList;
