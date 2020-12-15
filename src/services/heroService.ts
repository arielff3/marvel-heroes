import { AxiosResponse } from 'axios';
import api from './api';

interface HeroServiceImp {
  service: 'characters';
  offset?: number;
  search?: string;
  limit?: number;
}

interface GetInfoHeroImp {
  idCharacter: number;
}

interface GetInfoHeroReturn {
  info: {
    name: string;
    description: string;
    thumbnail: {
      path: string;
      extension: string;
    };
  };
  events: {
    title: string;
    description: string;
    thumbnail: {
      path: string;
      extension: string;
    };
  }[];
  comics: {
    title: string;
    description: string;
    thumbnail: {
      path: string;
      extension: string;
    };
  }[];
  series: {
    title: string;
    description: string;
    thumbnail: {
      path: string;
      extension: string;
    };
  }[];
}

export const getInfoHero = async ({
  idCharacter,
}: GetInfoHeroImp): Promise<GetInfoHeroReturn> => {
  const information = await api.get(`characters/${idCharacter}`);

  const events = await api.get(`characters/${idCharacter}/events`);

  const comics = await api.get(`characters/${idCharacter}/comics`);

  const series = await api.get(`characters/${idCharacter}/series`);
  return {
    info: information.data.data.results[0],
    comics: comics.data.data.results,
    events: events.data.data.results,
    series: series.data.data.results,
  };
};

export const heroService = async ({
  service = 'characters',
  offset = 0,
  search = '',
  limit = 10,
}: HeroServiceImp): Promise<AxiosResponse> => {
  let response;
  if (search) {
    response = await api.get(
      `/${service}?limit=${limit}&offset=${offset}&nameStartsWith=${search}`,
    );
    return response.data;
  }
  response = await api.get(`/${service}?limit=${limit}&offset=${offset}`);
  return response.data;
};
