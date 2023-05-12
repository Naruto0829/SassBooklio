import React from 'react';
import Headroom from 'react-headroom';
import SEO from './seo';
import Header from '../Navigation/header';
import Footer from '../Navigation/footer';

const Layout = ({ children }) => {
  const seoData = {
    title: 'Saas Starter Kit Home page',
    description: 'Saas Starter Kit is a modern and comprehensive SAAS boilerplate.'
  };

  return (
    <React.Fragment>
      <SEO seoData={seoData} />
      <Headroom style={{ "height": "1px" }}>
        <Header  />
      </Headroom>
      <div style={{ "marginLeft": "10%", "marginRight": "10%", "marginTop": "10%" }}>{children}</div>
      <Footer id="contact" />
    </React.Fragment>
  );
};

export default Layout;
