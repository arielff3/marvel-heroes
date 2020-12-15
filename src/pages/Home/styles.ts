import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
  background: var(--dark-snow, #e5e5e5);

  min-height: 100vh;
`;

export const Wrapper = styled.section`
  width: 100%;
  max-width: 1140px;
  margin: auto;
`;

export const Content = styled.div`
  padding: 24px 24px 0px 24px;
  flex: 1;
  text-align: center;

  h1 {
    font-size: 24px;
    margin-bottom: 24px;

    @media screen and (min-width: 768px) {
      text-align: left;
      font-size: 32px;
      margin-bottom: 16px;
    }
  }

  h3 {
    font-size: 14px;

    @media screen and (min-width: 768px) {
      text-align: left;
      font-size: 16px;
    }
  }
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 32px;
  border-radius: 4px;
  width: 100%;
  padding: 4px 16px;
  gap: 18px;
  background: var(--white, #ffffff);
  margin-top: 8px;

  @media screen and (min-width: 768px) {
    max-width: 295px;
  }

  input {
    flex: 1;
    height: 100%;
    border: 0;
  }

  svg {
    width: 24px;
    height: 24px;

    path {
      fill: var(--smoke, #8e8e8e);
    }
  }
`;
