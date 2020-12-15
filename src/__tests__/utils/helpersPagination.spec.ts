import { fetchPageNumbers } from '@utils/helpersPagination';

describe('List hook', () => {
  it('should be able the list of pages', () => {
    const pages = fetchPageNumbers({
      currentPage: 1,
      pageNeighbours: 2,
      totalPages: 20,
    });
    const expected = [1, 2, 3, 4, 5, 6, 7, 'RIGHT', 20];
    expect(pages).toEqual(expected);
  });

  it('should be able to mount a return [LEFT_PAGE, PAGES, RIGHT_PAGE]', () => {
    const pages = fetchPageNumbers({
      currentPage: 5,
      pageNeighbours: 2,
      totalPages: 10,
    });
    const expected = [1, 'LEFT', 3, 4, 5, 6, 7, 'RIGHT', 10];
    expect(pages).toEqual(expected);
  });

  it('should be able to mount a return [LEFT_PAGE, EXTRAPAGES, PAGES]', () => {
    const pages = fetchPageNumbers({
      currentPage: 10,
      pageNeighbours: 2,
      totalPages: 10,
    });
    const expected = [1, 'LEFT', 4, 5, 6, 7, 8, 9, 10];
    expect(pages).toEqual(expected);
  });

  it('when the total number of pages is less than the total number of blocks, the page calculation should be returned Neighbors * 2 + 3', () => {
    const pages = fetchPageNumbers({
      currentPage: 1,
      pageNeighbours: 2,
      totalPages: 1,
    });
    const expected = [1];
    expect(pages).toEqual(expected);
  });
});
