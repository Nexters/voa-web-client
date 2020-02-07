import React from 'react';
import styled from 'styled-components';
import { Box, TextInput, Text, Image } from 'grommet';
import { FormPrevious } from 'grommet-icons';
import { connect } from 'react-redux';
import { createChatroom } from 'store/chat/actions';
import { PaddedBox } from 'components/Page';
import { PrimaryBold, HighlightedBold, SecondaryBold, SecondaryRegular } from 'components/Text';
import history from 'history.js';
import keys from 'config/keys';
import { StyledInputBox } from './OnBoarding';

const InputLabelBox = styled(Box)`
    margin-bottom: 8px;
    width: 100%;
`

const NavigatorBox = styled(Box)`
    padding: 15px 22px 10px 16px;
    border-bottom: 1px solid rgb(34, 34, 34);
`;

interface Props {
    createChatroom: any,
    profile: {
        nickname: string,
        profile_image: string,
    },
}

class CreateChatroom extends React.Component<Props> {
    state = { value: '', count: 0, submittable: false }

    updateField(target){
        if ( target.length > 20 || target.length == 0 ){
            this.setState({ submittable: false })
        } else {
            this.setState({ submittable: true })
        }
        this.setState({ value: target, count: target.length })
    }

    clearField(){
        this.setState({ value: '', count: 0, submittable: false })
    }

    submitValue(){
        const { createChatroom } = this.props;
        const { value } = this.state;
        createChatroom(value);
    }

    render(){
        const { profile } = this.props;
        const { value, count, submittable } = this.state;
        return (
            <Box direction='column' flex background="rgb(29,30,43)">
                <NavigatorBox direction='row' justify='between'>
                    <FormPrevious onClick={(e) => history.goBack()} />
                    <PrimaryBold>
                        귀가방 생성
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
                        <Box height="30px" />
                        <Box height="135px" width="343px" background="rgb(57, 255, 196)" alignSelf="center"/>
                        <Box height="31px" />
                            <Box flex align="center">
                                <InputLabelBox direction='row' justify='between'>
                                    <PrimaryBold>귀가방 이름을 입력해주세요</PrimaryBold>
                                    <Text color={submittable?'border':'#FF0000'}>{count} / 20</Text>
                                </InputLabelBox>
                                <SecondaryRegular size="14px" alignSelf="start">
                                    모든 멤버가 귀가하면 귀가방은 1시간 후 삭제됩니다
                                </SecondaryRegular>
                                <Box height="30px" />
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
                                        placeholder=''
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


export default connect(select, { createChatroom })(CreateChatroom);