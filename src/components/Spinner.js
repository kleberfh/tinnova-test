import PropTypes from "prop-types";

export default function Spinner({ size = 24, color = '#FFF' }) {
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRightColor: color,
        borderBottomColor: color,
        borderTopColor: 'rgba(0, 0, 0, 0)',
        borderLeftColor: 'rgba(0, 0, 0, 0)',
      }}
      className={"rounded-full border-2 mx-auto animate-spin"}
    />
  );
}

Spinner.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string
};

Spinner.defaultProps ={
  size: 24,
  color: '#FFF'
}