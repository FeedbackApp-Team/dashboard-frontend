import React from 'react';
import { Route, Switch } from 'react-router-dom';

import TeamAverageCharts from '../pages/TeamAverageCharts';
import GiveFeedback from '../pages/GiveFeedback';
import TeamComments from '../pages/TeamComments';
import Members from '../pages/Members';

export default function () {
  return (
    <Switch>
      <Route exact path="/" component={TeamAverageCharts} />
      <Route exact path="/teams-average-charts" component={TeamAverageCharts} />
      <Route exact path="/teams-comments" component={TeamComments} />
      <Route exact path="/teams-members" component={Members} />
      <Route exact path="/give-feedback" component={GiveFeedback} />
    </Switch>
  );
}
