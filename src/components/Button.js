import Spinner from "./Spinner";
import PropTypes from "prop-types";
import LocalPropTypes from "./localPropTypes/LocalPropTypes";

export default function Button({
 action,
 children,
 className = "",
 type = 'success',
 loading = false,
 disabled = false
}) {
  const handleClick = () => {
    if (disabled) return;
    action();
  }

  return (
    <div
      onClick={handleClick}
      className={`${className} ${disabled ? 'button-disabled' : 'button'} ${type === 'success' ? 'button-success' : 'button-danger'}`}
    >
      {loading ? (<Spinner />) : children}
    </div>
  );
};

Button.propTypes = {
  children: PropTypes.oneOfType([
    LocalPropTypes.children,
    PropTypes.string
  ]).isRequired,
  action: PropTypes.func.isRequired,
  className: PropTypes.string,
  type: PropTypes.string,
  loading: PropTypes.bool,
  disabled: PropTypes.bool
};

Button.defaultProps = {
  className: "",
  type: "success",
  loading: false,
  disabled: false
};