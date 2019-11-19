import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import { HomePage, RecommendPage } from './pages/index';

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/rmd" component={RecommendPage} />
    </Switch>
  );
}
