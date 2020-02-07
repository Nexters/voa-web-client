import React from 'react';
import styled from 'styled-components';
import { Box, TextInput, Text } from 'grommet';
import { FormClose, FormPrevious } from 'grommet-icons';
import { connect } from 'react-redux';
import { createChatroom } from 'store/chat/actions';
import { PaddedBox } from 'components/Page';
import { PrimaryBold, HighlightedBold, SecondaryBold } from 'components/Text';
import history from 'history.js';

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
                        멤버 초대하기
                    </PrimaryBold>
                    {submittable?<HighlightedBold size="14px" onClick={() => {this.submitValue()}}>
                        다음
                    </HighlightedBold>:
                    <SecondaryBold>
                        다음
                    </SecondaryBold>
                    }

                </NavigatorBox>
                    <Box direction='column' flex overflow={{ horizontal: 'hidden' }}>
                        <PaddedBox fill>
                            <Box height="50px" />
                            <Box flex align="center">
                                <InputLabelBox direction='row' justify='between'>
                                    <PrimaryBold>카카오톡으로 초대하기</PrimaryBold>
                                    <Text color={submittable?'border':'#FF0000'}>{count} / 20</Text>
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
                                        placeholder='2020.02.08 귀가방'
                                        value={value}
                                        onChange={event => this.updateField(event.target.value)}
                                        color='#000'
                                    />
                                    <FormClose onClick={() => this.clearField()}/>
                                </Box>

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