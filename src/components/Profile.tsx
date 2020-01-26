import React from 'react';
import { Box, TextInput, Image, Text } from 'grommet';
import { FormClose } from 'grommet-icons';
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
    state = { value: '', count: 0, error: false }
    componentDidMount(){
        const { profile } = this.props;
        if(profile){
            this.setState({ value: profile.nickname, count: profile.nickname.length })
        }
    }

    updateField(target){
        const { count } = this.state;
        
        if ( count > 10 ){
            this.setState({ error: true })
        } else {
            this.setState({ error: false })
        }
        this.setState({ value: target, count: target.length })
    }

    clearField(){
        this.setState({ value: '', count: 0, error: false })
    }

    render(){
        const { profile } = this.props;
        const { value, count, error } = this.state;
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
                            <Text color={error?'#FF0000':'border'}>{count} / 10</Text>
                        </InputLabelBox>
                        <Box
                            width="large"
                            direction="row"
                            align="center"
                            pad={{ horizontal: "small", vertical: "xsmall" }}
                            round="small"
                            border={{
                                side: "all",
                                color: "border"
                            }}

                        >
                            <TextInput
                                plain
                                type="text"
                                placeholder='이름'
                                value={value}
                                onChange={event => this.updateField(event.target.value)}
                            />
                            <FormClose onClick={() => this.clearField()}/>

                        </Box>

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

