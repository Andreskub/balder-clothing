import React, { useState } from "react";
import FlexWrapper from "../FlexWrapper/FlexWrapper";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";
import { useContext } from "react";
import { cartContext } from "../../context/CartContext";
import Button from "../Button/Button";


function CardDetail({ item }) {
  const [count, setCount] = useState(0);
  const { addToCart, removeItem } = useContext(cartContext);

  function handleAddToCart(count) {
    console.log("Agregaste items al carrito:", item, count);
      setCount(count);
  }

  return (
    <div className="detail-container">
      <div className="cardDetail_img_detail">
        <img src={process.env.PUBLIC_URL + item.img} alt={item.title} />
      </div>
      <FlexWrapper>
        <div className="cardDetail_detail">
          <h2>{item.title}</h2>
          <h4 className="cardDetail_muteD">{item.category}</h4>
          <h3>$ {item.price}</h3>
          <hr />
          <p>{item.detail}</p>
        </div>
        {count === 0 ? (
          <ItemCount
            onAddToCart={handleAddToCart}
            stock={item.stock}
            initial={1}
            text="Add to cart"
          />
        ) : (
          <a href="/cart">Ver el carrito</a>
        )}
        {/* 3. Pasar la función como evento al Item COunt */}
        <Button onClick={()=> removeItem(item.id)}>Remove</Button>
      </FlexWrapper>
    </div>
  );
}

export default CardDetail;