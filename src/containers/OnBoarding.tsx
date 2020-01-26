import React from 'react';
import { Box } from 'grommet';
import Profile from 'components/Profile';
import MobileNavigator from 'components/MobileNavigator';

const Onboarding: React.FC = () => (
    <Box direction='column' flex background="rgba(25,24,29)">
        <MobileNavigator />
        <Profile title='가입하기' close={false}/>
    </Box>
);

export default Onboarding;
