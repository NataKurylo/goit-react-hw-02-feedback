import PropTypes from 'prop-types'
import css from './FeedbackOptions.module.css'

export const FeedbackOptions = ({ options, onLeaveFeedback}) => {
    return (
        <div className={css.wrap}>
            {options.map((option) => {
                return <button type='button' key={option} className={css.btn} onClick={() => {onLeaveFeedback(option) }}> {option} </button>
            })}
        </div>
    )
    
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired
}

