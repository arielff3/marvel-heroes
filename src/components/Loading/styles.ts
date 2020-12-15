import styled, { keyframes } from 'styled-components';

const draw = keyframes`
   30% {
      fill-opacity: 0;
    }
    31% {
      fill-opacity: 1;
    }
    32% {
      fill-opacity: 0;
    }
    33% {
      fill-opacity: 1;
    }
    34% {
      fill-opacity: 0;
    }
    35% {
      fill-opacity: 1;
    }
    50% {
      stroke-dashoffset: 0;
    }
    90% {
      stroke-dashoffset: 0;
      fill-opacity: 1;
    }
`;

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  background-color: var(--dark, #202020);

  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    .iron-man_svg__eyers {
      fill: var(--white, #fff);
    }

    path {
      stroke-dashoffset: 1940;
      stroke-dasharray: 1940;
      animation: ${draw} 2s ease-in-out infinite;
      fill-opacity: 0;
    }
  }
`;
