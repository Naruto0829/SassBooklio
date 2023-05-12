import React from 'react';
import styled from 'styled-components';
import { colors, breakpoints } from '../../../styles/theme';

import { FcApproval, FcBarChart, FcCheckmark, FcCollect, FcConferenceCall } from 'react-icons/fc';

const Container = styled.div`
  background-color: ${(props) => props.theme.backgroundLanding};
  margin-left: auto;
  margin-right: auto;
  padding: 4rem 1rem 4rem 1rem;
  @media (min-width: ${breakpoints.small}) {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
  @media (min-width: ${breakpoints.large}) {
    padding: 6rem 2rem 6rem 2rem;
  }
`;

const LargeHeader = styled.h4`
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 400;
  text-align: center;
  @media (min-width: ${breakpoints.small}) {
    font-size: 1.875rem;
    text-align: left;
  }
`;

const LargeParagraph = styled.p`
  margin-top: 0.75rem;
  font-size: 1.125rem;
  line-height: 1.75rem;
  text-align: center;
  @media (min-width: ${breakpoints.small}) {
    text-align: left;
  }
`;

const TextWrapper = styled.div`
  margin-left: 1rem;
`;

const SmallHeader = styled.h5`
  font-size: 1.125rem;
  line-height: 1.5rem;
  font-weight: 500;
  color: ${colors.gray900};
`;

const SmallParagraph = styled.p`
  margin-top: 0.5rem;
  font-size: 1rem;
  line-height: 1.5rem;
  color: ${colors.gray500};
`;

const FeatureImage = styled.img`
  width: 100%;
  height: ${({ aspectRatio }) => `calc(100% * ${aspectRatio})`};
  @media (min-width: ${breakpoints.large}) {
    width: 90%;
    height: ${({ aspectRatio }) => `calc(90% * ${aspectRatio})`};
  }
  margin-left: auto;
  margin-right: auto;
`;

const FeatureWrapper1 = styled.div`
  margin-top: 3rem;
  @media (min-width: ${breakpoints.large}) {
    margin-top: 6rem;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-gap: 2rem;
    gap: 2rem;
    align-items: center;
  }
`;

const List = styled.ul`
  margin-top: 2.5rem;
  margin-left: -1rem;
  list-style-type: none;
  @media (min-width: ${breakpoints.small}) {
    margin-left: 0;
  }
`;

const ListItem = styled.li`
  margin-top: 0.1rem;
`;

const Item = styled.div`
  display: flex;
`;

const StyledApproval = styled(FcCheckmark)`
  height: 2rem;
  width: 2rem;
  :before {
      content: '\e9c2';
  }
`;


const LandingFeatures = () => (
  <Container  id="features">
    <FeatureWrapper1>
     <FeatureImage
        aspectRatio={532 / 417}
        src="assets/images/company/about2.png"
        alt="Abstract illustration of man wearing a turtleneck standing next to floating graphs and images"
      />
      <div>
        <LargeHeader>A New Way to manage <br/> employee handbook</LargeHeader>
        <LargeParagraph>
        Take the new way of managing your digital employee <>handbook</> with easy updates, revision controls, electronic signatures and audit-ready reports for your compliance. Send your newly created to all employees or on-boarded employees with in-built email or via your own configured email.
        Collaborate easily with your team with approval process buit right in the platform. Share handbooks with your legal team or management for review.
        </LargeParagraph>
        <List>
          <ListItem>
            <Item>
              <StyledApproval />
              <TextWrapper>
                <SmallParagraph>
                  Multi-State
                </SmallParagraph>
              </TextWrapper>
            </Item>
          </ListItem>
          <ListItem>
            <Item>
              <StyledApproval />
              <TextWrapper>
                <SmallParagraph>
                  Electronic Signautes
                </SmallParagraph>
              </TextWrapper>
            </Item>
          </ListItem>
          <ListItem>
            <Item>
              <StyledApproval />
              <TextWrapper>
                <SmallParagraph>
                  Ongoing Updates
                </SmallParagraph>
              </TextWrapper>
            </Item>
          </ListItem>
        </List>
      </div>
     
    </FeatureWrapper1>
  </Container>
);

export default LandingFeatures;
