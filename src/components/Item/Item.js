import './Item.css'
import React, { useState } from "react";
import { Link } from 'react-router-dom';

export default function Item(props) {
    const [expired, setExpired] = useState(props.expired);

    function handleItemClick() {
        setExpired(!expired);
    }

    return (
        <div className='product'>
            <div className='product-img'>
                <img src={process.env.PUBLIC_URL + props.img}></img>
            </div>
            <div className='product-detail'>
                <ul>
                    <li><h1>{props.title}</h1></li>
                    <li>{props.detail}</li>
                    <li>{props.size}</li>
                    <li>${props.price}</li>
                    <Link to={`/item/${props.id}`}>
                        <button onClick={handleItemClick} className='button'>See more</button>
                    </Link>
                </ul>
            </div>
        </div>
    )
}