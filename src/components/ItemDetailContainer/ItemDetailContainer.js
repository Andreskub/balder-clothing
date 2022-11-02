import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getOneItem } from "../database/data";
import FlexWrapper from "../FlexWrapper/FlexWrapper";
import ItemDetail from "./ItemDetail";
import { Loader } from "../Loader/Loader";

function ItemDetailContainer(props) {
  const [item, setItem] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { itemID } = useParams();

  useEffect(() => {
    getOneItem(itemID)
      .then((data) => {
        setItem(data);
        setIsLoading(false);
      });
  }, [itemID]);

  return (
    <>
      {isLoading ? (
        <FlexWrapper>
          <Loader/>
        </FlexWrapper>
      ) : (
        <FlexWrapper>
          <ItemDetail item={item} />
        </FlexWrapper>
      )}
    </>
  );
}

export default ItemDetailContainer;
