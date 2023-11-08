import {useState} from 'react';

const ItemCount =({stock ,initial})=>{
    const [quantity, setQuantity]=useState(initial)
    const increment = () =>{
        if(quantity<stock){
            setQuantity(quantity+1)
        }
    }
    const decrement =()=>{
        if(quantity>1){
            setQuantity(quantity-1)
        }
    }

    return(
        <div >
        <div className="count">
            <button className="buttoncount" onClick={decrement}>-</button>
            <h4 className="">{quantity} </h4>
            <button className="buttoncount" onClick={increment}>+</button>
        </div>
        <div>
            <button className="buttoncart" onClick={()=> onAdd(quantity)} disabled={!stock}>
                Agregar al carrito
            </button>
        </div>
    </div>
    )
}

export default ItemCount;