import React from 'react';
import { Box } from 'grommet';
import { PrimaryBold } from 'components/Text';
import { Link } from 'react-router-dom';
import RoundedButton from 'components/RoundedButton';

const Settings: React.FC = () => (
  <Box direction='column' flex background="rgb(29,30,43)" justify="center" align="center">
    <PrimaryBold>
        설정 페이지
    </PrimaryBold>
    <Box height="30px"/>
    <Link to="/">
    <RoundedButton
        label="홈으로 돌아가기"
        type="button"
        alignSelf="center"
        color="rgba(255, 177, 94)"
        focusIndicator
        primary
        style={{ boxShadow: '4px 4px 4px 0 rgb(20, 21, 29), -4px -4px 4px 0 rgb(80, 85, 117)' }}
    />
    </Link>

  </Box>
);

export default Settings;
