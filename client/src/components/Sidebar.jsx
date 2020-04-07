/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../assets/img/logo-png.png';
import googlePlay from '../assets/img/play-big.png';
import appleIcon from '../assets/img/apple-big.png';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-menu-toggle">
        <i className="icon-chevron-left" />
      </div>
      <div className="sidebar-main">
        <ul className="sidebar-main-top">
          <li className="sidebar-main-item logo">
            <Link to="/teams-average-charts" className="sidebar-main-link">
              <img src={logo} alt="logo" />
            </Link>
          </li>
          <li className="sidebar-main-item active">
            <Link
              to="/teams-average-charts"
              className="sidebar-main-link sidebar-main-link-icon"
            >
              <i className="icon-users" />
            </Link>
          </li>

          <li className="sidebar-main-item">
            <Link
              to="/give-feedback"
              className="sidebar-main-link sidebar-main-link-icon"
            >
              <i className="icon-phone" />
            </Link>
          </li>
        </ul>

        <ul className="sidebar-main-bottom">
          <li className="sidebar-main-item">
            <Link
              to="/teams-settings-general"
              className="sidebar-main-link sidebar-main-link-icon"
            >
              <i className="icon-settings" />
            </Link>
          </li>
          <li className="sidebar-main-item">
            <Link
              to="/sign-in"
              className="sidebar-main-link sidebar-main-link-icon"
            >
              <i className="icon-exit" />
            </Link>
          </li>
          <li className="sidebar-main-item logo">
            <Link to="/single-user" className="sidebar-main-link">
              <div className="letter-circle">
                <span>T</span>
              </div>
            </Link>
          </li>
        </ul>
      </div>

      <div className="sidebar-menu">
        <div className="sidebar-menu-header">
          <h2>Teams</h2>
          <Link to="#">
            <i className="icon-plus-circle" />
          </Link>
        </div>
        <div className="input-container">
          <i className="icon-search" />
          <input type="text" placeholder="Search..." />
        </div>
        <ul className="sidebar-menu-list">
          <li className="sidebar-menu-list-item">
            <Link to="#" className="sidebar-menu-list-item-link active">
              Team Marketing
            </Link>
          </li>
          <li className="sidebar-menu-list-item">
            <Link to="#" className="sidebar-menu-list-item-link">
              Team Electric Boys
            </Link>
          </li>
          <li className="sidebar-menu-list-item">
            <Link to="#" className="sidebar-menu-list-item-link">
              Team Sales
            </Link>
          </li>
          <li className="sidebar-menu-list-item">
            <Link to="#" className="sidebar-menu-list-item-link">
              Team Water Pipes
            </Link>
          </li>
        </ul>
        <div className="sidebar-menu-footer">
          <Link
            to="#"
            className="sidebar-menu-footer-create-new"
            data-toggle="modal"
            data-target="#createNewTeamModal"
          >
            Create a new team
          </Link>
          <Link to="#" className="btn-custom-white">
            Get the mobile app
            <img
              src={googlePlay}
              alt="google play store icon"
              className="play-icon"
            />
            <img
              src={appleIcon}
              alt="apple store icon"
              className="apple-icon"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
