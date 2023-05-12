import React from 'react';
import styled, {keyframes} from 'styled-components';
import Link from 'next/link';
import {breakpoints} from '../../../styles/theme';

import Card from '../../../components/Common/Card';
import FieldLabel from '../../../components/Common/forms/FieldLabel';
import TextInput from '../../../components/Common/forms/TextInput';
import TextInputWrapper from '../../../components/Common/forms/TextInputWrapper';

import Signup from "../../Auth/Signup/signup"

const Container = styled.div `
  display: flex;
  grid-template-columns: auto auto;
  background-color: ${ (props) => props.theme.backgroundLanding};
  background-repeat: no-repeat;
  background-size: contain;
  background-position: 0% 0%;
  @media (max-width: ${breakpoints.small}) {
    flex-direction: column;
  }
`;

const HeroTextContainer = styled.div `
  padding: 3rem 1rem 5rem;
  width:66%;
  text-align: center;
  @media (min-width: ${breakpoints.large}) {
    padding: 6rem 2rem 12rem;
    text-align: left;
  }

  @media (max-width: ${breakpoints.small}) {
    width:100%;
  }
`;

const HeroHeader = styled.h2 `
  font-size: 2.25rem;
  letter-spacing: -0.03rem;
  line-height: 2.5rem;
  font-weight: 400;
  @media (min-width: ${breakpoints.small}) {
    line-height: 1;
    font-size: 3.3rem;
  }
`;

const Span = styled.span `
  color: ${ (props) => props.theme.primary};
`;

const Paragraph = styled.p `
  margin-top: 0.75rem;
  font-size: 1.125rem;
  @media (min-width: ${breakpoints.small}) {
    font-size: 1.25rem;
  }
  @media (min-width: ${breakpoints.medium}) {
    margin-top: 1.25rem;
  }
`;

const StyledButton = styled.button `
  margin-top: 1rem;
  border: 0px;
  border-radius: 14px;
  font-size: 1.2rem;
  padding: 0.3rem 0.4rem 0.5rem 1rem;
  background-color: #B23507;
  color: white;
  &:hover {
    opacity: 95%;
    outline: lightblue solid 2px;
  }
`;

const CustomizedCard = styled.div `
  background-color: ${ (props) => props.theme.backgroundLanding};
  background-repeat: no-repeat;
  width:30%;
  display: flex;
  text-align: center;
  @media (min-width: ${breakpoints.large}) {
    display: block;
  }

  @media (max-width: ${breakpoints.small}) {
    width:100%;
  }
`;

const fadeInLeft = keyframes `
  from {
    opacity: 0;
    transform: translateX(1.5rem);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const Image = styled.img `
  margin-top: 3rem;
  padding: 3rem;
  height: calc(32rem * 330 / 416);
  width: 32rem;
  z-index: 10;
  animation: ${fadeInLeft} 0.7s ease-in forwards;
`;

const HeroSection = () => (
    <Container id="home">
        <HeroTextContainer >
            <HeroHeader>
                A Better Way to Manage Your Employee
                <br/>
                <span>Handbook & Policies.</span>
            </HeroHeader>
            <Paragraph>
                All-in-one platform to create, send and track your company handbook. Human
                Resources (HR) team time saver to update with complete access to compliance
                data.
            </Paragraph>
            <a>
              <StyledButton type="primary">Explore Now &#8594;</StyledButton>
            </a>
        </HeroTextContainer>
        <CustomizedCard>
           <Signup />
        </CustomizedCard>
    </Container>
);

export default HeroSection;
