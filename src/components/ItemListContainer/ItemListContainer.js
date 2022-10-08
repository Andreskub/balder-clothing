import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList'

import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";

import { getItems, getItemsByCategory } from "../database/data";

const ItemListContainer = (props) => {
    const [itemsList, setItemsList] = useState([]);
    const params = useParams();
    const categoryID = params.categoryID;

    useEffect(() => {
        if (categoryID === undefined) {
            getItems().then((data) => {
                setItemsList(data);
        });
        } else {
            getItemsByCategory(categoryID).then((data) => {
                setItemsList(data);
        });
        }
    }, [categoryID]);

    return (
        <div className='container'>
            <h1>Titulo</h1>
            <ItemList itemList={itemsList} />
        </div>
        
    )
}

export default ItemListContainer;