import React from 'react';
import { Route, Switch } from 'react-router-dom';

import GiveFeedback from '../pages/GiveFeedback';

export default function () {
  return (
    <Switch>
      <Route exact path="/give-feedback" component={GiveFeedback} />
    </Switch>
  );
}
