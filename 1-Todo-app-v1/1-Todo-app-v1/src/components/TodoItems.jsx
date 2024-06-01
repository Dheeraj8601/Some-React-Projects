import { useContext } from "react";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";
import { TodoItemsContext } from "../store/todo-items-store";

const TodoItems = () => {
 const todoItemsobj = useContext(TodoItemsContext);
 const todoItems = todoItemsobj.todoItems;
 const onDeleteClick = todoItemsobj.deleteItem;
 console.log(todoItems)

  return (
    <div className="items-container">
      {todoItems.map((item) => (
        <TodoItem
          key={item.name}
          todoName={item.name}
          todoDate={item.dueDate}
          onDeleteClick={onDeleteClick}
        />
      ))}
    </div>
  );
};

TodoItems.propTypes = {
  // todoItems: PropTypes.array.isRequired,
  onDeleteClick: PropTypes.func,
};

export default TodoItems;













// without context



// import TodoItem from "./TodoItem";
// import PropTypes from "prop-types";

// const TodoItems = ({ todoItems, onDeleteClick }) => {
//   return (
//     <div className="items-container">
//       {todoItems.map((item) => (
//         <TodoItem
//           key={item.name}
//           todoName={item.name}
//           todoDate={item.dueDate}
//           onDeleteClick={onDeleteClick}
//         />
//       ))}
//     </div>
//   );
// };

// TodoItems.propTypes = {
//   todoItems: PropTypes.array.isRequired,
//   onDeleteClick: PropTypes.func,
// };

// export default TodoItems;
