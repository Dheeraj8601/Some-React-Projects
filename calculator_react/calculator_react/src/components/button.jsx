import PropTypes from "prop-types";

function Button({ value, onClick, className }) {
  return (
    <input
      className={`button ${className}`}
      type="button"
      value={value}
      onClick={() => onClick(value)}
    />
  );
}

Button.propTypes = {
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
};

export default Button;
