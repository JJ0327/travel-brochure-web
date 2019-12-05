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
