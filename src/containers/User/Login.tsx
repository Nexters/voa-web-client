import React from 'react';
import { Box, Button, Heading, Grid } from 'grommet';
import styled from 'styled-components';
import { signinWithKakao } from 'store/auth/actions';
import Kakao from 'kakaojs';
import history from 'history.js'
import { connect } from 'react-redux';


const StandardButton = styled(Button)`
    width: 100%;
    height: 50px;
    border-radius: 0;
    font-weight: 500;
    margin-bottom: 100px;
`;

const PaddedBox = styled(Box)`
    padding: 3rem;
`

interface Props {
    signinWithKakao: any
}

class Login extends React.Component<Props> {
    componentDidMount(){
        // Kakao.init('10de9ea7440bb6acbc6a51a806269891');
        // console.log(Kakao);
        // Kakao.Auth.createLoginButton({
        //     container: '#kakao-login-btn',
        //     success: function(authObj){
        //         Kakao.API.request({
        //             url: '/v2/user/me',
        //             success: function(res){
        //                 console.log(res);
        //             }
        //         })
        //         // console.log(authObj)
        //         // // alert(JSON.stringify(authObj))
        //         // history.push('/hello')
        //     },
        //     fail: function(err){
        //         console.log(err)
        //         // alert(JSON.stringify(err));
        //         history.push('/hello')
        //     },
        //     always: () => {
        //         history.push('/hello')
        //     }
        // })
    }
    signIn(){
        alert('로그인 되었습니다');
        this.props.signinWithKakao();
    }
    render(){
        return (
            <Box direction='column' flex overflow={{ horizontal: 'hidden' }}>
                <PaddedBox fill>
                    <Heading>안녕하세요</Heading>
                    <Box flex>
                    </Box>
                    <StandardButton
                    id="kakao-login-btn" 
                    label="카카오계정으로 계속하기"
                    onClick={() => {this.signIn()}}
                    type="button"
                    alignSelf="center"
                    color="#E3E3E3"
                    focusIndicator
                    primary
                />
                {/* <div id="kakao-login-btn"></div> */}

                </PaddedBox>
            </Box>
        )
    }
};
  
export default connect(null, { signinWithKakao })(Login);
