import * as React from 'react';
import { connect } from 'react-redux';
import { loginUser, logoutUser } from '../actions/session';
import { Link } from 'react-router';
import Button from '../components/Button';
import Content from '../components/Content';
import LoginModal from '../components/LoginModal';
import Logo from '../components/Logo';
import Navigator from '../components/Navigator';
import NavigatorItem from '../components/NavigatorItem';
const objectAssign = require('object-assign');
const Bass = require('basscss-radium');

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

const App = ({ children, session, login, logout }) => {
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
        <div style={ objectAssign({}, Bass.flex, Bass.flexAuto) }>
          <NavigatorItem style={ Bass.p1 }>
            <Logo />
          </NavigatorItem>
          <NavigatorItem isVisible={ isLoggedIn } style={ Bass.p1 }>
            <Link to="/">Counter</Link>
          </NavigatorItem>
          <NavigatorItem isVisible={ isLoggedIn } style={ Bass.p1 }>
            <Link to="/about">About Us</Link>
          </NavigatorItem>
        </div>
        <div style={ objectAssign({}, Bass.flex, Bass.flexEnd, Bass.flexCenter) }>
          <NavigatorItem isVisible={ isLoggedIn }
            style={ objectAssign({}, Bass.p1, Bass.bold) }>
            { `${ session.getIn(['user', 'firstName'], '') }
               ${ session.getIn(['user', 'lastName'], '') } ` }
          </NavigatorItem>
          <NavigatorItem isVisible={ isLoggedIn }>
            <Button onClick={ logout }
              style={ objectAssign({}, Bass.bgRed, Bass.white) }>
              Logout
            </Button>
          </NavigatorItem>
        </div>
      </Navigator>
      <Content isVisible={ isLoggedIn }>
        { children }
      </Content>
    </div>
  );
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
