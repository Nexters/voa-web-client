import React from 'react';
import {
    Router, Route, Switch, Redirect,
  } from 'react-router-dom';
import history from 'history.js';
// import User from 'containers/User';
// import Page from 'components/Page';
import Home from 'containers/Home';
import Login from 'containers/User/Login';
import NotFound from 'containers/NotFound';
import OnBoarding from 'containers/OnBoarding';
import { connect } from 'react-redux';
import CreateChatroom from 'containers/CreateChatroom';

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