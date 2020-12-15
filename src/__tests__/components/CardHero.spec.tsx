import React from 'react';
import { render } from '@testing-library/react';

import CardHero from '@components/CardHero';

describe('CardHero Component', () => {
  it('should be able to render CardHero', () => {
    const prop = {
      data: [
        {
          title: 'Ariel',
          description: 'Super Dev',
          thumbnail: {
            path: 'path',
            extension: 'jpg',
          },
        },
        {
          title: 'Ariel 2',
          description: '',
          thumbnail: {
            path: 'path',
            extension: 'jpg',
          },
        },
      ],
    };
    const { getAllByTestId } = render(<CardHero {...prop} />);

    const card = getAllByTestId('card');

    expect(card.length).not.toEqual(0);
  });
});

export {};
