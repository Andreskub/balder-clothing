import './ItemListContainer.css';
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";

import ItemList from '../ItemList/ItemList'
import { getItems, getItemsByCategory } from "../database/data";
import { Loader } from '../Loader/Loader';
import FlexWrapper from '../FlexWrapper/FlexWrapper';

const ItemListContainer = (props) => {
    const [itemsList, setItemsList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const params = useParams();
    const categoryID = params.categoryID;

    useEffect(() => {
        if (categoryID === undefined) {
            getItems().then((data) => {
                setItemsList(data);
                setIsLoading(false);
        });
        } else {
            getItemsByCategory(categoryID).then((data) => {
                setItemsList(data);
                setIsLoading(false);
        });
        }
    }, [categoryID]);

    return (
        <>
            {isLoading ? (
                <FlexWrapper>
                    <Loader/>
                </FlexWrapper>
            ) : (
                <div>
                    <div className='section'><p>/home/{categoryID}</p></div>
                    <div className='container'>
                        <ItemList itemList={itemsList} />
                    </div>
                </div>
            )}
        </>
        
        
        
    )
}

export default ItemListContainer;