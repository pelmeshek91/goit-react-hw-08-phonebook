import styled, { keyframes } from 'styled-components';
import bgImage from 'components/images/Background.svg';
import buttonImg from 'components/images/bgButtonAutorization.svg';

import { NavLink } from 'react-router-dom';

const pan = keyframes`
	100% { background-position: 15% 50%; }
`;

export const SideBar = styled.aside`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 448px;
  height: 100vh;
  left: 0px;
  top: 0px;

  color: #fff;
  background: #324a98;
  background-image: url(${bgImage});
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 0px 30px 30px 0px;
  animation: ${pan} 30s infinite alternate linear;
`;

export const Navigation = styled.div`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translate(0, -50%);
`;

export const Button = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 172px;
  height: 60px;

  color: #ffffff;
  font-weight: 600;
  font-size: 17px;
  line-height: 120%;
  letter-spacing: 0.03em;

  &.active {
    color: #1f3349;
    background-image: url(${buttonImg});
    background-repeat: no-repeat;
    background-size: cover;
  }
`;
