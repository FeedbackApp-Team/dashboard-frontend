import React from 'react';
import GiveFeedback from './Component';
import FeedbackModal from '../../components/modals/FeedbackModal';
import CreateTeamModal from '../../components/modals/CreateTeamModal';

export default function index() {
  return (
    <main className="give-feedback">
      <GiveFeedback />
      <FeedbackModal />
      <CreateTeamModal />
    </main>
  );
}
