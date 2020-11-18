import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Team from './screens/Team/Team';

export default () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Team}/>
      </Switch>
    </BrowserRouter>
  );
}
