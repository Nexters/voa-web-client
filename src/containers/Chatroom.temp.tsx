import React from 'react';
import { Box } from 'grommet';
import { Link } from 'react-router-dom';
import RoundedButtonSM from 'components/RoundedButtonSM';
import RoundedButtonXS from 'components/RoundedButtonXS';
import styled from 'styled-components';
import { PrimaryRegular, SecondaryRegular, HighlightedBold, SecondaryBold, PrimaryBold } from 'components/Text';
import Sidebar from 'containers/Sidebar';
import { connect } from 'react-redux';
import Avatar from 'components/Avatar';

const PaddedBox = styled(Box)`
    padding-right: 16px;
    padding-left: 16px;
`

const MemberBox = styled(Box)`
    background-color: rgb(47, 49, 68);
    padding: 16px;
    border-radius: 8px;
`;

const ProgressBox = styled(Box)`
    width: 311px;
    height: 6px;
    border-radius: 14px;
    background-color: rgb(50, 53, 73);
    box-shadow: inset 0px 1px 2px 0 rgba(0,0,0,0.5), inset -1px 0px 2px 0 rgba(255, 255, 255, 0.2);
`;

interface Props {
    profile: {
        nickname: string,
    },
    chatName: string,
}

class Chatroom extends React.Component<Props> {
    render(){
        const { chatName, profile: { nickname } } = this.props;
        return (
            <Box flex overflow={{ horizontal: 'hidden' }}>
                <Sidebar title={chatName}/>
                <PaddedBox direction='column' background="rgb(29,30,43)" >
                    <Box height="33px" />
                    <Box direction='row' justify='between'>
                        <Box>
                            <SecondaryRegular size="14px">
                                { nickname }님의 귀가상태
                            </SecondaryRegular>
                            <Box height="5px" />
                            <HighlightedBold size="22px">
                                귀가전
                            </HighlightedBold>
                        </Box>
                        <RoundedButtonSM
                            type="button"
                            label="귀가 시작"
                            onClick={(e) => {console.log(e)}}
                            status="default"
                            alignSelf="center"
                            color="rgb(29,30,43)"
                            primary
                        />
                    </Box>
                    <Box height="30px" />
                </PaddedBox>
                <PaddedBox direction='column' flex background="rgb(36,38,54)" >
                    <Box height="20px" />
                    <SecondaryBold>
                        귀가전 멤버 4
                    </SecondaryBold>
                    <Box height="16px" />
                    <MemberBox>
                        <Box direction='row' justify='between'>
                            <Box direction='row'>
                                <Avatar size="40px" imageURL="https://via.placeholder.com/150"/>
                                <Box width="8px" />
                                <Box>
                                    <Box direction='row'>
                                        <PrimaryRegular size="14px">
                                            여정승
                                        </PrimaryRegular>
                                        <Box width="8px"/>
                                        <SecondaryRegular size="14px">
                                            10분전 응답
                                        </SecondaryRegular>
                                    </Box>
                                    <PrimaryBold>
                                        귀가전
                                    </PrimaryBold>
                                </Box>
                            </Box>
                            <RoundedButtonXS
                                type="button"
                                label="콕찌르기"
                                onClick={(e) => {console.log(e)}}
                                status="default"
                                alignSelf="center"
                                color="rgb(47,49,67)"
                                primary
                            />
                        </Box>
                        <Box height="21px" />
                        <ProgressBox />
                    </MemberBox>
                </PaddedBox>
            </Box>
        );
    }
   
}

const select = (state: any) => ({
    chatName: state.chat.room,
    profile: state.auth.profile
});


export default connect(select, {})(Chatroom);