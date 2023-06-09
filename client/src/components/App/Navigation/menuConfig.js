import React from 'react';
import styled from 'styled-components';
import {
  FcBarChart,
  FcCollect,
  FcConferenceCall,
  FcGenealogy,
  FcTimeline,
  FcUpload,
  FcPrivacy,
  FcEngineering,
  FcManager,
  FcEditImage
} from 'react-icons/fc';

const StyledBar = styled(FcBarChart)`
  height: 1.3rem;
  width: 1.3rem;
`;

const StyledEng = styled(FcEngineering)`
  height: 1.3rem;
  width: 1.3rem;
`;

const StyledRead = styled(FcCollect)`
  height: 1.3rem;
  width: 1.3rem;
`;

const StyledCollab = styled(FcConferenceCall)`
  height: 1.3rem;
  width: 1.3rem;
`;

const StyledCreate = styled(FcUpload)`
  height: 1.3rem;
  width: 1.3rem;
`;

const StyledPermissions = styled(FcPrivacy)`
  height: 1.3rem;
  width: 1.3rem;
`;

const StyledOnboarding = styled(FcTimeline)`
  height: 1.3rem;
  width: 1.3rem;
`;

const StyledML = styled(FcGenealogy)`
  height: 1.3rem;
  width: 1.3rem;
`;

const StyledEM = styled(FcManager)`
  height: 1.6rem;
  width: 1.6rem;
`;

const StyledCK = styled(FcEditImage)`
  height: 1.3rem;
  width: 1.3rem;
`;

export const getMenus = (org_id) => [
  {
    id: '1',
    name: 'Dashboard',
    route: `/app/${org_id}/dashboard`,
    icon: <StyledBar />
  },
  {
    id: '2',
    name: 'Read Update',
    route: `/app/${org_id}/readupdate`,
    icon: <StyledRead />
  },
  {
    id: '3',
    name: 'Create',
    route: `/app/${org_id}/create`,
    icon: <StyledCreate />
  },
  {
    id: '4',
    name: 'Permissions',
    route: `/app/${org_id}/permissions`,
    icon: <StyledPermissions />
  },
  {
    id: '5',
    name: 'Users',
    route: `/app/${org_id}/users`,
    icon: <StyledCollab />
  },
  {
    id: '6',
    name: 'Onboarding',
    route: `/app/${org_id}/onboarding`,
    icon: <StyledOnboarding />
  },
  {
    id: '7',
    name: 'Machine Learning',
    route: `/app/${org_id}/machinelearning`,
    icon: <StyledML />
  },
  {
    id: '8',
    name: 'Settings',
    route: `/app/${org_id}/settings`,
    icon: <StyledEng />
  },
  {
    id: '9',
    name: 'New Employeer',
    route: `/app/${org_id}/staffs/create`,
    icon: <StyledEM />
  },
  {
    id: '10',
    name: 'Employeer List',
    route: `/app/${org_id}/staffs`,
    icon: <StyledEM />
  },
  {
    id: '11',
    name: 'CKeditor',
    route: `/app/${org_id}/ckeditor`,
    icon: <StyledCK />
  }
];
