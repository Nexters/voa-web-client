import React from 'react';
import { Box } from 'grommet';
import { Link } from 'react-router-dom';
import HighlightedRoundedButton from 'components/Button/HighlightedRoundedButton';
import styled from 'styled-components';
import { SecondaryRegular, PrimaryBold } from 'components/Text';
import Sidebar from 'components/Sidebar';

const PaddedBox = styled(Box)`
    padding-right: 16px;
    padding-left: 16px;
    padding-top: 15px;
`

interface Props {
    profile: {
        nickname: string,
        profile_image: string,
    }
}

class Home extends React.Component<Props> {
    render(){
        return (
            <Box flex overflow={{ horizontal: 'hidden' }}>
                <Sidebar />
                <PaddedBox direction='column' flex background="rgb(29,30,43)" >
                    <Box height="60px" />
                    <Box height="210px" width="275px" background="rgb(57, 255, 196)" alignSelf="center"/>
                    <Box height="20px" />

                    <PrimaryBold size="18px" alignSelf="center">
                        귀가방을 만들어보세요
                    </PrimaryBold>
                    <Box height="8px" />

                    <SecondaryRegular alignSelf="center">
                        귀가방을 만들어서 친구들을 초대해보세요
                    </SecondaryRegular>
                    <SecondaryRegular alignSelf="center">
                        친구들의 귀갓길 이젠 걱정하지 마세요
                    </SecondaryRegular>
                    <Box height="18px" />
                    <Link to="/chatroom/create">
                        <HighlightedRoundedButton
                            label="새로운 귀가방 만들기"
                            type="button"
                            alignSelf="center"
                            color="rgba(255, 177, 94)"
                            focusIndicator
                            primary
                        />
                    </Link>
                </PaddedBox>
            </Box>
        );
    }  
}

export default Home;