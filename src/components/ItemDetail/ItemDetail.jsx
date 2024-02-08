
import { useState } from "react"
import ItemCount from "../ItemCount/ItemCount"
import classes from "./ItemDetail.module.css"

const ItemDetail = ({ id, name, img, category, price, description, stock }) => {

    const handleOnAdd = (quantity) => {




        const objProduct = {
            id,
            name,
            quantity,
            price


        }
        console.log('se agregó correctamente: ', objProduct)
    }

    return (



        <article className={classes.articulo}>


            <div className="card"  >

                <img src={img} className={classes.imagen} />
                <div className="card-body" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <h3 className="card-title">{name}</h3>

                    <p >Categoria: {category}</p>
                    <p>Precio: U$$ {price}</p>
                    <p>Descripcion: {description}</p>
                    <ItemCount stock={stock} onAdd={handleOnAdd} /></div>
            </div>
        </article>






    )
}


export default ItemDetail