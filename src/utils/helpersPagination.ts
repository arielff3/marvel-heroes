const LEFT_PAGE = 'LEFT';
const RIGHT_PAGE = 'RIGHT';

const generatePaginationNumbers = (
  from: number,
  to: number,
  step = 1,
): (string | number)[] => {
  let i = from;
  const range = [];
  while (i <= to) {
    range.push(i);
    i += step;
  }
  return range;
};

export const fetchPageNumbers = ({
  currentPage,
  pageNeighbours,
  totalPages,
}: {
  currentPage: number;
  pageNeighbours: number;
  totalPages: number;
}) => {
  const totalNumbers = pageNeighbours * 2 + 3;
  const totalBlocks = totalNumbers + 2;

  if (totalPages > totalBlocks) {
    const startPage = Math.max(2, currentPage - pageNeighbours);
    const endPage = Math.min(totalPages - 1, currentPage + pageNeighbours);
    let pages = generatePaginationNumbers(startPage, endPage);

    const hasLeftSpill = startPage > 2;
    const hasRightSpill = totalPages - endPage > 1;
    const spillOffset = totalNumbers - (pages.length + 1);

    switch (true) {
      case hasLeftSpill && !hasRightSpill: {
        const extraPages = generatePaginationNumbers(
          startPage - spillOffset,
          startPage - 1,
        );
        pages = [LEFT_PAGE, ...extraPages, ...pages];
        break;
      }

      case !hasLeftSpill && hasRightSpill: {
        const extraPages = generatePaginationNumbers(
          endPage + 1,
          endPage + spillOffset,
        );
        pages = [...pages, ...extraPages, RIGHT_PAGE];
        break;
      }

      case hasLeftSpill && hasRightSpill:
      default: {
        pages = [LEFT_PAGE, ...pages, RIGHT_PAGE];
        break;
      }
    }

    return [1, ...pages, totalPages];
  }
  return generatePaginationNumbers(1, totalPages);
};
