import PropTypes from "prop-types";
import Item from "./Item";
import { useState } from "react";

function FoodItems({ Items }) {
  const [activeItems, setActiveItems] = useState([]);

  const handleBuyClick = (foodItem) => {
    alert(`${foodItem} being bought`);
    setActiveItems([...activeItems, foodItem]);
  };

  return (
    <ul className="list-group">
      {Items.map((item, index) => (
        <Item
          key={index}
          foodItem={item}
          bought={activeItems.includes(item)}
          handleBuyClick={() => handleBuyClick(item)}
        />
      ))}
    </ul>
  );
}

FoodItems.propTypes = {
  Items: PropTypes.array.isRequired,
};

export default FoodItems;
