import { Link } from "react-router-dom";

const Item = ({id,name,img,price,stock}) => {
    return (
        <article className="cart">
            <header>
            <h3>{name}</h3>
            </header>
            <picture>
                <img src={img} alt={name}/>
            </picture>
            <section>
                <p>Precio:${price}</p>
                <p>Stock: {stock}</p>
            </section>
            <footer>
                <Link to={`/item/${id}`}>Ver detalle</Link>
            </footer>
            </article>
       
    )

}

export default Item;