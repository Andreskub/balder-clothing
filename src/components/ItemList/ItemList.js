import React from "react";
import Item from "../Item/Item";
import FlexWrapper from "../FlexWrapper/FlexWrapper";

function ItemList(props) {
  return (
    <>
      <FlexWrapper>
        {props.itemList.map((item) => {
          return (
            <Item
              key={item.id}
              id={item.id}
              title={item.title}
              img={item.img}
              price={item.price}
              detail={item.detail}
              stock={item.stock}
              expired={item.expires}
            />
          );
        })}
      </FlexWrapper>
    </>
  );
}

export default ItemList;
