import React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react';

import Pagination from '@components/Pagination';

const mockedHandlePage = jest.fn();

jest.mock('react-router-dom');
jest.mock('@hooks/list', () => {
  return {
    useList: () => ({
      pagination: {
        totalPages: 150,
      },
      handlePage: mockedHandlePage,
    }),
  };
});

jest.mock('@utils/helpersPagination', () => {
  return {
    fetchPageNumbers: () => ['LEFT', 'RIGHT', 1],
  };
});

describe('Pagination Component', () => {
  it('should be able to render Pagination', () => {
    const { getAllByTestId } = render(<Pagination />);
    const listItems = getAllByTestId('list');
    expect(listItems.length).not.toEqual(0);
  });

  it('should be able the back left', async () => {
    const { getByTestId } = render(<Pagination />);
    const buttonPrevious = getByTestId('Previous');
    const buttonNext = getByTestId('Next');
    const buttonCurent = getByTestId('current');
    fireEvent.click(buttonPrevious);
    fireEvent.click(buttonNext);
    fireEvent.click(buttonCurent);
    await waitFor(() => {
      expect(mockedHandlePage).toHaveBeenCalled();
    });
  });
});
