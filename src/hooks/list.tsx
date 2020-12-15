import { heroService } from '@services/heroService';
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { useHistory } from 'react-router-dom';

interface HeroListImp {
  name: string;
  id: number;
  thumbnail: {
    path: string;
    extension: string;
  };
  series: {
    items: {
      name: string;
    }[];
  };
  events: {
    items: {
      name: string;
    }[];
  };
}

interface PaginationImp {
  count: number;
  totalItems: number;
  totalPages: number;
}

interface ListContextData {
  list: HeroListImp[];
  getListCharacters(): void;
  handlePage({ offset }: { offset: number }): void;
  handleSearch({ search }: { search: string }): void;
  pagination: PaginationImp;
  isLoading: boolean;
  isSearch: boolean;
}

const ListContext = createContext<ListContextData>({} as ListContextData);

const ListProvider: React.FC = ({ children }) => {
  const [list, setList] = useState<HeroListImp[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSearch, setIsSearch] = useState(false);
  const history = useHistory();
  const [pagination, setPagination] = useState<PaginationImp>(
    {} as PaginationImp,
  );

  const getListCharacters = useCallback(async (): Promise<void> => {
    try {
      setIsLoading(true);
      const response = await heroService({ service: 'characters' });
      const { count, total, results } = response.data;
      const calculationTotalPages = total / count;
      const totalPages = Math.ceil(calculationTotalPages);
      setList(results);
      setPagination({ count, totalItems: total, totalPages });
      setIsLoading(false);
    } catch (error) {
      history.push('/error');
    }
  }, [history]);

  useEffect(() => {
    getListCharacters();
  }, [getListCharacters]);

  const handlePage = useCallback(
    async ({ offset }: { offset: number }): Promise<void> => {
      try {
        setIsLoading(true);
        const response = await heroService({ service: 'characters', offset });
        const { results } = response.data;
        setList(results);
        setIsLoading(false);
      } catch (error) {
        history.push('/error');
      }
    },
    [history],
  );

  const handleSearch = useCallback(
    async ({ search }: { search: string }): Promise<void> => {
      try {
        setIsLoading(true);
        const response = await heroService({
          service: 'characters',
          search,
          limit: 100,
        });
        const { results } = response.data;
        setList(results);
        setIsSearch(true);
        setIsLoading(false);
      } catch (error) {
        history.push('/error');
      }
    },
    [history],
  );

  return (
    <ListContext.Provider
      value={{
        list,
        getListCharacters,
        pagination,
        handlePage,
        handleSearch,
        isLoading,
        isSearch,
      }}
    >
      {children}
    </ListContext.Provider>
  );
};

export const useList = (): ListContextData => {
  const context = useContext(ListContext);
  if (!context) {
    throw new Error('useList must be user within an ListProvider');
  }
  return context;
};

export default ListProvider;
