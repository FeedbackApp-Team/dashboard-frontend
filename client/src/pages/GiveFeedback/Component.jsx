/* eslint-disable react/no-array-index-key */
import React from 'react';

import cupsx2 from '../../assets/img/cupsx2.png';
import userImages from '../../constants/userImages';

const imgs = [...userImages, ...userImages, ...userImages, ...userImages];

function GiveFeedback() {
  const renderUsers = imgs.map((img, idx) => {
    return (
      <div className="give-feedback-people-body-person" key={idx}>
        <img src={img} alt="" />
        <p>Fred Okello</p>
      </div>
    );
  });
  return (
    <div className="give-feedback-people">
      <div className="give-feedback-people-header">
        <img src={cupsx2} alt="Clipart of mugs" />
        <h2 className="text-truncate">
          Hey Max, welcome to give feedback
          <span className="text-truncate">Please select a person below.</span>
        </h2>
      </div>
      <div className="input-container">
        <i className="icon-user-outline" />
        <input type="text" placeholder="Search..." />
      </div>
      <div
        className="give-feedback-people-body"
        data-toggle="modal"
        data-target="#feedbackModal"
      >
        {renderUsers}
      </div>
    </div>
  );
}

export default GiveFeedback;
