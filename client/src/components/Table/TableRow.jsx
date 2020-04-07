/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';

export default function TableRow({ img, name, email }) {
  return (
    <tr>
      <td className="table-header-fixed-col-1">
        <a href="../single-user/index.html">
          <img src={img} alt="" />
          <p>
            <span className="name">{name}</span>
            <span className="email">{email}</span>
          </p>
        </a>
      </td>
      <td className="table-header-fixed-col-2">
        <p>Team lead</p>
      </td>
      <td className="table-header-fixed-col-3">
        <a href="#" className="btn-custom-table green">
          Good
        </a>
      </td>
      <td className="table-header-fixed-col-4">
        <div className="dropdown-custom">
          <a href="#" className="dropdown-custom-trigger">
            <i className="icon-ellipsis" />
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
      </td>
    </tr>
  );
}

TableRow.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};
