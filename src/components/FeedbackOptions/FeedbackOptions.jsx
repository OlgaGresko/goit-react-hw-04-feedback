import React from 'react';
import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css'

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div className={css.list}>
      {options.map(key => {
        return (
          <button key={key} type="button" className={css.item} onClick={() => onLeaveFeedback(key)}>
            {[key]}
          </button>
        );
      })}
    </div>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.oneOf(['good', 'neutral', 'bad']))
    .isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
