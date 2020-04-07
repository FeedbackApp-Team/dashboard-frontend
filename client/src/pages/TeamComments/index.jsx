import React from 'react';
import Component from './Component';
import CreateTeamModal from '../../components/modals/CreateTeamModal';

export default function () {
  return (
    <main className="teams-comments">
      <Component />
      <CreateTeamModal />
    </main>
  );
}
