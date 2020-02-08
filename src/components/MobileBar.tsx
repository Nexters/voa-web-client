import React from 'react';
import { Box, Image } from 'grommet';
import { connect } from 'react-redux';
import { Menu } from 'grommet-icons';
import { signout } from 'store/auth/actions';
import { Link } from 'react-router-dom';
import { PrimaryBold } from 'components/Text';
import styled from 'styled-components';
import keys from 'config/keys';

const NavigatorBox = styled(Box)`
    padding: 15px 13px 10px 16px;
    border-bottom: 1px solid rgb(34, 34, 34);
`;

interface Props {
    signout: any,
    navigationClick: any,
    title: string
}

class MobileBar extends React.Component<Props> {
    goBack(){
        const { signout } = this.props;
        signout();
    }
    render(){
        const { navigationClick, title } = this.props;
        return (
            <NavigatorBox direction='row' justify='between' background="rgb(29,30,43)">
                <Box direction='row' alignSelf='center'>
                    <Menu onClick={navigationClick}/>
                    <Box width="12px" />
                    <PrimaryBold>{ title }</PrimaryBold>
                </Box>
                
                <Box direction='row' alignSelf='center'>
                    <Link to="/information">
                        <Image src={keys.infoIcon} width="30px" height="30px"/>
                    </Link>
                    <Box width="10px" />
                    <Link to="/notification">
                        <Image src={keys.notificationIcon} width="30px" height="30px"/>
                    </Link>
                    <Box width="10px" />
                    <Link to="/settings">
                        <Image src={keys.settingsIcon} width="30px" height="30px"/>
                    </Link>
                </Box>
            </NavigatorBox>
        )
    }
};

const select = (state: any) => ({
    profile: state.auth.profile,
});


export default connect(select, { signout })(MobileBar);
