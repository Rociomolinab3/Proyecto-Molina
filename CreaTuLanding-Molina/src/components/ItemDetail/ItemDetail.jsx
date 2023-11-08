import ItemCount from '../ItemCount/ItemCount.jsx'
import { useState } from 'react'
import {Link} from 'react-router-dom'
import style from '../ItemDetail/ItemDetail.module.css';

const ItemDetail =({id, name, img, category, description, price, stock})=>{
    const [quantityAdded, setQuantityAdded] = useState(0)

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)
    }

    return (
        
        <div className={style.body}> 
        <div className={style.boxDetail}>
                   <div className={style.wrapper}> 
                   
                   </div>
                   <div className={style.boxImage}><img src={ img } width="400px" height="350px" /></div>
                 
                    <div className={style.contain}>
                    <h2 className={style.glow}>
                     {name}
                    </h2>
                   <div className={style.boxDescription}>
                   <h6>Categoría:{category}</h6>
                    <h6>Descripción: {description}</h6> 
                    <h6>Precio: ${price}</h6>
                    </div>
                    <a href="#" className="content">
                    {
                                quantityAdded > 0 ? (
                                    <Link to='/cart'>Terminar compra</Link>
                                ) : (
                                    <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
                                )
                            }
                    </a>
                    </div>
                    {/* <h4>Rating: { rating } &#9733;</h4> */}
                   
                </div>   
            <Link to='/'>
                <button className={style.buttoncount}>Volver</button>
            </Link>
        </div>
      
      
)
}

export default ItemDetail;