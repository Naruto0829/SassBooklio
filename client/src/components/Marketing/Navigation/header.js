import React, { useState, useRef } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { useRouter } from 'next/router';
import useOutsideClick from '../../../hooks/useOutsideClick';
import Link from 'next/link';
import { colors, breakpoints } from '../../../styles/theme';
import FlyoutMenu from './flyoutMenu';

import Button from '../../Common/buttons/PrimaryButton';

import MobileMenu from './mobileMenu';
import LargeLogo from '../../../components/Common/svgs/LargeLogo';
import ChevronDown from '../svgs/chevronDown';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 5rem;
  background-color: ${colors.white};
  padding-left: 13%;
  padding-right: 13%;
  
  @media (min-width: ${breakpoints.medium}) {
    justify-content: flex-start;
  }
  * {
    margin-right: 10px;
  }
`;

const LogoWrapper = styled.div`
  @media (min-width: ${breakpoints.large}) {
    width: 0;
    flex: 1 1 0%;
  }
`;

const MenuWrapper = styled.div`
  margin-right: -0.5rem;
  margin-top: -0.5rem;
  margin-bottom: -0.5rem;
  @media (min-width: ${breakpoints.medium}) {
    display: none;
  }
`;

const MenuButton = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border-radius: 0.375rem;
  color: ${colors.gray400};
  &:hover {
    color: ${colors.gray500};
    background-color: ${colors.gray100};
  }
  &:focus {
    outline: 2px solid transparent;
    outline-offset: 2px;
    color: ${colors.gray500};
    background-color: ${colors.gray100};
  }
`;

const MenuImage = styled.img`
  width: 2.5rem;
  height: 2.5rem;
`;

const Nav = styled.nav`
  display: none;
  @media (min-width: ${breakpoints.medium}) {
    display: flex;
    justify-content: center;
    flex-basis: 60%;
  }
`;

const SolutionsWrapper = styled.div`
  position: relative;
`;

const fadeInUp = keyframes`
from {
  opacity: 0;
  transform: translateY(0.25rem);
}
to {
  opacity: 1;
  transform: translateY(0);
}
`;

const FlyoutMenuWrapper = styled.div`
  animation: ${fadeInUp} 0.3s ease-in forwards;
`;

const ButtonWrapper = styled.div`
  display: none;
  @media (min-width: ${breakpoints.medium}) {
    display: flex;
    flex: 1 1 0%;
  }
  @media (min-width: ${breakpoints.large}) {
    width: 0;
  }
  align-items: center;
  justify-content: flex-end;
  margin-left: 2rem;
`;


const StyledLink = styled.a`
  display: block;
  color: #5e6367;
  font-size: 12px;
  background-color: transparent !important;
  font-weight: 700;
  letter-spacing: 1px;
  line-height: 24px;
  text-transform: uppercase;
  font-family: var(--bs-font-sans-serif);
  padding-left: 15px;
  padding-right: 15px;
 

  &:hover {
    &::before {
      visibility: visible !important;
      width: 100%;
      color: #2f55d4 !important;
    }
  }
`;

const Header = () => {
  const location = useRouter();
  const ref = useRef();
  const refMobile = useRef();
  const [menu, toggleMenu] = useState(false);
  const [mobileMenu, toggleMobileMenu] = useState(false);

  const mobileMenuHandler = () => (mobileMenu ? toggleMobileMenu(false) : toggleMobileMenu(true));

  useOutsideClick(ref, () => toggleMenu(false));
  useOutsideClick(refMobile, () => toggleMobileMenu(false));

  return (
    <Container>
        <LogoWrapper>
          <Link href="/">
            <a>
              <LargeLogo />
            </a>
          </Link>
        </LogoWrapper>
        <MenuWrapper ref={refMobile}>
          <MenuButton onClick={mobileMenuHandler}>
            <MenuImage src="/icons/menu.svg" alt="menu" />
          </MenuButton>
          {mobileMenu ? <MobileMenu mobileMenuHandler={mobileMenuHandler} /> : null}
        </MenuWrapper>
        <Nav>
        <Link href="#home" passHref>
          <StyledLink>HOME</StyledLink>
        </Link>
        <Link href="#howitworks" passHref>
          <StyledLink>HOW IT WORKS</StyledLink>
        </Link>
        <Link href="#features" passHref>
          <StyledLink>FEATURES</StyledLink>
        </Link>
        <Link href="#pricing" passHref>
          <StyledLink>PRICING</StyledLink>
        </Link>
        <Link href="#faq" passHref>
          <StyledLink>FAQ</StyledLink>
        </Link>
        <Link href="#contact" passHref>
          <StyledLink>CONTACT</StyledLink>
        </Link>
        <Link href="auth/login" passHref>
          <StyledLink>SIGN IN</StyledLink>
        </Link>
      </Nav>
    </Container>
  );
};

export default Header;
