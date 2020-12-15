import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  padding: 24px 0;
  background: var(--white);

  ul {
    display: flex;
    align-items: center;
    list-style: none;
    max-width: 314px;
    margin: auto;
    justify-content: space-evenly;

    .active {
      background: var(--dark-blue, #167abc);
      border: 1px solid var(--dark-blue, #167abc);

      button {
        color: var(--white, #ffffff);
      }
    }

    button {
      background: transparent;
      border: 0;
      width: 32px;
      height: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 4px;
    }
  }
`;
