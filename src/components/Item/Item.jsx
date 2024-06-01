
import {Link} from 'react-router-dom'


const Item = ({id, name, img, category, price}) => {
    return(
        <article style={{margin:16}}>
            <h3>{name}</h3>
            <img src={img} style={{width: 100}} />
            <p>Categoria:{category}</p>
            <p>Precio: $ {price}</p>
            <Link to={`/detail/${id}`}>Ver Detalle</Link>
        </article>
    )
}


export default Item