import React from 'react';
import styled from 'styled-components';
import { colors, breakpoints } from '../../../styles/theme';
import { FcAdvertising, FcAutomatic, FcBusinessContact, FcEditImage } from 'react-icons/fc';

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.backgroundLanding};
  padding: 2rem;
`;

const Heading = styled.div`
  padding-bottom: 3rem;
`;

const LargeHeader = styled.h3`
  text-align: center;
  font-size: 1.875rem;
  line-height: 2rem;
  font-weight: 400;
  letter-spacing: -0.025em;

  @media (min-width: ${breakpoints.small}) {
    font-size: 2.25rem;
    line-height: 2.5rem;
  }
`;

const SectionDescription = styled.p`
  margin-top: 1rem;
  max-width: 48rem;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  font-size: 1.25rem;
  line-height: 1.75rem;
`;

const ContentWrapper = styled.div`
  text-align:center;
  max-width: 36rem;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem;
  padding-right: 1rem;
  @media (min-width: ${breakpoints.small}) {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
  @media (min-width: ${breakpoints.large}) {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    grid-gap: 2rem;
    gap: 2rem;
    max-width: 1280px;
    padding-left: 2rem;
    padding-right: 2rem;
  }
`;

const Column = styled.div`
  margin-top: 2.5rem;
  @media (min-width: ${breakpoints.large}) {
    margin-top: 0;
  }
`;

const IconWrapper = styled.div`
  background-color: rgba(47, 85, 212, 0.1);
  border-radius: 0.375rem;
  height: 65px;
  width: 65px;
  line-height: 65px;
  padding: 9px;
  
`;

const TextWrapper = styled.div`
  margin-top: 1.25rem;
`;

const SmallHeader = styled.h4`
  font-size: 1.125rem;
  line-height: 1.5rem;
  font-weight: 500;
`;

const Paragraph = styled.p`
  margin-top: 0.5rem;
  font-size: 1rem;
  line-height: 1.5rem;
`;

const StyledAdvertising = styled(FcEditImage)`
  margin: 0.5rem;
  height: 2rem;
  width: 2rem;
`;


const TripleColFeatures = () => (
  <Wrapper>
    <Heading>
      <LargeHeader>How it Works ?</LargeHeader>
    </Heading>
    <ContentWrapper>
      <Column>
        <IconWrapper>
          <StyledAdvertising />
        </IconWrapper>
        <TextWrapper>
          <SmallHeader>Create</SmallHeader>
          <Paragraph>
          Provide company-specific answers and download your handbook as a Microsoft Word Document or pdf. Ongoing updates to the handbook.
          </Paragraph>
        </TextWrapper>
      </Column>
      <Column>
        <IconWrapper>
         <svg style={{ "margin": "0.5rem", "height": "2rem", "width": "2rem"}} stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16"  height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z"></path>
          </svg>
        </IconWrapper>
        <TextWrapper>
          <SmallHeader>Send</SmallHeader>
          <Paragraph>
          Send to all your employess and obtain legally binding electronic signatures. Automated distribution with any updates. Built-in approval.
          </Paragraph>
        </TextWrapper>
      </Column>
      <Column>
        <IconWrapper>
          <svg stroke="currentColor" style={{ "margin": "0.5rem", "height": "2rem", "width": "2rem"}} stroke-width="0" viewBox="0 0 24 24"  height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"></path><path d="M7 12h2v5H7zM15 7h2v10h-2zM11 14h2v3h-2zM11 10h2v2h-2z"></path></svg>
        </IconWrapper>

        <TextWrapper>
          <SmallHeader>Track</SmallHeader>
          <Paragraph>
          Track how many employees viewed and signed. Audit-ready reports for legal compliance with esignatures, views, versions and emails.
          </Paragraph>
        </TextWrapper>
      </Column>
    </ContentWrapper>
  </Wrapper>
);

export default TripleColFeatures;
