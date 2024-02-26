
import { useContext, useState } from "react"
import ItemCount from "../ItemCount/ItemCount"
import classes from "./ItemDetail.module.css"
import {Link} from 'react-router-dom'
import { CartContext } from "../../context/CartContext"

const ItemDetail = ({ id, name, img, category, price, description, stock }) => {
    const [quantityAdded, setQuantityAdded] = useState(0)

    const { addItem } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setQuantityAdded (quantity)



const item = {id,name,price}

addItem (item,quantity)

        

    
    }

    return (



        <article className={classes.articulo}>

       
            <div  className="card"  >

                <img src={img} className={classes.imagen} />
                <div className="card-body" style={{ display: "flex", flexDirection: "column", alignItems: "center",  }}>
                    <h3 className="card-title">{name}</h3>

                    <p >Categoria: {category}</p>
                    <p>Precio: U$$ {price}</p>
                    <p>Descripcion: {description}</p>
                  
                     </div>
            </div>


        <footer>
            {
                quantityAdded > 0 ? (
                    <Link to ='/cart'> <button className="btn btn-primary" style={{margin : 16}}>Finalizar Compra</button></Link>
                ) : (
                      <ItemCount initial = {1} stock={stock} onAdd={handleOnAdd} />
                )
            }
        </footer>
        </article>






    )
}


export default ItemDetail