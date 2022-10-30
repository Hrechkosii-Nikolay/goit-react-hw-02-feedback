import PropTypes from 'prop-types';
import { ButtonStyle } from './feedbackOptions.styled';
import { ButtonsList } from './feedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <ButtonsList>
    {Object.keys(options).map(el => (
      <li key={el}>
        <ButtonStyle type="button" onClick={() => onLeaveFeedback(el)}>
          {el}
        </ButtonStyle>
      </li>
    ))}
  </ButtonsList>
);

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
