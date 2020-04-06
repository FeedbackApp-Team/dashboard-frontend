import React from 'react';

import ProgressBar from './ProgressBar';
import { weekAverages } from '../../../constants/graphData';

function WeekAverages() {
  const renderContent = weekAverages.map(
    ({ title, feedback, improvements, id, progress }) => {
      return (
        <ProgressBar
          key={id}
          title={title}
          feedback={feedback}
          improvement={improvements}
          progress={progress}
        />
      );
    }
  );
  return (
    <section className="section section-averages">
      <div className="section-header">
        <p>Two week averages</p>
      </div>
      <div className="section-body">{renderContent}</div>
    </section>
  );
}

export default WeekAverages;
