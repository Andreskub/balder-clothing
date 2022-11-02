import React, { useState } from "react";
import FlexWrapper from "../FlexWrapper/FlexWrapper";
import Button from "../Button/Button";
import "./ItemCount.css";

export default function ItemCount({ stock, initial, text, onAddToCart }) {
  const [count, setCount] = useState(initial);

  function handleSubstract() {
    if (count > 1) setCount(count - 1);
  }

  function handleAdd() {
    if (count < stock) setCount(count + 1);
  }

  return (
    <div className="itemcount-container">
      <FlexWrapper>
      <div>
          <h3>Finish your order</h3>
          <div className="itemcount-control">
            <Button onClick={handleSubstract}><h3>-</h3></Button>
            <strong>{count}</strong>
            <Button onClick={handleAdd}><h3>+</h3></Button>
          </div>
        </div>

        <div className="itemcount-btns">
          <Button
            onClick={() => {
              onAddToCart(count);
            }}
          >
            {text}
          </Button>
        </div>
      </FlexWrapper>
    </div>
  );
}

/*
<div>
      <h2>Finish your order</h2>
      <FlexWrapper>
        <button onClick={handleSubstract}>-</button>
        <strong>{count}</strong>
        <button onClick={handleAdd}>+</button>
        
      </FlexWrapper>
      <button>{text}</button>
    </div>
*/
