import React from 'react';
import styled from 'styled-components';
import { colors, breakpoints } from '../../../styles/theme';
import { FcAdvertising, FcAutomatic, FcBusinessContact, FcEditImage } from 'react-icons/fc';

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.backgroundLanding};
  padding: 2rem;
`;

const Heading = styled.div`
  padding-left:8%;
  padding-bottom: 3rem;
`;

const LargeHeader = styled.h3`
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
  text-align:center;
  max-width: 36rem;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem;
  padding-right: 1rem;
  margin-bottom: 30px;
  
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
  position:relative;
  border-radius:15px;
  margin-bottom: 25px;
  box-shadow: var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow) !important;
  transition: all 0.3s ease;
  @media (max-width: ${breakpoints.small}) {
    margin-top: 0;
    width:100%;
  }

  :hover{
    transform: translateY(-10px);   
  }
`;

const IconWrapper = styled.div`
    border-radius: 50%;
    background: linear-gradient(45deg, transparent, rgba(47, 85, 212, 0.15));
    color: #2f55d4;
    height: 50px;
    margin-left:20px;
    margin-right:20px;
    width: 50px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
`;

const TextWrapper = styled.div`
`;

const SmallHeader = styled.h4`
  font-size: 13px;
  font-weight: 650;
`;

const Paragraph = styled.p`
  margin-top: 0.5rem;
  font-size: 1rem;
  line-height: 1.5rem;
`;

const BlogImg = styled.img`
  border-radius : 15px
`;

const BlogTitle = styled.h3`
  margin-top: 22px;
  margin-bottom: 20px;
`;

const BlogContent = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ReadmoreButton = styled.a`
  padding-right:10px;
  display: flex;
  color: #626262;
  fontSize: 15px;
`;

const Author = styled.div`
  top: 5%;
  left: 5%;
  position: absolute;
  display:flex;
  color:white;
  flex-direction: column;
  z-index: 1;
  -webkit-transition: all 0.5s ease;
  transition: all 0.5s ease;
`;

const Overlay = styled.div`
  opacity: 0.6;
  background: #3c4858;
  border-top-left-radius: 6px !important;
  border-top-right-radius: 6px !important;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: 0;
  -webkit-transition: all 0.5s ease;
  transition: all 0.5s ease;
`;

const BlogCoverletter = styled.div`
    position: relative;
`

const Blog = () => (
  <Wrapper>
    <Heading>
      <LargeHeader>Blog</LargeHeader>
      <SmallHeader>Reads Our LatestNews & Blog</SmallHeader>
      <Paragraph>
        All-In-One platform to manage your employee handbook , easier to learn and <br /> manager with audit-ready reports accessable at any time.
      </Paragraph>
    </Heading>
    <ContentWrapper>
      <Column>
          <BlogCoverletter>
            <BlogImg src="/assets/images/blog/01.jpg" />
          </BlogCoverletter>
          <Overlay></Overlay>
            <BlogTitle><a style={{"color": "#6f99cf"}}> Design your apps in your own way</a></BlogTitle>
            <BlogContent>
              <ul style={{ "listStyle":"none", "display":"flex" }}>
                <li style={{ "paddingRight":"10px" }}>
                  <a style={{  "display": "flex", "color": "#6f6d6d", "lineHeight": "19px" }} >
                    <img src="/icons/heart.png" style={{width:"20px"}}></img>33</a>
                </li>
                <li style={{ "paddingRight":"10px" }}>
                  <a style={{  "display": "flex", "color": "#6f6d6d", "lineHeight": "19px" }}>
                    <img src="/icons/message.png" style={{width:"20px"}} />08
                  </a>
                </li>
              </ul>
              <ReadmoreButton>Read More <img style={{ "width": "19px", "height": "24px" }} src="icons/forward.png"></img></ReadmoreButton>
          </BlogContent>
          <Author><small>Calvin Carlo</small><small> 25th June 2021</small></Author>
      </Column>
    </ContentWrapper>
  </Wrapper>
);

export default Blog;
