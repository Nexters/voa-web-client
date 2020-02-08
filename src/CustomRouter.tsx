import React from 'react';
import {
    Router, Route, Switch, Redirect,
  } from 'react-router-dom';
import { connect } from 'react-redux';
import history from 'history.js';
import Home from 'containers/Home';
import Login from 'containers/User/Login';
import NotFound from 'containers/NotFound';
import OnBoarding from 'containers/User/OnBoarding';
import CreateChatroom from 'containers/Chatroom/Create';
import ChatroomInvitation from 'containers/Chatroom/Invitation';
import NotificationList from 'containers/NotificationList';
import ChatroomTemp from 'containers/Chatroom/Chatroom.temp';
import Information from 'containers/Information';
import Settings from 'containers/Settings';

const PrivateRoute = ({ component: Component, isSignedIn, ...rest }) => {
    return (
        <Route {...rest} render={(props) => (
            isSignedIn === true ?
            <Component { ...props} />
            : <Redirect to={{
                pathname: '/login'
            }} />
        )}
        />
    );
};

interface Props {
    isSignedIn: string
}

class CustomRouter extends React.Component<Props> {
    render(){
    
    const { isSignedIn } = this.props;
    return (
        <Router history={history}>
            <Switch>
                <PrivateRoute path="/" exact component={Home} isSignedIn={isSignedIn}/>
                <PrivateRoute path="/onboarding" exact component={OnBoarding} isSignedIn={isSignedIn}/>
                <PrivateRoute path="/chatroom/create" exact component={CreateChatroom} isSignedIn={isSignedIn}/>
                <PrivateRoute path="/chatroom/create/invitation" exact component={ChatroomInvitation} isSignedIn={isSignedIn} />
                <PrivateRoute path="/notification" exact component={NotificationList} isSignedIn={isSignedIn} />
                <PrivateRoute path="/information" exact component={Information} isSignedIn={isSignedIn} />
                <PrivateRoute path="/settings" exact component={Settings} isSignedIn={isSignedIn} />

                <PrivateRoute path="/chatroom/temp" exact component={ChatroomTemp} isSignedIn={isSignedIn}/>
                <Route path="/login" exact component={Login} />
                <Route path="*" exact component={NotFound} />
            </Switch>
        </Router>
        );
    }
};
    
const select = (state: any) => ({
    isSignedIn: state.auth.isSignedIn,
});
  
export default connect(select, null)(CustomRouter);