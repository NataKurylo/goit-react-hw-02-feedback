import PropTypes from 'prop-types'
import css from './Statistics.module.css'

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
        <>
        <ul className={css.list}>
                <li className={css.good}>Good: { good }</li>
                <li className={css.neutral}>Neutral: {neutral }</li>
                <li className={css.bad}>Bad: {bad }</li>
        </ul>
        <p className={css.result}>Total: {total()}</p>
        <p className={css.result}>Positive feedback: {good === 0 ? 0 + '%' : positivePercentage() + '%'}</p>
        </>
    )
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.func.isRequired,
    positivePercentage: PropTypes.func.isRequired
}

// ---------------------------II version------------------------------
// export const Statistics = ({ options, state, total, positivePercentage }) => {
//     const { good} = state
//     return (
//         <>
//         <ul className={css.list}>
//             {options.map((option) => {
//                 return <li key={option} className={css[option]}>{option}: {state[option]} </li>
//             })}
//         </ul>
//         <p className={css.result}>Total: {total()}</p>
//         <p className={css.result}>Positive feedback: {good === 0 ? 0+'%' : positivePercentage()+'%'}</p>
//         </>
//     )
// }
 
// Statistics.propTypes = {
//     options: PropTypes.arrayOf(PropTypes.string).isRequired,
//     state: PropTypes.objectOf(PropTypes.number).isRequired,
//     total: PropTypes.func.isRequired,
//     positivePercentage: PropTypes.func.isRequired
// }