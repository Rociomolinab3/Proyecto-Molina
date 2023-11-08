import { Link } from "react-router-dom";
import style from '../Item/Item.module.css';

const Item = ({id,name,img,price,category}) => {
    return (
        <div className={style.body}> 
        <div className={style.boxDetail}>
                   <div className={style.wrapper}> 
                   </div>
                   <div className={style.boxImage}><img src={ img } width="250px" height="200px" /></div>
                    <div className={style.contain}>
                    <h4 className={style.glow}>
                     {name}
                    </h4>
                   <div className={style.boxDescription}>
                   <h6 className={style.h6}>Categoría:{category}</h6>
                    <h6 className={style.h6}>Precio: ${price}</h6>
                    </div>
                    <a>
                     <Link to={`/item/${id}`}>Ver detalle</Link>
                    </a>
                    </div>
                    </div>
                    </div>
    )

}

export default Item;