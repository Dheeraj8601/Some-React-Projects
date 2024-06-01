import PropTypes from "prop-types";

const Item = ({ foodItem, bought, handleBuyClick }) => {
  return (
    <li
      className={`list-group-item d-flex justify-content-between align-items-center ${bought ? "active" : ""}`}
    >
      <span>{foodItem}</span>
      <button className="btn btn-info" onClick={() => handleBuyClick(foodItem)}>
        Buy
      </button>
    </li>
  );
};

Item.propTypes = {
  foodItem: PropTypes.string.isRequired,
  bought: PropTypes.bool.isRequired,
  handleBuyClick: PropTypes.func.isRequired,
};

export default Item;
