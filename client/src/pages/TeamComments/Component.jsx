/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/no-array-index-key */

import React from 'react';
import comments from '../../constants/comments';
import CommentCard from '../../components/Cards/CommentCard';

export default function Component() {
  const renderComments = comments.map((comment) => (
    <CommentCard
      key={comment.id}
      img={comment.img}
      name={comment.name}
      date={comment.date}
      text={comment.text}
    />
  ));

  return (
    <section className="section-comments">
      <div className="section-comments-header">
        <p className="text-truncate">
          Team members opinions, how we could improve.
        </p>

        <div className="dropdown-custom">
          <a href="#" className="dropdown-custom-trigger">
            All
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
      <div className="section-comments-body">{renderComments}</div>
    </section>
  );
}
