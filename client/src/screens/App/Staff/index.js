import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { Spin, message } from 'antd';

import AuthContext from '../../../utils/authContext';
import getOrgId from '../../../utils/orgId';
import ApiContext from '../../../utils/apiContext';
import { colors } from '../../../styles/theme';
import axios from '../../../services/axios';
import { sendEventToAnalytics } from '../../../services/analytics';

import Button from '../../../components/Common/buttons/SecondaryButton';
import Card from '../../../components/Common/Card';
import FieldLabel from '../../../components/Common/forms/FieldLabel';
import TextArea from '../../../components/Common/forms/TextArea';
import TextInput from '../../../components/Common/forms/TextInput';

const Employeer = () => {
    return (
        <>
          <Button>Employeer List</Button>
        </>
    )
}

export default Employeer;