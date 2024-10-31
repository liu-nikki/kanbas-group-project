import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Counter() {
  const [count, setCount] = useState(7);
  console.log(count);
  return (
    <div className="text-left mt-3">
      <h2 className="pl-0">Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)}
              id="wd-counter-up-click"
              className="btn btn-success mx-2">Up</button>
      <button onClick={() => setCount(count - 1)}
              id="wd-counter-down-click"
              className="btn btn-danger mx-2">Down</button>
      <hr/>
    </div>
  );
}