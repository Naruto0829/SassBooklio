import React from 'react';
import styled from 'styled-components';
import { colors, breakpoints } from '../../../styles/theme';
import Link from 'next/link';
import Title from '../../../components/Auth/title';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (min-width: ${breakpoints.small}) {
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    max-width: 32rem;
  }
`;

const SignupFormHeader = () => (
  <Wrapper>
    <Title style={{ "fontWeight": "500", "fontSize": "1.175rem" }}>Get 30 days FREE Trial</Title>
  </Wrapper>
);

export default SignupFormHeader;
