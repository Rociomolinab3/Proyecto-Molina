import { useState, useEffect } from "react";
import { getProducts, getProductsByCategory} from "../../asyncMock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import style from '../ItemListContainer/ItemListContainer.module.css'

const ItemListContainer = () =>{
    const [products, setProducts] = useState([])
    const {categoryId} = useParams()

    useEffect(() => {
        const asyncFunc = categoryId ? getProductsByCategory : getProducts;

        asyncFunc(categoryId)
            .then(response => {
                setProducts(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [categoryId])

    return(
        <div className={style.fullbody}>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer;