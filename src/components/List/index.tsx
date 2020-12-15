import React from 'react';
import { useList } from '@hooks/list';
import { Link, useHistory } from 'react-router-dom';
import Loading from '@components/Loading';
import emptyIcon from '@assets/empty.png';
import { DesktopTable, MobileList, Empty } from './styles';

const List: React.FC = () => {
  const { list, isLoading } = useList();
  const history = useHistory();

  if (isLoading) {
    return <Loading />;
  }

  if (!list.length) {
    return (
      <Empty>
        <img src={emptyIcon} alt="emptyIcon" />
        <h2>Nada encontrado</h2>
      </Empty>
    );
  }

  return (
    <>
      <MobileList>
        <p>Personagens</p>
        {list.length &&
          list.map((person) => (
            <li data-testid="list" key={person.id}>
              <Link to={`/detalhes/${person.id}`}>
                <img
                  src={`${person.thumbnail.path}.${person.thumbnail.extension}`}
                  alt={person.name}
                />
                <h3>{person.name}</h3>
              </Link>
            </li>
          ))}
      </MobileList>
      <DesktopTable>
        <thead>
          <tr>
            <th>Personagem</th>
            <th>Séries</th>
            <th>Eventos</th>
          </tr>
        </thead>
        <tbody>
          {list.length &&
            list.map((person) => (
              <React.Fragment key={person.id}>
                <tr
                  data-testid="list"
                  onClick={() => history.push(`/detalhes/${person.id}`)}
                >
                  <td>
                    <div>
                      <img
                        src={`${person.thumbnail.path}.${person.thumbnail.extension}`}
                        alt={person.name}
                      />
                      <h3>{person.name}</h3>
                    </div>
                  </td>
                  <td>
                    <ul>
                      {person.series.items.length ? (
                        person.series.items
                          .slice(0, 3)
                          .map((serie) => (
                            <li key={serie.name}>{serie.name}</li>
                          ))
                      ) : (
                        <li>Nenhum série encontrada</li>
                      )}
                    </ul>
                  </td>
                  <td>
                    <ul>
                      {person.events.items.length ? (
                        person.events.items
                          .slice(0, 3)
                          .map((event) => (
                            <li key={event.name}>{event.name}</li>
                          ))
                      ) : (
                        <li>Nenhum evento encontrado</li>
                      )}
                    </ul>
                  </td>
                </tr>
              </React.Fragment>
            ))}
        </tbody>
      </DesktopTable>
    </>
  );
};

export default List;
