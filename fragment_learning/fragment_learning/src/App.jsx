import React, { useState } from "react";
import FoodItems from "./components/FoodItems";
import ErrorMsg from "./components/ErrroMsg";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";

function App() {
  //let foodItems = ["DAl", "GREEN VEGETABLES", "ROTI", "SALAD", "MILK", "GHEE"];
  // let foodItems = []

  // let testStateArr = useState("Dheeraj");
  // let texttoshow = testStateArr[0];
  // let setTextState = testStateArr[1];

  // let [texttoshow ,setTextState ]= useState("Dheeraj");
  // let [foodItems,setFoodItems] = useState(["DAl", "GREEN VEGETABLES", "ROTI", "SALAD"])
  let [foodItems, setFoodItems] = useState([]);

  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      let newFoodItem = event.target.value;
      let newArray = [...foodItems, newFoodItem];
      setFoodItems(newArray);
      //console.log(`Food value entered is ${newFoodItem}`);
      event.target.value = "";
    }
  };

  return (
    <React.Fragment>
      <Container>
        {/* <React.Fragment> */}
        {/* We can use either <React.Fragment> or <> to create fragments */}
        <h1 className="text-center text-primary">Healthy Food</h1>
        <FoodItems Items={foodItems}></FoodItems>
        <FoodInput handleKeyDown={onKeyDown}></FoodInput>
        {/* <p className="text-center text-success fw-bold">{texttoshow}</p> */}
        <ErrorMsg Items={foodItems}></ErrorMsg>
        {/*</React.Fragment> */}
      </Container>

      {/* <Container>
        <p>
          Above is the list of healthy foods that are good for your health and
          well being.
        </p>
      </Container> */}
    </React.Fragment>
  );
}

export default App;

///Using if else

// import React from "react";

// function App() {
//   let foodItems = ["DAl", "MAL", "HAl", "KAL", "Tal"];

//   if (foodItems.length === 0) {
//     return <h3>I am hungry</h3>;
//   } else {
//     return (
//       <React.Fragment>
//         {/* We can use either <React.Fragment> or <> to create fragments */}
//         <h1>Healthy Food</h1>
//         <ul className="list-group">
//           {foodItems.map((item, index) => (
//             <li key={index} className="list-group-item">{item}</li>
//           ))}
//         </ul>
//       </React.Fragment>
//     );
//   }
// }

// export default App;

// return (
//   <React.Fragment>
//     {/* We can use either <React.Fragment> or <> to create fragments */}
//     <h1>Healthy Food</h1>
//     <ul className="list-group">
//       {/* Ternary operator */}
//       {/* {foodItems.length === 0 ? <h3>I amhugry</h3> :null} */}
//       {/* logical operator */}
//       {/* {foodItems.length === 0  && <h3>I amhugry</h3> } */}
//       {/* Map method */}
//       {foodItems.map((item) => (
//         <li key={item} className="list-group-item">
//           {item}
//         </li>
//       ))}
//     </ul>
//   </React.Fragment>
// );
