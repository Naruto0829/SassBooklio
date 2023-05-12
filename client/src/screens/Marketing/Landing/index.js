import React from 'react';
import LandingFeature from './landingFeatures';
import HeroSection from './heroSection';
import CTASection from './ctaSection';
import TripleColFeatures from './tripleColFeatures';
import KeyFeatures from './KeyFeatures';
import SimplePricing from './SimplePricing';
import FAQ from './FAQ';
import Blog from './Blog';

export default function Index() {
  return (
    <React.Fragment>
      <HeroSection/>
      <TripleColFeatures/>
      <LandingFeature/>
      <KeyFeatures/>
      <SimplePricing  />
      <FAQ />
      <Blog/>
    </React.Fragment>
  );
}
