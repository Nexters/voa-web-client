import React from 'react';
import styled from 'styled-components';
import { Box, TextInput, Text, Image } from 'grommet';
import { FormPrevious } from 'grommet-icons';
import { connect } from 'react-redux';
import { updateProfile } from 'store/auth/actions';
import PaddedBox from 'components/PaddedBox';
import Avatar from 'components/Avatar';
import { PrimaryBold, HighlightedBold, SecondaryBold } from 'components/Text';
import history from 'history.js';
import keys from 'config/keys';

const InputLabelBox = styled(Box)`
    margin-bottom: 8px;
    width: 100%;
`

const NavigatorBox = styled(Box)`
    padding: 15px 22px 10px 16px;
    border-bottom: 1px solid rgb(34, 34, 34);
`;

export const StyledInputBox = styled(Box)`
    box-shadow: inset 2px 2px 4px 0 rgba(0,0,0,0.3), inset -2px -2px 4px 0 rgba(255, 255, 255, 0.1);
    border-radius: 25px;
    padding-left: 15px;
    padding-right: 15px;
`;

interface Props {
    updateProfile: any,
    profile: {
        nickname: string,
        profile_image: string,
    },
}

class Onboarding extends React.Component<Props> {
    state = { value: '', count: 0, submittable: true }
    componentDidMount(){
        const { profile } = this.props;
        if(profile){
            this.setState({ value: profile.nickname, count: profile.nickname.length })
        }
    }

    updateField(target){
        if ( target.length > 10 || target.length === 0 ){
            this.setState({ submittable: false })
        } else {
            this.setState({ submittable: true })
        }
        this.setState({ value: target, count: target.length })
    }

    clearField(){
        this.setState({ value: '', count: 0, submittable: true })
    }

    submitValue(){
        const { updateProfile } = this.props;
        const { value } = this.state;
        updateProfile(value);
    }

    render(){
        const { profile } = this.props;
        const { value, count, submittable } = this.state;
        return (
            <Box direction='column' flex background="rgb(29,30,43)">
                <NavigatorBox direction='row' justify='between'>
                    <FormPrevious onClick={(e) => history.goBack()} />
                    <PrimaryBold>
                        회원가입
                    </PrimaryBold>
                    {submittable?<HighlightedBold size="16px" onClick={() => {this.submitValue()}}>
                        완료
                    </HighlightedBold>:
                    <SecondaryBold>
                        완료
                    </SecondaryBold>
                    }

                </NavigatorBox>
                    <Box direction='column' flex overflow={{ horizontal: 'hidden' }}>
                        <PaddedBox fill>
                            <Box height="50px" />
                            <Box flex align="center">
                                <Avatar size="100px" imageURL={profile?profile.profile_image:'https://placeholder_image'} />
                                <Box height="55px" />
                                <InputLabelBox direction='row' justify='between'>
                                    <PrimaryBold>이름을 입력해주세요</PrimaryBold>
                                    <Text color={submittable?'border':'#FF0000'}>{count} / 10</Text>
                                </InputLabelBox>
                                <StyledInputBox
                                    width="large"
                                    direction="row"
                                    align="center"
                                    pad={{ horizontal: "small", vertical: "xsmall" }}
                                    round="small"
                                >
                                    <TextInput
                                        plain
                                        type="text"
                                        placeholder='이름'
                                        value={value}
                                        onChange={event => this.updateField(event.target.value)}
                                        color='#000'
                                    />
                                    <Image onClick={() => this.clearField()} src={keys.deleteIcon} width="24px" />

                                </StyledInputBox>

                            </Box>
                        </PaddedBox>
                    </Box>
            </Box>
        )
    }
};

const select = (state: any) => ({
    profile: state.auth.profile,
});

export default connect(select, { updateProfile })(Onboarding);
