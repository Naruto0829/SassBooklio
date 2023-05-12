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
  transform: translate(156px, 0%);
`;

const TextWrapper = styled.div`
  margin-top: 1.25rem;
`;

const SmallHeader = styled.h4`
  --tw-text-opacity: 1 !important;
  color: rgb(99 102 241 / var(--tw-text-opacity)) !important;
  text-align:left;
  font-size: 1.125rem;
  line-height: 1.5rem;
  font-weight: 500;
`;

const SmallContent = styled.p`
    text-align:left;
    margin-top: 0.5rem;
    font-size: 1rem;
    line-height: 1.5rem;
`

const Paragraph = styled.p`
  text-align:center;
  margin-top: 0.5rem;
  font-size: 1rem;
  line-height: 1.5rem;
`;

const StyledAdvertising = styled(FcEditImage)`
  margin: 0.5rem;
  height: 2rem;
  width: 2rem;
`;
const FAQ = () => (
  <Wrapper id="faq">
    <Heading>
      <LargeHeader>Frequently Asked Questions</LargeHeader>
      <Paragraph>
        Have any Questions, Please use contact form below
      </Paragraph>
    </Heading>
    <ContentWrapper>
      <Column>
        <TextWrapper>
          <SmallHeader>Is there a free trial?</SmallHeader>
          <SmallContent>
              Yes! The trial period is 30 days. For subscription plans, you can cancel your account at any time and you will not be charged for the next month.
          </SmallContent>
        </TextWrapper>
      </Column>
      <Column>
        <TextWrapper>
          <SmallHeader>Can I have multiple handbooks in the account?</SmallHeader>
          <SmallContent>
            Yes! As many as you want. No extra cost for having multiple handbooks or company staff/admin. Only employees are counted towards the account pricing.
          </SmallContent>
        </TextWrapper>
      </Column>
      <Column>
        <TextWrapper>
          <SmallHeader>Can I update handbook anytime?</SmallHeader>
          <SmallContent>
            Yes! You can edit and send new or updated handbook any time and there’s no limit to the number of handbook versions you can have.
          </SmallContent>
        </TextWrapper>
      </Column>
    </ContentWrapper>
    <ContentWrapper>
      <Column>
        <TextWrapper>
          <SmallHeader>Can I cancel my account?</SmallHeader>
          <SmallContent>
            Yes! For subscription plans, you can cancel your account at any time and you will not be charged for the next month. You can cancel via online at any time.
          </SmallContent>
        </TextWrapper>
      </Column>
      <Column>
        <TextWrapper>
          <SmallHeader>Do you provide legal advice?</SmallHeader>
          <SmallContent>
            We are not a law firm and do not provide legal advice. Our platform provides tools to create, distribute and track employee handbooks.
          </SmallContent>
        </TextWrapper>
      </Column>
      <Column>
        <TextWrapper>
          <SmallHeader>How do employees view handbooks?</SmallHeader>
          <SmallContent>
            Employees can view your handbook using a modern web browser on any device, 24/7, with 99.9% uptime. There's nothing for users to install or download.
          </SmallContent>
        </TextWrapper>
      </Column>
    </ContentWrapper>
  </Wrapper>
);

export default FAQ;
