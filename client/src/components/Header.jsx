/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';

import face from '../assets/img/facex2.png';
import face2 from '../assets/img/p-06.png';

function Header({ location }) {
  const { pathname } = location;
  const title =
    pathname === '/give-feedback' ? 'Give Feedback' : 'Team Marketing';

  // Temporary render title & links for Header.jsx
  const renderLinks = pathname !== '/give-feedback' && (
    <div className="header-bottom">
      <div className="choose">
        <Link to="/teams-average-charts" className="active">
          Charts
        </Link>

        <Link to="/teams-comments">Comments</Link>

        <Link to="./teams-members">Members</Link>

        <Link to="/teams-settings-general">Settings</Link>

        <Link to="/teams-settings-general">Reports</Link>
      </div>
    </div>
  );

  return (
    <header className="header">
      <div className="header-top">
        <h1 className="header-top-title text-truncate">{title}</h1>
        <div className="input-container">
          <i className="icon-search" />
          <input type="text" placeholder="Search..." />
        </div>

        <i className="icon-bell bell" />

        <div className="dropdown-custom">
          <Link to="#" className="dropdown-custom-trigger">
            <img className="face" src={face} alt="" />
          </Link>
          <ul className="dropdown-custom-list">
            <li className="dropdown-custom-list-header">
              <img src={face2} alt="" />
              <div className="user-info">
                <p className="user-info-name">Peter Jöback</p>
                <Link to="#">Change photo</Link>
              </div>
            </li>
            <li className="dropdown-custom-list-item">
              <Link to="#" className="dropdown-custom-list-item-link">
                Settings
              </Link>
            </li>

            <li className="dropdown-custom-list-item">
              <Link to="#" className="dropdown-custom-list-item-link">
                Install
              </Link>
            </li>

            <li className="dropdown-custom-list-footer">
              <Link to="./sign-in">Sign out</Link>
            </li>
          </ul>
        </div>
      </div>
      <p className="header-small text-truncate">
        We make great ads, campaigns and create a super brand.
      </p>
      {renderLinks}
    </header>
  );
}

Header.propTypes = {
  location: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default withRouter(Header);
