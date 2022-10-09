import './Item.css'
import { Link } from 'react-router-dom';

const Item = (props)=>{
    return (
        <div className='product'>
            <div className='product-img'>
                <img src={props.img}></img>
            </div>
            <div className='product-detail'>
                <ul>
                    <li><h1>{props.title}</h1></li>
                    <li>{props.detail}</li>
                    <li>{props.size}</li>
                    <li>${props.price}</li>
                    <Link to={`/item/${props.id}`}>
                        <button>See more</button>
                    </Link>
                </ul>
            </div>
        </div>
    )
}

/*props.id*/

export default Item;