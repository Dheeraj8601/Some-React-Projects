import PropTypes from 'prop-types';

function FoodInput({ handleKeyDown }) {
  return (
    <div className="d-flex justify-content-center my-2">
      <input
        type="text"
        className="form-control"
        placeholder="Enter food Item here"
        // onChange={handleOnChange}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}

FoodInput.propTypes = {
    handleKeyDown: PropTypes.func.isRequired,
};

export default FoodInput;
