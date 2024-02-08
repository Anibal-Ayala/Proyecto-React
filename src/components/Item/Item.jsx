
import { Link } from 'react-router-dom'
import classes from "./Item.module.css"

const Item = ({ id, name, img, category, price }) => {
    return (
        <article  >

            <div style={{ width: 300, height: 500, margin: 16, display: "flex", flexDirection: "column", alignItems: "center", backgroundColor: "yellow" }} className="card" >


                <img src={img} style={{ width: '60%', margin: '2rem' }} className='card-img-top' />




                <div className='card-body' style={{ display: "flex", flexDirection: "column", alignItems: "center" }} >
                    <h3 style={{ margin: 8 }} className='card-title'>{name}</h3>
                    <p className='card-text'>Categoria: {category}</p>
                    <p className='card-text'>Precio: U$$ {price}</p>
                    <Link to={`/detail/${id}`}  >   <button className={classes.boton} >Ver Detalle</button></Link></div>
            </div>

        </article>
    )
}


export default Item