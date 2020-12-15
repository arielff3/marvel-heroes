import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 10px 24px;
  background: var(--white, #fff);
  align-items: center;

  img {
    width: 100%;
    max-width: 96px;
    height: 24px;
  }
`;

export const Info = styled.section`
  display: flex;
  align-items: center;

  div {
    margin-right: 15px;
    text-align: right;

    h4,
    p {
      font-size: 16px;
    }

    p {
      color: var(--dark-smoke, #000);
    }

    h2 {
      font-size: 20px;
    }
  }
`;
