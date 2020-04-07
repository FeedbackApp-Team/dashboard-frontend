/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

export default function Table({ children }) {
  return (
    <table className="table-header-fixed flex-table">
      <thead>
        <tr>
          <th>
            Name
            <i className="icon-caret-down" />
          </th>
          <th>
            Job title
            <i className="icon-caret-down" />
          </th>
          <th>
            Average feedback
            <i className="icon-caret-down" />
          </th>
          <th>
            <div className="dropdown-custom">
              <a href="#" className="dropdown-custom-trigger">
                <i className="icon-list" />
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
          </th>
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  );
}
