import React from 'react';
import { render } from '@testing-library/react';

import List from '@components/List';

const listmock = [
  {
    name: 'Test List',
    id: 1,
    thumbnail: {
      path: 'path',
      extension: 'jpg',
    },
    series: {
      items: [
        {
          name: 'Serie 1',
        },
      ],
    },
    events: {
      items: [
        {
          name: 'Event 1',
        },
      ],
    },
  },
  {
    name: 'Test List',
    id: 2,
    thumbnail: {
      path: 'path',
      extension: 'jpg',
    },
    series: {
      items: [],
    },
    events: {
      items: [],
    },
  },
];

const mockedHistoryPush = jest.fn();
jest.mock('react-router-dom', () => {
  return {
    useHistory: () => ({
      push: mockedHistoryPush,
    }),
    Link: ({ children }: { children: React.ReactNode }) => children,
  };
});

jest.mock('@hooks/list', () => {
  return {
    useList: () => ({
      list: listmock,
    }),
  };
});

describe('List Component', () => {
  it('should be able to render List', () => {
    const { getAllByTestId } = render(<List />);
    const listItems = getAllByTestId('list');
    expect(listItems.length).not.toEqual(0);
  });
});
