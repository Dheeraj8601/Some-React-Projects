import { useState, useEffect, useReducer } from "react";
import AppName from "./components/AppName";
import AddTODO from "./components/AddTODO";
import "./App.css";
import TodoItems from "./components/TodoItems";
import WelcomeMsg from "./components/WelcomeMsg";
import Msg from "./components/Msg";
import { TodoItemsContext } from "./store/todo-items-store";

function todoItemReducer(currTodoItems, action) {
  let newTodoItems = currTodoItems;

  if (action.type === "NEW_ITEM") {
    newTodoItems = [
      ...currTodoItems,
      { name: action.payload.itemName, dueDate: action.payload.itemDueDate },
    ];
  } else if (action.type === "DELETE_ITEM") {
    newTodoItems = currTodoItems.filter(
      (item) => item.name !== action.payload.todoItemName
    );
  }

  return newTodoItems;
}

function App() {
  const initialtodoItems = [];

  const [todoItems, dispatchTodoItems] = useReducer(
    todoItemReducer,
    initialtodoItems
  );

  const [showWelcome, setShowWelcome] = useState(true);

  const addNewItem = (itemName, itemDueDate) => {
    const newItemAction = {
      type: "NEW_ITEM",
      payload: {
        itemName,
        itemDueDate,
      },
    };
    dispatchTodoItems(newItemAction);
  };

  const deleteItem = (todoItemName) => {
    const deleteAction = {
      type: "DELETE_ITEM",
      payload: {
        todoItemName,
      },
    };
    dispatchTodoItems(deleteAction);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <TodoItemsContext.Provider
      value={{
        todoItems: todoItems,
        addNewItem: addNewItem,
        deleteItem: deleteItem,
      }}
    >
      <center className="todo-container">
        {showWelcome ? (
          <WelcomeMsg />
        ) : (
          <>
            <AppName />
            <AddTODO />
            <Msg></Msg>
            <TodoItems />
          </>
        )}
      </center>
    </TodoItemsContext.Provider>
  );
}

export default App;

//withuseState

// import { useState, useEffect } from "react";
// import AppName from "./components/AppName";
// import AddTODO from "./components/AddTODO";
// import "./App.css";
// import TodoItems from "./components/TodoItems";
// import WelcomeMsg from "./components/WelcomeMsg";
// import Msg from "./components/Msg";
// import { TodoItemsContext } from "./store/todo-items-store";

// function App() {
//   const initialtodoItems = [];

//   const [todoItems, setTodoItems] = useState(initialtodoItems);
//   const [showWelcome, setShowWelcome] = useState(true);

//   const addNewItem = (itemName, itemDueDate) => {
//     const newTodo = { name: itemName, dueDate: itemDueDate };

//     /*
//     // without using functional updates
//     // const newItems = [...todoItems, newTodo];
//     // setTodoItems(newItems);
//     */

//     // Using functional updates correctly
//     setTodoItems((curValue) => [...curValue, newTodo]);
//   };

//   const deleteItem = (todoItemName) => {
//     console.log(`Item Deleted : ${todoItemName}`);                                 
//     const updatedItems = todoItems.filter((item) => item.name !== todoItemName);
//     console.log(updatedItems);
//     alert(`Item Deleted : ${todoItemName}`);
//     setTodoItems(updatedItems);
//     /*
//      // Using functional updates correctly
//      setTodoItems((curValue) => {
//       const updatedItems = curValue.filter((item) => item.name !== todoItemName);
//       return updatedItems;
//     });
//     */
//   };

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setShowWelcome(false);
//     }, 5000);

//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <TodoItemsContext.Provider
//       value={{
//         todoItems: todoItems,
//         addNewItem: addNewItem,
//         deleteItem: deleteItem,
//       }}
//     >
//       <center className="todo-container">
//         {showWelcome ? (
//           <WelcomeMsg />
//         ) : (
//           <>
//             <AppName />
//             <AddTODO />
//             {/* We used to pass elements like this without Context */}
//             {/*
//              <AddTODO onNewItem={addNewItem} />
//             <Msg todoItems={todoItems}></Msg>
//             <TodoItems todoItems={todoItems} onDeleteClick={deleteItem} />
//             */}
//             <Msg></Msg>
//             <TodoItems />
//           </>
//         )}
//       </center>
//     </TodoItemsContext.Provider>
//   );
// }

// export default App;