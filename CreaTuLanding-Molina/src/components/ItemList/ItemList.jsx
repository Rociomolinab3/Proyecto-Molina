import Item from "../Item/Item";


const ItemList = ({products }) => {
    return(
        <div className="carts">
            {products.map(prod => <Item key={prod.id} {...prod} />)}
        </div>
    )
}

export default ItemList;