import * as React from 'react';
const connect = require('react-redux').connect;
const Link = require('react-router').Link;

import { loginUser, logoutUser } from '../feature/session';
import Button from '../components/button';
import Content from '../components/content';
import LoginModal from '../components/login/login-modal';
import Logo from '../components/logo';
import Navigator from '../components/navigator';
import NavigatorItem from '../components/navigator-item';

interface IAppProps extends React.Props<any> {
  session: any;
  login: () => void;
  logout: () => void;
};

function mapStateToProps(state) {
  return {
    session: state.session,
    router: state.router,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    login: () => dispatch(loginUser()),
    logout: () => dispatch(logoutUser()),
  };
}

class App extends React.Component<IAppProps, void> {
  render() {
    const { children, session, login, logout } = this.props;
    const token = session.get('token', false);
    const isLoggedIn = token && token !== null && typeof token !== 'undefined';
    const firstName = session.getIn(['user', 'firstName'], '');
    const lastName = session.getIn(['user', 'lastName'], '');

    return (
      <div>
        <LoginModal
          onSubmit={ login }
          isPending={ session.get('isLoading', false) }
          hasError={ session.get('hasError', false) }
          isVisible={ !isLoggedIn } />
        <Navigator>
          <NavigatorItem mr>
            <Logo />
          </NavigatorItem>
          <NavigatorItem isVisible={ isLoggedIn } mr>
            <Link to="/">Counter</Link>
          </NavigatorItem>
          <NavigatorItem isVisible={ isLoggedIn }>
            <Link to="/about">About Us</Link>
          </NavigatorItem>
          <div className="flex flex-auto"></div>
          <NavigatorItem isVisible={ isLoggedIn } mr>
            <b>{ `${ firstName } ${ lastName }` }</b>
          </NavigatorItem>
          <NavigatorItem isVisible={ isLoggedIn }>
            <Button onClick={ logout } className="bg-red white">
              Logout
            </Button>
          </NavigatorItem>
        </Navigator>
        <Content isVisible={ isLoggedIn }>
          { children }
        </Content>
      </div>
    );
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
