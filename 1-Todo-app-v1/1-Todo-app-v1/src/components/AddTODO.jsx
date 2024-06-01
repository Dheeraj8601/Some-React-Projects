import { useState, useRef, useContext } from "react";
import { MdOutlineAddCircle } from "react-icons/md";
import { TodoItemsContext } from "../store/todo-items-store";

function AddTODO() {
  const todoItemsobj = useContext(TodoItemsContext);
  const onNewItem = todoItemsobj.addNewItem;

  const [todoName, setTodoName] = useState("");
  // const [dueDate, setDueDate] = useState("");
  const [error, setError] = useState("");
  const dueDateElement = useRef();



  const handleNameChange = (event) => {
    event.preventDefault(); // Prevents the page from refreshing when the form is submitted
    const today = new Date().toISOString().split("T")[0];

    /* You can add below code for useRef */
    const dueDate = dueDateElement.current.value;

    if (!todoName) {
      setError("Todo name cannot be empty.");
    } else if (!dueDate) {
      setError("Due date cannot be empty.");
    } else if (dueDate >= today) {
      onNewItem(todoName, dueDate);
      setTodoName("");
      // setDueDate("");
      dueDateElement.current.value = "";
      setError("");
    } else {
      setError("Due date must be today or later.");
      setTodoName("");
      // setDueDate("");
      dueDateElement.current.value = "";
    }
  };

  return (
    <div className="container text-center">
      <form className="row kg-row" onSubmit={handleNameChange}>
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter Todo Here"
            value={todoName}
            onChange={(e) => setTodoName(e.target.value)}
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            ref={dueDateElement}
            // value={dueDate}
            // onChange={(e) => setDueDate(e.target.value)}
          />
        </div>
        <div className="col-2">
          <button type="submit" className="btn btn-success kg-button">
            <MdOutlineAddCircle />
          </button>
        </div>
      </form>
      {error && <div className="text-danger my-2">{error}</div>}
    </div>
  );
}



export default AddTODO;












/* without ContextAPI */
// import { useState ,useRef} from "react";
// import PropTypes from "prop-types";
// import { MdOutlineAddCircle } from "react-icons/md";

// function AddTODO({ onNewItem }) {
//   const [todoName, setTodoName] = useState("");
//   // const [dueDate, setDueDate] = useState("");
//   const [error, setError] = useState("");
//   const dueDateElement = useRef();

//   const handleNameChange = (event) => {
//     event.preventDefault(); // Prevents the page from refreshing when the form is submitted
//     const today = new Date().toISOString().split("T")[0];

//     /* You can add below code for useRef */
//     const dueDate = dueDateElement.current.value;

//     if (!todoName) {
//       setError("Todo name cannot be empty.");
//     } else if (!dueDate) {
//       setError("Due date cannot be empty.");
//     } else if (dueDate >= today) {
//       onNewItem(todoName, dueDate);
//       setTodoName("");
//       // setDueDate("");
//       dueDateElement.current.value = ""
//       setError("");
//     } else {
//       setError("Due date must be today or later.");
//       setTodoName("");
//       // setDueDate("");
//       dueDateElement.current.value = ""
//     }
//   };

//   return (
//     <div className="container text-center">
//       <form className="row kg-row" onSubmit={handleNameChange}>
//         <div className="col-6">
//           <input
//             type="text"
//             placeholder="Enter Todo Here"
//             value={todoName}
//             onChange={(e) => setTodoName(e.target.value)}
//           />
//         </div>
//         <div className="col-4">
//           <input
//             type="date"
//             ref={dueDateElement}
//             // value={dueDate}
//             // onChange={(e) => setDueDate(e.target.value)}
//           />
//         </div>
//         <div className="col-2">
//           <button type="submit" className="btn btn-success kg-button">
//             <MdOutlineAddCircle />
//           </button>
//         </div>
//       </form>
//       {error && <div className="text-danger my-2">{error}</div>}
//     </div>
//   );
// }

// AddTODO.propTypes = {
//   onNewItem: PropTypes.func.isRequired,
// };

// export default AddTODO;




