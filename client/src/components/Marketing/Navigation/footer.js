import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { colors, breakpoints } from '../../../styles/theme';
import SmallLogo from '../../../components/Common/svgs/SmallLogo';
import { BsChevronRight, BsCardText, BsFillPersonFill, BsFillEnvelopeFill } from "react-icons/bs";
import { Formik } from 'formik';
import Button from '../../../components/Auth/Buttons/authButton';
import Label from '../../../components/Auth/authFormLabel';

const Wrapper = styled.div`
  background-color: #292c2f;
  font-size: 0.9rem;
`;
const Container = styled.div`
  display: flex;
  grid-template-columns: auto auto auto;
  padding-left: 15% !important;
  padding-right: 15% !important;
  padding-top: 4rem;
  border-bottom: 1px solid;
  border-top: 1px solid grey;
  background-color: white;
  padding-bottom: 3rem;
  flex-direction: row;
  @media (max-width: ${breakpoints.small}) {
    flex-direction: column;
  }
`;
const InputWrapper = styled.div`
    padding: 7px;
    display: -webkit-box;
    display: -webkit-flex;
    margin: 0px;
    width: 252px;
    display: flex;
    border-radius: 8px;
    border-color: #283453 !important;
    border: 1px solid;
    align-items: baseline;
`;
const Input = styled.input`
  padding: 0;
  padding-left: 2.1rem !important;
  width: 150px;
  border-style: none !important;
  border: 0;
  &:focus {
    outline: 2px solid transparent !important;
    outline-offset: 2px !important;
  }
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  padding-right: 10px;
`;

const FooterLink = styled.div`
  font-weight: 500;
  color: black;
  cursor: pointer;
  &:hover {
    color: #e6e8ea;
  }
`;

const BottomFooter = styled.div`
    display:flex;
    background-color: #ffffff;
    color: black;
    padding-top: 0.8rem;
    height: 3rem;
    text-align: center;
    justify-content: space-around;
`;

const ImageCol = styled.a`
  display: flex;
`;

const Paragraph = styled.p`
  margin-top: 0.75rem;
  font-size: 1.125rem;
  width:200px;
`;

const TextArea = styled.textarea`
  padding: 0;
  padding-left: 2.1rem !important;
  width: 100%;
  height:100%;
  border-style: none !important;
  border: 0;
  &:focus {
    outline: 2px solid transparent !important;
    outline-offset: 2px !important;
  }
  @media (max-width: ${breakpoints.small}) {
    width:100px
  }
`;

const Row = styled.div`
@media (max-width: ${breakpoints.small}) {
  flex-direction: column;
}
`;

const Footer = () => {
  return (
    <Wrapper>
      <Container>
       <Column style={{ "width": "400px", "display": "flex", "alignItems": "stretch"}}>
          <ImageCol>
            <SmallLogo height={65} width={76} />
          </ImageCol>
          <Paragraph style ={{ width : "300px"}}>
              Hrdeck.com is user-friendly platform for managing employee handbooks with the latest federal, 
              state, and local policies. It offers e-Signatures and audit-ready reports.
          </Paragraph>
       </Column>

        <Column style={{display: "flex", "alignItems": "baseline", "fontSize": "15px", "lineHeight": "44px", width: "400px" }}> 
          <Link href="/">
            <a>
              <FooterLink><BsChevronRight  style={{ height: "11px" }} />Home</FooterLink>
            </a>
          </Link>
          <Link href="/">
            <a>
              <FooterLink><BsChevronRight style={{ height: "11px" }} />How It Works</FooterLink>
            </a>
          </Link>
          <Link href="/">
            <a>
              <FooterLink><BsChevronRight style={{ height: "11px" }} />Features</FooterLink>
            </a>
          </Link>
          <Link href="/">
            <a>
              <FooterLink><BsChevronRight style={{ height: "11px" }} />Pricing</FooterLink>
            </a>
          </Link>
          <Link href="/">
            <a>
              <FooterLink><BsChevronRight style={{ height: "11px" }} />Faq</FooterLink>
            </a>
          </Link>
        </Column>
        
        <Column>
        <Formik>
              <form>
                <Row style={{ display:'flex' }}>
                  <Column>
                      <Label htmlFor="username">First and Last Name:</Label>
                      <InputWrapper>
                      <BsFillPersonFill style={{ "fontSize": "23px" , "position": "absolute" }} />
                        <Input
                          placeholder="John Doe :"
                          type="text"
                          name="username"
                          id="username"
                        data-test-id="username"
                      />
                    </InputWrapper>
                  </Column>
                  <Column>
                    <Label htmlFor="email">Email:</Label>
                    <InputWrapper>
                      <BsFillEnvelopeFill style={{ "fontSize": "20px" , "position": "absolute" }} />
                      <Input
                        placeholder="your@gmail"
                        type="email"
                        name="email"
                        id="email"
                        data-test-id="email"
                      />
                    </InputWrapper>
                  </Column>
                </Row>
                <Label htmlFor="password">Description :</Label>
                <InputWrapper style={{width: "100%", height: "131px" }}>
                  <BsCardText />
                  <TextArea />
                </InputWrapper>
                <Button type="submit">Send Message</Button>
              </form>
          </Formik>
        </Column>
      </Container>
      <BottomFooter>
        <div className="copyright">&copy; 2023 hrdeck | All third party trademarks are the property of their respective owner.</div>
        <div className="terms">California Privacy Rights | Privacy Policy | Terms of Services</div>
      </BottomFooter>
    </Wrapper>
  );
};

export default Footer;
