import './ItemListContainer.css';
import Item from '../Item/Item.js'

const ItemListContainer = () => {
    
    return (
        <div>
            <Item title='Buzo' detail='Amarillo' size='L' price='5999'/>
            <Item title='Buzo' detail='Negro' size='M' price='5900'/>
        </div>
        
    )
}

export default ItemListContainer;