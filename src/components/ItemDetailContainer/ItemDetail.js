import React, { useState } from "react";
import FlexWrapper from "../FlexWrapper/FlexWrapper";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";
import { useContext } from "react";
import { cartContext } from "../../context/CartContext";
import { Link } from 'react-router-dom';
import Button from "../Button/Button";


function CardDetail({ item }) {
  const [count, setCount] = useState(0);
  const { addToCart, removeItem } = useContext(cartContext);

  function handleAddToCart(count) {
    console.log("Agregaste items al carrito:", item, count);
    addToCart(item, count);
    setCount(count);
  }

  return (
    <div className="item-container">
      <div className="item-image">
        <img src={process.env.PUBLIC_URL + item.img} alt={item.title} />
      </div>
      <FlexWrapper>
        <div className="item-info">
          <h2>{item.title}</h2>
          <h3>{item.detail}</h3>
          <h4>{item.category}</h4>
          <hr />
          <h3>$ {item.price}</h3>
        </div>
        {count === 0 ? (
          <ItemCount
            onAddToCart={handleAddToCart}
            stock={item.stock}
            initial={1}
            text="Add to cart"
          />
        ) : (
          <Button><Link to="/cart">Go to cart</Link></Button>
        )}
        <Button onClick={()=> removeItem(item.id)}>Remove</Button>
      </FlexWrapper>
    </div>
  );
}

export default CardDetail;