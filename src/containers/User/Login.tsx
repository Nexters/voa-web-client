import React from 'react';
import { Box, Heading, Text } from 'grommet';
import { signinWithKakao, authError } from 'store/auth/actions';
import Kakao from 'kakaojs';
import { connect } from 'react-redux';
import { PaddedBox } from 'components/Page';
import RoundedButton from 'components/RoundedButton';

interface Props {
    signinWithKakao: any,
    authError: any,
}

class Login extends React.Component<Props> {
    componentDidMount(){
        Kakao.init('10de9ea7440bb6acbc6a51a806269891');
    }
    signIn(signinWithKakao, authError){
        Kakao.Auth.login({
            persistAccessToken: true,
            persistRefreshToken: true,
            scope: 'profile, friends',
            success: function(authObj) {
                Kakao.API.request({
                    url: '/v1/user/me',
                    success: function(res){
                        console.log(res.properties);
                        signinWithKakao(res.properties);
                    }
                })
                // Kakao.API.request({
                //     url: '/v1/api/talk/friends',
                //     success: function(res) {
                //         console.log(res)
                //         // console.log(JSON.stringify(res));
                //     },
                //     fail: function(err) {
                //     //   console.log(JSON.stringify(error));
                //       console.log(err);
                //     }
                //   });

            },
                fail: function(err) {
                authError(JSON.stringify(err));
            }
        })
    }

   
    render(){
        const { signinWithKakao, authError } = this.props;
        return (
            <Box direction='column' flex background="rgba(25,24,29)">
                <PaddedBox fill align="center" justify="center">
                    <Heading>굿밤</Heading>
                    <Text>안심귀가앱</Text>
                    <br />
                    <br />
                    <br />
                    <RoundedButton
                        id="kakao-login-btn" 
                        label="카카오톡으로 로그인"
                        onClick={() => {this.signIn(signinWithKakao, authError)}}
                        type="button"
                        alignSelf="center"
                        color="rgba(255,222,2)"
                        focusIndicator
                        primary
                    />
                </PaddedBox>
            </Box>
        )
    }
};
  
export default connect(null, { signinWithKakao, authError })(Login);
