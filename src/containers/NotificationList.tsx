import React from 'react';
import styled from 'styled-components';
import { Box, Text, Button } from 'grommet';
import { FormPrevious } from 'grommet-icons';
import { connect } from 'react-redux';
import { SecondaryBold, PrimaryBold } from 'components/Text';
import Avatar from 'components/Avatar';
import history from 'history.js';

const PaddedBox = styled(Box)`
    padding: 15px 16px 0 16px;
`;

const NavigatorBox = styled(Box)`
    padding: 15px 22px 10px 16px;
    border-bottom: 1px solid rgb(34, 34, 34);
`;

const RoundedButton = styled(Box)`
    width: 72px;
    height: 28px;
    border-radius: 14px;
    font-weight: 600;
    background-color: rgb(255, 156, 67);
    color: #fff;
`;

const PaddedSection = styled(Box)`
    padding: 18px 16px 18px 16px;
`

interface Props {
}

class NotificationList extends React.Component<Props> {
    render(){
        return (
            <Box direction='column' flex background="rgb(29,30,43)">
                <NavigatorBox>
                    <FormPrevious onClick={(e) => history.goBack()} />
                </NavigatorBox>
                    <Box direction='column' flex overflow={{ horizontal: 'hidden' }}>
                        <PaddedBox>
                            <Box height="20px" />
                            <PrimaryBold size="20px">새로운 알림</PrimaryBold>
                        </PaddedBox>
                            <PaddedSection
                                onClick={() => {}}
                                direction="row"
                                justify="between"
                            >
                                <Box direction="row">
                                    <Avatar size="40px" imageURL="https://via.placeholder.com/150"/>
                                    <Box width="10px" />
                                    <Box>
                                        <Box direction="row">
                                            <PrimaryBold size="14px">
                                                곽민지
                                            </PrimaryBold>
                                            <SecondaryBold size="14px">
                                                님이 회원님을 찔렀습니다
                                            </SecondaryBold>
                                        </Box>
                                        <Box height="8px"/>
                                        <SecondaryBold size="14px" style={{ marginTop: '-5px'}}>
                                            1분 전
                                        </SecondaryBold>
                                    </Box>
                                </Box>
                                <SecondaryBold size="14px" alignSelf="center">
                                    <PrimaryBold size="14px" color="rgb(255, 177, 94)">
                                        응답하기
                                    </PrimaryBold>
                                </SecondaryBold>
                            </PaddedSection>
                            <Box height="16.5px"/>
                            <PaddedBox>
                                <PrimaryBold size="20px">확인하지 않은 알림</PrimaryBold>
                            </PaddedBox>
                    </Box>
            </Box>
        )
    }
};

const select = (state: any) => ({
});


export default connect(select, {})(NotificationList);