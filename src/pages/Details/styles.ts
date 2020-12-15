import styled from 'styled-components';

export const Container = styled.section`
  background: var(--smoke, #eeee);
`;

export const Wrapper = styled.section`
  width: 100%;
  max-width: 1140px;
  margin: auto;
  padding: 26px;
`;

export const BgFull = styled.section`
  background-color: var(--dark, #202020);
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    clip-path: polygon(0 0, 100% 0%, 100% 90%, 0% 100%);
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 16px;
    @media screen and (min-width: 768px) {
      padding: 0 60px;
    }

    h1 {
      font-size: 35px;

      @media screen and (min-width: 425px) {
        font-size: 50px;
      }
    }

    h1,
    p {
      color: var(--white, #fff);
    }
  }

  img {
    width: 100%;
    height: auto;
    @media screen and (min-width: 768px) {
      max-width: 400px;
    }
  }
`;

export const TitleList = styled.h2`
  font-size: 26px;
  color: var(--dark, #202020);
  padding: 20px 0;
`;
