import React from 'react';
import { Box, Text } from 'grommet';
import { connect } from 'react-redux';
import { Previous } from 'grommet-icons';
import { signout } from 'store/auth/actions'; 
import history from 'history.js';

import styled from 'styled-components';

const NavigatorBox = styled(Box)`
    padding: 15px 13px 10px 16px;
    border-bottom: 1px solid rgb(34, 34, 34);
`;

const TextButton = styled(Text)`
    cursor: pointer;
    color: rgb(255, 148, 59);
    font-size: 16px;
`;

const Title = styled(Text)`
    font-size: 16px;
    font-weight: 600;
`

interface Props {
    signout: any,
    title: string,
}

class MobileNavigator extends React.Component<Props> {
    goBack(){
        const { signout } = this.props;
        signout();
    }
    render(){
        const { title } = this.props;
        return (
            <NavigatorBox direction='row' justify='between'>
                {/* NOTE: using styled components on top of grommet-icons cause deep instantiation error during linux build */}
                <Previous onClick={() => this.goBack()} style={{ cursor: 'pointer' }}/>
                <Title>
                    {title}
                </Title>
                <TextButton onClick={() => history.push('/')}>
                    완료
                </TextButton>
            </NavigatorBox>
        )
    }
};


const select = (state: any) => ({
    profile: state.auth.profile,
});


export default connect(select, { signout })(MobileNavigator);

