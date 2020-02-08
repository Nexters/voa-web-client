import React from "react";
import { Box, Image } from "grommet";
import { signinWithKakao, authError } from "store/auth/actions";
import Kakao from "kakaojs";
import { connect } from "react-redux";
import PaddedBox from "components/PaddedBox";
import RoundedButton from "components/Button/RoundedButton";
import { PrimaryBold, SecondaryBold } from "components/Text";
import Avatar from "components/Avatar";
import keys from "config/keys";

interface Props {
  signinWithKakao: any;
  authError: any;
}

class Login extends React.Component<Props> {
  componentDidMount() {
    if (Kakao.Auth == null) {
      Kakao.init("10de9ea7440bb6acbc6a51a806269891");
    }
  }
  signIn(signinWithKakao, authError) {
    Kakao.Auth.login({
      persistAccessToken: true,
      persistRefreshToken: true,
      scope: "profile",

      success: function(authObj) {
        console.log(authObj);
        Kakao.API.request({
          url: "/v1/user/me",
          success: function(res) {
            console.log(res.properties);
            signinWithKakao(res.properties);
          }
        });
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
    });
  }

  render() {
    const { signinWithKakao, authError } = this.props;
    return (
      <Box direction="column" flex background="rgb(29,30,43)">
        <PaddedBox fill align="center" justify="center">
          <Avatar size="79px" imageURL="https://via.placeholder.com/150" />
          <Box height="16px" />
          <PrimaryBold size="30px">다옴</PrimaryBold>
          <Box height="8px" />
          <SecondaryBold>안심귀가앱</SecondaryBold>
          <Box height="61px" />
          <RoundedButton
            id="kakao-login-btn"
            label="카카오톡으로 로그인"
            onClick={() => {
              this.signIn(signinWithKakao, authError);
            }}
            type="button"
            alignSelf="center"
            color="rgb(29,30,43)"
            focusIndicator
            primary
            icon={<Image src={keys.kakaoIcon} width="24px" />}
          ></RoundedButton>
        </PaddedBox>
      </Box>
    );
  }
}

export default connect(null, { signinWithKakao, authError })(Login);
