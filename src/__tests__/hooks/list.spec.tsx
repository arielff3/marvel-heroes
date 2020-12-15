import { renderHook } from '@testing-library/react-hooks';
import ListProvider, { useList } from '@hooks/list';

const results = [
  {
    id: 1011334,
    name: '3-D Man',
    description: '',
    thumbnail: { path: 'url', extension: 'jpg' },
  },
];

jest.mock('@services/heroService', () => {
  return {
    heroService: () => ({
      data: {
        count: 10,
        total: 10,
        results,
      },
    }),
  };
});

describe('List hook', () => {
  it('should be able the list of all characters', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useList(), {
      wrapper: ListProvider,
    });
    result.current.getListCharacters();
    await waitForNextUpdate();
    expect(result.current.list.length).not.toEqual(0);
  });

  it('should be able to get information the pagination', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useList(), {
      wrapper: ListProvider,
    });
    result.current.getListCharacters();
    await waitForNextUpdate();

    expect(result.current.pagination).toHaveProperty('count', 10);
    expect(result.current.pagination).toHaveProperty('totalItems', 10);
    expect(result.current.pagination).toHaveProperty('totalPages', 1);
  });

  it('should be able to set new page in list', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useList(), {
      wrapper: ListProvider,
    });
    result.current.handlePage({ offset: 1 });
    const initialList = result.current.list;

    await waitForNextUpdate();
    expect(result.current.list).not.toEqual(initialList);
  });

  it('should be able to search in list', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useList(), {
      wrapper: ListProvider,
    });
    result.current.handleSearch({ search: 'Wolverine' });
    const initialList = result.current.list;

    await waitForNextUpdate();
    expect(result.current.list).not.toEqual(initialList);
  });
});
