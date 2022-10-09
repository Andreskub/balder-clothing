import React from "react";
import FlexWrapper from "../FlexWrapper/FlexWrapper";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";

function CardDetail({ item }) {
  return (
    <div className="detail-container">
      <FlexWrapper>
        <div className="main container">
          <h1>{item.title}</h1>
          <img src={item.img} alt={item.title} />
          <h3>$ {item.price}</h3>
        </div>
        {<ItemCount stock={item.stock} initial={1} text="Add to cart" />}
      </FlexWrapper>
    </div>
  );
}



export default CardDetail;
