import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import {
  HomePage,
  TravelPage,
  JoinPage,
  AuthPage,
  NewsPage,
  MapPage,
} from './pages/index';

const posStyle = {
  top: '40%',
  left: '40%',
  position: 'absolute',
  justifyContent: 'center',
  alignItem: 'center',
  textAlign: 'center',
};
const NBtnStyle = {
  borderRadius: '10px',
  padding: '10px 20px',
  fontSize: '16px',
  fontWeight: 'bold',
  backgroundColor: 'orange',
};

const Page404 = ({ location, history }) => {
  return (
    <div style={posStyle}>
      <h2>
        페이지를 찾을 수 없어요!! <br></br>현재 페이지:{' '}
        <code>{location.pathname}</code>
      </h2>
      <button
        style={NBtnStyle}
        onClick={() => {
          history.push('/');
        }}
      >
        메인으로 가기
      </button>
    </div>
  );
};
export default function App() {
  const authenticated = window.localStorage.getItem('userInfo');
  return (
    <Switch>
      <Route
        exact
        path="/"
        render={props => <HomePage {...props} authenticated={authenticated} />}
      />
      <Route
        path="/travel"
        render={props => (
          <TravelPage {...props} authenticated={authenticated} />
        )}
      />
      <Route path="/news" component={NewsPage} />
      <Route path="/map" component={MapPage} />
      <Route component={Page404} />
      <Route
        path="/auth"
        render={props => <AuthPage {...props} authenticated={authenticated} />}
      />
      <Route
        path="/join"
        render={props => <JoinPage {...props} authenticated={authenticated} />}
      />
    </Switch>
  );
}
