/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import pic1 from '../../assets/img/p-01.png';

function FeedbackModal() {
  return (
    <div
      className="modal fade"
      id="feedbackModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="feedbackModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <img src={pic1} alt="" />
            <h5 className="modal-title" id="feedbackModalLabel">
              Give feedback to
              <span className="name">Juulia Martinez</span>
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
            <div className="rating productivity">
              <p>Productivity</p>
              <div className="stars">
                <input type="radio" name="productivity" id="productivity1" />
                <label htmlFor="productivity1" />

                <input type="radio" name="productivity" id="productivity2" />
                <label htmlFor="productivity2" />

                <input type="radio" name="productivity" id="productivity3" />
                <label htmlFor="productivity3" />

                <input type="radio" name="productivity" id="productivity4" />
                <label htmlFor="productivity4" />

                <input type="radio" name="productivity" id="productivity5" />
                <label htmlFor="productivity5" />
              </div>
            </div>

            <div className="rating teamworking">
              <p>Teamworking</p>
              <div className="stars">
                <input type="radio" name="teamworking" id="teamworking1" />
                <label htmlFor="teamworking1" />

                <input type="radio" name="teamworking" id="teamworking2" />
                <label htmlFor="teamworking2" />

                <input type="radio" name="teamworking" id="teamworking3" />
                <label htmlFor="teamworking3" />

                <input type="radio" name="teamworking" id="teamworking4" />
                <label htmlFor="teamworking4" />

                <input type="radio" name="teamworking" id="teamworking5" />
                <label htmlFor="teamworking5" />
              </div>
            </div>

            <div className="input-container">
              <label htmlFor="improvement">Add an improvement idea</label>
              <input
                type="text"
                id="improvement"
                name="improvement"
                placeholder="Write here..."
              />
            </div>

            <div className="input-container">
              <label htmlFor="compliment">Add a compliment</label>
              <input
                type="text"
                id="compliment"
                name="compliment"
                placeholder="Write here..."
              />
            </div>

            <a href="#" className="btn-custom-primary">
              Send feedback
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeedbackModal;
