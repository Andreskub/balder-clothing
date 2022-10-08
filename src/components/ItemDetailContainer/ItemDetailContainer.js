import React, { useState, useEffect } from "react";

import { getOneItem } from "../database/data";
import FlexWrapper from "../FlexWrapper/FlexWrapper";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

function ItemDetailContainer(props) {
  const [item, setItem] = useState([]);

  const { itemID } = useParams();

  useEffect(() => {
    getOneItem(itemID).then((data) => {
      setItem(data);
    });
  }, [itemID]);

  return (
    <FlexWrapper>
      <ItemDetail item={item} />
    </FlexWrapper>
  );
}

export default ItemDetailContainer;
