import React from 'react';
import { Box, Button, Heading, Grid, Text, TextInput } from 'grommet';
import { Close, UserAdd, Add, SettingsOption } from 'grommet-icons';
import { connect } from 'react-redux';
import { updateProfile } from 'store/auth/actions';
import styled from 'styled-components';

const StandardButton = styled(Button)`
    width: 100%;
    height: 80px;
    border-radius: 0;
    font-weight: 500;
`;

const PaddedBox = styled(Box)`
    padding: 1.5rem;
    padding-top: 3rem;
`

const Title = styled(Text)`
    font-weight: 400;
    font-size: 21px;
`

interface Props {
    title: string,
    button: string,
    close: boolean,
    updateProfile: any
}
class Profile extends React.Component<Props> {
    render(){
        return (
            <Box direction='column' flex overflow={{ horizontal: 'hidden' }}>
                <PaddedBox fill>
                    <Grid columns={{ count: 3, size: 'auto' }}>
                        <Box>
                            {this.props.close?<Close />:''}
                        </Box>
                        <Box align="center">
                            <Title>{this.props.title}</Title>
                        </Box>
                    </Grid>
                    <br />

                    <Box flex justify="center" align="center">
                        Image Upload
                        <br />
                        <br />
                        <TextInput
                            type="text"
                            placeholder='이름'
                        />
                    </Box>
                </PaddedBox>
                <StandardButton 
                    label={this.props.button}
                    onClick={() => {this.props.updateProfile()}}
                    type="button"
                    alignSelf="center"
                    color="#E3E3E3"
                    focusIndicator
                    primary
                />
            </Box>
        )
    }
};

export default connect(null, { updateProfile })(Profile);

