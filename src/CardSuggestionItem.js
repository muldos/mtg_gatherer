import PropTypes from 'prop-types';
import React from 'react';

const CardSuggestionItem = ({cardName}) => (
  <div>
    <span>{cardName}</span>
  </div>
);

CardSuggestionItem.propTypes = {
    cardName: PropTypes.string.isRequired,
};

export default CardSuggestionItem;