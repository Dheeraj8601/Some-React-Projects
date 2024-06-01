import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";

const Msg = () => {
  const todoItemsObj = useContext(TodoItemsContext);
  const todoItems = todoItemsObj.todoItems;

  return todoItems.length === 0 && <p>Enjoy the day</p>;
};

export default Msg;



// Without context 
// import PropTypes from "prop-types";

// const Msg = ({ todoItems }) => {
    
//   return todoItems.length === 0 && <p>Enjoy the day</p>
// };

// Msg.propTypes = {
//   todoItems: PropTypes.array.isRequired,
// };

// export default Msg;