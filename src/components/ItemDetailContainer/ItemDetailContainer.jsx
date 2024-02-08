import { useState, useEffect } from "react"
import { getProductbyId } from "../../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import classes from "./ItemDetailContainer.module.css"


const ItemDetailContainer = () => {
    const [product, setProduct]= useState(null)

    const {productId} = useParams()

    useEffect(() => {
        getProductbyId(productId)
        .then(product => {
            setProduct (product)
        })

    }, [productId])

    return (
        <div className ={classes.caja}>
            <h2 className={classes.titulo}>Detalle del Producto</h2>
            <ItemDetail {...product}/>
        </div>
    )
}


export default ItemDetailContainer