import styled, { keyframes } from 'styled-components';

const slide = keyframes`
   0% {
    transform: translatex(0);
  }
  100% {
    transform: translatex(30px);
  }
`;
const slideOut = keyframes`
   0% {
    transform: translatex(30px);
  }
  100% {
    transform: translatex(0);
  }
`;

export const MobileList = styled.ul`
  display: none;
  padding: 32px 24px;

  @media screen and (max-width: 767px) {
    display: block;
  }

  p {
    font-size: 12px;
    color: var(--smoke, #8e8e8e);
    margin-bottom: 9.16px;
    padding-left: 95px;
  }

  li {
    list-style: none;
    background: var(--white, #ffffff);
    border-radius: 4px;
    box-shadow: 0px 0px 5px 2px #00000033;
    height: 72px;

    a {
      text-decoration: none;
      width: 100%;
      padding: 0 24px;
      height: 100%;
      border: 0;
      display: flex;
      align-items: center;
      gap: 24px;
      background: transparent;
    }

    & + li {
      margin-top: 8px;
    }

    h3 {
      font-size: 14px;
    }
  }

  img {
    width: 48px;
    height: 48px;
    border-radius: 4px;
  }
`;

export const DesktopTable = styled.table`
  display: none;
  list-style: none;
  padding: 24px;
  background: var(--dark-snow, #e5e5e5);
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 8px;

  @media screen and (min-width: 768px) {
    display: table;
  }

  th {
    font-family: 'PT Sans', sans-serif;
    font-weight: 400;
    font-size: 12px;
    text-align: left;
    color: var(--smoke, #8e8e8e);
  }

  tbody {
    tr {
      background: var(--white, #ffffff);
      border-radius: 4px;
      box-shadow: 0px 0px 5px 2px #00000033;
      height: 88px;
      cursor: pointer;
      animation: ${slideOut} 0.3s;
      transition: all 0.3s;

      &:hover {
        background: #00000033;
        animation: ${slide} 0.3s both;
      }
    }
  }

  th,
  td {
    padding: 0 24px;
  }

  td {
    div {
      display: flex;
      align-items: center;
      gap: 24px;
    }
  }

  td {
    ul {
      list-style: none;

      li {
        font-family: 'PT Sans', sans-serif;
        font-size: 14px;
        color: var(--dark-smoke);
      }
    }
  }

  img {
    width: 48px;
    height: 48px;
    border-radius: 4px;
  }

  h3 {
    font-size: 16px;
    color: var(--dark-smoke, #555555);
  }
`;

export const Empty = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 24px;

  img {
    max-width: 400px;
    width: 100%;
  }
`;
