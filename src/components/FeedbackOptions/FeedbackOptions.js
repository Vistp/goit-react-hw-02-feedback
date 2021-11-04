import React from 'react';
// import './FeedbackOptions.css'; 
import PropTypes from 'prop-types';

const FeedbackOptions = ( {options, onLeaveFeedback} ) => {
    return options.map((element) => {
        return (
            <button
                key={element}
                className="Feedback__button"
                type="button"
                onClick={() => onLeaveFeedback(element)}>
                {element}
            </button>
        )
    })
}
FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
}

export default FeedbackOptions;