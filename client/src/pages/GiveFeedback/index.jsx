import React from 'react';
import GiveFeedback from './Component';
import FeedbackModal from '../../components/modals/FeedbackModal';

export default function index() {
  return (
    <main className="give-feedback">
      <GiveFeedback />
      <FeedbackModal />
    </main>
  );
}
