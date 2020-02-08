import React from "react";
import { Box, Image } from "grommet";
import { connect } from "react-redux";
import { Menu } from "grommet-icons";
import { signout } from "store/auth/actions";
import { Link } from "react-router-dom";
import { PrimaryBold } from "components/Text";
import styled from "styled-components";
import keys from "config/keys";
import RoundedButtonSM from "components/Button/RoundedButtonSM";

const NavigatorBox = styled(Box)`
  padding: 15px 13px 10px 16px;
  border-bottom: 1px solid rgb(34, 34, 34);
`;

interface Props {
  signout: any;
  navigationClick: any;
  title: string;
}

class MobileBar extends React.Component<Props> {
  state = {
    userStatus: ""
  };

  renderOnState() {
    const { userStatus } = this.state;
    switch (userStatus) {
      case "구기전":
        return (
          <RoundedButtonSM
            type="button"
            label="귀가 시작"
            onClick={e => {
              console.log(e);
            }}
            status="default"
            alignSelf="center"
            color="rgb(29,30,43)"
            style={{ color: "rgb(255,177, 92)" }}
            primary
          />
        );
      case "귀가중":
        return (
          <RoundedButtonSM
            type="button"
            label="귀가 완료"
            onClick={e => {
              console.log(e);
            }}
            status="default"
            alignSelf="center"
            color="rgb(255,177,94)"
            primary
          />
        );

      case "귀가중 시간초과":
        return (
          <RoundedButtonSM
            type="button"
            label="귀가 완료"
            onClick={e => {
              console.log(e);
            }}
            status="default"
            alignSelf="center"
            style={{
              backgroundColor: "linear-gradient(rgb(255,129,109),rgb(255,88,59)"
            }}
            // color="rgb(255,177,94)"
            primary
          />
        );
      default:
        return;
    }
  }

  goBack() {
    const { signout } = this.props;
    signout();
  }
  render() {
    const { navigationClick, title } = this.props;
    return <React.Fragment>{this.renderOnState()}</React.Fragment>;
  }
}

const select = (state: any) => ({
  profile: state.auth.profile
});

export default connect(select, { signout })(MobileBar);
