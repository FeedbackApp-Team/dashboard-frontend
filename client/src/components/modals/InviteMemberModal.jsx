/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

export default function InviteMemberModal() {
  return (
    <div
      className="modal fade"
      id="inviteNewModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="inviteNewModalTitle"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="inviteNewModalTitle">
              Invite new members
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <i className="icon-close" />
            </button>
          </div>
          <div className="modal-body">
            <div className="input-container">
              <label htmlFor="email">Enter emails</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="example@gmail.com"
              />
            </div>
          </div>
          <div className="modal-footer">
            <a href="#" className="btn-custom-primary">
              Invite
            </a>
            <a
              href="#"
              className="btn-custom-primary outline"
              data-dismiss="modal"
            >
              Cancel
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
