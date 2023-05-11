import React from 'react';
import styled from 'styled-components';
import { colors, breakpoints } from '../../../styles/theme';
import { FcAdvertising, FcAutomatic, FcBusinessContact, FcEditImage } from 'react-icons/fc';
import Button from '../../../components/Auth/Buttons/authButton';

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.backgroundLanding};
  padding: 2rem;
`;

const Heading = styled.div`
  padding-bottom: 3rem;
  text-align:center;
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

const ContentWrapper = styled.div`
  text-align:left;
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
  width: 85%;
  border-color: #2f55d4 !important;
  transition: all 0.5s ease;
  :hover{
    -webkit-transform: scale(1.03);
    transform: scale(1.03);
    z-index: 2;
    -webkit-box-shadow: 0 5px 13px rgba(60, 72, 88, 0.2) !important;
    box-shadow: 0 5px 13px rgba(60, 72, 88, 0.2) !important;
    background-color: #fff !important;
  }
  @media (min-width: ${breakpoints.large}) {
    margin-top: 0;
  }
`;


const TextWrapper = styled.div`
    margin-top: 1.25rem;
    margin-left: 1.1rem;
`;

const SmallHeader = styled.h4`
  font-size: 1.125rem;
  line-height: 1.5rem;
  font-weight: 500;
  color: #2f55d4;
`;

const Paragraph = styled.p`
  margin-top: 0.5rem;
  font-size: 1rem;
  line-height: 1.5rem;
`;
const Price = styled.span`
    font-size: 20px;
    font-weight: bold;
    color: #355ad4;
`
const PriceContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`
const Priceitem  = styled.div`
    justify-content: center;
    flex-wrap: wrap;
    padding: 10px;
    display: flex;

`
const TotalNum = styled.p`
    margin-top: 0.5rem;
    color: rgb(0 0 0 / var(--tw-text-opacity)) !important;
    font-size: 0.7rem;
    font-weight: bold;
    line-height: 1.5rem;
`
const spanItem = styled.span`
    color: #8492ae;
    font-weight: 600;
`
const SimplePricing = () => (
  <Wrapper>
    <Heading>
      <LargeHeader>Simple Pricing</LargeHeader>
        <Paragraph>
            Employee handbook customized for your organization with clear and transparent <br />pricing.
        </Paragraph>
    </Heading>
    <ContentWrapper>
      <Column>
        <TextWrapper>
          <SmallHeader>SMALL</SmallHeader>
          <TotalNum>(1~49 EMPLOYEES)</TotalNum>
          <Price> $50/mo </Price>
        </TextWrapper>
        <PriceContent>
            <Priceitem><img src="icons/check.svg" style={{"width": "20px", "height": "20px", "marginRight": "15px"}} /><spanItem>Multiple Handbooks</spanItem></Priceitem>
            <Priceitem><img src="icons/check.svg" style={{"width": "20px", "height": "20px", "marginRight": "15px"}}/><spanItem>Multi-State Policies</spanItem></Priceitem>
            <Priceitem><img src="icons/check.svg" style={{"width": "20px", "height": "20px", "marginRight": "15px"}}/><spanItem>E-Signatures</spanItem></Priceitem>
            <Priceitem><img src="icons/check.svg" style={{"width": "20px", "height": "20px", "marginRight": "15px"}}/><spanItem>Audit-Ready Reports</spanItem></Priceitem>
            <Priceitem><img src="icons/check.svg" style={{"width": "20px", "height": "20px", "marginRight": "15px"}}/><spanItem>Approval Process</spanItem></Priceitem>
            <Priceitem><img src="icons/check.svg" style={{"width": "20px", "height": "20px", "marginRight": "15px"}}/><spanItem>Employee List Sync</spanItem></Priceitem>
            <Priceitem><img src="icons/check.svg" style={{"width": "20px", "height": "20px", "marginRight": "15px"}}/><spanItem>Send Via Email</spanItem></Priceitem>
            <Priceitem><img src="icons/check.svg" style={{"width": "20px", "height": "20px", "marginRight": "15px"}}/><spanItem>Notifactions and Reminders</spanItem></Priceitem>
            <Priceitem><img src="icons/check.svg" style={{"width": "20px", "height": "20px", "marginRight": "15px"}}/><spanItem>Dropbox & Drive Integration</spanItem></Priceitem>
          </PriceContent>
          <Button style={{width:"100px", "marginLeft":"20px"}}><a style={{ "color": "white"}}>SignUp</a></Button>
      </Column>
      <Column>
        <TextWrapper>
          <SmallHeader>MEDIUM</SmallHeader>
          <TotalNum>(50~249 EMPLOYEES)</TotalNum>
          <Price> $100/mo </Price>
        </TextWrapper>
        <PriceContent>
            <Priceitem><img src="icons/check.svg" style={{"width": "20px", "height": "20px", "marginRight": "15px"}} /><spanItem>Multiple Handbooks</spanItem></Priceitem>
            <Priceitem><img src="icons/check.svg" style={{"width": "20px", "height": "20px", "marginRight": "15px"}}/><spanItem>Multi-State Policies</spanItem></Priceitem>
            <Priceitem><img src="icons/check.svg" style={{"width": "20px", "height": "20px", "marginRight": "15px"}}/><spanItem>E-Signatures</spanItem></Priceitem>
            <Priceitem><img src="icons/check.svg" style={{"width": "20px", "height": "20px", "marginRight": "15px"}}/><spanItem>Audit-Ready Reports</spanItem></Priceitem>
            <Priceitem><img src="icons/check.svg" style={{"width": "20px", "height": "20px", "marginRight": "15px"}}/><spanItem>Approval Process</spanItem></Priceitem>
            <Priceitem><img src="icons/check.svg" style={{"width": "20px", "height": "20px", "marginRight": "15px"}}/><spanItem>Employee List Sync</spanItem></Priceitem>
            <Priceitem><img src="icons/check.svg" style={{"width": "20px", "height": "20px", "marginRight": "15px"}}/><spanItem>Send Via Email</spanItem></Priceitem>
            <Priceitem><img src="icons/check.svg" style={{"width": "20px", "height": "20px", "marginRight": "15px"}}/><spanItem>Notifactions and Reminders</spanItem></Priceitem>
            <Priceitem><img src="icons/check.svg" style={{"width": "20px", "height": "20px", "marginRight": "15px"}}/><spanItem>Dropbox & Drive Integration</spanItem></Priceitem>
          </PriceContent>
          <Button style={{width:"100px", "marginLeft":"20px"}}><a style={{ "color": "white"}}>SignUp</a></Button>
      </Column>
      <Column>
        <TextWrapper>
          <SmallHeader>LARGE</SmallHeader>
          <TotalNum>(250 EMPLOYEES)</TotalNum>
          <Price> Custom </Price>
        </TextWrapper>
        <PriceContent>
            <Priceitem><img src="icons/check.svg" style={{"width": "20px", "height": "20px", "marginRight": "15px"}} /><spanItem>Multiple Handbooks</spanItem></Priceitem>
            <Priceitem><img src="icons/check.svg" style={{"width": "20px", "height": "20px", "marginRight": "15px"}}/><spanItem>Multi-State Policies</spanItem></Priceitem>
            <Priceitem><img src="icons/check.svg" style={{"width": "20px", "height": "20px", "marginRight": "15px"}}/><spanItem>E-Signatures</spanItem></Priceitem>
            <Priceitem><img src="icons/check.svg" style={{"width": "20px", "height": "20px", "marginRight": "15px"}}/><spanItem>Audit-Ready Reports</spanItem></Priceitem>
            <Priceitem><img src="icons/check.svg" style={{"width": "20px", "height": "20px", "marginRight": "15px"}}/><spanItem>Approval Process</spanItem></Priceitem>
            <Priceitem><img src="icons/check.svg" style={{"width": "20px", "height": "20px", "marginRight": "15px"}}/><spanItem>Employee List Sync</spanItem></Priceitem>
            <Priceitem><img src="icons/check.svg" style={{"width": "20px", "height": "20px", "marginRight": "15px"}}/><spanItem>Send Via Email</spanItem></Priceitem>
            <Priceitem><img src="icons/check.svg" style={{"width": "20px", "height": "20px", "marginRight": "15px"}}/><spanItem>Notifactions and Reminders</spanItem></Priceitem>
            <Priceitem><img src="icons/check.svg" style={{"width": "20px", "height": "20px", "marginRight": "15px"}}/><spanItem>Dropbox & Drive Integration</spanItem></Priceitem>
          </PriceContent>
          <Button style={{width:"100px", "marginLeft":"20px"}}><a style={{ "color": "white"}}>SignUp</a></Button>
      </Column>
    </ContentWrapper>
  </Wrapper>
);

export default SimplePricing;
