import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import crash from './crash.png';
import planet from './planet.png';

interface LoadingProps {
  isLoading: boolean;
}

const bomb = keyframes`
  from {
    top: 10%;
    left: 5%;
    animation-timing-function: cubic-bezier(1, 0, 0.6, 0.7);
  }
  80% {
    opacity: 1;
  }
  to {
    top: 35%;
    left: 25%;
    opacity: 0;
  }
`;

const BackGround = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  backdrop-filter: blur(3px);
  min-height: 100vh;
  max-width: 425px;
  margin: auto;
  z-index: 7777;
`;

const Planet = styled.img`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  margin: auto;
  width: 300px;
`;

const Crash = styled.img`
  position: absolute;
  transform: rotate(15deg);
  animation: ${bomb} 1.5s infinite;
`;

const Loading = ({ isLoading }: LoadingProps) => {
  return isLoading ? (
    <BackGround>
      <Planet src={planet} />
      <Crash src={crash} />
    </BackGround>
  ) : null;
};

export default Loading;
