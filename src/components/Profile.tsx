import React from 'react';
import { Box, TextInput, Image, Text } from 'grommet';
import { connect } from 'react-redux';
import { updateProfile } from 'store/auth/actions';
import styled from 'styled-components';
import { PaddedBox } from 'components/Page';

const RoundImage = styled(Image)`
    border-radius: 50%;
`;

const InputLabelBox = styled(Box)`
    margin-bottom: 8px;
    width: 100%;
`

interface Props {
    title: string,
    close: boolean,
    updateProfile: any,
    profile: {
        nickname: string,
        profile_image: string,
    }
}
class Profile extends React.Component<Props> {
    render(){
        const { profile } = this.props;
        return (
            <Box direction='column' flex overflow={{ horizontal: 'hidden' }}>
                <PaddedBox fill>
                    <Box flex justify="center" align="center">
                        <Box height="100px" width="100px" round="large" style={{ marginBottom: '55px' }}>
                            <RoundImage
                                fit="cover"
                                src={profile?profile.profile_image:'https://placeholder_image'}
                            />
                        </Box>
                        <InputLabelBox direction='row' justify='between'>
                            <Text>이름</Text>
                            <Text color='rgb(34, 34, 34)'>3 / 10</Text>
                        </InputLabelBox>

                        <TextInput
                            type="text"
                            placeholder={profile?profile.nickname:'이름'}
                        />
                    </Box>
                </PaddedBox>
            </Box>
        )
    }
};

const select = (state: any) => ({
    profile: state.auth.profile,
});


export default connect(select, { updateProfile })(Profile);

