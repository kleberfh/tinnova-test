import PropTypes from 'prop-types';

const LocalPropTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default LocalPropTypes;
