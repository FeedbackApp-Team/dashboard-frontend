import React from 'react';
import PropTypes from 'prop-types';

function ProgressBar({ title, feedback, improvement, progress }) {
  const arrow =
    Number(progress) < 50 ? 'icon-arrow-circle-down' : 'icon-arrow-circle-up';

  const goodOrOk = Number(progress) > 60 ? 'good' : 'ok';
  const upOrDown = Number(progress) < 40 ? 'down' : 'up';

  return (
    <div className="progress-custom">
      <p className="progress-custom-sub">{title}</p>
      <div className="progress-custom-info">
        <h3>{feedback}</h3>
        <p className={`${upOrDown} text-truncate`}>
          <i className={arrow} />
          {improvement}
        </p>
      </div>
      <div className="progress-custom-bar">
        <div
          className={`progress-custom-bar-fill ${goodOrOk}`}
          fill-progress={progress}
        />
      </div>
    </div>
  );
}

ProgressBar.propTypes = {
  title: PropTypes.string.isRequired,
  feedback: PropTypes.string.isRequired,
  improvement: PropTypes.string.isRequired,
  progress: PropTypes.string.isRequired,
};

export default ProgressBar;
