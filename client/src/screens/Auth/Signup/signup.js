import React, { useContext, useEffect, useState } from 'react';
import { Formik } from 'formik';
import { useRouter } from 'next/router';

import AuthContext from '../../../utils/authContext';
import ApiContext from '../../../utils/apiContext';
import { ValidSchema, SignupAuth } from '../helpers';
import styled from 'styled-components';
import { colors, breakpoints } from '../../../styles/theme';
import SEO from '../../../components/Marketing/Layout/seo';
import ErrorText from '../../../components/Common/errorText';
import InputWrapper from '../../../components/Common/forms/TextInputWrapper';
import Button from '../../../components/Auth/Buttons/authButton';
import AuthCard from '../../../components/Auth/authCard';
import Label from '../../../components/Auth/authFormLabel';
import Input from '../../../components/Common/forms/TextInput';
import LoadingOverlay from '../../../components/Common/loadingOverlay';
import SignUpFormHeader from './signupFormHeader';

// TODO: replace with actual data
const getData = () => ({
  site: {
    siteMetadata: {
      siteUrl: 'http://localhost:3000'
    }
  }
});

const Signup = () => {
  const location = useRouter();
  const data = getData();
  const domainUrl = data.site.siteMetadata.siteUrl;
  const { firebase } = useContext(AuthContext);
  const { fetchFailure, fetchInit, fetchSuccess, apiState } = useContext(ApiContext);
  const { isLoading } = apiState;
  const [invite_key, setInviteKey] = useState();
  const [isInviteFlow, setInviteFlow] = useState();

  /* eslint-disable */
  //extract data from query params
  useEffect(() => {
    if (!location.isReady) return;
    setInviteFlow(location.query.isInviteFlow);
    setInviteKey(location.query.verify_key);
  }, [location.isReady]);

  useEffect(() => {
    return () => fetchSuccess();
  }, []);
  /* eslint-disable */

  const handleSubmit = async (values) => {
    fetchInit();

    let email = values.email;
    let password = values.password;
    let username = values.username;

    let authRes = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((error) => {
        debugger;
        fetchFailure(error);
      });

    SignupAuth(
      authRes,
      firebase,
      fetchFailure,
      username,
      domainUrl,
      isInviteFlow,
      invite_key,
      location
    );
  };
  
  const RememberMeWrapper = styled.div`
    display: flex;
    align-items: center;
  `;

  const RememberMeLabel = styled.label`
    margin-left: 0.1rem;
    font-size: 0.925rem;
    color: ${colors.coolGray900};
  `;

  const seoData = {
    title: 'Saas Starter Kit Pro Sign up Page',
    description: 'Saas Starter Kit Pro Sign up Page'
  };

  return (
    <React.Fragment>
      <SEO seoData={seoData} />
      <div style={{    width: "100%"}}>
        {isLoading && <LoadingOverlay />}
        <SignUpFormHeader />

        <AuthCard>
          <Formik
            validationSchema={ValidSchema}
            initialValues={{ email: '', password: '', username: '' }}
            onSubmit={handleSubmit}
          >
            {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <Label htmlFor="username">First and Last Name:</Label>
                <InputWrapper>
                  <Input
                    type="text"
                    name="username"
                    id="username"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.username}
                    data-test-id="username"
                  />
                </InputWrapper>
                {errors.username && touched.username && <ErrorText>{errors.username}</ErrorText>}
                <Label htmlFor="email">Email:</Label>
                <InputWrapper>
                  <Input
                    type="email"
                    name="email"
                    id="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    data-test-id="email"
                  />
                </InputWrapper>
                {errors.email && touched.email && <ErrorText>{errors.email}</ErrorText>}
                
                <Label htmlFor="password">Password:</Label>
                <InputWrapper>
                  <Input
                    type="password"
                    name="password"
                    id="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    data-test-id="password"
                  />
                </InputWrapper>
                {errors.password && touched.password && <ErrorText>{errors.password}</ErrorText>}
                <RememberMeWrapper>
                  <input id="remember_me" name="remember_me" type="checkbox" />
                  <RememberMeLabel htmlFor="remember_me">I Accept 
                    <a> Terms And Condition</a>
                  </RememberMeLabel>
                </RememberMeWrapper>

                <Button type="submit">SignUp</Button>
              </form>
            )}
          </Formik>
        </AuthCard>
      </div>
    </React.Fragment>
  );
};

export default Signup;
