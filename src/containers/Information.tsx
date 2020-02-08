import React from 'react';
import { Box } from 'grommet';
import { PrimaryBold } from 'components/Text';
import { Link } from 'react-router-dom';
import HighlightedRoundedButton from 'components/Button/HighlightedRoundedButton';

const Information: React.FC = () => (
  <Box direction='column' flex background="rgb(29,30,43)" justify="center" align="center">
    <PrimaryBold>
        방 정보를 노출 시키는 페이지입니다.
    </PrimaryBold>
    <Box height="30px"/>
    <Link to="/">
    <HighlightedRoundedButton
        label="홈으로 돌아가기"
        type="button"
        alignSelf="center"
        color="rgba(255, 177, 94)"
        focusIndicator
        primary
    />
    </Link>
  </Box>
);

export default Information;
