import { useEffect, useState } from "react";
import "./App.css";
import Todo from "./Todo";
import Counter from "./Counter";

const todoData = [{
  id: 1, title: "testing", completed: false
},
{ id: 2, title: "processing", completed: true },

]


function App() {
  return (
    <div className="App">

      <Counter />
      {/* {
        todoData.map((data) => {
          return <Todo todo={data} />
        })
      } */}

    </div>
  );
}

export default App;
