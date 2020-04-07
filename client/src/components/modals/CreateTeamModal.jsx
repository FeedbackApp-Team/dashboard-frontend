/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

import facex2 from '../../assets/img/facex2.png';

export default function CreateTeamModal() {
  return (
    <div
      className="modal fade"
      id="createNewTeamModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="createNewTeamModalTitle"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="createNewTeamModalTitle">
              Create a new team
            </h5>
            <i className="icon-bell bell" />
            <img className="face" src={facex2} alt="" />
          </div>
          <div className="modal-body">
            <div className="input-container name">
              <label htmlFor="name">Name of team</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter here..."
              />
            </div>

            <div className="double-input">
              <div className="input-container description">
                <label htmlFor="desc">Team description</label>
                <input
                  type="text"
                  id="desc"
                  name="desc"
                  placeholder="Enter here..."
                />
              </div>

              <div className="input-container lead">
                <label htmlFor="lead">
                  Team lead <span>&#x1F6C8;</span>
                </label>

                <select name="lead" id="lead">
                  <option value="value01" selected>
                    Me
                  </option>
                  <option value="value02">Option I</option>
                  <option value="value03">Option II</option>
                </select>
              </div>
            </div>

            <div className="input-container member">
              <label htmlFor="member">Team members</label>
              <input
                type="text"
                id="member"
                name="member"
                placeholder="Enter name or email"
              />
            </div>
          </div>
          <div className="modal-footer">
            <a href="#" className="btn-custom-primary">
              Create team
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
