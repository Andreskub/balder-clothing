import './Item.css'

const Item = (item)=>{
    return (
        <div className='product'>
            <ul>
                <li><h1>{item.title} {item.detail}</h1></li>
                <li>{item.size}</li>
                <li>${item.price}</li>
            </ul>
        </div>
    )
}



export default Item;