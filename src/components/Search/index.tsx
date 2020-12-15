import { useDebounce } from '@utils/debounce';
import { useList } from '@hooks/list';
import React, { useEffect, useState } from 'react';

const Search: React.FC = () => {
  const [searchValue, setSearchValue] = useState('');
  const { handleSearch, getListCharacters } = useList();

  const debouncedSearchTerm = useDebounce(searchValue, 1000);

  useEffect(() => {
    if (debouncedSearchTerm) {
      handleSearch({ search: debouncedSearchTerm });
    } else {
      getListCharacters();
    }
  }, [debouncedSearchTerm, handleSearch, getListCharacters]);

  return (
    <input
      type="text"
      value={searchValue}
      onChange={(event) => setSearchValue(event.target.value)}
      placeholder="Search"
      name="search-character"
    />
  );
};

export default Search;
