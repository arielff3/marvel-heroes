import CardHeroList from '@components/CardHero';
import Header from '@components/Header';
import Loading from '@components/Loading';
import { useList } from '@hooks/list';
import { getInfoHero } from '@services/heroService';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Container, BgFull, TitleList, Wrapper } from './styles';

interface EventsListImp {
  title: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
}

interface ComicsListImp {
  title: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
}

interface SeriesListImp {
  title: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
}

const Details: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { isLoading } = useList();
  const history = useHistory();
  const [loading, setLoading] = useState(true);
  const [heroInfo, setHeroInfo] = useState({
    name: '',
    description: '',
    image: '',
  });

  const [eventsCharacters, setEventsCharacters] = useState<EventsListImp[]>([]);
  const [comicsCharacters, setComicsCharacters] = useState<ComicsListImp[]>([]);
  const [seriesCharacters, setSeriesCharacters] = useState<SeriesListImp[]>([]);

  useEffect(() => {
    const loadInfos = async (): Promise<void> => {
      try {
        const { info, events, comics, series } = await getInfoHero({
          idCharacter: +id,
        });
        setHeroInfo({
          name: info.name,
          description: info.description,
          image: `${info.thumbnail.path}.${info.thumbnail.extension}`,
        });
        setEventsCharacters(events);
        setComicsCharacters(comics);
        setSeriesCharacters(series);
        setLoading(false);
      } catch (error) {
        history.push('/');
      }
    };
    loadInfos();
  }, [id, history]);

  if (isLoading || loading) {
    return <Loading />;
  }

  return (
    <Container>
      <Header />
      <BgFull>
        <img src={heroInfo.image} alt={heroInfo.name} />
        <div>
          <h1>{heroInfo.name}</h1>
          <p>{heroInfo.description}</p>
        </div>
      </BgFull>
      <Wrapper>
        <TitleList>Eventos</TitleList>
        <CardHeroList data={eventsCharacters} />
        <TitleList>Histórias em quadrinhos</TitleList>
        <CardHeroList data={comicsCharacters} />
        <TitleList>Séries</TitleList>
        <CardHeroList data={seriesCharacters} />
      </Wrapper>
    </Container>
  );
};

export default Details;
