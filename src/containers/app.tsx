import * as React from 'react';
import { connect } from 'react-redux';
import { loginUser, logoutUser } from '../actions/session';
import { Link } from 'react-router';
import Button from '../components/button';
import Content from '../components/content';
import LoginModal from '../components/login-modal';
import Logo from '../components/logo';
import Navigator from '../components/navigator';
import NavigatorItem from '../components/navigator-item';
import DevTools from './dev-tools';

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
    const { session, login, logout, children } = this.props;
    const token = session.get('token', false);
    const isLoggedIn = token && token !== null && typeof token !== 'undefined';

    return (
      <div>
        <LoginModal
          onSubmit={ login }
          isPending={ session.get('isLoading', false) }
          hasError={ session.get('hasError', false) }
          isVisible={ !isLoggedIn } />
        <Navigator>
          <div className="flex flex-auto">
            <NavigatorItem className="p1">
              <Logo />
            </NavigatorItem>
            <NavigatorItem isVisible={ isLoggedIn } className="p1">
              <Link to="/">Counter</Link>
            </NavigatorItem>
            <NavigatorItem isVisible={ isLoggedIn } className="p1">
              <Link to="/about">About Us</Link>
            </NavigatorItem>
          </div>
          <div className="flex flex-end">
            <NavigatorItem isVisible={ isLoggedIn } className="p1 bold">
              { `${ session.getIn(['user', 'firstName'], '') }
                ${ session.getIn(['user', 'lastName'], '') } ` }
            </NavigatorItem>
            <NavigatorItem isVisible={ isLoggedIn }>
              <Button onClick={ logout } className="bg-red white">
                Logout
              </Button>
            </NavigatorItem>
          </div>
        </Navigator>
        <Content isVisible={ isLoggedIn }>
          { children }
        </Content>
        <DevTools />
      </div>
    );
  };
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
