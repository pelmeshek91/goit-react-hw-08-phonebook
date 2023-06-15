import styled from 'styled-components';
import imgBgNavBar from 'components/images/bgNavBar.png';
import buttonImg from 'components/images/bgButtonAutorization.svg';

import { NavLink } from 'react-router-dom';

export const SideBar = styled.aside`
  display: flex;
  position: fixed;
  flex-direction: column;
  width: 236px;
  height: 100vh;
  left: 0px;
  top: 0px;

  color: #fff;
  background: #324a98;
  background-image: url(${imgBgNavBar});
  background-size: cover;
  border-radius: 0px 30px 30px 0px;
`;

export const Nav = styled.div`
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

export const Exit = styled(NavLink)`
  padding-left: 43px;
  height: 56px;
  gap: 7px;
  display: flex;
  align-items: center;
  margin-top: 100px;
  color: #ffffff;
  font-weight: 600;
  font-size: 14px;
  line-height: 137%;
  & svg {
    width: 24px;
    height: 24px;
  }
`;
