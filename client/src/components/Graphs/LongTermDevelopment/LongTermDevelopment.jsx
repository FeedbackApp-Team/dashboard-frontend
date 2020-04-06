/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import GraphCard from './GraphCard';
import { longTermDevelopment } from '../../../constants/graphData';

function LongTermDevelopment() {
  const renderGraphs = longTermDevelopment.map(({ title, id, header }) => (
    <GraphCard key={id} title={title} header={header} />
  ));
  return (
    <section className="section section-development slider">
      <div className="section-header">
        <p>Longterm development</p>
        <div className="dropdown-custom">
          <a href="#" className="dropdown-custom-trigger">
            Months
            <i className="icon-caret-down" />
          </a>
          <ul className="dropdown-custom-list">
            <li className="dropdown-custom-list-item">
              <a href="#" className="dropdown-custom-list-item-link">
                Option 1
              </a>
            </li>

            <li className="dropdown-custom-list-item">
              <a href="#" className="dropdown-custom-list-item-link">
                Option 2
              </a>
            </li>

            <li className="dropdown-custom-list-item">
              <a href="#" className="dropdown-custom-list-item-link">
                Option 3
              </a>
            </li>

            <li className="dropdown-custom-list-item">
              <a href="#" className="dropdown-custom-list-item-link">
                Option 4
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="section-body">{renderGraphs}</div>
    </section>
  );
}

export default LongTermDevelopment;
