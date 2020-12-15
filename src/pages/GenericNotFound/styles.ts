import styled from 'styled-components';

export const Container = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;

  img {
    width: 100%;
    max-width: 380px;
  }

  div {
    padding: 0 26px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  a {
    text-decoration: none;
    font-size: 20px;
    background: var(--dark-blue, #167abc);
    padding: 10px 20px;
    margin-top: 10px;
    border-radius: 4px;
    color: var(--white, #fff);
  }
`;
