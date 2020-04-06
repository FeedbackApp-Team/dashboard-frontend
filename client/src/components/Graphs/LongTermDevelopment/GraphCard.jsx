import React from 'react';
import PropTypes from 'prop-types';

function GraphCard({ header, title }) {
  return (
    <div className="graph-card  text-truncate slider-item">
      <div className="graph-card-header">
        <h4>{header}</h4>
        <h3 className="text-truncate">{title}</h3>
      </div>
      <div className="graph-card-body">
        <div className="bar">
          <div className="bar-fill bar-fill-red" style={{ height: '40%' }} />
          <div className="bar-info">JAN</div>
        </div>
        <div className="bar">
          <div className="bar-fill bar-fill-red" style={{ height: '35%' }} />
          <div className="bar-info">FEB</div>
        </div>
        <div className="bar">
          <div className="bar-fill bar-fill-orange" style={{ height: '48%' }} />
          <div className="bar-info">MAR</div>
        </div>
        <div className="bar">
          <div className="bar-fill bar-fill-green" style={{ height: '68%' }} />
          <div className="bar-info">APR</div>
        </div>
        <div className="bar">
          <div className="bar-fill bar-fill-green" style={{ height: '72%' }} />
          <div className="bar-info">MAY</div>
        </div>
        <div className="bar">
          <div className="bar-fill bar-fill-orange" style={{ height: '48%' }} />
          <div className="bar-info">JUN</div>
        </div>
        <div className="bar">
          <div className="bar-fill bar-fill-green" style={{ height: '65%' }} />
          <div className="bar-info">JUL</div>
        </div>

        <div className="bar">
          <div className="bar-fill bar-fill-green" style={{ height: '73%' }} />
          <div className="bar-info">AUG</div>
        </div>

        <div className="bar">
          <div className="bar-fill bar-fill-green" style={{ height: '80%' }} />
          <div className="bar-info">SEP</div>
        </div>

        <div className="bar">
          <div className="bar-fill bar-fill-green" style={{ height: '85%' }} />
          <div className="bar-info">OCT</div>
        </div>

        <div className="bar">
          <div className="bar-fill bar-fill-green" style={{ height: '85%' }} />
          <div className="bar-info">NOV</div>
        </div>

        <div className="bar">
          <div className="bar-fill bar-fill-green" style={{ height: '90%' }} />
          <div className="bar-info">DEC</div>
        </div>
      </div>
    </div>
  );
}

GraphCard.propTypes = {
  header: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default GraphCard;
