import React from 'react';
import WeekAverages from '../../components/Graphs/WeekAverages/WeekAverages';
import LongTermDevelopment from '../../components/Graphs/LongTermDevelopment/LongTermDevelopment';
import CreateTeamModal from '../../components/modals/CreateTeamModal';

export default function () {
  return (
    <main className="teams-average-charts">
      <div className="teams-average-charts-body">
        <WeekAverages />
        <LongTermDevelopment />
      </div>
      <CreateTeamModal />
    </main>
  );
}
