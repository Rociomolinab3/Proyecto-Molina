import {useState} from 'react';
import style from '../ItemCount/ItemCount.module.css';

const ItemCount =({stock ,initial,onAdd})=>{
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
        <div className={style.count}>
            <button className={style.buttoncount} onClick={decrement}>-</button>
            <h5 className="">{quantity} </h5>
            <button className={style.buttoncount} onClick={increment}>+</button>
        </div>
        <div>
            <button className={style.buttoncart} onClick={()=> onAdd(quantity)} disabled={!stock}>
                Agregar al carrito
            </button>
        </div>
    </div>
    )
}

export default ItemCount;