import {useState} from "react";
import PropTypes from "prop-types";

export default function Input({
  value,
  label,
  setValue,
  disabled,
  validator,
  applyMask,
  helperText
})
{
  const [isValid, setIsValid] = useState(null);
  const [focused, setFocused] = useState(false);

  const handleFocus = () => {
    setFocused(true);
  }

  const handleBlur = () => {
    setFocused(false);
    setIsValid(validator(value));
    setValue(applyMask(value));
  }

  return(
    <div className={`input-container ${isValid === false && 'input-error'}`}>
      <input
        id={label}
        type="text"
        value={value}
        disabled={disabled}
        className={"input"}
        onBlur={handleBlur}
        autoComplete={'off'}
        onFocus={handleFocus}
        onChange={e => setValue(e.target.value)}
      />
      <label
        htmlFor={label}
        className={`input-label ${(focused || value !== '') && 'input-label-animate'}`}
      >
        {label}
      </label>
      {(isValid === false) && (
        <p className={"text-xs text-danger mt-1"}>
          {helperText ? helperText : 'Campo inválido.'}
        </p>
      )}
    </div>
  );
}

Input.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired,
  label: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  helperText: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  validator: PropTypes.func,
  disabled: PropTypes.bool,
  applyMask: PropTypes.func
};

Input.defaultProps = {
  disabled: false,
  helperText: null,
  validator: () => {},
  applyMask: value => value
}