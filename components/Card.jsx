import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ name, body }) => (
  <div className="card">
    <div className="card-title">
      <h1>{ name }</h1>
    </div>
    <div className="card-body">
      <p>{ body }</p>
    </div>
  </div>
);

Card.propTypes = {
  name: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default React.memo(Card);
