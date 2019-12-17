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
  NotFoundPage,
  PostPage,
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
      <Route
        path="/news"
        render={props => <NewsPage {...props} authenticated={authenticated} />}
      />
      <Route
        path="/posts"
        render={props => <PostPage {...props} authenticated={authenticated} />}
      />
      <Route
       path="/map"
       render={props => <MapPage {...props} authenticated={authenticated} />}
      />
      <Route
        path="/auth"
        render={props => <AuthPage {...props} authenticated={authenticated} />}
      />
      <Route
        path="/join"
        render={props => <JoinPage {...props} authenticated={authenticated} />}
      />
      <Route component={NotFoundPage} />
    </Switch>
  );
}
