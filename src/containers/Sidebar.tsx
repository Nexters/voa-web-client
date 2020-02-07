import React from 'react';
import { Box, Layer } from 'grommet';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Close, FormNext, Notification } from 'grommet-icons';
import { PrimaryBold, SecondaryBold } from 'components/Text';
import Avatar from 'components/Avatar';
import MobileBar from 'components/MobileBar';
import { connect } from 'react-redux';
import { signout } from 'store/auth/actions';


const PaddedBox = styled(Box)`
    padding-right: 16px;
    padding-left: 16px;
    padding-top: 15px;
`;

const LineBreak = styled(Box)`
    width: 100%;
    height: 0.5px;
    opacity: 0.1;
    background-color: rgb(255,255,255);
`

const PaddedButtonLG = styled(Box)`
    padding: 12px 16px 12px 16px;
`

const PaddedButtonSM = styled(Box)`
    padding: 20.5px 16px 20.5px 16px;
`
interface Props {
    profile: {
        nickname: string,
        profile_image: string,
    },
    title?: string,
    signout: any,
}

interface State {
    showSidebar: boolean
}

class Sidebar extends React.Component<Props, State> {
    state = { showSidebar: false }
    render(){
        const { profile, title } = this.props;
        const { showSidebar } = this.state;
        return (
            <React.Fragment>
                {showSidebar && <Layer
                    onEsc={() => this.setState({ showSidebar: false })}
                    onClickOutside={() => this.setState({ showSidebar: false })}
                    animation="slide"
                    position="left"
                    responsive={false}
                    full="vertical"
                >
                    <Box
                        width='280px'
                        background='rgb(37, 35, 43)'
                        elevation='small'
                        flex
                        >
                        <PaddedBox>
                            <Close onClick={() => this.setState({ showSidebar: false })} size="20px"/>
                            <Box height="25px" />
                            <Box direction="row">
                                <Avatar size="40px" imageURL={profile?profile.profile_image:'https://placeholder_image'} />
                                <Box width="10px" />
                                <PrimaryBold alignSelf="center">
                                    {profile?profile.nickname:''}
                                </PrimaryBold>
                            </Box>
                            <Box height="30px" />
                            <SecondaryBold>
                                나의 귀가방
                            </SecondaryBold>
                            <Box height="16px" />
                        </PaddedBox>
                        <Link to="/chatroom/create">
                            <PaddedButtonLG
                                onClick={() => {}}
                                direction="row"
                                justify="between"
                            >
                                <Box direction="row">
                                    <Avatar size="55px" imageURL="https://via.placeholder.com/150"/>
                                <Box width="10px" />
                                <PrimaryBold alignSelf="center">
                                    새로운 귀가방 만들기
                                </PrimaryBold>
                                </Box>
                                <SecondaryBold alignSelf="center">
                                    <FormNext style={{ marginTop: '4px'}}/>
                                </SecondaryBold>
                            </PaddedButtonLG>
                        </Link>
                        <LineBreak />
                        <Link to="/notification">
                            <PaddedButtonSM
                                onClick={() => {}}
                                direction="row"
                                justify="between"
                            >
                                <Box direction="row">
                                <PrimaryBold alignSelf="center">
                                    <Notification size='16px' style={{ paddingTop: '5px'}}/>
                                </PrimaryBold>
                                <Box width="10px" />
                                <PrimaryBold alignSelf="center">
                                    알림 설정
                                </PrimaryBold>
                                </Box>
                                <SecondaryBold alignSelf="center">
                                    <FormNext style={{ marginTop: '4px'}}/>
                                </SecondaryBold>
                            </PaddedButtonSM>
                        </Link>
                        <LineBreak />
                        <LineBreak />
                        <PaddedBox>
                            <SecondaryBold onClick={() => this.props.signout()}>
                                로그아웃
                            </SecondaryBold>
                        </PaddedBox>
                    </Box>
                </Layer>}
                <MobileBar navigationClick={() => this.setState(prevState => ({
                        showSidebar: !prevState.showSidebar
                    }))} title={title}/>
            </React.Fragment>
        )
    }
}


const select = (state: any) => ({
    profile: state.auth.profile,
});


export default connect(select, { signout })(Sidebar);
