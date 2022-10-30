import PropTypes from 'prop-types';
import { StatisticsList } from './statistics.styled';
import { StatisticsItem } from './statistics.styled';

const Statistics = ({ options, total, positivePercentage }) => (
  <StatisticsList>
    {Object.keys(options).map(el => (
      <StatisticsItem key={el}>
        <p>
          {el}: {options[el]}
        </p>
      </StatisticsItem>
    ))}
    <li>
      <p>Total:{total}</p>
    </li>
    <li>
      <p>Positive feedback: {positivePercentage}%</p>
    </li>
  </StatisticsList>
);
export default Statistics;

Statistics.propsTypes = {
  options: PropTypes.object.isRequired,
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};
