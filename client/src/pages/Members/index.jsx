/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Component from './Component';
import InviteMemberModal from '../../components/modals/InviteMemberModal';
import CreateTeamModal from '../../components/modals/CreateTeamModal';

export default function () {
  return (
    <main className="teams-people-view">
      <div className="teams-people-view-header">
        <a
          href="#"
          className="btn-custom-primary"
          data-toggle="modal"
          data-target="#inviteNewModal"
        >
          Invite new members
        </a>
        <div className="input-container">
          <i className="icon-search" />
          <input type="text" placeholder="Search..." />
        </div>
      </div>
      <Component />
      <InviteMemberModal />
      <CreateTeamModal />
    </main>
  );
}
