import React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react';
import Search from '@components/Search';

const mockedHandleSearch = jest.fn();
const mockedgetListCharacters = jest.fn();

jest.mock('react-router-dom');
jest.mock('@hooks/list', () => {
  return {
    useList: () => ({
      handleSearch: mockedHandleSearch,
      getListCharacters: mockedgetListCharacters,
    }),
  };
});

describe('Search', () => {
  it('should be able set new value in input', async () => {
    const { getByPlaceholderText } = render(<Search />);
    const input = getByPlaceholderText('Search');
    const oltValue = input.textContent;
    fireEvent.change(input, { target: { value: '123' } });
    await waitFor(() => {
      expect(mockedHandleSearch).not.toEqual(oltValue);
    });
  });
});
