import React from 'react';
import PropTypes from 'prop-types';

export default function CommentCard({ img, name, date, text }) {
  return (
    <div className="comment">
      <div className="comment-header">
        <img className="comment-header-img" src={img} alt="" />
        <p className="comment-header-name">{name}</p>
        <p className="comment-header-date">{date}</p>
      </div>
      <div className="comment-body">
        <p className="comment-body-text">{text}</p>
      </div>
    </div>
  );
}

CommentCard.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
