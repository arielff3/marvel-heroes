import { heroService, getInfoHero } from '@services/heroService';
import api from '@services/api';
import MockAdapter from 'axios-mock-adapter';

const apiMock = new MockAdapter(api, { onNoMatch: 'passthrough' });

describe('Hero Service', () => {
  it('should be able to make a call', async () => {
    const listCharacters = {
      count: 10,
      limit: 10,
      offset: 0,
      results: [{ id: 1011334, name: '3-D Man', description: '' }],
      total: 1493,
    };
    apiMock.onGet('/characters').reply(200, listCharacters);
    const response = await heroService({ service: 'characters' });
    expect(response).toBeTruthy();
  });

  it('should be able to make a call with search', async () => {
    const listCharacters = {
      count: 10,
      limit: 10,
      offset: 0,
      results: [{ id: 1011334, name: 'Wolverine', description: '' }],
      total: 1493,
    };
    apiMock.onGet('/characters').reply(200, listCharacters);
    const response = await heroService({
      service: 'characters',
      search: 'Wolverine',
    });
    expect(response).toBeTruthy();
  });

  it('should be able to pick up details of a hero ', async () => {
    const response = [
      {
        title: 'Ariel',
        description: 'Super Dev',
        thumbnail: {
          path: 'path',
          extension: 'jpg',
        },
      },
    ];

    apiMock.onGet('/characters/1010908/events').reply(200, response);
    apiMock.onGet('/characters/1010908/comics').reply(200, response);
    apiMock.onGet('/characters/1010908/series').reply(200, response);
    apiMock.onGet('/characters/1010908').reply(200, response);

    const { comics, events, series, info } = await getInfoHero({
      idCharacter: 1010903,
    });

    expect(comics).toBeTruthy();
    expect(events).toBeTruthy();
    expect(series).toBeTruthy();
    expect(info).toBeTruthy();
  });
});
