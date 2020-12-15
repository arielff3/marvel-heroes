import styled from 'styled-components';

export const List = styled.article`
  position: relative;
  color: var(--white, #ffffff);

  figure {
    height: auto;
    position: relative;
    overflow: hidden;

    @media screen and (min-width: 425px) {
      height: 250px;
    }

    &:after {
      height: 4px;
      content: '';
      background-color: #e62429;
      width: 100%;
      position: absolute;
      left: 0;
      bottom: 0;
    }

    img {
      width: 100%;
      height: 100%;
    }
  }

  div {
    overflow: hidden;
    position: relative;
    background: var(--black, #000);
    padding: 16px;
    height: auto;
    justify-content: space-between;
    display: flex;
    flex-direction: column;

    @media screen and (min-width: 425px) {
      height: 200px;
    }

    &:after {
      border-style: solid;
      border-top-color: transparent;
      border-width: 12px 12px 0 0;
      bottom: 0;
      content: '';
      position: absolute;
      right: 0;
    }

    h2,
    h3 {
      color: var(--white, #fff);
    }

    h2 {
      font-size: 16px;
    }

    h3 {
      font-size: 14px;
    }

    p {
      font-size: 12px;
    }
  }
`;

export const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;

  @media screen and (min-width: 425px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(4, 25%);
  }
`;
